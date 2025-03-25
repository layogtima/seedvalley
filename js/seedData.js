// SeedBank Data File - Contains all seed and category data
const seedbank = {
    // All seed data
    seeds: [
        {
            id: "methi",
            name: "Fenugreek",
            localName: "Methi",
            scientificName: "Trigonella foenum-graecum",
            category: "leafyGreens",
            difficulty: 1,
            sunlight: 4,
            water: 2,
            growTime: "20-30 days",
            seasons: ["summer", "winter"],
            description:
                "Methi or fenugreek is a popular leafy green in Indian cuisine with a distinctive flavor. The leaves are harvested young for cooking, while seeds are used as a spice.",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQDnLctnc1V77m5FW56YIhDmdOMmjSdML8Q&s",
            plantingSteps: [
                "Soak seeds overnight to improve germination",
                "Fill a pot or tray with well-draining soil",
                "Broadcast seeds evenly and cover with 1/4 inch of soil",
                "Water gently but thoroughly",
                "Place in a sunny location",
            ],
            benefits: [
                "Rich in iron, vitamins and minerals",
                "Known for medicinal properties including blood sugar regulation",
                "Easy to grow with minimal care",
                "Both leaves and seeds are useful",
                "Drought tolerant once established",
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
            harvesting: {
                time: "Harvest leaves when plants are 4-6 inches tall, about 20-30 days after sowing.",
                tips: "Cut entire plants or harvest the upper leaves for continuous production. Younger leaves have milder flavor.",
            },
            commonProblems: [
                "Powdery mildew during monsoon season",
                "Root rot in waterlogged soil",
                "Aphids and leaf miners (treat with neem oil)",
                "Slow germination (soak seeds before planting)",
            ],
            bengaluruTips: [
                "Perfect for growing March-May in partial shade",
                "Sow every 2-3 weeks for continuous harvest",
                "Grows well in containers on balconies and terraces",
                "In summer, water early morning or evening",
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
            companionPlants: [
                "Coriander",
                "Spinach",
                "Radish",
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
            imagePath: "https://thumbs.dreamstime.com/b/image-showcases-vibrant-radish-seedling-bright-green-leaves-emerging-rich-dark-soil-smooth-lavender-361901624.jpg",
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
            imagePath: "https://i0.wp.com/dbsfarmwilson.com/wp-content/uploads/2023/04/Spinach-3-scaled-e1680812931365-1024x719.jpg?resize=1024%2C719&ssl=1",
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
            growTime: "21-28 days",
            seasons: ["summer", "winter"],
            description:
                "Coriander (also known as cilantro) is an aromatic herb essential in Indian cuisine. Both the leaves and seeds are used in cooking, making it a versatile addition to any garden.",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Oh4BWhKWjwscU53RaFLWAn8Era6Iupd0xA&s",
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
                "Basil",
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
            imagePath: "https://i.pinimg.com/474x/ed/c9/ed/edc9ed469a1ae11636d13e82bde705c6.jpg",
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
            imagePath: "https://media.sciencephoto.com/c0/07/39/70/c0073970-800px-wm.jpg",
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
                "Okra",
            ],
        },
        {
            id: "tulsi",
            name: "Holy Basil",
            localName: "Tulsi",
            scientificName: "Ocimum sanctum",
            category: "herbs",
            difficulty: 1,
            sunlight: 4,
            water: 2,
            growTime: "60-90 days",
            seasons: ["summer", "monsoon", "postmonsoon", "winter"],
            description:
                "Tulsi or Holy Basil is a sacred herb in Indian culture with powerful medicinal properties. It's an adaptogenic herb that helps the body adapt to stress and has immune-boosting properties.",
            imagePath: "https://www.99acres.com/microsite/articles/files/2021/12/How-to-maintain-a-Tulsi-plant-1.png",
            plantingSteps: [
                "Sow seeds in seed starting mix just below the surface",
                "Keep soil moist until germination",
                "Transplant to final location when seedlings are 3-4 inches tall",
                "Space plants 12-18 inches apart",
                "Place in a sunny location with good air circulation"
            ],
            benefits: [
                "Sacred herb with spiritual significance in Hinduism",
                "Powerful medicinal plant used in Ayurveda",
                "Helps boost immunity and reduce stress",
                "Repels mosquitoes and other insects",
                "Can be used fresh or dried for tea and medicines"
            ],
            careInstructions: {
                light: "Full sun to partial shade. At least 6 hours of direct sunlight daily.",
                water: "Water when the top inch of soil is dry. Drought tolerant once established.",
                soil: "Well-draining soil with moderate fertility. Can tolerate poor soil.",
                spacing: "12-18 inches between plants for good air circulation.",
                fertilizer: "Minimal fertilizer needed. Too much nitrogen reduces aromatic qualities."
            },
            harvesting: {
                time: "Begin harvesting when the plant is 6-8 inches tall and well established.",
                tips: "Harvest early in the morning for best flavor. Pinch off flower buds to encourage bushier growth unless collecting seeds."
            },
            commonProblems: [
                "Root rot in waterlogged soil",
                "Leaf spots and fungal issues during monsoon",
                "Aphids and whiteflies (treat with neem oil)",
                "Leggy growth in insufficient light"
            ],
            bengaluruTips: [
                "Grows year-round in Bengaluru's climate",
                "Place in morning sun location during summer",
                "Consider growing in pots to control water during monsoon",
                "Traditional varieties like Krishna Tulsi and Rama Tulsi thrive locally"
            ],
            localSources: [
                {
                    name: "Temple gardens",
                    location: "Various temples around Bengaluru",
                    notes: "Many temples share cuttings of their sacred tulsi plants"
                },
                {
                    name: "Lalbagh Botanical Garden",
                    location: "Mavalli, Bengaluru",
                    notes: "Monthly plant sale often includes tulsi varieties"
                }
            ],
            companionPlants: [
                "Coriander",
                "Mint",
                "Chilli"
            ]
        },
        {
            id: "mint",
            name: "Mint",
            localName: "Pudina",
            scientificName: "Mentha spicata",
            category: "herbs",
            difficulty: 2,
            sunlight: 3,
            water: 4,
            growTime: "30-40 days",
            seasons: ["summer", "monsoon"],
            description:
                "Mint is a fast-growing aromatic herb with cooling properties. It's widely used in chutneys, drinks, and for flavoring dishes. Mint grows aggressively and is best contained in pots.",
            imagePath: "https://growhappierplants.com/wp-content/uploads/2023/09/mint-seedlings.jpg.webp",
            plantingSteps: [
                "Start with a cutting or small plant rather than seeds",
                "Plant in a container to control spreading",
                "Use rich, moist potting soil",
                "Place cutting in soil and water thoroughly",
                "Position in partial shade, especially in summer"
            ],
            benefits: [
                "Cooling herb perfect for summer drinks and chutneys",
                "Digestive aid and breath freshener",
                "Repels pests like ants and mosquitoes",
                "Quick to establish and easy to propagate",
                "Continues growing with regular harvesting"
            ],
            careInstructions: {
                light: "Partial shade, especially in afternoon. 4-5 hours of filtered sunlight is ideal.",
                water: "Keep soil consistently moist. Mint loves water but not waterlogging.",
                soil: "Rich, moist soil with good drainage. Add compost for best growth.",
                spacing: "Plant 12-18 inches apart as it will spread quickly.",
                fertilizer: "Light application of balanced organic fertilizer monthly during growing season."
            },
            harvesting: {
                time: "Begin harvesting when plants are 4-6 inches tall, about 30 days after planting.",
                tips: "Harvest regularly to encourage bushy growth. Pick leaves from the top to stimulate side shoots."
            },
            commonProblems: [
                "Aggressive spreading (keep in containers)",
                "Rust (improve air circulation, avoid overhead watering)",
                "Spider mites in dry conditions (increase humidity)",
                "Root rot in poorly drained soil"
            ],
            bengaluruTips: [
                "Grows well during monsoon without much care",
                "Place in morning sun/afternoon shade in summer",
                "Use large containers with drainage to control growth",
                "Perfect for balcony gardens with regular watering"
            ],
            localSources: [
                {
                    name: "Nurseries in Lalbagh area",
                    location: "Around Lalbagh Botanical Garden",
                    notes: "Sell established plants that are ready to harvest"
                },
                {
                    name: "Farmers' markets",
                    location: "Weekly markets across Bengaluru",
                    notes: "Often sell mint plants along with other herbs"
                }
            ],
            companionPlants: [
                "Tulsi",
                "Coriander",
                "Tomatoes"
            ]
        },
        {
            id: "curry",
            name: "Curry Leaf Plant",
            localName: "Karibevu",
            scientificName: "Murraya koenigii",
            category: "herbs",
            difficulty: 3,
            sunlight: 4,
            water: 3,
            growTime: "Perennial (120+ days for initial growth)",
            seasons: ["monsoon", "postmonsoon"],
            description:
                "The curry leaf plant is a small tree native to India with aromatic leaves essential for South Indian cuisine. It takes time to establish but will provide leaves for many years once mature.",
            imagePath: "https://m.media-amazon.com/images/I/813HsNoY0cL._AC_UF1000,1000_QL80_.jpg",
            plantingSteps: [
                "Start with a young plant from a nursery for best results",
                "Choose a large pot (minimum 12 inches) or plant in ground",
                "Use well-draining soil mixed with compost",
                "Water thoroughly after planting",
                "Place in a sunny location protected from strong winds"
            ],
            benefits: [
                "Essential flavoring for South Indian cuisine",
                "Medicinal properties in Ayurvedic tradition",
                "Long-lived perennial that increases in productivity",
                "Attractive ornamental plant with glossy leaves",
                "Low maintenance once established"
            ],
            careInstructions: {
                light: "Full sun to light shade. At least 6 hours of sunlight daily for best growth.",
                water: "Water deeply when top 2 inches of soil feels dry. Established plants are somewhat drought tolerant.",
                soil: "Well-draining fertile soil. Add compost annually to maintain fertility.",
                spacing: "Plant 3-5 feet apart if growing multiple plants.",
                fertilizer: "Apply balanced organic fertilizer every 3 months during growing season."
            },
            harvesting: {
                time: "Begin light harvesting when plant is well established, usually after 4-6 months.",
                tips: "Harvest entire stems with multiple leaves rather than individual leaves. New growth will emerge from the cut point."
            },
            commonProblems: [
                "Leaf spot diseases during monsoon (improve air circulation)",
                "Slow growth in first year (be patient)",
                "Scale insects (treat with neem oil)",
                "Yellowing leaves (usually from nutrient deficiency or overwatering)"
            ],
            bengaluruTips: [
                "Thrives in Bengaluru's climate with minimal care once established",
                "Plant at beginning of monsoon for best establishment",
                "Can be grown as a container plant on balconies with sufficient sun",
                "Prune annually after monsoon to maintain bushy growth"
            ],
            localSources: [
                {
                    name: "Lalbagh Nursery",
                    location: "Lalbagh Botanical Garden, Bengaluru",
                    notes: "Sells established plants of good quality"
                },
                {
                    name: "Local plant vendors",
                    location: "Various locations in Bengaluru",
                    notes: "Often sell saplings at traffic junctions and markets"
                }
            ],
            companionPlants: [
                "Chilli",
                "Turmeric",
                "Lemongrass"
            ]
        },
        {
            id: "lemongrass",
            name: "Lemongrass",
            localName: "Nimbe Hullu",
            scientificName: "Cymbopogon citratus",
            category: "herbs",
            difficulty: 1,
            sunlight: 5,
            water: 3,
            growTime: "90-120 days",
            seasons: ["summer", "monsoon"],
            description:
                "Lemongrass is a tropical herb with a citrus flavor used in teas, soups, and curries. It's easy to grow and repels mosquitoes, making it a useful addition to any garden.",
            imagePath: "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/lemongrass-growing.jpg",
            plantingSteps: [
                "Start with a small plant or divide an existing clump",
                "Plant in well-draining soil with added compost",
                "Space plants 24 inches apart if planting multiple",
                "Water deeply after planting",
                "Place in full sun location"
            ],
            benefits: [
                "Natural mosquito repellent when planted around seating areas",
                "Makes excellent herbal tea with medicinal properties",
                "Low maintenance and drought tolerant once established",
                "Essential ingredient in Thai and Southeast Asian cuisine",
                "Perennial in Bengaluru climate, providing years of harvest"
            ],
            careInstructions: {
                light: "Full sun. At least 6 hours of direct sunlight daily for best growth and flavor.",
                water: "Moderate water needs. Allow soil to dry slightly between waterings.",
                soil: "Well-draining soil with moderate fertility. Add compost when planting.",
                spacing: "18-24 inches between plants as they form large clumps.",
                fertilizer: "Light application of organic fertilizer every 3 months during growing season."
            },
            harvesting: {
                time: "Begin harvesting when clumps are established, usually 3-4 months after planting.",
                tips: "Cut outer stalks at ground level. Use the bottom few inches for cooking, and the upper leaves for tea."
            },
            commonProblems: [
                "Rust in high humidity (improve air circulation)",
                "Brown leaf tips (usually from under-watering or high salts)",
                "Slow establishment (be patient in first season)",
                "Turning brown in winter (normal, trim back and it will regrow)"
            ],
            bengaluruTips: [
                "Perfect container plant for apartments and balconies",
                "Plant near seating areas to help repel mosquitoes",
                "Grows vigorously during monsoon season",
                "Can be planted alongside other herbs in a kitchen garden"
            ],
            localSources: [
                {
                    name: "Nurseries in HSR Layout",
                    location: "HSR Layout, Bengaluru",
                    notes: "Several plant nurseries carry lemongrass plants"
                },
                {
                    name: "Garden City Farmers",
                    location: "Various locations in Bengaluru",
                    notes: "Often have plant swaps where lemongrass is available"
                }
            ],
            companionPlants: [
                "Tulsi",
                "Mint",
                "Marigold"
            ]
        },
        {
            id: "ajwain",
            name: "Carom Plant",
            localName: "Ajwain",
            scientificName: "Trachyspermum ammi",
            category: "herbs",
            difficulty: 2,
            sunlight: 4,
            water: 2,
            growTime: "60-80 days",
            seasons: ["winter", "postmonsoon"],
            description:
                "Ajwain (carom) is an herb with thyme-like flavor, commonly used in Indian cuisine for its digestive properties. The plant produces seeds that are used as a spice and have medicinal value.",
            imagePath: "https://homegrowntips.com/wp-content/uploads/2020/07/ajwain_seeds.jpg",
            plantingSteps: [
                "Sow seeds directly in prepared soil 1/4 inch deep",
                "Space seeds 6 inches apart in rows 12 inches apart",
                "Cover lightly with soil and water gently",
                "Thin seedlings to 10-12 inches apart when they reach 2 inches tall",
                "Keep soil moderately moist until established"
            ],
            benefits: [
                "Medicinal herb used in traditional Ayurvedic medicine",
                "Seeds have powerful digestive properties",
                "Essential flavoring in many Indian dishes",
                "Attractive white flowers that attract beneficial insects",
                "Drought tolerant once established"
            ],
            careInstructions: {
                light: "Full sun to partial shade. At least 6 hours of sunlight daily for best growth.",
                water: "Moderate watering. Allow soil to dry between waterings once established.",
                soil: "Well-draining soil of moderate fertility. Add compost when planting.",
                spacing: "Final spacing of 10-12 inches between plants for proper development.",
                fertilizer: "Light application of balanced organic fertilizer when flowering begins."
            },
            harvesting: {
                time: "Harvest seeds when they turn brown and begin to dry on the plant, typically 60-80 days after sowing.",
                tips: "Cut seed heads when most seeds have turned brown. Hang upside down in paper bags to catch falling seeds."
            },
            commonProblems: [
                "Powdery mildew in high humidity (improve air circulation)",
                "Slow germination (maintain consistent soil moisture)",
                "Aphids on young growth (spray with neem oil solution)",
                "Bolting in hot weather (plant during cooler seasons)"
            ],
            bengaluruTips: [
                "Best planted after monsoon (October-November)",
                "Grows well in containers on sunny balconies",
                "Companion plant with other herbs like coriander",
                "Seeds from kitchen spices can be used for planting"
            ],
            localSources: [
                {
                    name: "Local grocery stores",
                    location: "Throughout Bengaluru",
                    notes: "Cooking ajwain seeds will germinate when planted"
                },
                {
                    name: "Ayurvedic medicine shops",
                    location: "Various locations in Bengaluru",
                    notes: "Often sell seed packets for medicinal plants"
                }
            ],
            companionPlants: [
                "Coriander",
                "Fenugreek",
                "Cumin"
            ]
        },
        {
            id: "turmeric",
            name: "Turmeric",
            localName: "Arishina",
            scientificName: "Curcuma longa",
            category: "herbs",
            difficulty: 2,
            sunlight: 3,
            water: 3,
            growTime: "240-300 days",
            seasons: ["monsoon"],
            description:
                "Turmeric is a rhizomatous herbaceous perennial plant with vibrant yellow roots used as a spice and for medicinal purposes. It requires a warm, humid climate and plenty of rainfall.",
            imagePath: "https://1.bp.blogspot.com/-OHD9-_WHMRY/XVB01NQQYpI/AAAAAAAAb8s/dEwNSS8J-EEGGVUGpLAzFdvf42zTITvYQCLcBGAs/s1600/How%2Bto%2Bgrow%2Bturmeric%2Bat%2Bhome.jpg",
            plantingSteps: [
                "Start with fresh rhizomes with visible growth buds",
                "Cut rhizomes into 2-inch pieces, each with 2-3 buds",
                "Plant 2 inches deep in rich, well-draining soil",
                "Space pieces 12 inches apart in rows 24 inches apart",
                "Water thoroughly after planting"
            ],
            benefits: [
                "Powerful anti-inflammatory and antioxidant properties",
                "Staple ingredient in Indian cuisine and Ayurvedic medicine",
                "Beautiful ornamental plant with tropical foliage",
                "Can be grown in containers in limited space",
                "One planting produces harvest for multiple years"
            ],
            careInstructions: {
                light: "Partial shade to full sun. Afternoon shade in hot summer months.",
                water: "Keep soil consistently moist, especially during dry seasons.",
                soil: "Rich, well-draining soil with plenty of organic matter.",
                spacing: "12 inches between plants, 24 inches between rows.",
                fertilizer: "Apply compost or balanced organic fertilizer every 2 months during growing season."
            },
            harvesting: {
                time: "Harvest when leaves and stems start to turn brown and dry, usually 8-10 months after planting.",
                tips: "Dig carefully around plants to avoid damaging rhizomes. Save the best pieces for replanting."
            },
            commonProblems: [
                "Rhizome rot in poorly drained soil (improve drainage)",
                "Leaf spot diseases during monsoon (avoid overhead watering)",
                "Slow growth in cooler temperatures",
                "Scale insects (treat with neem oil)"
            ],
            bengaluruTips: [
                "Plant at the beginning of monsoon (June) for best growth",
                "Can be grown in containers at least 12 inches deep",
                "Provide afternoon shade during hot summer months",
                "Local varieties from Karnataka are well-adapted to the climate"
            ],
            localSources: [
                {
                    name: "Farmers' markets",
                    location: "Weekly markets across Bengaluru",
                    notes: "Look for fresh rhizomes with sprouting buds"
                },
                {
                    name: "IIHR (Indian Institute of Horticultural Research)",
                    location: "Hesaraghatta, Bengaluru",
                    notes: "Provides high-yield varieties developed for local conditions"
                }
            ],
            companionPlants: [
                "Ginger",
                "Chilli",
                "Curry Leaf"
            ]
        },
        {
            id: "ginger",
            name: "Ginger",
            localName: "Shunti",
            scientificName: "Zingiber officinale",
            category: "herbs",
            difficulty: 2,
            sunlight: 3,
            water: 3,
            growTime: "210-240 days",
            seasons: ["monsoon"],
            description:
                "Ginger is a flowering plant whose rhizome is widely used as a spice and in traditional medicine. It thrives in partial shade, making it ideal for Bengaluru's home gardens.",
            imagePath: "https://balconygardenweb.b-cdn.net/wp-content/uploads/2019/09/Growing-Ginger-in-Container.jpg",
            plantingSteps: [
                "Select fresh rhizomes with growth buds or 'eyes'",
                "Cut into pieces with 2-3 growth buds each",
                "Allow cut pieces to dry for 24-48 hours",
                "Plant 2 inches deep with buds facing upward",
                "Space pieces 12 inches apart and water thoroughly"
            ],
            benefits: [
                "Culinary staple with unique flavor profile",
                "Medicinal properties including anti-nausea and anti-inflammatory",
                "Can be harvested young (baby ginger) or mature",
                "Attractive tropical foliage plant",
                "Grows well in containers and partial shade"
            ],
            careInstructions: {
                light: "Partial shade, especially in afternoon. Filtered sunlight is ideal.",
                water: "Keep soil consistently moist but not waterlogged. Reduce watering when leaves begin to yellow.",
                soil: "Rich, well-draining soil with high organic matter content.",
                spacing: "12 inches between plants, 24 inches between rows.",
                fertilizer: "Apply compost or balanced organic fertilizer monthly during growing season."
            },
            harvesting: {
                time: "For baby ginger: 4-6 months after planting. For mature ginger: 8-10 months after planting.",
                tips: "Carefully dig around the edges of the plant and harvest what you need, leaving some rhizomes for continued growth."
            },
            commonProblems: [
                "Rhizome rot in waterlogged soil (improve drainage)",
                "Bacterial wilt (use disease-free planting material)",
                "Slow growth in cooler temperatures",
                "Fungal issues during heavy monsoon (avoid overhead watering)"
            ],
            bengaluruTips: [
                "Plant at beginning of monsoon (June) for optimal growth",
                "Perfect for growing under larger plants like banana or papaya",
                "Grows well in containers at least 12 inches deep",
                "Mulch heavily to retain moisture and suppress weeds"
            ],
            localSources: [
                {
                    name: "Any local grocery store",
                    location: "Throughout Bengaluru",
                    notes: "Choose organic ginger with visible growth buds"
                },
                {
                    name: "Nurseries in Lalbagh area",
                    location: "Around Lalbagh Botanical Garden",
                    notes: "Sometimes sell starter rhizomes during planting season"
                }
            ],
            companionPlants: [
                "Turmeric",
                "Lemongrass",
                "Taro"
            ]
        },
        {
            id: "chilli",
            name: "Chilli",
            localName: "Menasinakai",
            scientificName: "Capsicum annuum",
            category: "fruiting",
            difficulty: 2,
            sunlight: 5,
            water: 3,
            growTime: "70-90 days",
            seasons: ["summer", "monsoon"],
            description:
                "Chillies are spicy peppers that add heat to dishes. They're relatively easy to grow in containers and produce abundantly in Bengaluru's climate with regular watering and sun.",
            imagePath: "https://veggiegardener.com/wp-content/uploads/2017/09/hot-pepper-growing-guide.jpg",
            plantingSteps: [
                "Start seeds in seed trays or small pots",
                "Plant seeds 1/4 inch deep in sterile seed starting mix",
                "Keep soil consistently moist until germination",
                "Transplant seedlings when they have 4-6 true leaves",
                "Space plants 18-24 inches apart in final location"
            ],
            benefits: [
                "High in vitamins A and C",
                "Contains capsaicin with medicinal properties",
                "Productive plants with continuous harvest",
                "Can be grown in containers on balconies",
                "Fruits can be used fresh, dried, or powdered"
            ],
            careInstructions: {
                light: "Full sun. At least 6-8 hours of direct sunlight daily for best production.",
                water: "Moderate watering. Keep soil consistently moist but not waterlogged.",
                soil: "Well-draining, fertile soil. Add compost before planting.",
                spacing: "18-24 inches between plants for proper air circulation.",
                fertilizer: "Apply balanced organic fertilizer when flowering begins and monthly thereafter."
            },
            harvesting: {
                time: "Fruits can be harvested when they reach full size, about 70-90 days after planting.",
                tips: "Harvest frequently to encourage continued production. Use scissors to cut fruits rather than pulling."
            },
            commonProblems: [
                "Aphids and whiteflies (spray with neem oil solution)",
                "Blossom end rot (caused by calcium deficiency and irregular watering)",
                "Fungal diseases in high humidity (improve air circulation)",
                "Fruit drop (usually from heat stress or inconsistent watering)"
            ],
            bengaluruTips: [
                "Local varieties like 'Byadagi' and 'Guntur' perform well",
                "Start seeds indoors in February for summer harvest",
                "Provide afternoon shade during peak summer",
                "Grow in containers to control moisture during monsoon"
            ],
            localSources: [
                {
                    name: "IIHR (Indian Institute of Horticultural Research)",
                    location: "Hesaraghatta, Bengaluru",
                    notes: "Develops and sells high-yield, disease-resistant varieties"
                },
                {
                    name: "Local vegetable vendors",
                    location: "Throughout Bengaluru",
                    notes: "Seeds from ripe chillies can be used for planting"
                }
            ],
            companionPlants: [
                "Basil",
                "Okra",
                "Curry Leaf"
            ]
        },
        {
            id: "basil",
            name: "Sweet Basil",
            localName: "Sabja",
            scientificName: "Ocimum basilicum",
            category: "herbs",
            difficulty: 1,
            sunlight: 4,
            water: 3,
            growTime: "50-60 days",
            seasons: ["summer", "monsoon", "postmonsoon"],
            description:
                "Sweet basil is an aromatic herb popular in Italian cuisine with a distinct sweet aroma. It grows quickly and is perfect for containers on sunny windowsills or balconies.",
            imagePath: "https://greenhouseemporium.com/wp-content/uploads/2020/05/AdobeStock_190038652-2048x1367.jpeg",
            plantingSteps: [
                "Sow seeds in well-draining soil 1/4 inch deep",
                "Keep soil consistently moist until germination",
                "Thin seedlings to 6-12 inches apart when they have several true leaves",
                "Alternatively, start with a nursery plant",
                "Place in a sunny location with some afternoon shade in summer"
            ],
            benefits: [
                "Aromatic leaves used in Italian, Thai and fusion cuisines",
                "Repels mosquitoes and flies when planted near seating areas",
                "Continuous harvest with proper pruning",
                "Attracts beneficial insects like bees and butterflies",
                "Can be dried or frozen for long-term storage"
            ],
            careInstructions: {
                light: "Full sun to partial shade. Morning sun with some afternoon shade in summer.",
                water: "Keep soil evenly moist. Water when the top inch of soil feels dry.",
                soil: "Well-draining, moderately fertile soil. Add compost before planting.",
                spacing: "6-12 inches between plants for proper development.",
                fertilizer: "Light application of balanced organic fertilizer every 4-6 weeks."
            },
            harvesting: {
                time: "Begin harvesting when plants are 6-8 inches tall with several sets of leaves.",
                tips: "Pinch off flower buds to encourage leaf production. Harvest stems above a pair of leaves to encourage branching."
            },
            commonProblems: [
                "Downy mildew (improve air circulation)",
                "Aphids and whiteflies (spray with neem oil solution)",
                "Leaf spot diseases during monsoon (avoid overhead watering)",
                "Leggy growth (provide more sunlight and regular harvesting)"
            ],
            bengaluruTips: [
                "Grows year-round in Bengaluru with some protection from heavy rain",
                "Perfect for balcony gardens and kitchen windowsills",
                "Try growing multiple varieties like Thai basil, holy basil, and sweet basil",
                "Start new plants every 3-4 months as they become woody with age"
            ],
            localSources: [
                {
                    name: "Garden City Farmers",
                    location: "Various locations around Bengaluru",
                    notes: "Offers workshops and plant swaps with basil varieties"
                },
                {
                    name: "Nurseries in Sadashivanagar",
                    location: "Sadashivanagar, Bengaluru",
                    notes: "Carry several basil varieties including Italian sweet basil"
                }
            ],
            companionPlants: [
                "Tomato",
                "Chilli",
                "Marigold"
            ]
        },
        {
            id: "ashwagandha",
            name: "Ashwagandha",
            localName: "Ashwagandha",
            scientificName: "Withania somnifera",
            category: "herbs",
            difficulty: 3,
            sunlight: 5,
            water: 2,
            growTime: "150-180 days",
            seasons: ["winter", "summer"],
            description:
                "Ashwagandha is an adaptogenic herb used in Ayurvedic medicine for its stress-reducing properties. It's drought-tolerant and thrives in poor soil, making it easy to grow in Bengaluru.",
            imagePath: "https://www.cultivatornatural.com/wp-content/uploads/2022/10/Ashwagandha-2.jpg",
            plantingSteps: [
                "Soak seeds overnight before planting",
                "Sow directly in well-draining soil 1/4 inch deep",
                "Space seeds 12 inches apart in rows 24 inches apart",
                "Keep soil lightly moist until germination",
                "Thin seedlings to 18-24 inches apart when they reach 3 inches tall"
            ],
            benefits: [
                "Powerful adaptogen that helps body manage stress",
                "Medicinal roots used in traditional Ayurvedic medicine",
                "Drought tolerant once established",
                "Thrives in poor soil where other plants struggle",
                "Berries and seeds can be saved for future planting"
            ],
            careInstructions: {
                light: "Full sun. At least 6-8 hours of direct sunlight daily.",
                water: "Low water needs once established. Allow soil to dry between waterings.",
                soil: "Well-draining, even poor soil. Does not require rich soil.",
                spacing: "18-24 inches between plants for proper development.",
                fertilizer: "Minimal fertilizer needed. Too much nitrogen reduces medicinal properties."
            },
            harvesting: {
                time: "Harvest roots when plants are 150-180 days old, after berries have formed and begun to dry.",
                tips: "Carefully dig around plants to expose roots. Wash, slice, and dry roots in shade for medicinal use."
            },
            commonProblems: [
                "Root rot in poorly drained soil (improve drainage)",
                "Fungal issues during monsoon (plant in raised beds)",
                "Slow germination (pre-soak seeds and maintain moisture)",
                "Leaf-eating insects (treat with neem oil)"
            ],
            bengaluruTips: [
                "Best planted after monsoon (October-November)",
                "Grows well in raised beds with sandy soil",
                "Can be grown in large containers (minimum 12 inches deep)",
                "Avoid planting during heavy monsoon months"
            ],
            localSources: [
                {
                    name: "Ayurvedic medicine shops",
                    location: "Various locations in Bengaluru",
                    notes: "Often sell medicinal herb seeds"
                },
                {
                    name: "University of Agricultural Sciences",
                    location: "GKVK Campus, Bengaluru",
                    notes: "Extension center occasionally offers medicinal plant workshops"
                }
            ],
            companionPlants: [
                "Aloe Vera",
                "Neem",
                "Brahmi"
            ]
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
        "SORTING SEEDS BY SEASON",
        "CHECKING MONSOON COMPATIBILITY",
        "MAPPING COMPANION PLANTS",
        "LOADING LOCAL VARIETIES",
        "OPTIMIZING FOR BENGALURU CLIMATE"
    ]
};

// Export the data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = seedbank;
}