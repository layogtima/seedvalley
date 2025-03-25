/**
 * SeedBank - Main Integration Script
 * This script loads all modular components and initializes the application
 */

// Configuration
const config = {
    debug: false, // Set to true to enable debugging messages
    useLocalData: true, // Use local data files instead of API
    defaultLanguage: 'en', // Default language
    availableLanguages: ['en', 'kn'] // Available languages
};

// Debug logger
const log = (message, type = 'info') => {
    if (config.debug || type === 'error') {
        console[type](`[SeedBank] ${message}`);
    }
};

// Asset loader - loads scripts and styles with proper error handling
const loadAsset = (url, type = 'script') => {
    return new Promise((resolve, reject) => {
        let asset;

        if (type === 'script') {
            asset = document.createElement('script');
            asset.src = url;
            asset.async = true;
        } else if (type === 'style') {
            asset = document.createElement('link');
            asset.href = url;
            asset.rel = 'stylesheet';
        }

        asset.onload = () => {
            log(`Loaded ${type}: ${url}`);
            resolve();
        };

        asset.onerror = () => {
            const error = `Failed to load ${type}: ${url}`;
            log(error, 'error');
            reject(new Error(error));
        };

        document.head.appendChild(asset);
    });
};

// Load all required assets
const loadAllAssets = async () => {
    try {
        // Load styles first
        await loadAsset('style.css', 'style');
        await loadAsset('onboarding.css', 'style');

        // Load Dexie.js from CDN first
        await loadAsset('https://unpkg.com/dexie@3.2.3/dist/dexie.min.js', 'script');

        // Load modular JavaScript components
        await loadAsset('seedData.js', 'script');
        await loadAsset('imageUtils.js', 'script');
        await loadAsset('i18n.js', 'script');
        await loadAsset('onboarding.js', 'script');

        // Load database components
        await loadAsset('db.js', 'script');

        // Load main app - we'll store a reference to it for the DB integration
        await loadAsset('app.js', 'script');

        // Load database integration after app is loaded
        await loadAsset('dbIntegration.js', 'script');

        log('All assets loaded successfully');
        return true;
    } catch (error) {
        log(`Error loading assets: ${error.message}`, 'error');
        showErrorMessage('Failed to load some resources. Please refresh the page or try again later.');
        return false;
    }
};

// Show error message to user
const showErrorMessage = (message) => {
    const errorElement = document.createElement('div');
    errorElement.className = 'fixed top-0 left-0 right-0 bg-red-500 text-white text-center py-2 px-4 z-50';
    errorElement.textContent = message;
    document.body.prepend(errorElement);

    // Auto-dismiss after 10 seconds
    setTimeout(() => {
        if (errorElement.parentNode) {
            errorElement.parentNode.removeChild(errorElement);
        }
    }, 10000);
};

// Initial loading screen
const showLoadingScreen = () => {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50 transition-opacity duration-500';
    loadingScreen.id = 'initialLoadingScreen';

    loadingScreen.innerHTML = `
      <div class="flex flex-col items-center">
        <div class="relative">
          <div class="w-24 h-24 border-4 border-gray-300 dark:border-gray-700 rounded-full"></div>
          <div class="w-24 h-24 border-4 border-transparent border-t-primary-500 rounded-full absolute top-0 left-0 animate-spin"></div>
        </div>
        <div class="mt-6 text-2xl font-bold">SEEDBANK</div>
        <div class="text-sm mt-2">Loading resources...</div>
      </div>
    `;

    document.body.appendChild(loadingScreen);

    return {
        hide: () => {
            const screen = document.getElementById('initialLoadingScreen');
            if (screen) {
                screen.classList.add('opacity-0');
                setTimeout(() => {
                    if (screen.parentNode) {
                        screen.parentNode.removeChild(screen);
                    }
                }, 500);
            }
        }
    };
};

// Main initialization function
const initApplication = async () => {
    const loadingScreen = showLoadingScreen();

    // Load all assets
    const assetsLoaded = await loadAllAssets();

    if (assetsLoaded) {
        // Assets loaded, delay a bit for smoother transition
        setTimeout(() => {
            loadingScreen.hide();
        }, 500);
    }

    // Check for browser support
    const checkBrowserSupport = () => {
        const isModernBrowser = 'fetch' in window && 'Promise' in window && 'assign' in Object;

        if (!isModernBrowser) {
            showErrorMessage('Your browser may not fully support this application. Please use a modern browser for the best experience.');
        }

        return isModernBrowser;
    };

    checkBrowserSupport();

    // Register service worker if supported
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
        try {
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            log(`Service worker registered with scope: ${registration.scope}`);
        } catch (error) {
            log(`Service worker registration failed: ${error}`, 'error');
        }
    }

    // Easter egg for fun
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konami[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konami.length) {
                document.body.classList.add('rainbow-mode');
                const seedElements = document.querySelectorAll('.seed-card');
                seedElements.forEach(el => {
                    el.classList.add('animate-bounce');
                });
                konamiIndex = 0;
                setTimeout(() => {
                    document.body.classList.remove('rainbow-mode');
                    seedElements.forEach(el => {
                        el.classList.remove('animate-bounce');
                    });
                }, 5000);
            }
        } else {
            konamiIndex = 0;
        }
    });
};

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApplication);

// Global error handling
window.onerror = (message, source, lineno, colno, error) => {
    log(`Global error: ${message} at ${source}:${lineno}:${colno}`, 'error');
    return false;
};