// SeedBank App - Main Application
// Uses modular approach with external data and components

const { createApp, ref, computed, onMounted, watch } = Vue;

// Create the app and store a reference for database integration
const vueApp = createApp({
    setup() {
        // Import seed data from external file
        const seedData = seedbank || {}; // Fallback to empty object if not loaded

        // State
        const loading = ref(true);
        const loadingMessage = ref(seedData.loadingMessages?.[0] || "LOADING");
        const loadingMessages = seedData.loadingMessages || [];
        const seeds = ref([]);
        const categories = ref([]);
        const activeCategory = ref("all");
        const sortBy = ref("growTime");
        const selectedSeed = ref(null);
        const showMobileMenu = ref(false);
        const darkMode = ref(false);
        const currentSeason = ref("Summer (Pre-Monsoon)");
        const showLegend = ref(false);

        // Language state
        const currentLanguage = ref(i18n.currentLang);

        // New State for Progressive Disclosure
        const showOnboarding = ref(false); // Controlled by Onboarding component
        const currentTime = ref("");
        const currentDate = ref("");

        // Accordion state for modal
        const accordions = ref({
            planting: true, // Open this one by default
            care: false,
            harvesting: false,
            benefits: false,
            problems: false,
            bengaluruTips: false,
            sources: false,
            companions: false
        });

        // Onboarding instance
        let onboardingInstance;

        // Toggle accordion sections
        const toggleAccordion = (section) => {
            accordions.value[section] = !accordions.value[section];
        };

        // Update current time
        const updateTime = () => {
            const now = new Date();

            // Format time (12-hour with AM/PM)
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            currentTime.value = `${hours}:${minutes} ${ampm}`;

            // Format date (Mar 25, 2025)
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            currentDate.value = now.toLocaleDateString(currentLanguage.value, options);

            // Determine current season based on month
            const month = now.getMonth() + 1; // JavaScript months are 0-indexed

            if (month >= 3 && month <= 5) {
                currentSeason.value = i18n.t("calendar.seasons.summer");
            } else if (month >= 6 && month <= 9) {
                currentSeason.value = i18n.t("calendar.seasons.monsoon");
            } else if (month >= 10 && month <= 12) {
                currentSeason.value = i18n.t("calendar.seasons.postmonsoon");
            } else {
                currentSeason.value = i18n.t("calendar.seasons.winter");
            }
        };

        // Get the current month name
        const getCurrentMonth = () => {
            const now = new Date();
            return now.toLocaleString(currentLanguage.value, { month: 'long' });
        };

        // Check if a season is the current season
        const isCurrentSeason = (season) => {
            if (season === 'summer') return currentSeason.value === i18n.t("calendar.seasons.summer");
            if (season === 'monsoon') return currentSeason.value === i18n.t("calendar.seasons.monsoon");
            if (season === 'postmonsoon') return currentSeason.value === i18n.t("calendar.seasons.postmonsoon");
            if (season === 'winter') return currentSeason.value === i18n.t("calendar.seasons.winter");
            return false;
        };

        // Get season icon for the current season
        const getSeasonIcon = (season = null) => {
            const seasonToCheck = season || getCurrentSeason();

            if (seasonToCheck === 'summer' || seasonToCheck === i18n.t("calendar.seasons.summer")) {
                return "☀️"; // Sun
            } else if (seasonToCheck === 'monsoon' || seasonToCheck === i18n.t("calendar.seasons.monsoon")) {
                return "🌧️"; // Rain cloud
            } else if (seasonToCheck === 'postmonsoon' || seasonToCheck === i18n.t("calendar.seasons.postmonsoon")) {
                return "🍂"; // Falling leaf
            } else if (seasonToCheck === 'winter' || seasonToCheck === i18n.t("calendar.seasons.winter")) {
                return "❄️"; // Snowflake
            }
            return "🌱"; // Default
        };

        // Get small season icon
        const getSeasonIconSmall = (season) => {
            return getSeasonIcon(season);
        };

        // Get season name from id
        const getSeasonName = (season) => {
            if (season === 'summer') return `${i18n.t("seasons.summer")} (${i18n.t("calendar.monthRanges.summer")})`;
            if (season === 'monsoon') return `${i18n.t("seasons.monsoon")} (${i18n.t("calendar.monthRanges.monsoon")})`;
            if (season === 'postmonsoon') return `${i18n.t("seasons.postmonsoon")} (${i18n.t("calendar.monthRanges.postmonsoon")})`;
            if (season === 'winter') return `${i18n.t("seasons.winter")} (${i18n.t("calendar.monthRanges.winter")})`;
            return season;
        };

        // Get short season name
        const getShortSeason = (seed) => {
            if (!seed.seasons || seed.seasons.length === 0) return i18n.t("seasons.all");
            const mainSeason = seed.seasons[0];

            if (mainSeason === 'summer') return i18n.t("seasons.summer");
            if (mainSeason === 'monsoon') return i18n.t("seasons.monsoon");
            if (mainSeason === 'postmonsoon') return i18n.t("seasons.postmonsoon");
            if (mainSeason === 'winter') return i18n.t("seasons.winter");

            return mainSeason;
        };

        // Get current season based on month
        const getCurrentSeason = () => {
            const now = new Date();
            const month = now.getMonth() + 1; // JavaScript months are 0-indexed

            if (month >= 3 && month <= 5) {
                return 'summer';
            } else if (month >= 6 && month <= 9) {
                return 'monsoon';
            } else if (month >= 10 && month <= 12) {
                return 'postmonsoon';
            } else {
                return 'winter';
            }
        };

        // Get placeholder image for seed - now using imageUtils
        const getSeedImage = (seed, size = 'small') => {
            return window.getSeedImage ? window.getSeedImage(seed, size) : `/api/placeholder/400/400`;
        };

        // Change current language
        const changeLanguage = (lang) => {
            if (i18n.changeLang(lang)) {
                currentLanguage.value = lang;
                updateTime(); // Update time and date display with new locale
            }
        };

        // Get available languages
        const getAvailableLanguages = () => {
            return i18n.getAvailableLanguages();
        };

        // Get language name
        const getLanguageName = (code) => {
            return i18n.getLanguageName(code);
        };

        // Load seed data
        const loadSeedData = async () => {
            try {
                cycleLoadingMessages();

                // Set initial time and start updating
                updateTime();
                setInterval(updateTime, 60000); // Update time every minute

                // Use data from external file
                if (seedData.seeds && seedData.categories) {
                    // Simulate loading for aesthetic purposes
                    setTimeout(() => {
                        seeds.value = seedData.seeds;
                        categories.value = seedData.categories;
                        loading.value = false;
                    }, 1500);
                } else {
                    console.error("Seed data not found");
                    loading.value = false;
                }
            } catch (error) {
                console.error("Error loading seed data:", error);
                loading.value = false;
            }
        };

        // Cycle through loading messages for aesthetic effect
        const cycleLoadingMessages = () => {
            let index = 0;
            const interval = setInterval(() => {
                index = (index + 1) % loadingMessages.length;
                loadingMessage.value = loadingMessages[index];

                if (!loading.value) {
                    clearInterval(interval);
                }
            }, 400);
        };

        // Filtered seeds based on active category
        const filteredSeeds = computed(() => {
            if (activeCategory.value === "all") {
                return seeds.value;
            }
            return seeds.value.filter(
                (seed) => seed.category === activeCategory.value
            );
        });

        // Sort seeds based on chosen sort method
        const sortedSeeds = computed(() => {
            const sorted = [...filteredSeeds.value];

            switch (sortBy.value) {
                case "name":
                    return sorted.sort((a, b) => a.name.localeCompare(b.name));
                case "difficulty":
                    return sorted.sort((a, b) => a.difficulty - b.difficulty);
                case "yield":
                    return sorted.sort((a, b) => {
                        // Simple estimation based on growth time (faster growing often means less yield)
                        const getGrowDays = (timeStr) => {
                            const match = timeStr.match(/(\d+)-?(\d+)?/);
                            if (match[2])
                                return (parseInt(match[1]) + parseInt(match[2])) / 2;
                            return parseInt(match[1]);
                        };
                        return getGrowDays(b.growTime) - getGrowDays(a.growTime);
                    });
                case "water":
                    return sorted.sort((a, b) => a.water - b.water);
                case "growTime":
                default:
                    return sorted.sort((a, b) => {
                        // Extract the min days from grow time strings like "7-14 days"
                        const getMinDays = (timeStr) => {
                            const match = timeStr.match(/(\d+)/);
                            return parseInt(match[0]);
                        };
                        return getMinDays(a.growTime) - getMinDays(b.growTime);
                    });
            }
        });

        // Set active category
        const setActiveCategory = (categoryId) => {
            activeCategory.value = categoryId;
            // Scroll to seeds section if on mobile
            if (window.innerWidth < 768) {
                document
                    .getElementById("seeds")
                    .scrollIntoView({ behavior: "smooth" });
            }
        };

        // Mobile menu functions
        const toggleMobileMenu = () => {
            showMobileMenu.value = !showMobileMenu.value;
        };

        // Reset filters
        const resetFilters = () => {
            activeCategory.value = "all";
            sortBy.value = "growTime";
        };

        // Get category name by ID
        const getCategoryName = (categoryId) => {
            const category = categories.value.find(
                (cat) => cat.id === categoryId
            );
            return category ? category.name : "All";
        };

        // Seed detail modal functions
        const openSeedDetail = (seed) => {
            selectedSeed.value = seed;
            document.body.style.overflow = "hidden"; // Prevent background scrolling

            // Reset accordions state - only keep planting open
            Object.keys(accordions.value).forEach(key => {
                accordions.value[key] = key === 'planting';
            });
        };

        const closeSeedDetail = () => {
            selectedSeed.value = null;
            document.body.style.overflow = ""; // Restore scrolling
        };

        // Show onboarding modal
        const showOnboardingModal = () => {
            console.log(onboardingInstance);

            if (onboardingInstance) {
                onboardingInstance.show();
            }
        };

        // Watch dark mode changes and apply to HTML element
        watch(darkMode, (newValue) => {
            if (newValue) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("darkMode", "true");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("darkMode", "false");
            }
        });

        // Watch language changes
        watch(currentLanguage, (newValue) => {
            document.documentElement.setAttribute('lang', newValue);
        });

        // Check system preference for dark mode
        const checkSystemDarkMode = () => {
            // First check localStorage
            if (localStorage.getItem("darkMode") === "true") {
                darkMode.value = true;
            } else if (localStorage.getItem("darkMode") === "false") {
                darkMode.value = false;
            } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                // If no localStorage setting, check system preference
                darkMode.value = true;
            }
        };

        // Set up event listeners
        onMounted(() => {
            loadSeedData();
            checkSystemDarkMode();

            // Initialize onboarding if available
            if (Onboarding) {
                onboardingInstance = new Onboarding();
                onboardingInstance.init();
            }

            // Close modal on escape key
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape" && selectedSeed.value) {
                    closeSeedDetail();
                }
            });

            // Close mobile menu when clicking outside
            document.addEventListener("click", (e) => {
                if (
                    showMobileMenu.value &&
                    !e.target.closest("button") &&
                    !e.target.closest(".mobile-menu")
                ) {
                    showMobileMenu.value = false;
                }
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute("href");
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" });
                        showMobileMenu.value = false;
                    }
                });
            });

            // Listen for dark mode change in system preferences
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                // Only change if user hasn't set a preference
                if (!localStorage.getItem("darkMode")) {
                    darkMode.value = e.matches;
                }
            });
        });

        return {
            // State
            loading,
            loadingMessage,
            seeds,
            categories,
            activeCategory,
            sortBy,
            filteredSeeds,
            sortedSeeds,
            selectedSeed,
            showMobileMenu,
            darkMode,
            currentSeason,
            currentTime,
            currentDate,
            showLegend,
            showOnboarding,
            accordions,
            currentLanguage,

            // Methods
            setActiveCategory,
            toggleMobileMenu,
            resetFilters,
            getCategoryName,
            getShortSeason,
            openSeedDetail,
            closeSeedDetail,
            getSeasonIcon,
            getSeasonIconSmall,
            getSeasonName,
            getCurrentMonth,
            isCurrentSeason,
            getSeedImage,
            showOnboardingModal,
            toggleAccordion,
            changeLanguage,
            getAvailableLanguages,
            getLanguageName,

            // i18n helper
            t: (key, replacements = {}) => i18n.t(key, replacements)
        };
    },
});

// Mount the app
vueApp.mount("#app");

// Expose the app instance globally for database integration
window.vueApp = vueApp;