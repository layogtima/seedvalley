// SeedBank Data File - Contains all seed and category data
const seedbank = {
    // All seed data
    seeds: [
        {
            id: "methi",
            name: "Fenugreek",
            localName: "Methi",
            kannadaName: "ಮೆಂಥ್ಯ",
            scientificName: "Trigonella foenum-graecum",
            category: "leafyGreens",
            difficulty: 1,
            sunlight: 4,
            water: 2,
            growTime: "20-30 days",
            seasons: ["summer", "winter"],
            description:
                "Methi or fenugreek is a popular leafy green in Indian cuisine with a distinctive flavor. The leaves are harvested young for cooking, while seeds are used as a spice.",
            kannadaDescription:
                "ಮೆಂಥ್ಯವು ಭಾರತೀಯ ಅಡುಗೆಯಲ್ಲಿ ಜನಪ್ರಿಯ ಎಲೆ ತರಕಾರಿಯಾಗಿದ್ದು, ವಿಶಿಷ್ಟ ರುಚಿ ಹೊಂದಿದೆ. ಎಲೆಗಳನ್ನು ಅಡುಗೆಗಾಗಿ ಕೊಯ್ಯಲಾಗುತ್ತದೆ, ಮತ್ತು ಬೀಜಗಳನ್ನು ಮಸಾಲೆಗಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQDnLctnc1V77m5FW56YIhDmdOMmjSdML8Q&s", // Image path for future use
            plantingSteps: [
                "Soak seeds overnight to improve germination",
                "Fill a pot or tray with well-draining soil",
                "Broadcast seeds evenly and cover with 1/4 inch of soil",
                "Water gently but thoroughly",
                "Place in a sunny location",
            ],
            kannadaPlantingSteps: [
                "ಮೊಳಕೆಯೊಡೆಯುವಿಕೆಯನ್ನು ಸುಧಾರಿಸಲು ಬೀಜಗಳನ್ನು ರಾತ್ರಿ ನೀರಿನಲ್ಲಿ ನೆನೆಸಿ",
                "ಚೆನ್ನಾಗಿ ಒಣಗುವ ಮಣ್ಣಿನಿಂದ ಮಡಕೆ ಅಥವಾ ಟ್ರೇ ತುಂಬಿಸಿ",
                "ಬೀಜಗಳನ್ನು ಸಮನಾಗಿ ಹರಡಿ ಮತ್ತು 1/4 ಇಂಚು ಮಣ್ಣಿನಿಂದ ಮುಚ್ಚಿ",
                "ನಿಧಾನವಾಗಿ ಆದರೆ ಸಂಪೂರ್ಣವಾಗಿ ನೀರು ಹಾಕಿ",
                "ಸೂರ್ಯನ ಬೆಳಕಿರುವ ಸ್ಥಳದಲ್ಲಿ ಇಡಿ",
            ],
            benefits: [
                "Rich in iron, vitamins and minerals",
                "Known for medicinal properties including blood sugar regulation",
                "Easy to grow with minimal care",
                "Both leaves and seeds are useful",
                "Drought tolerant once established",
            ],
            kannadaBenefits: [
                "ಕಬ್ಬಿಣ, ವಿಟಮಿನ್‌ಗಳು ಮತ್ತು ಖನಿಜಗಳಿಂದ ಸಮೃದ್ಧವಾಗಿದೆ",
                "ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಮಟ್ಟವನ್ನು ನಿಯಂತ್ರಿಸುವುದು ಸೇರಿದಂತೆ ಔಷಧೀಯ ಗುಣಗಳಿಗೆ ಹೆಸರುವಾಸಿ",
                "ಕನಿಷ್ಠ ಆರೈಕೆಯೊಂದಿಗೆ ಬೆಳೆಯಲು ಸುಲಭ",
                "ಎಲೆಗಳು ಮತ್ತು ಬೀಜಗಳು ಎರಡೂ ಉಪಯುಕ್ತ",
                "ಒಮ್ಮೆ ಸ್ಥಾಪಿತವಾದ ನಂತರ ಬರ ಸಹಿಷ್ಣುತೆಯನ್ನು ಹೊಂದಿರುತ್ತದೆ",
            ],
            careInstructions: {
                light:
                    "Full sun to partial shade. At least 4-6 hours of direct sunlight daily.",
                water:
                    "Water regularly but allow soil to dry slightly between waterings. Drought tolerant.",
                soil: "Well-draining soil with moderate fertility. pH 6.0-7.0 preferred.",
                spacing:
                    "Broadcast seeding: thin to 2-3 inches apart once seedlings appear.",
                fertilizer:
                    "Light application of compost or balanced organic fertilizer at planting.",
            },
            kannadaCareInstructions: {
                light:
                    "ಪೂರ್ಣ ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ಭಾಗಶಃ ನೆರಳಿನವರೆಗೆ. ಪ್ರತಿದಿನ ಕನಿಷ್ಠ 4-6 ಗಂಟೆಗಳ ನೇರ ಸೂರ್ಯನ ಬೆಳಕು.",
                water:
                    "ನಿಯಮಿತವಾಗಿ ನೀರು ಹಾಕಿ ಆದರೆ ನೀರುಣಿಸುವಿಕೆಯ ನಡುವೆ ಮಣ್ಣು ಸ್ವಲ್ಪ ಒಣಗಲು ಬಿಡಿ. ಬರ ಸಹಿಷ್ಣು.",
                soil: "ಮಧ್ಯಮ ಫಲವತ್ತಾದ, ಚೆನ್ನಾಗಿ ಒಣಗುವ ಮಣ್ಣು. pH 6.0-7.0 ಅನ್ನು ಇಷ್ಟಪಡುತ್ತದೆ.",
                spacing:
                    "ಸಸಿಗಳು ಕಾಣಿಸಿಕೊಂಡ ನಂತರ 2-3 ಇಂಚುಗಳ ಅಂತರದಲ್ಲಿ ವಿರಳಗೊಳಿಸಿ.",
                fertilizer:
                    "ನೆಡುವಾಗ ಕಾಂಪೋಸ್ಟ್ ಅಥವಾ ಸಮತೋಲಿತ ಸಾವಯವ ಗೊಬ್ಬರದ ಹಗುರ ಬಳಕೆ.",
            },
            harvesting: {
                time: "Harvest leaves when plants are 4-6 inches tall, about 20-30 days after sowing.",
                tips: "Cut entire plants or harvest the upper leaves for continuous production. Younger leaves have milder flavor.",
            },
            kannadaHarvesting: {
                time: "ಸಸಿಗಳು 4-6 ಇಂಚು ಎತ್ತರವಾದಾಗ, ಬೀಜ ಬಿತ್ತಿದ ಸುಮಾರು 20-30 ದಿನಗಳ ನಂತರ ಎಲೆಗಳನ್ನು ಕೊಯ್ಲು ಮಾಡಿ.",
                tips: "ನಿರಂತರ ಉತ್ಪಾದನೆಗಾಗಿ ಇಡೀ ಸಸಿಗಳನ್ನು ಕತ್ತರಿಸಿ ಅಥವಾ ಮೇಲಿನ ಎಲೆಗಳನ್ನು ಕೊಯ್ಯಿರಿ. ಯುವ ಎಲೆಗಳು ಮೃದುವಾದ ರುಚಿ ಹೊಂದಿರುತ್ತವೆ.",
            },
            commonProblems: [
                "Powdery mildew during monsoon season",
                "Root rot in waterlogged soil",
                "Aphids and leaf miners (treat with neem oil)",
                "Slow germination (soak seeds before planting)",
            ],
            kannadaCommonProblems: [
                "ಮುಂಗಾರು ಋತುವಿನಲ್ಲಿ ಪುಡಿ ಬೂಷ್ಟು",
                "ನೀರು ನಿಂತ ಮಣ್ಣಿನಲ್ಲಿ ಬೇರು ಕೊಳೆತ ರೋಗ",
                "ಸೊಪ್ಪು ಹೇನುಗಳು ಮತ್ತು ಎಲೆ ಕೊರೆಯುವ ಕೀಟಗಳು (ಬೇವಿನ ಎಣ್ಣೆಯಿಂದ ಚಿಕಿತ್ಸೆ ನೀಡಿ)",
                "ನಿಧಾನ ಮೊಳಕೆಯೊಡೆಯುವಿಕೆ (ನೆಡುವ ಮೊದಲು ಬೀಜಗಳನ್ನು ನೆನೆಸಿ)",
            ],
            bengaluruTips: [
                "Perfect for growing March-May in partial shade",
                "Sow every 2-3 weeks for continuous harvest",
                "Grows well in containers on balconies and terraces",
                "In summer, water early morning or evening",
            ],
            kannadaBengaluruTips: [
                "ಭಾಗಶಃ ನೆರಳಿನಲ್ಲಿ ಮಾರ್ಚ್-ಮೇ ತಿಂಗಳಲ್ಲಿ ಬೆಳೆಯಲು ಸೂಕ್ತವಾಗಿದೆ",
                "ನಿರಂತರ ಕೊಯ್ಲಿಗಾಗಿ ಪ್ರತಿ 2-3 ವಾರಗಳಿಗೊಮ್ಮೆ ಬಿತ್ತಿ",
                "ಬಾಲ್ಕನಿಗಳು ಮತ್ತು ಮಾಳಿಗೆಗಳ ಮೇಲೆ ಪಾತ್ರೆಗಳಲ್ಲಿ ಚೆನ್ನಾಗಿ ಬೆಳೆಯುತ್ತದೆ",
                "ಬೇಸಿಗೆಯಲ್ಲಿ, ಬೆಳಿಗ್ಗೆ ಬೇಗ ಅಥವಾ ಸಂಜೆ ನೀರು ಹಾಕಿ",
            ],
            localSources: [
                {
                    name: "Sahaja Seeds",
                    location: "Online delivery in Bengaluru",
                    notes: "Organic, locally adapted varieties",
                },
                {
                    name: "Any local grocery store",
                    location: "Throughout Bengaluru",
                    notes: "Cooking methi seeds will germinate well",
                },
            ],
            kannadaLocalSources: [
                {
                    name: "ಸಹಜ ಸೀಡ್ಸ್",
                    location: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಆನ್‌ಲೈನ್ ವಿತರಣೆ",
                    notes: "ಸಾವಯವ, ಸ್ಥಳೀಯವಾಗಿ ಹೊಂದಿಕೊಂಡ ತಳಿಗಳು",
                },
                {
                    name: "ಯಾವುದೇ ಸ್ಥಳೀಯ ಕಿರಾಣಿ ಅಂಗಡಿ",
                    location: "ಬೆಂಗಳೂರಿನಾದ್ಯಂತ",
                    notes: "ಅಡುಗೆಗೆ ಬಳಸುವ ಮೆಂಥ್ಯದ ಬೀಜಗಳು ಚೆನ್ನಾಗಿ ಮೊಳಕೆಯೊಡೆಯುತ್ತವೆ",
                },
            ],
            companionPlants: [
                "Coriander",
                "Spinach",
                "Radish",
                "Onions",
            ],
            kannadaCompanionPlants: [
                "ಕೊತ್ತಂಬರಿ",
                "ಪಾಲಕ್",
                "ಮೂಲಂಗಿ",
                "ಈರುಳ್ಳಿ",
            ],
        },
        {
            id: "radish",
            name: "Radish",
            localName: "Mūllangi",
            scientificName: "Raphanus sativus",
            category: "rootVegetables",
            difficulty: 1,
            sunlight: 4,
            water: 3,
            growTime: "25-30 days",
            seasons: ["summer", "winter"],
            description:
                "Radishes are quick-growing, crisp root vegetables with a peppery flavor. They're among the fastest vegetables to harvest and perfect for beginners.",
            imagePath: "https://thumbs.dreamstime.com/b/image-showcases-vibrant-radish-seedling-bright-green-leaves-emerging-rich-dark-soil-smooth-lavender-361901624.jpg", // Image path for future use
            plantingSteps: [
                "Prepare well-loosened soil to a depth of 6 inches",
                "Sow seeds directly 1/2 inch deep and 1 inch apart",
                "Cover with fine soil and water gently",
                "Thin seedlings to 2 inches apart when they reach 2 inches tall",
                "Keep soil consistently moist",
            ],
            benefits: [
                "Very quick harvest time - satisfying for beginners",
                "Rich in vitamin C and antioxidants",
                "Natural digestive aid",
                "Both roots and leaves are edible",
                "Can be grown in containers easily",
            ],
            careInstructions: {
                light:
                    "Full sun to partial shade. At least 6 hours of sunlight daily.",
                water:
                    "Consistent moisture is key. Keep soil evenly moist but not waterlogged.",
                soil: "Loose, well-draining soil free of rocks. Add compost for nutrients.",
                spacing:
                    "Thin to 2 inches apart for small varieties, 4 inches for larger types.",
                fertilizer:
                    "Light application of balanced organic fertilizer at planting time only.",
            },
            harvesting: {
                time: "Harvest when roots are 1-1.5 inches in diameter, usually 25-30 days after sowing.",
                tips: "Pull gently from the base of leaves. Harvest promptly when mature to prevent becoming woody and pungent.",
            },
            commonProblems: [
                "Splitting roots (inconsistent watering)",
                "Flea beetles on leaves (use row covers)",
                "Small or woody roots (too hot or crowded conditions)",
                "Forked roots (rocky soil or root obstacles)",
            ],
            bengaluruTips: [
                "Plant March-April for summer harvest before monsoon",
                "Choose heat-tolerant varieties like 'Arka Nishant' developed at IIHR Bengaluru",
                "Provide afternoon shade during peak summer days",
                "Sow every 2 weeks for continuous harvest",
            ],
            localSources: [
                {
                    name: "IIHR (Indian Institute of Horticultural Research)",
                    location: "Hesaraghatta, Bengaluru",
                    notes: "Locally developed heat-tolerant varieties",
                },
                {
                    name: "Namdhari Seeds",
                    location: "Multiple outlets in Bengaluru",
                    notes: "Reliable radish varieties for local climate",
                },
            ],
            companionPlants: [
                "Lettuce",
                "Spinach",
                "Cucumber",
                "Beans",
                "Nasturtium",
            ],
        },
        {
            id: "spinach",
            name: "Spinach",
            localName: "Palak",
            scientificName: "Spinacia oleracea",
            category: "leafyGreens",
            difficulty: 2,
            sunlight: 3,
            water: 3,
            growTime: "30-40 days",
            seasons: ["summer", "winter"],
            description:
                "Palak (Indian spinach) is a nutritious leafy green rich in iron and vitamins. It's a staple in Indian cuisine and relatively easy to grow in Bengaluru's climate.",
            imagePath: "https://i0.wp.com/dbsfarmwilson.com/wp-content/uploads/2023/04/Spinach-3-scaled-e1680812931365-1024x719.jpg?resize=1024%2C719&ssl=1", // Image path for future use
            plantingSteps: [
                "Prepare a bed or container with rich, well-draining soil",
                "Sow seeds 1/2 inch deep and 2 inches apart",
                "Cover lightly with soil and water gently",
                "Thin seedlings to 4-6 inches apart when they reach 2 inches tall",
                "Keep soil consistently moist",
            ],
            benefits: [
                "Extremely nutritious - high in iron, vitamins A, C, K",
                "Can be harvested multiple times (cut-and-come-again)",
                "Versatile in cooking - from salads to saag",
                "Grows well in containers",
                "Relatively pest-resistant",
            ],
            careInstructions: {
                light:
                    "Partial shade in summer, full sun in winter. 4-6 hours of sunlight daily.",
                water:
                    "Consistent moisture is essential. Water when top inch of soil feels dry.",
                soil: "Rich, well-draining soil with plenty of organic matter. pH 6.0-7.0.",
                spacing:
                    "Final spacing of 4-6 inches between plants for full development.",
                fertilizer:
                    "Apply balanced organic fertilizer or compost tea every 2-3 weeks.",
            },
            harvesting: {
                time: "Begin harvesting outer leaves when plants have at least 6 true leaves, usually 30-40 days after sowing.",
                tips: "Cut outer leaves 1 inch above soil level for continuous harvest, or harvest entire plant by cutting at base.",
            },
            commonProblems: [
                "Bolting in hot weather (provide shade, use heat-resistant varieties)",
                "Leaf miners (remove affected leaves, use row covers)",
                "Downy mildew during monsoon (improve air circulation)",
                "Yellowing leaves (nitrogen deficiency or overwatering)",
            ],
            bengaluruTips: [
                "Choose 'All Green' or 'Arka Anupama' varieties developed for Indian climate",
                "In summer, provide afternoon shade and extra water",
                "Grows best in containers during monsoon to control moisture",
                "Succession planting every 2-3 weeks ensures continuous harvest",
            ],
            localSources: [
                {
                    name: "IIHR (Indian Institute of Horticultural Research)",
                    location: "Hesaraghatta, Bengaluru",
                    notes: "Locally adapted heat-tolerant varieties",
                },
                {
                    name: "Oota From Your Thota seed exchange",
                    location: "Monthly meets around Bengaluru",
                    notes: "Community-saved seeds adapted to local conditions",
                },
            ],
            companionPlants: [
                "Coriander",
                "Methi",
                "Radish",
                "Onions",
                "Strawberries",
            ],
        },
        {
            id: "coriander",
            name: "Coriander",
            localName: "Kothambari Soppu",
            scientificName: "Coriandrum sativum",
            category: "herbs",
            difficulty: 2,
            sunlight: 3,
            water: 3,
            growTime: "3-4 weeks",
            seasons: ["summer", "winter"],
            description:
                "Coriander (also known as cilantro) is an aromatic herb essential in Indian cuisine. Both the leaves and seeds are used in cooking, making it a versatile addition to any garden.",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Oh4BWhKWjwscU53RaFLWAn8Era6Iupd0xA&s", // Image path for future use
            plantingSteps: [
                "Crush seeds slightly to break them apart (improves germination)",
                "Sow directly in well-draining soil 1/4 inch deep",
                "Space seeds 1 inch apart in rows 6 inches apart",
                "Water gently but thoroughly",
                "Keep soil consistently moist until germination",
            ],
            benefits: [
                "Essential herb for Indian cooking",
                "Both leaves and seeds are useful",
                "Rich in antioxidants and vitamins",
                "Natural digestive aid",
                "Helps attract beneficial insects to garden",
            ],
            careInstructions: {
                light:
                    "Partial shade in summer, full sun in winter. Morning sun with afternoon shade is ideal in hot months.",
                water:
                    "Keep soil evenly moist. Water when top 1/2 inch of soil feels dry.",
                soil: "Well-draining, moderately fertile soil. Add compost before planting.",
                spacing: "Final spacing of 2-3 inches between plants.",
                fertilizer:
                    "Light application of balanced organic fertilizer every 3-4 weeks.",
            },
            harvesting: {
                time: "Begin harvesting leaves when plants are 4-6 inches tall, about 3-4 weeks after sowing.",
                tips: "Harvest outer leaves first, cutting stems near soil level. For seeds, allow plants to flower and collect when seeds turn brown.",
            },
            commonProblems: [
                "Bolting in hot weather (provide shade, succession planting)",
                "Poor germination (crush seeds, ensure consistent moisture)",
                "Aphids and whiteflies (spray with neem oil solution)",
                "Wilting (usually from inconsistent watering)",
            ],
            bengaluruTips: [
                "Sow every 2-3 weeks for continuous harvest as plants bolt quickly",
                "During summer, grow in morning sun only",
                "Try growing in self-watering containers for consistent moisture",
                "Local variety 'Bengaluru Coriander' is well-adapted to the climate",
            ],
            localSources: [
                {
                    name: "Local grocery stores",
                    location: "Throughout Bengaluru",
                    notes: "Coriander seeds used for cooking will germinate well",
                },
                {
                    name: "Grameena Angadi",
                    location: "Multiple locations in Bengaluru",
                    notes: "Organic coriander seeds suited for local growing",
                },
            ],
            companionPlants: [
                "Spinach",
                "Methi",
                "Chilis",
                "Tomatoes",
                "Onions",
            ],
        },
        {
            id: "okra",
            name: "Okra",
            localName: "Bende Kayi",
            scientificName: "Abelmoschus esculentus",
            category: "fruiting",
            difficulty: 2,
            sunlight: 5,
            water: 3,
            growTime: "55-65 days",
            seasons: ["summer", "monsoon"],
            description:
                "Okra (Bhindi/Ladies Finger) is a warm-season vegetable with edible seed pods. It thrives in Bengaluru's climate, especially during the monsoon season.",
            imagePath: "https://i.pinimg.com/474x/ed/c9/ed/edc9ed469a1ae11636d13e82bde705c6.jpg", // Image path for future use
            plantingSteps: [
                "Soak seeds overnight to improve germination",
                "Prepare soil with compost or well-rotted manure",
                "Sow seeds 1/2 inch deep and 6 inches apart",
                "Water thoroughly after planting",
                "Thin to 12-18 inches apart when seedlings have several true leaves",
            ],
            benefits: [
                "High in fiber, vitamins C and K",
                "Drought-tolerant once established",
                "Long harvest period from a single planting",
                "Beautiful flowers that attract pollinators",
                "Few pest issues compared to other vegetables",
            ],
            careInstructions: {
                light: "Full sun. At least 6-8 hours of direct sunlight daily.",
                water:
                    "Regular watering, especially during flowering and fruiting. Allow soil to dry slightly between waterings.",
                soil: "Rich, well-draining soil. pH 6.0-7.0. Add compost before planting.",
                spacing:
                    "Final spacing of 12-18 inches between plants in rows 3 feet apart.",
                fertilizer:
                    "Apply balanced organic fertilizer when plants are 10 inches tall and again when flowering begins.",
            },
            harvesting: {
                time: "Harvest pods when 2-4 inches long, about 4-6 days after flowering.",
                tips: "Harvest frequently (every 2 days) to encourage production. Use pruning shears to avoid damaging the brittle stems. Wear gloves to protect from small spines.",
            },
            commonProblems: [
                "Nematodes (crop rotation, adding organic matter)",
                "Powdery mildew (improve air circulation)",
                "Flower drop (usually from heat stress or inconsistent watering)",
                "Tough, fibrous pods (harvest when young and tender)",
            ],
            bengaluruTips: [
                "Plant in May-June to coincide with monsoon season",
                "Choose local varieties like 'Arka Anamika' developed at IIHR Bengaluru",
                "Grows well in large containers (minimum 12-inch depth)",
                "Vertical trellising saves space in small gardens",
            ],
            localSources: [
                {
                    name: "IIHR (Indian Institute of Horticultural Research)",
                    location: "Hesaraghatta, Bengaluru",
                    notes: "Virus-resistant varieties developed for local conditions",
                },
                {
                    name: "Karnataka State Seeds Corporation",
                    location: "Multiple outlets in Bengaluru",
                    notes: "Reliable locally adapted varieties",
                },
            ],
            companionPlants: [
                "Beans",
                "Sweet Corn",
                "Peppers",
                "Basil",
                "Marigold",
            ],
        },
        {
            id: "beans",
            name: "Beans",
            localName: "Hurali Kayi",
            scientificName: "Phaseolus vulgaris",
            category: "legumes",
            difficulty: 2,
            sunlight: 4,
            water: 3,
            growTime: "45-60 days",
            seasons: ["monsoon", "postmonsoon"],
            description:
                "Beans are productive, nitrogen-fixing plants that grow quickly and produce abundant harvests. Bush varieties are great for containers while pole varieties can be trained up trellises.",
            imagePath: "https://media.sciencephoto.com/c0/07/39/70/c0073970-800px-wm.jpg", // Image path for future use
            plantingSteps: [
                "Sow seeds directly 1 inch deep and 3 inches apart",
                "Water well after planting",
                "For pole beans, install trellis or support before or immediately after planting",
                "Thin bush beans to 6 inches apart, pole beans to 8-10 inches",
                "Keep soil consistently moist until germination",
            ],
            benefits: [
                "Fix nitrogen in soil, improving fertility",
                "High in protein, fiber, and vitamins",
                "Productive over long harvest period",
                "Vertical growing option saves space",
                "Generally pest-resistant",
            ],
            careInstructions: {
                light:
                    "Full sun to partial shade. At least 6 hours of direct sunlight daily.",
                water:
                    "Regular, consistent watering, especially during flowering and pod development.",
                soil: "Well-draining, moderately fertile soil. pH 6.0-7.0.",
                spacing:
                    "Bush beans: 6 inches apart. Pole beans: 8-10 inches apart along trellis.",
                fertilizer:
                    "Minimal fertilizer needed. Light application of compost at planting time.",
            },
            harvesting: {
                time: "Harvest young pods when they're firm and crisp, before seeds inside become prominent.",
                tips: "Harvest every 2-3 days to encourage continued production. Pick gently to avoid damaging plants.",
            },
            commonProblems: [
                "Bean beetles (handpick, use row covers)",
                "Powdery mildew during monsoon (improve air circulation)",
                "Blossom drop (usually from heat or inconsistent watering)",
                "Root rot in waterlogged soil (improve drainage)",
            ],
            bengaluruTips: [
                "Plant before monsoon starts (late May) for best results",
                "Try yard-long beans (Vigna unguiculata) for excellent monsoon production",
                "Local 'Avarekalu' (field beans) are well-adapted to Bengaluru climate",
                "Trellising is essential during monsoon to prevent fungal issues",
            ],
            localSources: [
                {
                    name: "Sahaja Seeds",
                    location: "Online delivery in Bengaluru",
                    notes: "Organic, locally adapted varieties including traditional types",
                },
                {
                    name: "University of Agricultural Sciences",
                    location: "GKVK Campus, Bengaluru",
                    notes: "Extension center offers locally developed bean varieties",
                },
            ],
            companionPlants: [
                "Corn",
                "Sunflowers",
                "Marigold",
                "Cucumber",
                "Radish",
            ],
        }
    ],

    // Categories data
    categories: [
        {
            id: "quickHarvest",
            name: "Quick Harvest",
            description: "Crops that can be harvested within 30 days",
            icon: "bolt",
        },
        {
            id: "leafyGreens",
            name: "Leafy Greens",
            description: "Vegetables grown primarily for their edible leaves",
            icon: "leaf",
        },
        {
            id: "rootVegetables",
            name: "Root Vegetables",
            description: "Vegetables grown for their edible roots or tubers",
            icon: "carrot",
        },
        {
            id: "fruiting",
            name: "Fruiting Vegetables",
            description: "Plants grown for their edible fruits or pods",
            icon: "apple",
        },
        {
            id: "herbs",
            name: "Herbs",
            description: "Aromatic plants used for flavoring and medicine",
            icon: "herb",
        },
        {
            id: "legumes",
            name: "Legumes",
            description: "Plants that produce pods with seeds inside",
            icon: "bean",
        },
        {
            id: "brassicas",
            name: "Brassicas",
            description: "Cabbage family vegetables",
            icon: "cabbage",
        }
    ],

    // Loading messages
    loadingMessages: [
        "ANALYZING GROWING CONDITIONS",
        "CHECKING SOIL TYPES",
        "CALCULATING GROWING TIMES",
        "MEASURING WATER NEEDS",
        "PREPARING PLANTING CALENDAR",
    ]
};

// Export the data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = seedbank;
}