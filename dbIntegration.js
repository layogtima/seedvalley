// SeedBank Database Integration with Vue App

// Create a compatibility layer for the app.js which expects seedbank global variable
window.seedbank = {
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

document.addEventListener('DOMContentLoaded', () => {
  // Make sure database is initialized first
  if (window.SeedBankDB) {
    const { initializeDatabase, getAllSeeds, getSeedDetails, getAllCategories, filterSeeds } = window.SeedBankDB;

    // Replace Vue app's data loading methods
    if (window.vueApp) {
      const app = window.vueApp;

      // Override loadSeedData method
      const originalLoadSeedData = app.loadSeedData;
      app.loadSeedData = async function () {
        try {
          this.cycleLoadingMessages();

          // Initially populate DB if needed
          await initializeDatabase();

          // Set initial time and start updating
          this.updateTime();
          setInterval(this.updateTime, 60000); // Update time every minute

          // Get the current language
          const lang = this.currentLanguage.value;

          // Load seeds and categories from database
          setTimeout(async () => {
            // Load categories first
            this.categories.value = await getAllCategories(lang);

            // Load seeds with filtering options if needed
            const seeds = await getAllSeeds(lang);
            this.seeds.value = seeds;

            this.loading.value = false;
          }, 1500); // Keep the loading animation for aesthetics

        } catch (error) {
          console.error("Error loading seed data:", error);
          this.loading.value = false;
        }
      };

      // Override openSeedDetail to fetch complete seed details
      const originalOpenSeedDetail = app.openSeedDetail;
      app.openSeedDetail = async function (seed) {
        try {
          // Show loading state if needed

          // Get full seed details from database
          const seedDetails = await getSeedDetails(seed.id, this.currentLanguage.value);

          // Call original function with enhanced seed data
          originalOpenSeedDetail.call(this, seedDetails);
        } catch (error) {
          console.error("Error loading seed details:", error);
        }
      };

      // Override filter and sort functions
      const originalSetActiveCategory = app.setActiveCategory;
      app.setActiveCategory = async function (categoryId) {
        originalSetActiveCategory.call(this, categoryId);

        // Reload seeds with new filter
        this.reloadFilteredSeeds();
      };

      // Add method to reload filtered seeds
      app.reloadFilteredSeeds = async function () {
        const options = {
          category: this.activeCategory.value,
          sortBy: this.sortBy.value
        };

        const filteredSeeds = await filterSeeds(options, this.currentLanguage.value);
        this.seeds.value = filteredSeeds;
      };

      // Override change language to reload data in new language
      const originalChangeLanguage = app.changeLanguage;
      app.changeLanguage = async function (lang) {
        // Call original language change function
        if (originalChangeLanguage.call(this, lang)) {
          // Reload data with new language
          this.categories.value = await getAllCategories(lang);

          const options = {
            category: this.activeCategory.value,
            sortBy: this.sortBy.value
          };

          this.seeds.value = await filterSeeds(options, lang);

          // If a seed is selected, reload its details
          if (this.selectedSeed.value) {
            const seedDetails = await getSeedDetails(this.selectedSeed.value.id, lang);
            this.selectedSeed.value = seedDetails;
          }

          return true;
        }
        return false;
      };

      console.log("SeedBank database integration complete!");
    } else {
      console.error("Vue app not found. Database integration failed.");
    }
  } else {
    console.error("SeedBank database not found. Integration failed.");
  }
});