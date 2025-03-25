// Image Utility Functions for SeedBank

// Configuration
const config = {
    usePlaceholders: false, // Set to false when real images are available
    placeholderBaseUrl: "/api/placeholder", // For placeholder service
    imageFallbackPath: "/images/placeholder-seed.jpg" // Fallback image
};

// Color generation for seed-specific placeholders
function generateSeedColor(seedId) {
    // Create a simple hash from seedId
    const hash = seedId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

    // Generate HSL color values based on hash
    const hue = hash % 360;
    const saturation = 20 + (hash % 40); // 20-60%
    const lightness = 70 + (hash % 20); // 70-90%

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Get image for a seed
function getSeedImage(seed, size = 'small') {
    // If actual images should be used (when available)
    if (!config.usePlaceholders && seed.imagePath) {
        return seed.imagePath;
    }

    // Use placeholder service with seed-specific parameters
    const seedId = seed.id;
    const hash = seedId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

    // Size based on parameter
    const width = size === 'large' ? 600 : 400;
    const height = size === 'large' ? 600 : 400;

    // Generate consistent placeholder based on seed ID
    return `${config.placeholderBaseUrl}/${width}/${height}`;
}

// Export the utilities
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getSeedImage,
        generateSeedColor
    };
}