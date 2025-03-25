// dbIntegration.js - Complete rewrite
// SeedBank Database Integration with Vue App

document.addEventListener('DOMContentLoaded', () => {
  // Initialize as soon as DOM is loaded
  if (window.SeedBankDB) {
    console.log("Initializing SeedBank database...");
    window.SeedBankDB.initializeDatabase();
  }

  // Create a compatibility layer for the app.js which expects seedbank global variable
  seedbank = {
    loadingMessages: [
      "ANALYZING GROWING CONDITIONS",
      "CHECKING SOIL TYPES",
      "CALCULATING GROWING TIMES",
      "MEASURING WATER NEEDS",
      "PREPARING PLANTING CALENDAR",
    ],
    seeds: [], // Will be populated by the database
    categories: [] // Will be populated by the database
  };

  // Wait for Vue app to be mounted before replacing its methods
  const waitForVueApp = setInterval(() => {
    if (window.vueApp && window.vueApp._instance) {
      clearInterval(waitForVueApp);
      integrateWithVueApp();
    }
  }, 100);

  function integrateWithVueApp() {
    if (!window.SeedBankDB) {
      console.error("SeedBank database not found. Integration failed.");
      return;
    }

    const { getAllSeeds, getSeedDetails, getAllCategories, filterSeeds } = window.SeedBankDB;
    const appInstance = window.vueApp._instance.proxy;

    // Override loadSeedData method - Completely replace it to use DB
    appInstance.loadSeedData = async function () {
      try {
        this.cycleLoadingMessages();

        // Set initial time and start updating
        this.updateTime();
        setInterval(this.updateTime, 60000); // Update time every minute

        // Get the current language
        const lang = this.currentLanguage;

        // Simulate loading for aesthetic purposes
        setTimeout(async () => {
          try {
            // Load categories first
            const categories = await getAllCategories(lang);
            this.categories = categories;

            // Load seeds with filtering options if needed
            const seeds = await getAllSeeds(lang);
            this.seeds = seeds;

            // Update compatibility layer data
            seedbank.categories = categories;
            seedbank.seeds = seeds;

            this.loading = false;
          } catch (dbError) {
            console.error("Error loading data from database:", dbError);

            // Fallback to static data if database fails
            if (seedbank.seeds.length > 0) {
              this.seeds = seedbank.seeds;
              this.categories = seedbank.categories;
            }

            this.loading = false;
          }
        }, 1500);
      } catch (error) {
        console.error("Error loading seed data:", error);
        this.loading = false;
      }
    };

    // Override openSeedDetail to fetch complete seed details from DB
    appInstance.openSeedDetail = async function (seed) {
      try {
        // Show loading state
        const originalSeed = seed;
        this.loading = true;

        // Get full seed details from database
        const seedDetails = await getSeedDetails(seed.id, this.currentLanguage);

        // If we got details, use them, otherwise use the original seed
        if (seedDetails) {
          this.selectedSeed = seedDetails;
        } else {
          this.selectedSeed = originalSeed;
        }

        document.body.style.overflow = "hidden"; // Prevent background scrolling

        // Reset accordions state - only keep planting open
        Object.keys(this.accordions).forEach(key => {
          this.accordions[key] = key === 'planting';
        });

        this.loading = false;
      } catch (error) {
        console.error("Error loading seed details:", error);

        // Fallback to original behavior
        this.selectedSeed = seed;
        document.body.style.overflow = "hidden";

        this.loading = false;
      }
    };

    // Override filter and sort functions to use DB filtering
    appInstance.setActiveCategory = async function (categoryId) {
      this.activeCategory = categoryId;

      // Reload seeds with new filter
      this.reloadFilteredSeeds();

      // Scroll to seeds section if on mobile
      if (window.innerWidth < 768) {
        document
          .getElementById("seeds")
          .scrollIntoView({ behavior: "smooth" });
      }
    };

    // Add method to reload filtered seeds using DB
    appInstance.reloadFilteredSeeds = async function () {
      try {
        this.loading = true;

        const options = {
          category: this.activeCategory,
          sortBy: this.sortBy
        };

        const filteredSeeds = await filterSeeds(options, this.currentLanguage);
        this.seeds = filteredSeeds;

        this.loading = false;
      } catch (error) {
        console.error("Error filtering seeds:", error);
        this.loading = false;
      }
    };

    // Override change language to reload data in new language from DB
    appInstance.changeLanguage = async function (lang) {
      // Call i18n language change function
      if (i18n.changeLang(lang)) {
        this.currentLanguage = lang;
        document.documentElement.setAttribute('lang', lang);
        updateTime(); // Update time and date display with new locale

        try {
          // Reload data with new language
          const categories = await getAllCategories(lang);
          this.categories = categories;

          const options = {
            category: this.activeCategory,
            sortBy: this.sortBy
          };

          const seeds = await filterSeeds(options, lang);
          this.seeds = seeds;

          // If a seed is selected, reload its details
          if (this.selectedSeed) {
            const seedDetails = await getSeedDetails(this.selectedSeed.id, lang);
            if (seedDetails) {
              this.selectedSeed = seedDetails;
            }
          }

          return true;
        } catch (error) {
          console.error("Error changing language:", error);
          return false;
        }
      }
      return false;
    };

    console.log("SeedBank database integration complete!");
  }
});