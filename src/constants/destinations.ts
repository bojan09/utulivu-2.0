// constants/index.ts
import spice_market_1 from "../assets/images/destinations/stone-town/darjani-spice-market_2.webp";

export interface Destination {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  additionalImages: string[];
  highlights: string[];
  includes: string[];
  notSuitableFor: string[];
  importantInformation: string[];
}

export const destinationsData: Destination[] = [
  // Food Category (9 destinations)
  {
    id: 1,
    title: "Spice Market Feast",
    description:
      "Explore Zanzibar's vibrant spice markets with a guided food tour. Immerse yourself in the aromas of cloves, cinnamon, and nutmeg, and learn about their historical significance in Zanzibar's trade routes.",
    category: "Food",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Visit local spice farms",
      "Taste authentic Zanzibari spices",
      "Learn about spice trade history",
    ],
    includes: [
      "Guided tour",
      "Spice tasting session",
      "Lunch with local cuisine",
    ],
    notSuitableFor: [
      "Individuals with severe spice allergies",
      "Those with mobility issues",
    ],
    importantInformation: [
      "Wear comfortable shoes",
      "Bring sunscreen and a hat",
      "Tour lasts approximately 4 hours",
    ],
  },
  {
    id: 2,
    title: "Seafood Cooking Class",
    description:
      "Learn to cook local seafood dishes with expert chefs in a hands-on class. Savor the flavors of Zanzibar's coastal cuisine, blending African and Arab influences.",
    category: "Food",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Hands-on cooking with chefs",
      "Taste Zanzibari seafood dishes",
      "Learn African-Arab fusion",
    ],
    includes: [
      "Cooking class session",
      "All ingredients provided",
      "Meal to enjoy",
    ],
    notSuitableFor: [
      "Individuals with seafood allergies",
      "Those with dietary restrictions",
    ],
    importantInformation: [
      "Wear an apron if possible",
      "Class lasts approximately 3 hours",
      "No prior cooking experience needed",
    ],
  },
  {
    id: 3,
    title: "Street Food Safari",
    description:
      "Embark on a culinary journey through Zanzibar's bustling streets, sampling street food delights like Zanzibari pizza and grilled skewers.",
    category: "Food",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Taste local street food",
      "Explore night markets",
      "Interact with vendors",
    ],
    includes: ["Guided food tour", "Multiple tastings", "Bottled water"],
    notSuitableFor: ["Food allergies", "Vegetarians"],
    importantInformation: [
      "Wear light clothing",
      "Bring cash for extras",
      "Tour lasts approximately 3 hours",
    ],
  },
  {
    id: 4,
    title: "Spice Plantation Tour",
    description:
      "Visit a working spice plantation to see how vanilla, pepper, and cardamom are grown, followed by a tasting session.",
    category: "Food",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Tour a spice plantation",
      "Sample fresh spices",
      "Learn cultivation techniques",
    ],
    includes: ["Guided tour", "Tasting session", "Snacks"],
    notSuitableFor: ["Allergy sufferers", "Mobility issues"],
    importantInformation: [
      "Wear sturdy shoes",
      "Bring a hat",
      "Tour lasts approximately 5 hours",
    ],
  },
  {
    id: 5,
    title: "Zanzibari Dessert Workshop",
    description:
      "Master the art of making traditional Zanzibari sweets like halwa and mandazi in this interactive workshop.",
    category: "Food",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Learn dessert recipes",
      "Hands-on baking",
      "Taste your creations",
    ],
    includes: ["Workshop session", "Ingredients", "Take-home treats"],
    notSuitableFor: ["Gluten intolerance", "Diabetes"],
    importantInformation: [
      "Bring an apron",
      "Session lasts 2.5 hours",
      "No baking experience needed",
    ],
  },
  {
    id: 6,
    title: "Coconut Cuisine Experience",
    description:
      "Discover the versatility of coconut in Zanzibari cuisine with a cooking class focusing on coconut curries and desserts.",
    category: "Food",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Cook with coconut",
      "Learn traditional recipes",
      "Enjoy a coconut meal",
    ],
    includes: ["Cooking class", "Ingredients", "Lunch"],
    notSuitableFor: ["Nut allergies", "Dietary restrictions"],
    importantInformation: [
      "Wear comfortable clothes",
      "Class lasts 3 hours",
      "Beginner-friendly",
    ],
  },
  {
    id: 7,
    title: "Herb Garden Cooking",
    description:
      "Cook with fresh herbs from a local garden, exploring flavors like lemongrass and coriander in Zanzibari dishes.",
    category: "Food",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Harvest fresh herbs",
      "Cook herb-infused meals",
      "Taste garden-fresh food",
    ],
    includes: ["Guided class", "Herbs provided", "Meal"],
    notSuitableFor: ["Herb allergies", "Mobility issues"],
    importantInformation: [
      "Wear closed shoes",
      "Tour lasts 4 hours",
      "Bring water",
    ],
  },
  {
    id: 8,
    title: "Fruit Market Tour",
    description:
      "Explore Zanzibar's fruit markets, tasting exotic fruits like jackfruit and mango, with a guided culinary walkthrough.",
    category: "Food",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Taste exotic fruits",
      "Visit local markets",
      "Learn fruit history",
    ],
    includes: ["Guided tour", "Fruit tasting", "Water"],
    notSuitableFor: ["Fruit allergies", "Crowd sensitivity"],
    importantInformation: [
      "Wear light shoes",
      "Bring a hat",
      "Tour lasts 2.5 hours",
    ],
  },
  {
    id: 9,
    title: "Spice Blending Workshop",
    description:
      "Create your own spice blends with expert guidance, learning to mix flavors for cooking or gifting.",
    category: "Food",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Blend custom spices",
      "Learn mixing techniques",
      "Take home blends",
    ],
    includes: ["Workshop session", "Spices provided", "Packaging"],
    notSuitableFor: ["Spice allergies", "Scent sensitivity"],
    importantInformation: [
      "Wear casual attire",
      "Session lasts 2 hours",
      "No experience required",
    ],
  },

  // Safari Category (6 destinations)
  {
    id: 10,
    title: "Jungle Safari Adventure",
    description:
      "Track wildlife in Zanzibar's lush reserves, including the rare red colobus monkeys, with expert guides.",
    category: "Safari",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Spot rare red colobus monkeys",
      "Explore dense jungle trails",
      "Learn about local wildlife",
    ],
    includes: [
      "Guided safari tour",
      "Binoculars and guidebook",
      "Bottled water",
    ],
    notSuitableFor: ["People with heart conditions", "Young children under 5"],
    importantInformation: [
      "Wear long sleeves and pants",
      "Bring insect repellent",
      "Tour lasts approximately 6 hours",
    ],
  },
  {
    id: 11,
    title: "Forest Canopy Walk",
    description:
      "Experience a treetop walk through Zanzibar's forest canopy, observing birds and monkeys from above.",
    category: "Safari",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Walk through treetops",
      "Spot exotic birds",
      "Learn canopy ecology",
    ],
    includes: ["Guided walk", "Safety gear", "Water"],
    notSuitableFor: ["Fear of heights", "Back issues"],
    importantInformation: [
      "Wear secure shoes",
      "Bring a jacket",
      "Tour lasts 4 hours",
    ],
  },
  {
    id: 12,
    title: "Wildlife Night Safari",
    description:
      "Explore Zanzibar's reserves at night to see nocturnal animals like bush babies and owls.",
    category: "Safari",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "See nocturnal wildlife",
      "Nighttime jungle tour",
      "Expert guide insights",
    ],
    includes: ["Night tour", "Flashlights", "Snacks"],
    notSuitableFor: ["Night blindness", "Children under 7"],
    importantInformation: [
      "Wear dark clothing",
      "Bring a torch",
      "Tour lasts 5 hours",
    ],
  },
  {
    id: 13,
    title: "River Safari Expedition",
    description:
      "Navigate Zanzibar's rivers by boat, spotting crocodiles and hippos in their natural habitat.",
    category: "Safari",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Boat ride on rivers",
      "Spot crocodiles and hippos",
      "Learn river ecosystems",
    ],
    includes: ["Boat tour", "Life jackets", "Water"],
    notSuitableFor: ["Sea sickness", "Mobility issues"],
    importantInformation: [
      "Wear water-resistant gear",
      "Bring sunscreen",
      "Tour lasts 6 hours",
    ],
  },
  {
    id: 14,
    title: "Savannah Game Drive",
    description:
      "Drive through Zanzibar's savannah to observe giraffes, zebras, and antelopes in the wild.",
    category: "Safari",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "See giraffes and zebras",
      "Game drive experience",
      "Wildlife photography",
    ],
    includes: ["4x4 tour", "Binoculars", "Lunch"],
    notSuitableFor: ["Back problems", "Young children"],
    importantInformation: [
      "Wear comfortable shoes",
      "Bring a camera",
      "Tour lasts 7 hours",
    ],
  },
  {
    id: 15,
    title: "Birdwatching Safari",
    description:
      "Join a guided safari to spot over 100 bird species in Zanzibar's wetlands and forests.",
    category: "Safari",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Spot 100+ bird species",
      "Explore wetlands",
      "Learn bird calls",
    ],
    includes: ["Guided tour", "Binoculars", "Guidebook"],
    notSuitableFor: ["Hearing issues", "Mobility limitations"],
    importantInformation: [
      "Wear quiet clothing",
      "Bring water",
      "Tour lasts 5 hours",
    ],
  },

  // Beaches Category (7 destinations)
  {
    id: 16,
    title: "Nungwi Beach Day",
    description:
      "Relax on the pristine sands of Nungwi with crystal waters perfect for swimming or paddleboarding.",
    category: "Beaches",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Swim in crystal-clear waters",
      "Try paddleboarding",
      "Enjoy beachside sunsets",
    ],
    includes: [
      "Beach access and equipment",
      "Lunch at a local cafe",
      "Safety briefing",
    ],
    notSuitableFor: [
      "Non-swimmers without supervision",
      "Individuals with sunburn",
    ],
    importantInformation: [
      "Bring swimwear and towel",
      "Apply sunscreen regularly",
      "Tour lasts approximately 8 hours",
    ],
  },
  {
    id: 17,
    title: "Kendwa Beach Retreat",
    description:
      "Unwind at Kendwa Beach with its famous full-moon parties and serene daytime vibes.",
    category: "Beaches",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Enjoy full-moon parties",
      "Relax on white sands",
      "Swim in calm waters",
    ],
    includes: ["Beach access", "Party entry", "Snacks"],
    notSuitableFor: ["Noise sensitivity", "Young children"],
    importantInformation: [
      "Bring swimwear",
      "Apply sunscreen",
      "Tour lasts 10 hours",
    ],
  },
  {
    id: 18,
    title: "Paje Beach Kite Surfing",
    description:
      "Experience kite surfing on Paje Beach's ideal winds, with lessons for all skill levels.",
    category: "Beaches",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: ["Learn kite surfing", "Ride ideal waves", "Enjoy beach views"],
    includes: ["Lesson", "Equipment", "Instructor"],
    notSuitableFor: ["Back injuries", "Non-swimmers"],
    importantInformation: [
      "Wear swim gear",
      "Bring water",
      "Session lasts 4 hours",
    ],
  },
  {
    id: 19,
    title: "Jambiani Beach Snorkeling",
    description:
      "Snorkel in Jambiani's coral reefs, discovering vibrant marine life and underwater beauty.",
    category: "Beaches",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Snorkel coral reefs",
      "See marine life",
      "Guided underwater tour",
    ],
    includes: ["Snorkeling gear", "Guide", "Water"],
    notSuitableFor: ["Ear infections", "Non-swimmers"],
    importantInformation: [
      "Bring swimwear",
      "Wear water shoes",
      "Tour lasts 5 hours",
    ],
  },
  {
    id: 20,
    title: "Bwejuu Beach Relaxation",
    description:
      "Enjoy a quiet day at Bwejuu Beach, perfect for sunbathing and beach walks.",
    category: "Beaches",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Sunbathe on quiet sands",
      "Take beach walks",
      "Relax by the sea",
    ],
    includes: ["Beach access", "Lounge chair", "Water"],
    notSuitableFor: ["Sun sensitivity", "Mobility issues"],
    importantInformation: [
      "Bring sunscreen",
      "Wear a hat",
      "Tour lasts 6 hours",
    ],
  },
  {
    id: 21,
    title: "Kizimkazi Beach Dolphin Tour",
    description:
      "Swim with dolphins off Kizimkazi Beach, guided by experts in a safe environment.",
    category: "Beaches",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Swim with dolphins",
      "Guided boat tour",
      "Marine life viewing",
    ],
    includes: ["Boat trip", "Life jackets", "Guide"],
    notSuitableFor: ["Sea sickness", "Young children"],
    importantInformation: [
      "Wear swim gear",
      "Bring sunscreen",
      "Tour lasts 4 hours",
    ],
  },
  {
    id: 22,
    title: "Mnemba Island Beach Getaway",
    description:
      "Visit Mnemba Island for a private beach experience with snorkeling and seclusion.",
    category: "Beaches",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Private beach access",
      "Snorkel clear waters",
      "Secluded relaxation",
    ],
    includes: ["Boat transfer", "Snorkeling gear", "Lunch"],
    notSuitableFor: ["Sea allergies", "Mobility issues"],
    importantInformation: [
      "Bring swimwear",
      "Apply sunscreen",
      "Tour lasts 7 hours",
    ],
  },

  // Adventures Category (6 destinations)
  {
    id: 23,
    title: "Stone Town Exploration",
    description:
      "Dive into the historic heart of Zanzibar with a thrilling tour through Stone Town's UNESCO-listed alleys.",
    category: "Adventures",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Explore UNESCO-listed alleys",
      "Visit the House of Wonders",
      "Experience Swahili culture",
    ],
    includes: ["Guided walking tour", "Entrance fees", "Local guide"],
    notSuitableFor: [
      "People with walking difficulties",
      "Those sensitive to crowds",
    ],
    importantInformation: [
      "Wear comfortable shoes",
      "Bring a water bottle",
      "Tour lasts approximately 3 hours",
    ],
  },
  {
    id: 24,
    title: "Prison Island Kayaking",
    description:
      "Kayak to Prison Island, exploring its history and spotting giant tortoises.",
    category: "Adventures",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Kayak to Prison Island",
      "See giant tortoises",
      "Learn island history",
    ],
    includes: ["Kayak rental", "Guide", "Water"],
    notSuitableFor: ["Back injuries", "Non-swimmers"],
    importantInformation: [
      "Wear life jacket",
      "Bring sunscreen",
      "Tour lasts 4 hours",
    ],
  },
  {
    id: 25,
    title: "Rock Climbing Excursion",
    description:
      "Climb Zanzibar's coastal cliffs with expert guidance and stunning ocean views.",
    category: "Adventures",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Climb coastal cliffs",
      "Enjoy ocean views",
      "Guided safety training",
    ],
    includes: ["Climbing gear", "Instructor", "Water"],
    notSuitableFor: ["Fear of heights", "Back issues"],
    importantInformation: [
      "Wear sturdy shoes",
      "Bring gloves",
      "Tour lasts 5 hours",
    ],
  },
  {
    id: 26,
    title: "Cycling Through Villages",
    description:
      "Cycle through Zanzibar's rural villages, experiencing local life and landscapes.",
    category: "Adventures",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Cycle rural routes",
      "Meet local villagers",
      "Enjoy scenic views",
    ],
    includes: ["Bike rental", "Guide", "Helmet"],
    notSuitableFor: ["Knee injuries", "Beginners"],
    importantInformation: [
      "Wear comfortable clothes",
      "Bring water",
      "Tour lasts 6 hours",
    ],
  },
  {
    id: 27,
    title: "Cave Exploration Tour",
    description:
      "Explore Zanzibar's hidden caves, discovering stalactites and ancient artifacts.",
    category: "Adventures",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Discover hidden caves",
      "See stalactites",
      "Learn cave history",
    ],
    includes: ["Guided tour", "Helmet", "Flashlight"],
    notSuitableFor: ["Claustrophobia", "Mobility issues"],
    importantInformation: [
      "Wear closed shoes",
      "Bring water",
      "Tour lasts 4 hours",
    ],
  },
  {
    id: 28,
    title: "Scuba Diving Adventure",
    description:
      "Dive into Zanzibar's underwater world, exploring coral reefs and marine biodiversity.",
    category: "Adventures",
    image: spice_market_1,
    additionalImages: [spice_market_1, spice_market_1, spice_market_1],
    highlights: [
      "Dive coral reefs",
      "See marine biodiversity",
      "Guided dive experience",
    ],
    includes: ["Diving gear", "Instructor", "Boat trip"],
    notSuitableFor: ["Ear issues", "Non-swimmers"],
    importantInformation: [
      "Wear swim gear",
      "Bring towel",
      "Tour lasts 5 hours",
    ],
  },
];
