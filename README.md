# SeedBank

A web application that provides information about growing plants in Bengaluru, India. The application helps urban gardeners choose appropriate plants, provides growing instructions, and creates a community of knowledge sharing.

## Features

- Browse seeds that thrive in Bengaluru's climate
- Filter by plant category and growing time
- Detailed growing instructions for each plant
- Seasonal planting calendar specific to Bengaluru's climate
- Multilingual support (English and Kannada)
- Mobile-responsive design
- Dark mode support

## Technology Stack

- Vue.js (loaded via CDN, no build process)
- Tailwind CSS for styling
- Dexie.js (wrapper for IndexedDB) for browser database
- Vanilla JavaScript
- Progressive loading with loading screen

## UPDATES

### March 25, 2025: Database Implementation

- **Added Dexie.js Database**: Implemented a scalable browser database using Dexie.js (IndexedDB wrapper)

  - Created proper schema design with support for unlimited languages
  - Implemented database initialization with seed data
  - Added helper functions for database operations

- **New Files**:

  - `db.js`: Contains database schema, initial data, and helper functions
  - `dbIntegration.js`: Integrates database with Vue.js application

- **Modified Files**:

  - `main.js`: Updated asset loading to include Dexie.js from CDN and database scripts
  - `app.js`: Modified to expose Vue instance for database integration

- **Database Schema**:

  - Normalized structure with proper relationships for:
    - Seeds and their translations
    - Categories and their translations
    - Growing instructions for each seed
    - Companion planting relationships
    - Local sources for seeds

- **Multi-language Support**:

  - Improved English and Kannada language support
  - Database design allows for easy addition of more languages in the future
  - Language-specific content for all seed details

- **Herb Collection Expansion**:

  - Added 16 different plants with full details in both English and Kannada:

    - Vegetables:

      - Methi/Fenugreek (ಮೆಂಥ್ಯ)
      - Radish (ಮೂಲಂಗಿ)
      - Spinach (ಪಾಲಕ್)
      - Okra (ಬೇಂಡೆಕಾಯಿ)
      - Beans (ಹುರಳಿಕಾಯಿ)
      - Chilli (ಮೆಣಸಿನಕಾಯಿ)

    - Herbs:
      - Coriander (ಕೊತ್ತಂಬರಿ)
      - Holy Basil/Tulsi (ತುಳಸಿ)
      - Mint (ಪುದೀನ)
      - Curry Leaf (ಕರಿಬೇವು)
      - Lemongrass (ನಿಂಬೆ ಹುಲ್ಲು)
      - Carom/Ajwain (ಓಮ)
      - Turmeric (ಅರಿಶಿನ)
      - Ginger (ಶುಂಠಿ)
      - Sweet Basil (ಸಾಬಸಿಗೆ ಸೊಪ್ಪು)
      - Ashwagandha (ಅಶ್ವಗಂಧ)

- **Companion Planting Data**:

  - Added 25+ companion planting relationships
  - Each herb includes data about which plants grow well together
  - Improves gardening recommendations for optimal growth

- **High-Quality Images**:

  - Added image links for all plants
  - Shows plants at various growth stages
  - Helps users identify plants correctly

- **Future Expansion**:
  - Database structure ready for ~150-200 Bengaluru-suitable plants
  - Schema supports unlimited languages without migration
  - Framework in place for adding detailed growing instructions

## Getting Started

1. Clone this repository
2. Open index.html in a modern web browser
3. No build process required - application loads directly in browser

## Contribution

Contributions are welcome, especially for:

- Adding more seed varieties suitable for Bengaluru
- Adding more language translations
- Improving growing instructions specific to Bengaluru's micro-climates

## License

See the [LICENSE](LICENSE) file for details.
