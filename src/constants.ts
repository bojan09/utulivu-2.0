export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#destinations", label: "Destinations" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "Faq" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact Us" },
];

// DestinationsData images
import {
  sultans_palace,
  darjani_spice_market_2,
} from "./assets/images/destinations";

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
  seeMoreLink?: string;
}

export const destinationsData: Destination[] = [
  {
    id: 1,
    title: "Spice Market Feast",
    description:
      "Explore Zanzibar's vibrant spice markets with a guided food tour. Immerse yourself in the aromas of cloves, cinnamon, and nutmeg, and learn about their historical significance in Zanzibar's trade routes. Perfect for foodies and history buffs alike.",
    category: "Food",
    image: darjani_spice_market_2,
    additionalImages: [
      sultans_palace,
      sultans_palace,
      sultans_palace,
      sultans_palace,
    ],
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
    title: "Jungle Safari Adventure",
    description:
      "Track wildlife in Zanzibar's lush reserves, including the rare red colobus monkeys. This guided safari offers a thrilling escape into nature with expert guides sharing insights on local flora and fauna.",
    category: "Safari",
    image: darjani_spice_market_2,
    additionalImages: [
      sultans_palace,
      sultans_palace,
      sultans_palace,
      sultans_palace,
    ],
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
    id: 3,
    title: "Nungwi Beach Day",
    description:
      "Relax on the pristine sands of Nungwi with crystal waters perfect for swimming or paddleboarding. Enjoy beachside cafes and stunning sunsets that make this a must-visit for relaxation seekers.",
    category: "Beaches",
    image: darjani_spice_market_2,
    additionalImages: [
      sultans_palace,
      sultans_palace,
      sultans_palace,
      sultans_palace,
    ],
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
    id: 4,
    title: "Stone Town Exploration",
    description:
      "Dive into the historic heart of Zanzibar with a thrilling tour through Stone Town's UNESCO-listed alleys. Visit landmarks like the House of Wonders and soak in Swahili culture.",
    category: "Adventures",
    image: darjani_spice_market_2,
    additionalImages: [
      sultans_palace,
      sultans_palace,
      sultans_palace,
      sultans_palace,
    ],
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
    id: 5,
    title: "Seafood Cooking Class",
    description:
      "Learn to cook local seafood dishes with expert chefs in a hands-on class. Savor the flavors of Zanzibar's coastal cuisine, blending African and Arab influences.",
    category: "Food",
    image: darjani_spice_market_2,
    additionalImages: [
      sultans_palace,
      sultans_palace,
      sultans_palace,
      sultans_palace,
    ],
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
];

interface TourData {
  id: number;
  highlights: string[];
  description: string;
  includes: string[];
  notSuitableFor: string[];
  importantInformation: string[];
  seeMoreLink?: string;
}
export const tourData: TourData[] = [
  {
    id: 1,
    highlights: [
      "Fly over Teotihuacan on a hot air balloon and enjoy the panoramic views",
      "Choose to enjoy only a balloon flight over Teotihuacan or a more complete option",
      "Explore the ancient ruins of Teotihuacan with a professional guide",
      "Visit one of the world's most important pilgrimage sites, Basílica of Guadalupe",
      "Savor the most authentic Mexican flavors by participating in a tequila tasting",
    ],
    description:
      "Embark on a one-day tour to take part in a hot air balloon ride over the Teotihuacan Pyramids! Select among the three available options, each one designed to perfectly trigger clients' needs! There are balloon flight without transportation, balloon flight with transportation to the balloon port, and the most upgraded option, which includes round-trip transportation, a guided tour, and a tequila tasting. Experience an unforgettable adventure!",
    includes: [
      "Professional guide",
      "Round-trip transportation",
      "Professional photographs",
      "Snacks and drinks",
      "Tips",
    ],
    notSuitableFor: [
      "People with severe mobility issues",
      "Children under 5 years",
    ],

    importantInformation: [
      "Bring sunscreen and a hat",
      "Tour operates in sunny and warm weather conditions",
      "Check-in 30 minutes prior to departure",
    ],
  },
];
