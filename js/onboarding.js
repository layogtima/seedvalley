// Minimalist Onboarding component for SeedBank
// Matching the main site's monochromatic, sharp aesthetic

class Onboarding {
    constructor() {
        this.currentStep = 0;
        this.totalSteps = 3;
        this.showOnboarding = this.shouldShowOnboarding();
        this.container = null;
    }

    // Check if onboarding should be shown
    shouldShowOnboarding() {
        return !localStorage.getItem('seedbankVisited');
    }

    // Get the step content based on current language
    getStepContent(step) {
        // Using i18n for translations
        switch (step) {
            case 0:
                return {
                    title: i18n.t('onboarding.step1.title'),
                    description: i18n.t('onboarding.step1.description'),
                    icon: '🔍',
                    illustration: `
                        <div class="relative h-24 w-full overflow-hidden flex items-center justify-center animate-slide-up">
                            <div class="search-animation flex items-center justify-center h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                        </div>
                    `
                };
            case 1:
                return {
                    title: i18n.t('onboarding.step2.title'),
                    description: i18n.t('onboarding.step2.description'),
                    icon: '🌱',
                    illustration: `
                        <div class="relative h-24 w-full overflow-hidden flex items-center justify-center animate-slide-up">
                            <div class="grow-animation">
                                <div class="seed"></div>
                                <div class="sprout"></div>
                                <div class="leaf left"></div>
                                <div class="leaf right"></div>
                            </div>
                        </div>
                    `
                };
            case 2:
                return {
                    title: i18n.t('onboarding.step3.title'),
                    description: i18n.t('onboarding.step3.description'),
                    icon: '🗓️',
                    illustration: `
                        <div class="relative h-24 w-full overflow-hidden flex items-center justify-center animate-slide-up">
                            <div class="calendar-animation border-2 border-black dark:border-white w-16 h-16 relative">
                                <div class="absolute top-0 left-0 right-0 h-5 bg-black dark:bg-white"></div>
                                <div class="absolute bottom-2 right-2 w-4 h-4 bg-black dark:bg-white animate-pulse-slow"></div>
                            </div>
                        </div>
                    `
                };
            default:
                return {
                    title: '',
                    description: '',
                    icon: '',
                    illustration: ''
                };
        }
    }

    // Render onboarding step with consistent styling
    renderStep() {
        const stepContent = this.getStepContent(this.currentStep);

        // Progress indicators with monochromatic styling
        let progressDots = '';
        for (let i = 0; i < this.totalSteps; i++) {
            const activeClass = i === this.currentStep
                ? 'w-8 h-1 bg-black dark:bg-white'
                : 'w-4 h-1 bg-gray-300 dark:bg-gray-600';
            progressDots += `<div class="${activeClass} mx-0.5 transition-all duration-300"></div>`;
        }

        return `

            <div class="step-content text-center mx-auto w-[80%] px-4 py-6 flex flex-col">
                <div class="animate-slide-up w-full max-w-xs mx-auto">
                    ${stepContent.illustration}
                </div>

                <div class="animate-slide-up text-2xl md:text-3xl font-bold mb-3">
                    ${stepContent.title}
                </div>
                
                <p class="animate-slide-up text-sm mb-6 text-gray-600 dark:text-gray-300">
                    ${stepContent.description}
                </p>
                
                
                <div class="animate-slide-up flex space-x-4 justify-end">
                    ${this.currentStep > 0 ?
                `<button class="border-2 border-black dark:border-white px-5 py-2 text-xs uppercase tracking-widest back-btn hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        ${i18n.t('common.back')}
                    </button>` :
                ''}
                    
                    ${this.currentStep < this.totalSteps - 1 ?
                `<button class="bg-black dark:bg-white text-white dark:text-black px-6 py-2 text-xs uppercase tracking-widest next-btn hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                        ${i18n.t('common.next')}
                    </button>` :
                `<button class="bg-black dark:bg-white text-white dark:text-black px-6 py-2 text-xs uppercase tracking-widest finish-btn hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                        ${i18n.t('onboarding.start')}
                    </button>`}
                </div>
            </div>
        `;
    }

    // Create the onboarding overlay matching main site style
    createOverlay() {
        // Create container if it doesn't exist
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'fixed inset-0 z-[100] bg-black/90 dark:bg-gray-900/95 text-black dark:text-white flex flex-col items-center justify-center';
            this.container.id = 'onboarding-overlay';
            document.body.appendChild(this.container);
        }

        // Render the content with welcome header
        const welcomeHeading = `
            <div class="px-6 pt-6 pb-4 text-center animate-slide-up">
                <div class="text-5xl mb-4">🌱</div>
                <h1 class="text-xl md:text-2xl font-bold mb-2 text-white">
                    ${i18n.t('onboarding.welcome')}
                </h1>
                <p class="text-sm text-gray-300 max-w-md mx-auto">
                    ${i18n.t('onboarding.subtitle')}
                </p>
            </div>
        `;

        // Create sharp, minimalist container
        this.container.innerHTML = `
            <div class="w-full max-w-md md:max-w-lg bg-white dark:bg-gray-800 shadow-2xl border-2 border-black/20 dark:border-white/20 mx-4">
                ${welcomeHeading}
                <div class="step-container">
                    ${this.renderStep()}
                </div>
            </div>
            
            <!-- Skip button -->
            <button class="absolute top-4 right-4 text-white text-xs uppercase tracking-widest hover:underline skip-btn transition-opacity">
                ${i18n.t('common.skip')}
            </button>
        `;

        // Add event listeners
        this.addEventListeners();

        // Ensure we're properly handling device orientation changes
        window.addEventListener('resize', () => this.handleOrientationChange());
        this.handleOrientationChange();
    }

    // Handle device orientation changes with minimal adjustments
    handleOrientationChange() {
        const isMobile = window.innerWidth < 768;
        const isLandscape = window.innerWidth > window.innerHeight;

        if (isMobile && isLandscape) {
            const overlay = this.container.querySelector('.step-container');
            if (overlay) {
                overlay.classList.add('landscape-mode');
            }
        } else {
            const overlay = this.container.querySelector('.step-container');
            if (overlay) {
                overlay.classList.remove('landscape-mode');
            }
        }
    }

    // Add event listeners to buttons
    addEventListeners() {
        // Next button
        const nextBtn = this.container.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextStep());
        }

        // Back button
        const backBtn = this.container.querySelector('.back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.prevStep());
        }

        // Finish button
        const finishBtn = this.container.querySelector('.finish-btn');
        if (finishBtn) {
            finishBtn.addEventListener('click', () => this.finish());
        }

        // Skip button
        const skipBtn = this.container.querySelector('.skip-btn');
        if (skipBtn) {
            skipBtn.addEventListener('click', () => this.finish());
        }

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    // Handle keyboard navigation
    handleKeydown(e) {
        if (!this.container) return;

        if (e.key === 'Escape') {
            this.finish();
        } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
            if (this.currentStep < this.totalSteps - 1) {
                this.nextStep();
            } else {
                this.finish();
            }
        } else if (e.key === 'ArrowLeft') {
            if (this.currentStep > 0) {
                this.prevStep();
            }
        }
    }

    // Move to next step
    nextStep() {
        if (this.currentStep < this.totalSteps - 1) {
            this.currentStep++;
            this.updateStep();
        }
    }

    // Move to previous step
    prevStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.updateStep();
        }
    }

    // Update the current step content with clean transition
    updateStep() {
        const stepContainer = this.container.querySelector('.step-container');
        if (stepContainer) {
            // Add exit animation
            stepContainer.classList.add('animate-fade-out');

            // Wait for animation to complete
            setTimeout(() => {
                stepContainer.innerHTML = this.renderStep();
                stepContainer.classList.remove('animate-fade-out');
                stepContainer.classList.add('animate-fade-in');

                // Remove animation class after completion
                setTimeout(() => {
                    stepContainer.classList.remove('animate-fade-in');
                }, 300);

                this.addEventListeners();
            }, 200);
        }
    }

    // Finish onboarding with clean exit
    finish() {
        // Mark onboarding as completed
        localStorage.setItem('seedbankVisited', 'true');
        this.showOnboarding = false;

        // Remove keyboard event listener
        document.removeEventListener('keydown', this.handleKeydown.bind(this));

        // Add exit animation
        this.container.classList.add('animate-fade-out');

        // Remove container after animation
        setTimeout(() => {
            if (this.container && this.container.parentNode) {
                this.container.parentNode.removeChild(this.container);
                this.container = null;
            }
        }, 300);
    }

    // Show onboarding (can be called externally)
    show() {
        this.currentStep = 0;
        this.showOnboarding = true;
        this.createOverlay();
    }

    // Initialize onboarding
    init() {
        if (this.showOnboarding) {
            setTimeout(() => {
                this.createOverlay();
            }, 300);
        }

        // Add "How It Works" button listener to show onboarding again
        document.addEventListener('DOMContentLoaded', () => {
            const howItWorksBtn = document.querySelector('#how-it-works-btn');
            if (howItWorksBtn) {
                howItWorksBtn.addEventListener('click', () => this.show());
            }
        });
    }
}

// Export the Onboarding class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Onboarding;
}