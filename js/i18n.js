// SeedBank Internationalization (i18n) Module

const translations = {
    // English translations
    en: {
        // Navigation
        nav: {
            overview: "OVERVIEW",
            seeds: "SEEDS",
            calendar: "CALENDAR",
            about: "ABOUT",
            bengaluru: "BENGALURU"
        },

        // Header/Hero
        hero: {
            title: "SEEDBANK",
            subtitle: "Your personal guide to growing food in Bengaluru.",
            description: "Plant what thrives now, harvest what you love.",
            findSeeds: "Find Seeds",
            planting: "Planting Calendar",
            howItWorks: "How It Works"
        },

        // Onboarding
        onboarding: {
            welcome: "Welcome to SeedBank",
            subtitle: "Your personal guide to growing food in Bengaluru.",
            step1: {
                title: "Discover Seeds",
                description: "Browse seeds that thrive in Bengaluru's current season."
            },
            step2: {
                title: "Learn Growing Tips",
                description: "Get detailed, local growing advice for each plant."
            },
            step3: {
                title: "Plant & Harvest",
                description: "Follow our seasonal calendar for the best results."
            },
            start: "Let's Get Growing"
        },

        // Seeds section
        seeds: {
            title: "SEEDS",
            allSeeds: "ALL SEEDS",
            subtitle: "Seeds that thrive in Bengaluru's climate right now.",
            currentSeason: "Current season:",
            dateFilter: "Filter by type or sort by growing time",
            category: "Category",
            sortBy: "Sort By",
            sortOptions: {
                growTime: "GROW TIME (FASTEST FIRST)",
                name: "ALPHABETICAL",
                difficulty: "BEGINNER FRIENDLY",
                yield: "HIGHEST YIELD",
                water: "LOWEST WATER NEEDS"
            },
            reset: "RESET FILTERS",
            noResults: "NO SEEDS FOUND",
            details: "Details",
            legend: {
                show: "Show detailed legend",
                hide: "Hide detailed legend",
                difficulty: "Difficulty",
                difficultyDesc: "How easy the plant is to grow (1-5, lower is easier)",
                sunlight: "Sunlight",
                sunlightDesc: "How much light exposure is needed (1-5, higher is more)",
                water: "Water",
                waterDesc: "Water requirements (1-5, lower needs less water)"
            }
        },

        // Calendar section
        calendar: {
            title: "PLANTING CALENDAR",
            subtitle: "When to plant what in Bengaluru through the seasons.",
            currentMonth: "Current month:",
            headers: {
                season: "SEASON",
                months: "MONTHS",
                bestToPlant: "BEST TO PLANT",
                notes: "NOTES"
            },
            current: "CURRENT",
            recommendations: {
                title: "CURRENT RECOMMENDATIONS",
                based: "Based on today's date",
                bestOptions: "here are your best planting options:"
            },
            sections: {
                plantNow: "PLANT NOW",
                prepareForMonsoon: "PREPARE FOR MONSOON",
                continuousCrops: "CONTINUOUS CROPS"
            },
            seasons: {
                summer: "Summer (Pre-Monsoon)",
                monsoon: "Monsoon",
                postmonsoon: "Post-Monsoon",
                winter: "Winter (Dry Season)"
            },
            monthRanges: {
                summer: "Mar-May",
                monsoon: "Jun-Sep",
                postmonsoon: "Oct-Dec",
                winter: "Jan-Feb"
            },
            notes: {
                summer: "Focus on quick-growing crops that can be harvested before intense heat. Use shade cloth on hot afternoons. Plant in containers for better control.",
                monsoon: "Plants that love humidity thrive now. Watch for fungal issues. Consider raised beds for drainage. Perfect for water-loving crops.",
                postmonsoon: "Excellent growing weather with moderate temperatures. Most vegetable varieties do well. Good time for root vegetables and brassicas.",
                winter: "Cooler temperatures perfect for leafy greens. Regular watering needed as it's dry. Good time for herbs."
            }
        },

        // About section
        about: {
            title: "ABOUT",
            description: "SeedBank is your hyperlocal guide to growing food in Bengaluru. We believe everyone can grow at least some of their own food, even in an urban environment.",
            quote: "\"To plant a garden is to believe in tomorrow.\"",
            quoteAuthor: "— Audrey Hepburn",
            climate: "Our growing recommendations are based on Bengaluru's unique climate, with special attention to our elevation (920m), moderate year-round temperatures (15-35°C), and distinct wet and dry seasons. All advice is tailored to urban contexts, including balcony gardens, container growing, and small plots.",
            resources: "LOCAL RESOURCES",
            tips: "BENGALURU GROWING TIPS",
            created: "Created by",
            company: "Absurd Industries",
            for: "for Bengaluru's urban farmers.",
            dataSource: "Data compiled from Karnataka State Department of Horticulture and experienced local growers."
        },

        // Seed detail modal
        seedDetail: {
            sections: {
                planting: "PLANTING GUIDE",
                care: "CARE INSTRUCTIONS",
                harvesting: "HARVESTING",
                benefits: "BENEFITS",
                problems: "COMMON PROBLEMS",
                bengaluruTips: "BENGALURU-SPECIFIC TIPS",
                sources: "WHERE TO FIND SEEDS",
                companions: "COMPANION PLANTS"
            },
            careLabels: {
                light: "Light:",
                water: "Water:",
                soil: "Soil:",
                spacing: "Spacing:",
                fertilizer: "Fertilizer:"
            }
        },

        // Seasons
        seasons: {
            summer: "Summer",
            monsoon: "Monsoon",
            postmonsoon: "Post-Monsoon",
            winter: "Winter",
            all: "All"
        },

        // Footer
        footer: {
            copyright: "© 2025 Absurd Industries. Made with 🌱 in Bengaluru."
        },

        // Utility/Common
        common: {
            loading: "Loading...",
            darkMode: "Dark Mode",
            lightMode: "Light Mode",
            menu: "Menu",
            close: "Close",
            back: "Back",
            language: "Language",
            next: 'Next',
            skip: 'Skip'
        }
    },

    // Kannada translations
    kn: {
        // Navigation
        nav: {
            overview: "ಸಮಗ್ರ ನೋಟ",
            seeds: "ಬೀಜಗಳು",
            calendar: "ಬೀಜ ಕ್ಯಾಲೆಂಡರ್",
            about: "ನಮ್ಮ ಬಗ್ಗೆ",
            bengaluru: "ಬೆಂಗಳೂರು"
        },

        // Header/Hero
        hero: {
            title: "ಸೀಡ್‌ಬ್ಯಾಂಕ್",
            subtitle: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಆಹಾರ ಬೆಳೆಯಲು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶಿ.",
            description: "ಈಗ ಬೆಳೆಯುವುದು ಹೆಚ್ಚಾಗಿ, ನೀವು ಪ್ರೀತಿಸುವುದನ್ನು ಸುಗ್ಗಿ ಮಾಡಿ.",
            findSeeds: "ಬೀಜಗಳನ್ನು ಹುಡುಕಿ",
            planting: "ಬೀಜ ಕ್ಯಾಲೆಂಡರ್",
            howItWorks: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ"
        },

        // Onboarding
        onboarding: {
            welcome: "ಸೀಡ್‌ಬ್ಯಾಂಕ್‌ಗೆ ಸುಸ್ವಾಗತ",
            subtitle: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಆಹಾರ ಬೆಳೆಯಲು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶಿ.",
            step1: {
                title: "ಬೀಜಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
                description: "ಬೆಂಗಳೂರಿನ ಪ್ರಸ್ತುತ ಋತುವಿನಲ್ಲಿ ಹೆಚ್ಚಾಗಿ ಬೆಳೆಯುವ ಬೀಜಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ."
            },
            step2: {
                title: "ಬೆಳೆಯುವ ಸಲಹೆಗಳನ್ನು ತಿಳಿಯಿರಿ",
                description: "ಪ್ರತಿ ಸಸ್ಯಕ್ಕೆ ವಿಸ್ತೃತವಾದ, ಸ್ಥಳೀಯ ಬೆಳೆಯುವ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ."
            },
            step3: {
                title: "ನೆಡಿ & ಕೊಯ್ಲು ಮಾಡಿ",
                description: "ಉತ್ತಮ ಫಲಿತಾಂಶಗಳಿಗಾಗಿ ನಮ್ಮ ಋತುಮಾನ ಕ್ಯಾಲೆಂಡರ್ ಅನುಸರಿಸಿ."
            },
            start: "ಬೆಳೆಯಲು ಪ್ರಾರಂಭಿಸೋಣ"
        },

        // Seeds section
        seeds: {
            title: "ಬೀಜಗಳು",
            allSeeds: "ಎಲ್ಲಾ ಬೀಜಗಳು",
            subtitle: "ಬೆಂಗಳೂರಿನ ಹವಾಮಾನದಲ್ಲಿ ಈಗ ಹೆಚ್ಚಾಗಿ ಬೆಳೆಯುವ ಬೀಜಗಳು.",
            currentSeason: "ಪ್ರಸ್ತುತ ಋತುಮಾನ:",
            dateFilter: "ಪ್ರಕಾರದ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ ಅಥವಾ ಬೆಳೆಯುವ ಸಮಯದ ಮೂಲಕ ವಿಂಗಡಿಸಿ",
            category: "ವರ್ಗ",
            sortBy: "ಹೀಗೆ ವಿಂಗಡಿಸಿ",
            sortOptions: {
                growTime: "ಬೆಳೆಯುವ ಸಮಯ (ವೇಗವಾಗಿ ಮೊದಲು)",
                name: "ವರ್ಣಮಾಲೆಯ ಕ್ರಮದಲ್ಲಿ",
                difficulty: "ಪ್ರಾರಂಭಿಕರಿಗೆ ಸ್ನೇಹಪರ",
                yield: "ಹೆಚ್ಚಿನ ಇಳುವರಿ",
                water: "ಕಡಿಮೆ ನೀರಿನ ಅಗತ್ಯ"
            },
            reset: "ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಮರುಹೊಂದಿಸಿ",
            noResults: "ಯಾವುದೇ ಬೀಜಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
            details: "ವಿವರಗಳು",
            legend: {
                show: "ವಿವರವಾದ ಗುರುತುಪಟ್ಟಿಯನ್ನು ತೋರಿಸಿ",
                hide: "ವಿವರವಾದ ಗುರುತುಪಟ್ಟಿಯನ್ನು ಮರೆಮಾಡಿ",
                difficulty: "ಕಷ್ಟ",
                difficultyDesc: "ಸಸ್ಯವನ್ನು ಬೆಳೆಯುವುದು ಎಷ್ಟು ಸುಲಭ (1-5, ಕಡಿಮೆಯಿದ್ದರೆ ಸುಲಭ)",
                sunlight: "ಸೂರ್ಯನ ಬೆಳಕು",
                sunlightDesc: "ಎಷ್ಟು ಬೆಳಕಿನ ಪ್ರದರ್ಶನ ಅಗತ್ಯವಿದೆ (1-5, ಹೆಚ್ಚಿದ್ದರೆ ಹೆಚ್ಚು)",
                water: "ನೀರು",
                waterDesc: "ನೀರಿನ ಅಗತ್ಯಗಳು (1-5, ಕಡಿಮೆಯಿದ್ದರೆ ಕಡಿಮೆ ನೀರು ಬೇಕಾಗುತ್ತದೆ)"
            }
        },

        // Calendar section
        calendar: {
            title: "ಬೀಜ ಕ್ಯಾಲೆಂಡರ್",
            subtitle: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಋತುಮಾನಗಳ ಮೂಲಕ ಯಾವಾಗ ಏನು ಬೆಳೆಯಬೇಕು.",
            currentMonth: "ಪ್ರಸ್ತುತ ತಿಂಗಳು:",
            headers: {
                season: "ಋತುಮಾನ",
                months: "ತಿಂಗಳುಗಳು",
                bestToPlant: "ಬೆಳೆಯಲು ಉತ್ತಮವಾದದ್ದು",
                notes: "ಟಿಪ್ಪಣಿಗಳು"
            },
            current: "ಪ್ರಸ್ತುತ",
            recommendations: {
                title: "ಪ್ರಸ್ತುತ ಶಿಫಾರಸುಗಳು",
                based: "ಇಂದಿನ ದಿನಾಂಕದ ಆಧಾರದ ಮೇಲೆ",
                bestOptions: "ಇಲ್ಲಿ ನಿಮ್ಮ ಉತ್ತಮ ಬೆಳೆಯುವ ಆಯ್ಕೆಗಳಿವೆ:"
            },
            sections: {
                plantNow: "ಈಗ ಬೆಳೆಯಿರಿ",
                prepareForMonsoon: "ಮುಂಗಾರಿಗೆ ಸಿದ್ಧಪಡಿಸಿ",
                continuousCrops: "ನಿರಂತರ ಬೆಳೆಗಳು"
            },
            seasons: {
                summer: "ಬೇಸಿಗೆ (ಮುಂಗಾರು-ಪೂರ್ವ)",
                monsoon: "ಮುಂಗಾರು",
                postmonsoon: "ಮುಂಗಾರು-ನಂತರ",
                winter: "ಚಳಿಗಾಲ (ಒಣ ಋತು)"
            },
            monthRanges: {
                summer: "ಮಾರ್ಚ್-ಮೇ",
                monsoon: "ಜೂನ್-ಸೆಪ್",
                postmonsoon: "ಅಕ್ಟೋ-ಡಿಸೆಂ",
                winter: "ಜನವರಿ-ಫೆಬ್ರವರಿ"
            },
            notes: {
                summer: "ತೀವ್ರ ಶಾಖಕ್ಕೆ ಮುಂಚೆ ಕೊಯ್ಲು ಮಾಡಬಹುದಾದ ವೇಗವಾಗಿ ಬೆಳೆಯುವ ಬೆಳೆಗಳ ಮೇಲೆ ಗಮನ ಹರಿಸಿ. ಬಿಸಿ ಮಧ್ಯಾಹ್ನಗಳಲ್ಲಿ ನೆರಳು ಬಟ್ಟೆಯನ್ನು ಬಳಸಿ. ಉತ್ತಮ ನಿಯಂತ್ರಣಕ್ಕಾಗಿ ಪಾತ್ರೆಗಳಲ್ಲಿ ಬೆಳೆಯಿರಿ.",
                monsoon: "ಆರ್ದ್ರತೆಯನ್ನು ಪ್ರೀತಿಸುವ ಸಸ್ಯಗಳು ಈಗ ಹೆಚ್ಚಾಗಿ ಬೆಳೆಯುತ್ತವೆ. ಶಿಲೀಂಧ್ರ ಸಮಸ್ಯೆಗಳನ್ನು ನೋಡಿ. ಒಳಚರಂಡಿಗೆ ಎತ್ತರದ ಹಾಸಿಗೆಗಳನ್ನು ಪರಿಗಣಿಸಿ. ನೀರು-ಪ್ರಿಯ ಬೆಳೆಗಳಿಗೆ ಸರಿಯಾದ ಸಮಯ.",
                postmonsoon: "ಮಿತವಾದ ತಾಪಮಾನದೊಂದಿಗೆ ಉತ್ತಮ ಬೆಳವಣಿಗೆಯ ಹವಾಮಾನ. ಹೆಚ್ಚಿನ ತರಕಾರಿ ವಿಧಗಳು ಉತ್ತಮವಾಗಿ ಬೆಳೆಯುತ್ತವೆ. ಬೇರು ತರಕಾರಿಗಳು ಮತ್ತು ಬ್ರಾಸಿಕಾಗಳಿಗೆ ಒಳ್ಳೆಯ ಸಮಯ.",
                winter: "ಎಲೆ ತರಕಾರಿಗಳಿಗೆ ತಂಪಾದ ತಾಪಮಾನಗಳು ಸರಿಯಾಗಿದೆ. ಒಣಗಿದ ಹವಾಮಾನವಾಗಿರುವುದರಿಂದ ನಿಯಮಿತವಾಗಿ ನೀರುಣಿಸುವ ಅಗತ್ಯವಿದೆ. ಸುಗಂಧದ್ರವ್ಯಗಳಿಗೆ ಉತ್ತಮ ಸಮಯ."
            }
        },

        // About section
        about: {
            title: "ನಮ್ಮ ಬಗ್ಗೆ",
            description: "ಸೀಡ್‌ಬ್ಯಾಂಕ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಆಹಾರ ಬೆಳೆಯಲು ನಿಮ್ಮ ಸ್ಥಳೀಯ ಮಾರ್ಗದರ್ಶಿಯಾಗಿದೆ. ನಗರ ಪರಿಸರದಲ್ಲಿಯೂ ಸಹ ಪ್ರತಿಯೊಬ್ಬರೂ ಕನಿಷ್ಠ ಕೆಲವು ಆಹಾರವನ್ನು ತಮ್ಮದೇ ಆಗಿ ಬೆಳೆಯಬಹುದು ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ.",
            quote: "\"ತೋಟವನ್ನು ನೆಡುವುದು ನಾಳೆಯಲ್ಲಿ ನಂಬಿಕೆಯಿಡುವುದಾಗಿದೆ.\"",
            quoteAuthor: "— ಆಡ್ರೆ ಹೆಪ್ಬರ್ನ್",
            climate: "ನಮ್ಮ ಬೆಳೆಯುವ ಶಿಫಾರಸುಗಳು ಬೆಂಗಳೂರಿನ ವಿಶಿಷ್ಟ ಹವಾಮಾನವನ್ನು ಆಧರಿಸಿದೆ, ನಮ್ಮ ಎತ್ತರ (920ಮೀ), ವರ್ಷವಿಡೀ ಮಿತವಾದ ತಾಪಮಾನಗಳು (15-35°C), ಮತ್ತು ಸ್ಪಷ್ಟವಾದ ಒದ್ದೆ ಮತ್ತು ಒಣ ಋತುಗಳು. ಎಲ್ಲಾ ಸಲಹೆಗಳು ನಗರ ಸಂದರ್ಭಗಳಿಗೆ ಅನುಗುಣವಾಗಿದೆ, ಬಾಲ್ಕನಿ ತೋಟಗಳು, ಪಾತ್ರೆಯಲ್ಲಿ ಬೆಳೆಯುವುದು, ಮತ್ತು ಚಿಕ್ಕ ಪ್ಲಾಟ್‌ಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.",
            resources: "ಸ್ಥಳೀಯ ಸಂಪನ್ಮೂಲಗಳು",
            tips: "ಬೆಂಗಳೂರಿನ ಬೆಳೆಯುವ ಸಲಹೆಗಳು",
            created: "ರಚಿಸಿದವರು",
            company: "ಅಬ್ಸರ್ಡ್ ಇಂಡಸ್ಟ್ರೀಸ್",
            for: "ಬೆಂಗಳೂರಿನ ನಗರ ರೈತರಿಗಾಗಿ.",
            dataSource: "ಕರ್ನಾಟಕ ರಾಜ್ಯ ತೋಟಗಾರಿಕೆ ಇಲಾಖೆ ಮತ್ತು ಅನುಭವಿ ಸ್ಥಳೀಯ ಬೆಳೆಗಾರರಿಂದ ಸಂಗ್ರಹಿಸಿದ ಮಾಹಿತಿ."
        },

        // Seed detail modal
        seedDetail: {
            sections: {
                planting: "ಬೆಳೆಯುವ ಮಾರ್ಗದರ್ಶಿ",
                care: "ಆರೈಕೆ ಸೂಚನೆಗಳು",
                harvesting: "ಕೊಯ್ಲು",
                benefits: "ಪ್ರಯೋಜನಗಳು",
                problems: "ಸಾಮಾನ್ಯ ಸಮಸ್ಯೆಗಳು",
                bengaluruTips: "ಬೆಂಗಳೂರು-ನಿರ್ದಿಷ್ಟ ಸಲಹೆಗಳು",
                sources: "ಬೀಜಗಳನ್ನು ಎಲ್ಲಿ ಹುಡುಕುವುದು",
                companions: "ಸಂಗಾತಿ ಸಸ್ಯಗಳು"
            },
            careLabels: {
                light: "ಬೆಳಕು:",
                water: "ನೀರು:",
                soil: "ಮಣ್ಣು:",
                spacing: "ಅಂತರ:",
                fertilizer: "ಗೊಬ್ಬರ:"
            }
        },

        // Seasons
        seasons: {
            summer: "ಬೇಸಿಗೆ",
            monsoon: "ಮುಂಗಾರು",
            postmonsoon: "ಮುಂಗಾರು-ನಂತರ",
            winter: "ಚಳಿಗಾಲ",
            all: "ಎಲ್ಲಾ"
        },

        // Footer
        footer: {
            copyright: "© 2025 ಅಬ್ಸರ್ಡ್ ಇಂಡಸ್ಟ್ರೀಸ್. ಬೆಂಗಳೂರಿನಲ್ಲಿ 🌱 ಜೊತೆ ಮಾಡಲಾಗಿದೆ."
        },

        // Utility/Common
        common: {
            loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
            darkMode: "ಕತ್ತಲೆ ಮೋಡ್",
            lightMode: "ಬೆಳಕಿನ ಮೋಡ್",
            menu: "ಮೆನು",
            close: "ಮುಚ್ಚಿ",
            back: "ಹಿಂದೆ",
            language: "ಭಾಷೆ"
        }
    }
};

// Language helper class
class I18n {
    constructor(lang = 'en') {
        this.currentLang = lang;
        this.translations = translations;
    }

    // Get translation by key path
    t(path, replacements = {}) {
        // Split path into segments (e.g., "seeds.title" -> ["seeds", "title"])
        const segments = path.split('.');

        // Start with the translations for the current language
        let value = this.translations[this.currentLang];

        // Navigate through the segments to find the translation
        for (const segment of segments) {
            if (value === undefined) return path; // Return the path if translation not found
            value = value[segment];
        }

        // If no translation found, try fallback to English
        if (value === undefined) {
            value = this.translations['en'];
            for (const segment of segments) {
                if (value === undefined) return path;
                value = value[segment];
            }
        }

        // If still no translation, return the path
        if (value === undefined) return path;

        // Replace placeholders with provided values
        if (typeof value === 'string' && Object.keys(replacements).length) {
            for (const [key, replacement] of Object.entries(replacements)) {
                value = value.replace(new RegExp(`{{${key}}}`, 'g'), replacement);
            }
        }

        return value;
    }

    // Change language
    changeLang(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            // Store language preference
            localStorage.setItem('seedbankLang', lang);
            return true;
        }
        return false;
    }

    // Get available languages
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }

    // Get language name
    getLanguageName(code) {
        const languageNames = {
            'en': 'English',
            'kn': 'ಕನ್ನಡ' // Kannada
        };
        return languageNames[code] || code;
    }

    // Initialize from saved preference or browser language
    init() {
        // Check localStorage first
        const savedLang = localStorage.getItem('seedbankLang');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
            return;
        }

        // Then check browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.translations[browserLang]) {
            this.currentLang = browserLang;
        }
    }
}

// Create and export i18n instance
const i18n = new I18n();
i18n.init();

// Export the instance
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
}