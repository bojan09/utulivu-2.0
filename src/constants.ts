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

export const testimonials = [
  {
    name: "Anna Aaker",
    location: "Oslo, Norway",
    text: "Utulivu Tours made my safari unforgettable! The guides were knowledgeable, and the views of the Serengeti were breathtaking.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Liam Patel",
    location: "Paris, France",
    text: "A perfect blend of adventure and relaxation. The Zanzibar beach trip was paradise!",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=68",
  },
  {
    name: "Aina Singh",
    location: "Mumbai, India",
    text: "The Ngorongoro Crater wildlife tour exceeded expectations. Saw the Big Five up close—highly recommend!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150? 이제=58",
  },
  {
    name: "Martin Gonzalez",
    location: "Madrid, Spain",
    text: "Immersing in Maasai culture was enlightening. The village stay and stories around the fire were magical.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "John Kim",
    location: "Seoul, South Korea",
    text: "Hiking in the Usambara Mountains was exhilarating. Stunning views and eco-friendly guides made it perfect.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Elena Rossi",
    location: "Rome, Italy",
    text: "Birdwatching in Tarangire National Park was a highlight. Spotted over 50 species—Utulivu's experts made it educational and fun!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Adunni Adewale",
    location: "Lagos, Nigeria",
    text: "Family safari in Serengeti was safe and exciting for kids. The hot air balloon ride at dawn was magical!",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    name: "Anna Leclerc",
    location: "Toronto, Canada",
    text: "Photography workshop in Lake Manyara—captured stunning flamingo flocks. Professional tips elevated my skills.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Isabella Chen",
    location: "Sydney, Australia",
    text: "The Selous Game Reserve boat safari was thrilling. Saw hippos and crocodiles up close in their natural habitat!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Olivia Thompson",
    location: "London, UK",
    text: "Exploring Ruaha National Park's rugged beauty was an adventure. Utulivu's off-the-beaten-path routes were spot on.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Zoe Nkosi",
    location: "Johannesburg, South Africa",
    text: "Cultural homestay in a local village opened my eyes to Tanzanian traditions. Warm hospitality and delicious food!",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Noah Williams",
    location: "New York, USA",
    text: "Diving in Mafia Island's coral reefs was mesmerizing. Utulivu arranged everything seamlessly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Lorenzo Hassan",
    location: "Cairo, Egypt",
    text: "Sunset dhow cruise in Zanzibar Stone Town—romantic and picturesque. A highlight of my trip!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Emma Larsson",
    location: "Stockholm, Sweden",
    text: "Trekking in the Ngorongoro Highlands offered fresh air and stunning vistas. Guides shared fascinating geology insights.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Santiago Ramirez",
    location: "Mexico City, Mexico",
    text: "Volunteering at a community project in Arusha was rewarding. Utulivu connected me with meaningful local impact.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Tom Andersson",
    location: "Copenhagen, Denmark",
    text: "Hot springs and coffee plantation tour near Moshi—relaxing and aromatic. Perfect day trip!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=17",
  },
  {
    name: "Amara Diallo",
    location: "Dakar, Senegal",
    text: "Witnessing the Great Migration in Serengeti was life-changing. Utulivu timed it perfectly!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=18",
  },
];

export const faqs = [
  {
    question: "What is the best time to visit Tanzania for a safari?",
    answer:
      "The best time is during the dry season from June to October when wildlife is easier to spot around water sources. For the Great Migration in Serengeti, aim for January to March for calving season or July to October for river crossings.",
  },
  {
    question: "Do I need a visa to travel to Tanzania?",
    answer:
      "Most visitors require a visa, which can be obtained on arrival or online via e-Visa. Check with your local Tanzanian embassy for specific requirements based on your nationality. Utulivu Tours can assist with visa guidance.",
  },
  {
    question: "What should I pack for a Tanzania tour?",
    answer:
      "Pack lightweight, neutral-colored clothing, comfortable walking shoes, a hat, sunscreen, insect repellent, binoculars, and a reusable water bottle. For safaris, include layers for cool mornings/evenings. Don't forget any necessary medications and your passport.",
  },
  {
    question: "Are your tours suitable for families with children?",
    answer:
      "Yes! We offer family-friendly itineraries with kid-appropriate activities, safe accommodations, and flexible pacing. Child discounts are available, and our guides are experienced in engaging young explorers.",
  },
  {
    question: "How do you ensure safety and sustainability on tours?",
    answer:
      "Safety is our priority: All guides are certified, vehicles are well-maintained, and we follow COVID protocols. For sustainability, we partner with eco-lodges, support local communities, and promote Leave No Trace principles.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, bank transfers, and PayPal. A 30% deposit secures your booking, with the balance due 60 days before departure. Flexible payment plans are available.",
  },
  {
    question: "Can tours be customized?",
    answer:
      "Absolutely! We specialize in tailor-made itineraries. Whether you want a luxury safari, budget adventure, or honeymoon special, contact us to design your perfect trip.",
  },
  {
    question: "What health precautions should I take?",
    answer:
      "Consult your doctor for vaccinations (e.g., Yellow Fever, Hepatitis). Malaria prophylaxis is recommended for most areas. We provide bottled water and ensure hygienic meals throughout the tour.",
  },
];
