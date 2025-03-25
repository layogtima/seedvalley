// SeedBank Database Setup and Initialization
// Using Dexie.js for IndexedDB

// Initialize database structure
const db = new Dexie('seedbank');
db.version(1).stores({
  seeds: 'id, scientificName, category, difficulty, sunlight, water, growTime, *seasons',
  seedTranslations: '[seedId+language], seedId, language',
  categories: 'id',
  categoryTranslations: '[categoryId+language], categoryId, language',
  companionships: '[seedId+companionId], seedId, companionId',
  growingInstructions: 'id, seedId, type',
  instructionTranslations: '[instructionId+language], instructionId, language',
  sources: 'id, seedId'
});

// Initial data: Categories
const categories = [
  { id: "leafyGreens", /* No language-specific data here */ },
  { id: "rootVegetables" },
  { id: "fruiting" },
  { id: "herbs" },
  { id: "legumes" },
  { id: "brassicas" },
  { id: "quickHarvest" }
];

// Category translations
const categoryTranslations = [
  // English
  { categoryId: "leafyGreens", language: "en", name: "Leafy Greens", description: "Vegetables grown primarily for their edible leaves", icon: "leaf" },
  { categoryId: "rootVegetables", language: "en", name: "Root Vegetables", description: "Vegetables grown for their edible roots or tubers", icon: "carrot" },
  { categoryId: "fruiting", language: "en", name: "Fruiting Vegetables", description: "Plants grown for their edible fruits or pods", icon: "apple" },
  { categoryId: "herbs", language: "en", name: "Herbs", description: "Aromatic plants used for flavoring and medicine", icon: "herb" },
  { categoryId: "legumes", language: "en", name: "Legumes", description: "Plants that produce pods with seeds inside", icon: "bean" },
  { categoryId: "brassicas", language: "en", name: "Brassicas", description: "Cabbage family vegetables", icon: "cabbage" },
  { categoryId: "quickHarvest", language: "en", name: "Quick Harvest", description: "Crops that can be harvested within 30 days", icon: "bolt" },

  // Kannada
  { categoryId: "leafyGreens", language: "kn", name: "ಎಲೆ ತರಕಾರಿಗಳು", description: "ಮುಖ್ಯವಾಗಿ ಅವುಗಳ ತಿನ್ನಬಹುದಾದ ಎಲೆಗಳಿಗಾಗಿ ಬೆಳೆಯುವ ತರಕಾರಿಗಳು", icon: "leaf" },
  { categoryId: "rootVegetables", language: "kn", name: "ಬೇರು ತರಕಾರಿಗಳು", description: "ಅವುಗಳ ತಿನ್ನಬಹುದಾದ ಬೇರುಗಳಿಗಾಗಿ ಬೆಳೆಯುವ ತರಕಾರಿಗಳು", icon: "carrot" },
  { categoryId: "fruiting", language: "kn", name: "ಹಣ್ಣಿನ ತರಕಾರಿಗಳು", description: "ಅವುಗಳ ತಿನ್ನಬಹುದಾದ ಹಣ್ಣುಗಳು ಅಥವಾ ಕಾಯಿಗಳಿಗಾಗಿ ಬೆಳೆಯುವ ಸಸ್ಯಗಳು", icon: "apple" },
  { categoryId: "herbs", language: "kn", name: "ಸುಗಂಧದ್ರವ್ಯಗಳು", description: "ರುಚಿ ಮತ್ತು ಔಷಧಿಗೆ ಬಳಸುವ ಸುಗಂಧಯುಕ್ತ ಸಸ್ಯಗಳು", icon: "herb" },
  { categoryId: "legumes", language: "kn", name: "ಕಾಳುಗಳು", description: "ಕಾಯಿಗಳನ್ನು ಉತ್ಪಾದಿಸುವ ಸಸ್ಯಗಳು", icon: "bean" },
  { categoryId: "brassicas", language: "kn", name: "ಕ್ರುಸಿಫರಸ್ ಕುಟುಂಬ", description: "ಎಲೆಕೋಸು ಕುಟುಂಬದ ತರಕಾರಿಗಳು", icon: "cabbage" },
  { categoryId: "quickHarvest", language: "kn", name: "ತ್ವರಿತ ಕೊಯ್ಲು", description: "30 ದಿನಗಳೊಳಗೆ ಕೊಯ್ಲು ಮಾಡಬಹುದಾದ ಬೆಳೆಗಳು", icon: "bolt" }
];

// ITERATION 1: VEGETABLES & HERBS
// Seeds base data - language neutral
const seeds = [
  {
    id: "methi",
    scientificName: "Trigonella foenum-graecum",
    category: "leafyGreens",
    difficulty: 1,
    sunlight: 4,
    water: 2,
    growTime: "20-30 days",
    seasons: ["summer", "winter"]
  },
  {
    id: "radish",
    scientificName: "Raphanus sativus",
    category: "rootVegetables",
    difficulty: 1,
    sunlight: 4,
    water: 3,
    growTime: "25-30 days",
    seasons: ["summer", "winter"]
  },
  {
    id: "spinach",
    scientificName: "Spinacia oleracea",
    category: "leafyGreens",
    difficulty: 2,
    sunlight: 3,
    water: 3,
    growTime: "30-40 days",
    seasons: ["summer", "winter"]
  },
  {
    id: "coriander",
    scientificName: "Coriandrum sativum",
    category: "herbs",
    difficulty: 2,
    sunlight: 3,
    water: 3,
    growTime: "21-28 days",
    seasons: ["summer", "winter"]
  },
  {
    id: "okra",
    scientificName: "Abelmoschus esculentus",
    category: "fruiting",
    difficulty: 2,
    sunlight: 5,
    water: 3,
    growTime: "55-65 days",
    seasons: ["summer", "monsoon"]
  },
  {
    id: "beans",
    scientificName: "Phaseolus vulgaris",
    category: "legumes",
    difficulty: 2,
    sunlight: 4,
    water: 3,
    growTime: "45-60 days",
    seasons: ["monsoon", "postmonsoon"]
  },

  // Additional herbs for Bengaluru
  {
    id: "tulsi",
    scientificName: "Ocimum sanctum",
    category: "herbs",
    difficulty: 1,
    sunlight: 4,
    water: 2,
    growTime: "60-90 days",
    seasons: ["summer", "monsoon", "postmonsoon", "winter"]
  },
  {
    id: "mint",
    scientificName: "Mentha spicata",
    category: "herbs",
    difficulty: 2,
    sunlight: 3,
    water: 4,
    growTime: "30-40 days",
    seasons: ["summer", "monsoon"]
  },
  {
    id: "curry",
    scientificName: "Murraya koenigii",
    category: "herbs",
    difficulty: 3,
    sunlight: 4,
    water: 3,
    growTime: "Perennial (120+ days for initial growth)",
    seasons: ["monsoon", "postmonsoon"]
  },
  {
    id: "lemongrass",
    scientificName: "Cymbopogon citratus",
    category: "herbs",
    difficulty: 1,
    sunlight: 5,
    water: 3,
    growTime: "90-120 days",
    seasons: ["summer", "monsoon"]
  },
  {
    id: "ajwain",
    scientificName: "Trachyspermum ammi",
    category: "herbs",
    difficulty: 2,
    sunlight: 4,
    water: 2,
    growTime: "60-80 days",
    seasons: ["winter", "postmonsoon"]
  },
  {
    id: "turmeric",
    scientificName: "Curcuma longa",
    category: "herbs",
    difficulty: 2,
    sunlight: 3,
    water: 3,
    growTime: "240-300 days",
    seasons: ["monsoon"]
  },
  {
    id: "ginger",
    scientificName: "Zingiber officinale",
    category: "herbs",
    difficulty: 2,
    sunlight: 3,
    water: 3,
    growTime: "210-240 days",
    seasons: ["monsoon"]
  },
  {
    id: "chilli",
    scientificName: "Capsicum annuum",
    category: "fruiting",
    difficulty: 2,
    sunlight: 5,
    water: 3,
    growTime: "70-90 days",
    seasons: ["summer", "monsoon"]
  },
  {
    id: "basil",
    scientificName: "Ocimum basilicum",
    category: "herbs",
    difficulty: 1,
    sunlight: 4,
    water: 3,
    growTime: "50-60 days",
    seasons: ["summer", "monsoon", "postmonsoon"]
  },
  {
    id: "ashwagandha",
    scientificName: "Withania somnifera",
    category: "herbs",
    difficulty: 3,
    sunlight: 5,
    water: 2,
    growTime: "150-180 days",
    seasons: ["winter", "summer"]
  }
];

// Seed translations
const seedTranslations = [
  // English - Methi
  {
    seedId: "methi",
    language: "en",
    name: "Fenugreek",
    localName: "Methi",
    description: "Methi or fenugreek is a popular leafy green in Indian cuisine with a distinctive flavor. The leaves are harvested young for cooking, while seeds are used as a spice.",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQDnLctnc1V77m5FW56YIhDmdOMmjSdML8Q&s"
  },
  // Kannada - Methi
  {
    seedId: "methi",
    language: "kn",
    name: "ಮೆಂಥ್ಯ",
    localName: "ಮೆಂಥ್ಯ",
    description: "ಮೆಂಥ್ಯವು ಭಾರತೀಯ ಅಡುಗೆಯಲ್ಲಿ ಜನಪ್ರಿಯ ಎಲೆ ತರಕಾರಿಯಾಗಿದ್ದು, ವಿಶಿಷ್ಟ ರುಚಿ ಹೊಂದಿದೆ. ಎಲೆಗಳನ್ನು ಅಡುಗೆಗಾಗಿ ಕೊಯ್ಯಲಾಗುತ್ತದೆ, ಮತ್ತು ಬೀಜಗಳನ್ನು ಮಸಾಲೆಗಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQDnLctnc1V77m5FW56YIhDmdOMmjSdML8Q&s"
  },

  // English - Radish
  {
    seedId: "radish",
    language: "en",
    name: "Radish",
    localName: "Mūllangi",
    description: "Radishes are quick-growing, crisp root vegetables with a peppery flavor. They're among the fastest vegetables to harvest and perfect for beginners.",
    imagePath: "https://thumbs.dreamstime.com/b/image-showcases-vibrant-radish-seedling-bright-green-leaves-emerging-rich-dark-soil-smooth-lavender-361901624.jpg"
  },
  // Kannada - Radish
  {
    seedId: "radish",
    language: "kn",
    name: "ಮೂಲಂಗಿ",
    localName: "ಮೂಲಂಗಿ",
    description: "ಮೂಲಂಗಿಗಳು ವೇಗವಾಗಿ ಬೆಳೆಯುವ, ಗಟ್ಟಿಯಾದ ಬೇರು ತರಕಾರಿಗಳಾಗಿದ್ದು ಕಾರದ ರುಚಿಯನ್ನು ಹೊಂದಿವೆ. ಅವು ಕೊಯ್ಲು ಮಾಡಲು ಅತಿ ವೇಗದ ತರಕಾರಿಗಳಲ್ಲಿ ಒಂದಾಗಿದ್ದು, ಪ್ರಾರಂಭಿಕರಿಗೆ ಸೂಕ್ತವಾಗಿವೆ.",
    imagePath: "https://thumbs.dreamstime.com/b/image-showcases-vibrant-radish-seedling-bright-green-leaves-emerging-rich-dark-soil-smooth-lavender-361901624.jpg"
  },

  // English - Spinach
  {
    seedId: "spinach",
    language: "en",
    name: "Spinach",
    localName: "Palak",
    description: "Palak (Indian spinach) is a nutritious leafy green rich in iron and vitamins. It's a staple in Indian cuisine and relatively easy to grow in Bengaluru's climate.",
    imagePath: "https://i0.wp.com/dbsfarmwilson.com/wp-content/uploads/2023/04/Spinach-3-scaled-e1680812931365-1024x719.jpg?resize=1024%2C719&ssl=1"
  },
  // Kannada - Spinach
  {
    seedId: "spinach",
    language: "kn",
    name: "ಪಾಲಕ್",
    localName: "ಪಾಲಕ್",
    description: "ಪಾಲಕ್ (ಭಾರತೀಯ ಪಾಲಕ್) ಕಬ್ಬಿಣ ಮತ್ತು ವಿಟಮಿನ್‌ಗಳಿಂದ ಸಮೃದ್ಧವಾದ ಪೌಷ್ಟಿಕ ಎಲೆ ತರಕಾರಿಯಾಗಿದೆ. ಇದು ಭಾರತೀಯ ಅಡುಗೆಯಲ್ಲಿ ಪ್ರಮುಖವಾಗಿದ್ದು, ಬೆಂಗಳೂರಿನ ಹವಾಮಾನದಲ್ಲಿ ಸಾಪೇಕ್ಷವಾಗಿ ಬೆಳೆಯಲು ಸುಲಭವಾಗಿದೆ.",
    imagePath: "https://i0.wp.com/dbsfarmwilson.com/wp-content/uploads/2023/04/Spinach-3-scaled-e1680812931365-1024x719.jpg?resize=1024%2C719&ssl=1"
  },

  // English - Coriander
  {
    seedId: "coriander",
    language: "en",
    name: "Coriander",
    localName: "Kothambari Soppu",
    description: "Coriander (also known as cilantro) is an aromatic herb essential in Indian cuisine. Both the leaves and seeds are used in cooking, making it a versatile addition to any garden.",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Oh4BWhKWjwscU53RaFLWAn8Era6Iupd0xA&s"
  },
  // Kannada - Coriander
  {
    seedId: "coriander",
    language: "kn",
    name: "ಕೊತ್ತಂಬರಿ",
    localName: "ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು",
    description: "ಕೊತ್ತಂಬರಿ ಭಾರತೀಯ ಅಡುಗೆಯಲ್ಲಿ ಅತ್ಯಗತ್ಯವಾದ ಸುಗಂಧ ಸಸ್ಯವಾಗಿದೆ. ಎಲೆಗಳು ಮತ್ತು ಬೀಜಗಳು ಎರಡನ್ನೂ ಅಡುಗೆಯಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ, ಇದು ಯಾವುದೇ ತೋಟಕ್ಕೆ ಬಹುಮುಖಿ ಸೇರ್ಪಡೆಯಾಗಿದೆ.",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Oh4BWhKWjwscU53RaFLWAn8Era6Iupd0xA&s"
  },

  // English - Okra
  {
    seedId: "okra",
    language: "en",
    name: "Okra",
    localName: "Bende Kayi",
    description: "Okra (Bhindi/Ladies Finger) is a warm-season vegetable with edible seed pods. It thrives in Bengaluru's climate, especially during the monsoon season.",
    imagePath: "https://i.pinimg.com/474x/ed/c9/ed/edc9ed469a1ae11636d13e82bde705c6.jpg"
  },
  // Kannada - Okra
  {
    seedId: "okra",
    language: "kn",
    name: "ಬೇಂಡೆಕಾಯಿ",
    localName: "ಬೇಂಡೆಕಾಯಿ",
    description: "ಬೇಂಡೆಕಾಯಿ (ಲೇಡೀಸ್ ಫಿಂಗರ್) ತಿನ್ನಬಹುದಾದ ಬೀಜ ಕಾಯಿಗಳನ್ನು ಹೊಂದಿರುವ ಬಿಸಿ-ಋತುವಿನ ತರಕಾರಿಯಾಗಿದೆ. ಇದು ಬೆಂಗಳೂರಿನ ಹವಾಮಾನದಲ್ಲಿ, ವಿಶೇಷವಾಗಿ ಮುಂಗಾರು ಋತುವಿನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಬೆಳೆಯುತ್ತದೆ.",
    imagePath: "https://i.pinimg.com/474x/ed/c9/ed/edc9ed469a1ae11636d13e82bde705c6.jpg"
  },

  // English - Beans
  {
    seedId: "beans",
    language: "en",
    name: "Beans",
    localName: "Hurali Kayi",
    description: "Beans are productive, nitrogen-fixing plants that grow quickly and produce abundant harvests. Bush varieties are great for containers while pole varieties can be trained up trellises.",
    imagePath: "https://media.sciencephoto.com/c0/07/39/70/c0073970-800px-wm.jpg"
  },
  // Kannada - Beans
  {
    seedId: "beans",
    language: "kn",
    name: "ಹುರಳಿಕಾಯಿ",
    localName: "ಹುರಳಿಕಾಯಿ",
    description: "ಹುರಳಿಕಾಯಿಗಳು ಉತ್ಪಾದಕ, ನೈಟ್ರೋಜನ್ ಸ್ಥಿರೀಕರಣ ಸಸ್ಯಗಳಾಗಿದ್ದು, ವೇಗವಾಗಿ ಬೆಳೆದು ಹೇರಳ ಬೆಳೆ ನೀಡುತ್ತವೆ. ಪೊದೆ ಬಗೆಗಳು ಪಾತ್ರೆಗಳಿಗೆ ಉತ್ತಮವಾಗಿದ್ದರೆ, ಧ್ರುವ ಬಗೆಗಳನ್ನು ಸರಳಿಗಳಲ್ಲಿ ಬೆಳೆಸಬಹುದು.",
    imagePath: "https://media.sciencephoto.com/c0/07/39/70/c0073970-800px-wm.jpg"
  },

  // English - Tulsi
  {
    seedId: "tulsi",
    language: "en",
    name: "Holy Basil",
    localName: "Tulsi",
    description: "Tulsi or Holy Basil is a sacred herb in Indian culture with powerful medicinal properties. It's an adaptogenic herb that helps the body adapt to stress and has immune-boosting properties.",
    imagePath: "https://www.gkvk.ac.in/wp-content/uploads/2014/05/Tulasi-Ocimum-sanctum.jpg"
  },
  // Kannada - Tulsi
  {
    seedId: "tulsi",
    language: "kn",
    name: "ತುಳಸಿ",
    localName: "ತುಳಸಿ",
    description: "ತುಳಸಿ ಭಾರತೀಯ ಸಂಸ್ಕೃತಿಯಲ್ಲಿ ಪವಿತ್ರವಾದ ಸುಗಂಧ ಸಸ್ಯವಾಗಿದ್ದು ಪ್ರಬಲ ಔಷಧೀಯ ಗುಣಗಳನ್ನು ಹೊಂದಿದೆ. ಇದು ಅನುಕೂಲಕಾರಿ ಸುಗಂಧ ಸಸ್ಯವಾಗಿದ್ದು, ದೇಹವು ಒತ್ತಡಕ್ಕೆ ಹೊಂದಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ ಮತ್ತು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುವ ಗುಣಗಳನ್ನು ಹೊಂದಿದೆ.",
    imagePath: "https://www.gkvk.ac.in/wp-content/uploads/2014/05/Tulasi-Ocimum-sanctum.jpg"
  },

  // English - Mint
  {
    seedId: "mint",
    language: "en",
    name: "Mint",
    localName: "Pudina",
    description: "Mint is a fast-growing aromatic herb with cooling properties. It's widely used in chutneys, drinks, and for flavoring dishes. Mint grows aggressively and is best contained in pots.",
    imagePath: "https://www.gardeningknowhow.com/wp-content/uploads/2009/03/mint-1.jpg"
  },
  // Kannada - Mint
  {
    seedId: "mint",
    language: "kn",
    name: "ಪುದೀನ",
    localName: "ಪುದೀನ",
    description: "ಪುದೀನ ವೇಗವಾಗಿ ಬೆಳೆಯುವ ಸುಗಂಧ ಸಸ್ಯವಾಗಿದ್ದು ತಂಪಾಗಿಸುವ ಗುಣಗಳನ್ನು ಹೊಂದಿದೆ. ಇದನ್ನು ಚಟ್ನಿಗಳು, ಪಾನೀಯಗಳು ಮತ್ತು ಅಡುಗೆಗೆ ರುಚಿ ಸೇರಿಸಲು ವ್ಯಾಪಕವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ. ಪುದೀನ ಆಕ್ರಮಣಕಾರಿಯಾಗಿ ಬೆಳೆಯುತ್ತದೆ ಮತ್ತು ಮಡಕೆಗಳಲ್ಲಿ ಬೆಳೆಸುವುದು ಉತ್ತಮ.",
    imagePath: "https://www.gardeningknowhow.com/wp-content/uploads/2009/03/mint-1.jpg"
  },

  // English - Curry Leaf
  {
    seedId: "curry",
    language: "en",
    name: "Curry Leaf Plant",
    localName: "Karibevu",
    description: "The curry leaf plant is a small tree native to India with aromatic leaves essential for South Indian cuisine. It takes time to establish but will provide leaves for many years once mature.",
    imagePath: "https://m.media-amazon.com/images/I/813HsNoY0cL._AC_UF1000,1000_QL80_.jpg"
  },
  // Kannada - Curry Leaf
  {
    seedId: "curry",
    language: "kn",
    name: "ಕರಿಬೇವು",
    localName: "ಕರಿಬೇವು",
    description: "ಕರಿಬೇವಿನ ಗಿಡ ಭಾರತದ ಸ್ಥಳೀಯ ಚಿಕ್ಕ ಮರವಾಗಿದ್ದು, ದಕ್ಷಿಣ ಭಾರತೀಯ ಅಡುಗೆಗೆ ಅಗತ್ಯವಾದ ಸುಗಂಧಯುಕ್ತ ಎಲೆಗಳನ್ನು ಹೊಂದಿದೆ. ಸ್ಥಾಪಿಸಲು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ ಆದರೆ ಒಮ್ಮೆ ಪರಿಪಕ್ವವಾದ ನಂತರ ಹಲವಾರು ವರ್ಷಗಳವರೆಗೆ ಎಲೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    imagePath: "https://m.media-amazon.com/images/I/813HsNoY0cL._AC_UF1000,1000_QL80_.jpg"
  },

  // English - Lemongrass
  {
    seedId: "lemongrass",
    language: "en",
    name: "Lemongrass",
    localName: "Nimbe Hullu",
    description: "Lemongrass is a tropical herb with a citrus flavor used in teas, soups, and curries. It's easy to grow and repels mosquitoes, making it a useful addition to any garden.",
    imagePath: "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/lemongrass-growing.jpg"
  },
  // Kannada - Lemongrass
  {
    seedId: "lemongrass",
    language: "kn",
    name: "ನಿಂಬೆ ಹುಲ್ಲು",
    localName: "ನಿಂಬೆ ಹುಲ್ಲು",
    description: "ನಿಂಬೆ ಹುಲ್ಲು ಸಿಟ್ರಸ್ ರುಚಿಯ ಉಷ್ಣವಲಯದ ಸುಗಂಧ ಸಸ್ಯವಾಗಿದ್ದು, ಚಹಾ, ಸೂಪ್ ಮತ್ತು ಕರಿಗಳಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ. ಇದು ಬೆಳೆಯಲು ಸುಲಭವಾಗಿದೆ ಮತ್ತು ಸೊಳ್ಳೆಗಳನ್ನು ದೂರವಿಡುತ್ತದೆ, ಇದು ಯಾವುದೇ ತೋಟಕ್ಕೆ ಉಪಯುಕ್ತ ಸೇರ್ಪಡೆಯಾಗಿದೆ.",
    imagePath: "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/lemongrass-growing.jpg"
  },

  // English - Ajwain
  {
    seedId: "ajwain",
    language: "en",
    name: "Carom Plant",
    localName: "Ajwain",
    description: "Ajwain (carom) is an herb with thyme-like flavor, commonly used in Indian cuisine for its digestive properties. The plant produces seeds that are used as a spice and have medicinal value.",
    imagePath: "https://homegrowntips.com/wp-content/uploads/2020/07/ajwain_seeds.jpg"
  },
  // Kannada - Ajwain
  {
    seedId: "ajwain",
    language: "kn",
    name: "ಓಮ",
    localName: "ಓಮ",
    description: "ಓಮ (ಅಜ್ವಾಯಿನ್) ಅಜಮೋದ ಅಥವಾ ಥೈಮ್ ಹಾಗೆ ರುಚಿಯ ಸುಗಂಧ ಸಸ್ಯವಾಗಿದ್ದು, ಅದರ ಜೀರ್ಣಕ್ರಿಯೆಯ ಗುಣಗಳಿಗಾಗಿ ಭಾರತೀಯ ಅಡುಗೆಯಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ. ಗಿಡವು ಮಸಾಲೆಯಾಗಿ ಬಳಸುವ ಮತ್ತು ಔಷಧೀಯ ಮೌಲ್ಯ ಹೊಂದಿರುವ ಬೀಜಗಳನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ.",
    imagePath: "https://homegrowntips.com/wp-content/uploads/2020/07/ajwain_seeds.jpg"
  },

  // English - Turmeric
  {
    seedId: "turmeric",
    language: "en",
    name: "Turmeric",
    localName: "Arishina",
    description: "Turmeric is a rhizomatous herbaceous perennial plant with vibrant yellow roots used as a spice and for medicinal purposes. It requires a warm, humid climate and plenty of rainfall.",
    imagePath: "https://1.bp.blogspot.com/-OHD9-_WHMRY/XVB01NQQYpI/AAAAAAAAb8s/dEwNSS8J-EEGGVUGpLAzFdvf42zTITvYQCLcBGAs/s1600/How%2Bto%2Bgrow%2Bturmeric%2Bat%2Bhome.jpg"
  },
  // Kannada - Turmeric
  {
    seedId: "turmeric",
    language: "kn",
    name: "ಅರಿಶಿನ",
    localName: "ಅರಿಶಿನ",
    description: "ಅರಿಶಿನ ಬಹುವಾರ್ಷಿಕ ಗಡ್ಡೆ ಸಸ್ಯವಾಗಿದ್ದು, ಮಸಾಲೆ ಮತ್ತು ಔಷಧೀಯ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಬಳಸಲಾಗುವ ಹಳದಿ ಬಣ್ಣದ ಬೇರುಗಳನ್ನು ಹೊಂದಿದೆ. ಇದಕ್ಕೆ ಬಿಸಿ, ತೇವಾಂಶಯುಕ್ತ ಹವಾಮಾನ ಮತ್ತು ಸಾಕಷ್ಟು ಮಳೆ ಬೇಕಾಗುತ್ತದೆ.",
    imagePath: "https://1.bp.blogspot.com/-OHD9-_WHMRY/XVB01NQQYpI/AAAAAAAAb8s/dEwNSS8J-EEGGVUGpLAzFdvf42zTITvYQCLcBGAs/s1600/How%2Bto%2Bgrow%2Bturmeric%2Bat%2Bhome.jpg"
  },

  // English - Ginger
  {
    seedId: "ginger",
    language: "en",
    name: "Ginger",
    localName: "Shunti",
    description: "Ginger is a flowering plant whose rhizome is widely used as a spice and in traditional medicine. It thrives in partial shade, making it ideal for Bengaluru's home gardens.",
    imagePath: "https://balconygardenweb.b-cdn.net/wp-content/uploads/2019/09/Growing-Ginger-in-Container.jpg"
  },
  // Kannada - Ginger
  {
    seedId: "ginger",
    language: "kn",
    name: "ಶುಂಠಿ",
    localName: "ಶುಂಠಿ",
    description: "ಶುಂಠಿ ಹೂಬಿಡುವ ಸಸ್ಯವಾಗಿದ್ದು, ಇದರ ಗಡ್ಡೆಯನ್ನು ಮಸಾಲೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಔಷಧಿಯಾಗಿ ವ್ಯಾಪಕವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ. ಇದು ಭಾಗಶಃ ನೆರಳಿನಲ್ಲಿ ಹೆಚ್ಚಾಗಿ ಬೆಳೆಯುತ್ತದೆ, ಇದು ಬೆಂಗಳೂರಿನ ಮನೆ ತೋಟಗಳಿಗೆ ಸೂಕ್ತವಾಗಿದೆ.",
    imagePath: "https://balconygardenweb.b-cdn.net/wp-content/uploads/2019/09/Growing-Ginger-in-Container.jpg"
  },

  // English - Chilli
  {
    seedId: "chilli",
    language: "en",
    name: "Chilli",
    localName: "Menasinakai",
    description: "Chillies are spicy peppers that add heat to dishes. They're relatively easy to grow in containers and produce abundantly in Bengaluru's climate with regular watering and sun.",
    imagePath: "https://veggiegardener.com/wp-content/uploads/2017/09/hot-pepper-growing-guide.jpg"
  },
  // Kannada - Chilli
  {
    seedId: "chilli",
    language: "kn",
    name: "ಮೆಣಸಿನಕಾಯಿ",
    localName: "ಮೆಣಸಿನಕಾಯಿ",
    description: "ಮೆಣಸಿನಕಾಯಿಗಳು ಅಡುಗೆಗೆ ಕಾರವನ್ನು ಸೇರಿಸುವ ಕಾಳಿ ಮೆಣಸುಗಳಾಗಿವೆ. ಅವುಗಳನ್ನು ಪಾತ್ರೆಗಳಲ್ಲಿ ಬೆಳೆಯಲು ತುಲನಾತ್ಮಕವಾಗಿ ಸುಲಭವಾಗಿದೆ ಮತ್ತು ನಿಯಮಿತ ನೀರು ಮತ್ತು ಸೂರ್ಯನ ಬೆಳಕಿನೊಂದಿಗೆ ಬೆಂಗಳೂರಿನ ಹವಾಮಾನದಲ್ಲಿ ಹೇರಳವಾಗಿ ಉತ್ಪಾದಿಸುತ್ತವೆ.",
    imagePath: "https://veggiegardener.com/wp-content/uploads/2017/09/hot-pepper-growing-guide.jpg"
  },

  // English - Basil
  {
    seedId: "basil",
    language: "en",
    name: "Sweet Basil",
    localName: "Sabja",
    description: "Sweet basil is an aromatic herb popular in Italian cuisine with a distinct sweet aroma. It grows quickly and is perfect for containers on sunny windowsills or balconies.",
    imagePath: "https://greenhouseemporium.com/wp-content/uploads/2020/05/AdobeStock_190038652-2048x1367.jpeg"
  },
  // Kannada - Basil
  {
    seedId: "basil",
    language: "kn",
    name: "ಸಾಬಸಿಗೆ ಸೊಪ್ಪು",
    localName: "ಸಬ್ಜಾ",
    description: "ಸಾಬಸಿಗೆ ಸೊಪ್ಪು ಇಟಾಲಿಯನ್ ಅಡುಗೆಯಲ್ಲಿ ಜನಪ್ರಿಯವಾಗಿರುವ ವಿಶಿಷ್ಟ ಸಿಹಿ ಪರಿಮಳದ ಸುಗಂಧ ಸಸ್ಯವಾಗಿದೆ. ಇದು ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತದೆ ಮತ್ತು ಸೂರ್ಯನ ಬೆಳಕು ಬೀಳುವ ಕಿಟಕಿಗಳ ಬಳಿ ಅಥವಾ ಬಾಲ್ಕನಿಗಳ ಮೇಲೆ ಪಾತ್ರೆಗಳಲ್ಲಿ ಬೆಳೆಯಲು ಸೂಕ್ತವಾಗಿದೆ.",
    imagePath: "https://greenhouseemporium.com/wp-content/uploads/2020/05/AdobeStock_190038652-2048x1367.jpeg"
  },

  // English - Ashwagandha
  {
    seedId: "ashwagandha",
    language: "en",
    name: "Ashwagandha",
    localName: "Ashwagandha",
    description: "Ashwagandha is an adaptogenic herb used in Ayurvedic medicine for its stress-reducing properties. It's drought-tolerant and thrives in poor soil, making it easy to grow in Bengaluru.",
    imagePath: "https://www.agrifarming.in/wp-content/uploads/2015/03/Ashwagandha-Farming.jpg"
  },
  // Kannada - Ashwagandha
  {
    seedId: "ashwagandha",
    language: "kn",
    name: "ಅಶ್ವಗಂಧ",
    localName: "ಅಶ್ವಗಂಧ",
    description: "ಅಶ್ವಗಂಧ ಒತ್ತಡ ಕಡಿಮೆ ಮಾಡುವ ಗುಣಗಳಿಗಾಗಿ ಆಯುರ್ವೇದದಲ್ಲಿ ಬಳಸಲಾಗುವ ಅನುಕೂಲಕಾರಿ ಸಸ್ಯವಾಗಿದೆ. ಇದು ಬರ-ಸಹಿಷ್ಣುವಾಗಿದೆ ಮತ್ತು ಕಳಪೆ ಮಣ್ಣಿನಲ್ಲಿ ಹೆಚ್ಚಾಗಿ ಬೆಳೆಯುತ್ತದೆ, ಇದು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಬೆಳೆಯಲು ಸುಲಭವಾಗಿಸುತ್ತದೆ.",
    imagePath: "https://www.agrifarming.in/wp-content/uploads/2015/03/Ashwagandha-Farming.jpg"
  }
];

// Growing instructions for each seed
const growingInstructions = [
  // Methi - planting
  {
    id: "methi-planting",
    seedId: "methi",
    type: "planting"
  },
  // Methi - care
  {
    id: "methi-care",
    seedId: "methi",
    type: "care"
  },
  // Methi - harvesting
  {
    id: "methi-harvesting",
    seedId: "methi",
    type: "harvesting"
  },
  // Methi - problems
  {
    id: "methi-problems",
    seedId: "methi",
    type: "problems"
  },
  // Methi - tips
  {
    id: "methi-tips",
    seedId: "methi",
    type: "bengaluruTips"
  },

  // Similar structure for radish, spinach, coriander, okra, beans
  // (adding just a few examples for brevity)
  {
    id: "radish-planting",
    seedId: "radish",
    type: "planting"
  },
  {
    id: "spinach-planting",
    seedId: "spinach",
    type: "planting"
  },
  {
    id: "coriander-planting",
    seedId: "coriander",
    type: "planting"
  }
];

// Instruction translations
const instructionTranslations = [
  // Methi planting instructions - English
  {
    instructionId: "methi-planting",
    language: "en",
    content: [
      "Soak seeds overnight to improve germination",
      "Fill a pot or tray with well-draining soil",
      "Broadcast seeds evenly and cover with 1/4 inch of soil",
      "Water gently but thoroughly",
      "Place in a sunny location"
    ]
  },
  // Methi planting instructions - Kannada
  {
    instructionId: "methi-planting",
    language: "kn",
    content: [
      "ಮೊಳಕೆಯೊಡೆಯುವಿಕೆಯನ್ನು ಸುಧಾರಿಸಲು ಬೀಜಗಳನ್ನು ರಾತ್ರಿ ನೀರಿನಲ್ಲಿ ನೆನೆಸಿ",
      "ಚೆನ್ನಾಗಿ ಒಣಗುವ ಮಣ್ಣಿನಿಂದ ಮಡಕೆ ಅಥವಾ ಟ್ರೇ ತುಂಬಿಸಿ",
      "ಬೀಜಗಳನ್ನು ಸಮನಾಗಿ ಹರಡಿ ಮತ್ತು 1/4 ಇಂಚು ಮಣ್ಣಿನಿಂದ ಮುಚ್ಚಿ",
      "ನಿಧಾನವಾಗಿ ಆದರೆ ಸಂಪೂರ್ಣವಾಗಿ ನೀರು ಹಾಕಿ",
      "ಸೂರ್ಯನ ಬೆಳಕಿರುವ ಸ್ಥಳದಲ್ಲಿ ಇಡಿ"
    ]
  },
  // Methi care instructions - English
  {
    instructionId: "methi-care",
    language: "en",
    content: {
      light: "Full sun to partial shade. At least 4-6 hours of direct sunlight daily.",
      water: "Water regularly but allow soil to dry slightly between waterings. Drought tolerant.",
      soil: "Well-draining soil with moderate fertility. pH 6.0-7.0 preferred.",
      spacing: "Broadcast seeding: thin to 2-3 inches apart once seedlings appear.",
      fertilizer: "Light application of compost or balanced organic fertilizer at planting."
    }
  },
  // Methi care instructions - Kannada
  {
    instructionId: "methi-care",
    language: "kn",
    content: {
      light: "ಪೂರ್ಣ ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ಭಾಗಶಃ ನೆರಳಿನವರೆಗೆ. ಪ್ರತಿದಿನ ಕನಿಷ್ಠ 4-6 ಗಂಟೆಗಳ ನೇರ ಸೂರ್ಯನ ಬೆಳಕು.",
      water: "ನಿಯಮಿತವಾಗಿ ನೀರು ಹಾಕಿ ಆದರೆ ನೀರುಣಿಸುವಿಕೆಯ ನಡುವೆ ಮಣ್ಣು ಸ್ವಲ್ಪ ಒಣಗಲು ಬಿಡಿ. ಬರ ಸಹಿಷ್ಣು.",
      soil: "ಮಧ್ಯಮ ಫಲವತ್ತಾದ, ಚೆನ್ನಾಗಿ ಒಣಗುವ ಮಣ್ಣು. pH 6.0-7.0 ಅನ್ನು ಇಷ್ಟಪಡುತ್ತದೆ.",
      spacing: "ಸಸಿಗಳು ಕಾಣಿಸಿಕೊಂಡ ನಂತರ 2-3 ಇಂಚುಗಳ ಅಂತರದಲ್ಲಿ ವಿರಳಗೊಳಿಸಿ.",
      fertilizer: "ನೆಡುವಾಗ ಕಾಂಪೋಸ್ಟ್ ಅಥವಾ ಸಮತೋಲಿತ ಸಾವಯವ ಗೊಬ್ಬರದ ಹಗುರ ಬಳಕೆ."
    }
  },
  // Methi harvesting instructions - English
  {
    instructionId: "methi-harvesting",
    language: "en",
    content: {
      time: "Harvest leaves when plants are 4-6 inches tall, about 20-30 days after sowing.",
      tips: "Cut entire plants or harvest the upper leaves for continuous production. Younger leaves have milder flavor."
    }
  },
  // Methi harvesting instructions - Kannada
  {
    instructionId: "methi-harvesting",
    language: "kn",
    content: {
      time: "ಸಸಿಗಳು 4-6 ಇಂಚು ಎತ್ತರವಾದಾಗ, ಬೀಜ ಬಿತ್ತಿದ ಸುಮಾರು 20-30 ದಿನಗಳ ನಂತರ ಎಲೆಗಳನ್ನು ಕೊಯ್ಲು ಮಾಡಿ.",
      tips: "ನಿರಂತರ ಉತ್ಪಾದನೆಗಾಗಿ ಇಡೀ ಸಸಿಗಳನ್ನು ಕತ್ತರಿಸಿ ಅಥವಾ ಮೇಲಿನ ಎಲೆಗಳನ್ನು ಕೊಯ್ಯಿರಿ. ಯುವ ಎಲೆಗಳು ಮೃದುವಾದ ರುಚಿ ಹೊಂದಿರುತ್ತವೆ."
    }
  },
  // Methi common problems - English
  {
    instructionId: "methi-problems",
    language: "en",
    content: [
      "Powdery mildew during monsoon season",
      "Root rot in waterlogged soil",
      "Aphids and leaf miners (treat with neem oil)",
      "Slow germination (soak seeds before planting)"
    ]
  },
  // Methi common problems - Kannada
  {
    instructionId: "methi-problems",
    language: "kn",
    content: [
      "ಮುಂಗಾರು ಋತುವಿನಲ್ಲಿ ಪುಡಿ ಬೂಷ್ಟು",
      "ನೀರು ನಿಂತ ಮಣ್ಣಿನಲ್ಲಿ ಬೇರು ಕೊಳೆತ ರೋಗ",
      "ಸೊಪ್ಪು ಹೇನುಗಳು ಮತ್ತು ಎಲೆ ಕೊರೆಯುವ ಕೀಟಗಳು (ಬೇವಿನ ಎಣ್ಣೆಯಿಂದ ಚಿಕಿತ್ಸೆ ನೀಡಿ)",
      "ನಿಧಾನ ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ (ನೆಡುವ ಮೊದಲು ಬೀಜಗಳನ್ನು ನೆನೆಸಿ)"
    ]
  },
  // Methi Bengaluru tips - English
  {
    instructionId: "methi-tips",
    language: "en",
    content: [
      "Perfect for growing March-May in partial shade",
      "Sow every 2-3 weeks for continuous harvest",
      "Grows well in containers on balconies and terraces",
      "In summer, water early morning or evening"
    ]
  },
  // Methi Bengaluru tips - Kannada
  {
    instructionId: "methi-tips",
    language: "kn",
    content: [
      "ಭಾಗಶಃ ನೆರಳಿನಲ್ಲಿ ಮಾರ್ಚ್-ಮೇ ತಿಂಗಳಲ್ಲಿ ಬೆಳೆಯಲು ಸೂಕ್ತವಾಗಿದೆ",
      "ನಿರಂತರ ಕೊಯ್ಲಿಗಾಗಿ ಪ್ರತಿ 2-3 ವಾರಗಳಿಗೊಮ್ಮೆ ಬಿತ್ತಿ",
      "ಬಾಲ್ಕನಿಗಳು ಮತ್ತು ಮಾಳಿಗೆಗಳ ಮೇಲೆ ಪಾತ್ರೆಗಳಲ್ಲಿ ಚೆನ್ನಾಗಿ ಬೆಳೆಯುತ್ತದೆ",
      "ಬೇಸಿಗೆಯಲ್ಲಿ, ಬೆಳಿಗ್ಗೆ ಬೇಗ ಅಥವಾ ಸಂಜೆ ನೀರು ಹಾಕಿ"
    ]
  }
];

// Companion planting relationships
const companionships = [
  // Methi companions
  { seedId: "methi", companionId: "coriander" },
  { seedId: "methi", companionId: "spinach" },
  { seedId: "methi", companionId: "radish" },

  // Spinach companions
  { seedId: "spinach", companionId: "radish" },
  { seedId: "spinach", companionId: "coriander" },

  // Coriander companions
  { seedId: "coriander", companionId: "spinach" },
  { seedId: "coriander", companionId: "basil" },

  // Beans companions
  { seedId: "beans", companionId: "okra" },

  // Tulsi/Holy Basil companions
  { seedId: "tulsi", companionId: "coriander" },
  { seedId: "tulsi", companionId: "mint" },
  { seedId: "tulsi", companionId: "chilli" },

  // Mint companions
  { seedId: "mint", companionId: "tulsi" },
  { seedId: "mint", companionId: "coriander" },

  // Curry leaf companions
  { seedId: "curry", companionId: "chilli" },
  { seedId: "curry", companionId: "turmeric" },

  // Lemongrass companions
  { seedId: "lemongrass", companionId: "tulsi" },
  { seedId: "lemongrass", companionId: "mint" },

  // Turmeric companions
  { seedId: "turmeric", companionId: "ginger" },

  // Ginger companions
  { seedId: "ginger", companionId: "turmeric" },

  // Chilli companions
  { seedId: "chilli", companionId: "basil" },
  { seedId: "chilli", companionId: "curry" },

  // Basil companions
  { seedId: "basil", companionId: "chilli" },
  { seedId: "basil", companionId: "coriander" }
];

// Seed sources
const sources = [
  // Methi sources
  {
    id: "methi-source-1",
    seedId: "methi",
    nameEn: "Sahaja Seeds",
    nameKn: "ಸಹಜ ಸೀಡ್ಸ್",
    locationEn: "Online delivery in Bengaluru",
    locationKn: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಆನ್‌ಲೈನ್ ವಿತರಣೆ",
    notesEn: "Organic, locally adapted varieties",
    notesKn: "ಸಾವಯವ, ಸ್ಥಳೀಯವಾಗಿ ಹೊಂದಿಕೊಂಡ ತಳಿಗಳು"
  },
  {
    id: "methi-source-2",
    seedId: "methi",
    nameEn: "Any local grocery store",
    nameKn: "ಯಾವುದೇ ಸ್ಥಳೀಯ ಕಿರಾಣಿ ಅಂಗಡಿ",
    locationEn: "Throughout Bengaluru",
    locationKn: "ಬೆಂಗಳೂರಿನಾದ್ಯಂತ",
    notesEn: "Cooking methi seeds will germinate well",
    notesKn: "ಅಡುಗೆಗೆ ಬಳಸುವ ಮೆಂಥ್ಯದ ಬೀಜಗಳು ಚೆನ್ನಾಗಿ ಮೊಳಕೆಯೊಡೆಯುತ್ತವೆ"
  },

  // Radish sources
  {
    id: "radish-source-1",
    seedId: "radish",
    nameEn: "IIHR (Indian Institute of Horticultural Research)",
    nameKn: "IIHR (ಭಾರತೀಯ ತೋಟಗಾರಿಕೆ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ)",
    locationEn: "Hesaraghatta, Bengaluru",
    locationKn: "ಹೆಸರಘಟ್ಟ, ಬೆಂಗಳೂರು",
    notesEn: "Locally developed heat-tolerant varieties",
    notesKn: "ಸ್ಥಳೀಯವಾಗಿ ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ ಬಿಸಿ-ಸಹಿಷ್ಣು ತಳಿಗಳು"
  }
];

// Function to initialize database with data
async function initializeDatabase(forceReset = false) {
  try {
    // Check if database already has data
    const seedCount = await db.seeds.count();

    if (seedCount === 0 || forceReset) {
      // Database is empty or force reset requested, populate with initial data
      console.log("Initializing database with seed data...");

      // Clear existing data if needed
      if (seedCount > 0 && forceReset) {
        console.log("Force reset requested. Clearing existing data...");
        await db.delete();
        await db.open();
      }

      // Add data to tables in order of dependency
      await db.categories.bulkAdd(categories);
      await db.categoryTranslations.bulkAdd(categoryTranslations);
      await db.seeds.bulkAdd(seeds);
      await db.seedTranslations.bulkAdd(seedTranslations);
      await db.growingInstructions.bulkAdd(growingInstructions);
      await db.instructionTranslations.bulkAdd(instructionTranslations);
      await db.companionships.bulkAdd(companionships);
      await db.sources.bulkAdd(sources);

      console.log("Database initialized successfully!");
      return true;
    } else {
      console.log("Database already contains data. Skipping initialization.");
      return false;
    }
  } catch (error) {
    console.error("Error initializing database:", error);
    return false;
  }
}
// Helper functions for retrieving data

// Get all seeds with translations for a specific language
async function getAllSeeds(language = 'en') {
  const allSeeds = await db.seeds.toArray();

  const seedsWithTranslations = await Promise.all(
    allSeeds.map(async (seed) => {
      const translation = await db.seedTranslations
        .where('[seedId+language]')
        .equals([seed.id, language])
        .first();

      return { ...seed, ...translation };
    })
  );

  return seedsWithTranslations;
}

// Get seed details including growing instructions
async function getSeedDetails(seedId, language = 'en') {
  // Get basic seed info
  const seed = await db.seeds.get(seedId);
  if (!seed) return null;

  // Get seed translation
  const translation = await db.seedTranslations
    .where('[seedId+language]')
    .equals([seedId, language])
    .first();

  // Get growing instructions
  const instructions = await db.growingInstructions
    .where('seedId')
    .equals(seedId)
    .toArray();

  // Get instruction translations
  const instructionDetails = await Promise.all(
    instructions.map(async (instruction) => {
      const instructionTranslation = await db.instructionTranslations
        .where('[instructionId+language]')
        .equals([instruction.id, language])
        .first();

      return {
        type: instruction.type,
        content: instructionTranslation ? instructionTranslation.content : null
      };
    })
  );

  // Get companion plants
  const companionIds = await db.companionships
    .where('seedId')
    .equals(seedId)
    .toArray()
    .then(companions => companions.map(c => c.companionId));

  const companions = await Promise.all(
    companionIds.map(async (id) => {
      const companionSeed = await db.seeds.get(id);
      const companionTranslation = await db.seedTranslations
        .where('[seedId+language]')
        .equals([id, language])
        .first();

      return {
        id,
        name: companionTranslation ? companionTranslation.name : null
      };
    })
  );

  // Get sources
  const seedSources = await db.sources
    .where('seedId')
    .equals(seedId)
    .toArray();

  const formattedSources = seedSources.map(source => ({
    name: language === 'en' ? source.nameEn : source.nameKn,
    location: language === 'en' ? source.locationEn : source.locationKn,
    notes: language === 'en' ? source.notesEn : source.notesKn
  }));

  // Format instructions into an object by type
  const formattedInstructions = instructionDetails.reduce((acc, item) => {
    acc[item.type] = item.content;
    return acc;
  }, {});

  // Return complete seed details
  return {
    ...seed,
    ...translation,
    instructions: formattedInstructions,
    companions,
    sources: formattedSources
  };
}

// Get all categories with translations
async function getAllCategories(language = 'en') {
  const allCategories = await db.categories.toArray();

  const categoriesWithTranslations = await Promise.all(
    allCategories.map(async (category) => {
      const translation = await db.categoryTranslations
        .where('[categoryId+language]')
        .equals([category.id, language])
        .first();

      return { ...category, ...translation };
    })
  );

  return categoriesWithTranslations;
}

// Filter seeds by season and category
async function filterSeeds(options = {}, language = 'en') {
  const { season, category, sortBy } = options;

  let filteredSeeds = await getAllSeeds(language);

  // Filter by season if specified
  if (season) {
    filteredSeeds = filteredSeeds.filter(seed =>
      seed.seasons && seed.seasons.includes(season)
    );
  }

  // Filter by category if specified
  if (category && category !== 'all') {
    filteredSeeds = filteredSeeds.filter(seed =>
      seed.category === category
    );
  }

  // Sort results if specified
  if (sortBy) {
    switch (sortBy) {
      case 'name':
        filteredSeeds.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'difficulty':
        filteredSeeds.sort((a, b) => a.difficulty - b.difficulty);
        break;
      case 'water':
        filteredSeeds.sort((a, b) => a.water - b.water);
        break;
      case 'growTime':
        filteredSeeds.sort((a, b) => {
          // Extract the min days from grow time strings like "7-14 days"
          const getMinDays = (timeStr) => {
            const match = timeStr.match(/(\d+)/);
            return parseInt(match[0]);
          };
          return getMinDays(a.growTime) - getMinDays(b.growTime);
        });
        break;
    }
  }

  return filteredSeeds;
}

// Export database and helper functions
window.SeedBankDB = {
  db,
  initializeDatabase,
  getAllSeeds,
  getSeedDetails,
  getAllCategories,
  filterSeeds
};

// Initialize database on script load
document.addEventListener('DOMContentLoaded', () => {
  initializeDatabase();
});