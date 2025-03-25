// Onboarding component for SeedBank
// This file handles the streamlined onboarding experience

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
                    `
                };
            case 1:
                return {
                    title: i18n.t('onboarding.step2.title'),
                    description: i18n.t('onboarding.step2.description'),
                    icon: '🌱',
                    illustration: `
                        <div class="relative h-24 w-full overflow-hidden">
                            <div class="seed-sprout-anim">
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
                        <div class="relative h-24 w-full overflow-hidden">
                            <div class="calendar-anim">
                                <div class="sun"></div>
                                <div class="rain"></div>
                                <div class="plant"></div>
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

    // Render onboarding step
    renderStep() {
        const stepContent = this.getStepContent(this.currentStep);

        // Progress indicators
        let progressDots = '';
        for (let i = 0; i < this.totalSteps; i++) {
            const activeClass = i === this.currentStep ? 'bg-white' : 'bg-gray-500';
            progressDots += `<div class="w-2 h-2 rounded-full ${activeClass} mx-1"></div>`;
        }

        return `
            <div class="step-content animate-fade-in">
                <div class="text-5xl mb-4">${stepContent.icon}</div>
                <h2 class="text-2xl font-bold mb-2">${stepContent.title}</h2>
                <p class="text-sm mb-8">${stepContent.description}</p>
                
                ${stepContent.illustration}
                
                <div class="flex justify-center mt-8 mb-6">
                    ${progressDots}
                </div>
                
                <div class="flex space-x-4">
                    ${this.currentStep > 0 ?
                `<button class="btn-secondary px-4 py-2 back-btn">
                            ${i18n.t('common.back')}
                        </button>` :
                ''}
                    
                    ${this.currentStep < this.totalSteps - 1 ?
                `<button class="btn-primary px-8 py-2 next-btn">
                            ${i18n.t('common.next')}
                        </button>` :
                `<button class="btn-primary px-8 py-2 finish-btn">
                            ${i18n.t('onboarding.start')}
                        </button>`}
                </div>
            </div>
        `;
    }

    // Create the onboarding overlay
    createOverlay() {
        // Create container if it doesn't exist
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'fixed inset-0 z-[100] bg-black/95 text-white flex flex-col items-center justify-center';
            this.container.id = 'onboarding-overlay';
            document.body.appendChild(this.container);
        }

        // Render the content
        const welcomeHeading = `
            <div class="max-w-md mx-auto p-8 text-center">
                <div class="text-6xl mb-6">🌱</div>
                <h1 class="text-3xl md:text-4xl font-bold mb-6">
                    ${i18n.t('onboarding.welcome')}
                </h1>
                <p class="mb-8">${i18n.t('onboarding.subtitle')}</p>
            </div>
        `;

        this.container.innerHTML = `
            <div class="max-w-md mx-auto p-8 text-center">
                ${welcomeHeading}
                <div class="step-container">
                    ${this.renderStep()}
                </div>
            </div>
        `;

        // Add event listeners
        this.addEventListeners();
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

    // Update the current step content
    updateStep() {
        const stepContainer = this.container.querySelector('.step-container');
        if (stepContainer) {
            // Add exit animation
            stepContainer.classList.add('animate-fade-out');

            // Wait for animation to complete
            setTimeout(() => {
                stepContainer.innerHTML = this.renderStep();
                stepContainer.classList.remove('animate-fade-out');
                this.addEventListeners();
            }, 200);
        }
    }

    // Finish onboarding
    finish() {
        // Mark onboarding as completed
        localStorage.setItem('seedbankVisited', 'true');
        this.showOnboarding = false;

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
            this.createOverlay();
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