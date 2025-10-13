// constants/index.ts
import spice_market_1 from "../assets/images/destinations/stone-town/darjani-spice-market_2.webp";

export interface Destination {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
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
    fullDescription:
      "Explore Zanzibar's vibrant spice markets with a guided food tour. Immerse yourself in the aromas of cloves, cinnamon, and nutmeg, and learn about their historical significance in Zanzibar's trade routes. This experience takes you through bustling markets where traders have exchanged spices for centuries, offering a sensory journey through the island's rich heritage. [Read More] You'll visit local spice farms to see cultivation techniques firsthand, followed by a tasting session of freshly harvested spices, and end with a traditional lunch featuring spiced local dishes, perfect for food lovers and history enthusiasts.",
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
    fullDescription:
      "Learn to cook local seafood dishes with expert chefs in a hands-on class. Savor the flavors of Zanzibar's coastal cuisine, blending African and Arab influences. This class is held in a scenic coastal kitchen where you'll master recipes like spicy fish curry. [Read More] You'll use freshly caught seafood, learn traditional cooking methods, and enjoy your creations in a communal meal, with a market visit to select ingredients, ideal for culinary enthusiasts.",
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
    fullDescription:
      "Embark on a culinary journey through Zanzibar's bustling streets, sampling street food delights like Zanzibari pizza and grilled skewers. This tour takes you to hidden gems where local vendors serve authentic flavors. [Read More] You'll taste a variety of dishes, including spicy samosas and sweet coconut rice, while learning about the street food culture from expert guides, with a nighttime market visit for a vibrant atmosphere.",
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
    fullDescription:
      "Visit a working spice plantation to see how vanilla, pepper, and cardamom are grown, followed by a tasting session. This tour offers a deep dive into the agricultural heart of Zanzibar. [Read More] You'll explore the plantation's fields, learn about sustainable farming practices, and sample freshly picked spices, concluding with a light snack featuring your tastings, perfect for those interested in botany and cuisine.",
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
    fullDescription:
      "Master the art of making traditional Zanzibari sweets like halwa and mandazi in this interactive workshop. This hands-on session introduces you to local dessert-making. [Read More] You'll learn the secrets of balancing spices and sugar, create your own batch to take home, and enjoy a tasting with tea, suitable for beginners and baking enthusiasts alike.",
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
    fullDescription:
      "Discover the versatility of coconut in Zanzibari cuisine with a cooking class focusing on coconut curries and desserts. This class showcases coconut's many uses. [Read More] You'll prepare dishes like coconut rice and creamy curries, learn about its cultural significance, and enjoy a full meal, ideal for those with an interest in tropical ingredients.",
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
    fullDescription:
      "Cook with fresh herbs from a local garden, exploring flavors like lemongrass and coriander in Zanzibari dishes. This class connects you with nature's flavors. [Read More] You'll harvest herbs yourself, cook a meal infused with their aromas, and learn about their medicinal uses, making it a unique culinary and botanical experience.",
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
    fullDescription:
      "Explore Zanzibar's fruit markets, tasting exotic fruits like jackfruit and mango, with a guided culinary walkthrough. This tour highlights the island's fruit diversity. [Read More] You'll sample rare fruits, learn about their seasonal availability, and enjoy a guided chat with vendors, offering a vibrant taste of local life.",
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
    fullDescription:
      "Create your own spice blends with expert guidance, learning to mix flavors for cooking or gifting. This workshop dives into the art of spice crafting. [Read More] You'll experiment with combinations like cinnamon and clove, receive expert tips, and take home your custom blends, perfect for culinary creatives.",
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
    fullDescription:
      "Track wildlife in Zanzibar's lush reserves, including the rare red colobus monkeys, with expert guides. This safari immerses you in the island's natural beauty. [Read More] You'll traverse dense jungle trails with provided binoculars, learn about the ecosystem from naturalists, and enjoy a rest stop with scenic views, ideal for nature lovers with stamina.",
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
    fullDescription:
      "Experience a treetop walk through Zanzibar's forest canopy, observing birds and monkeys from above. This elevated adventure offers unique perspectives. [Read More] You'll walk secure platforms with safety gear, learn about canopy species from guides, and enjoy breathtaking views, suitable for those comfortable with heights.",
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
    fullDescription:
      "Explore Zanzibar's reserves at night to see nocturnal animals like bush babies and owls. This nighttime tour reveals the jungle's hidden life. [Read More] You'll use flashlights to spot wildlife, listen to expert insights on nocturnal behavior, and enjoy a snack break, perfect for adventure seekers with good night vision.",
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
    fullDescription:
      "Navigate Zanzibar's rivers by boat, spotting crocodiles and hippos in their natural habitat. This boat tour offers a water-based wildlife adventure. [Read More] You'll glide through serene waters with life jackets, learn about river ecosystems from guides, and enjoy the thrill of wildlife sightings, ideal for those without sea sickness.",
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
    fullDescription:
      "Drive through Zanzibar's savannah to observe giraffes, zebras, and antelopes in the wild. This 4x4 tour showcases open landscapes. [Read More] You'll use binoculars for close-up views, learn about savannah wildlife from experts, and stop for a picnic lunch, perfect for photography enthusiasts with sturdy seating.",
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
    fullDescription:
      "Join a guided safari to spot over 100 bird species in Zanzibar's wetlands and forests. This tour is a paradise for bird lovers. [Read More] You'll use provided binoculars to identify species, listen to bird calls with expert guidance, and explore diverse habitats, ideal for those with an interest in ornithology.",
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
    fullDescription:
      "Relax on the pristine sands of Nungwi with crystal waters perfect for swimming or paddleboarding. This beach day offers a perfect escape. [Read More] You'll have access to paddleboards, enjoy beachside cafes, and watch stunning sunsets, with a safety briefing and lunch included, ideal for relaxation seekers with supervision for non-swimmers.",
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
    fullDescription:
      "Unwind at Kendwa Beach with its famous full-moon parties and serene daytime vibes. This retreat offers a unique beach experience. [Read More] You'll enjoy the full-moon party atmosphere, relax on white sands, and swim in calm waters, with snacks provided, suitable for those tolerant of noise.",
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
    fullDescription:
      "Experience kite surfing on Paje Beach's ideal winds, with lessons for all skill levels. This session taps into the beach's natural conditions. [Read More] You'll receive personalized instruction, use top-quality equipment, and enjoy beach views, perfect for adventure seekers without back injuries.",
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
    fullDescription:
      "Snorkel in Jambiani's coral reefs, discovering vibrant marine life and underwater beauty. This tour explores underwater wonders. [Read More] You'll use provided gear, follow a guided tour to see colorful fish, and learn about coral preservation, ideal for those without ear infections.",
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
    fullDescription:
      "Enjoy a quiet day at Bwejuu Beach, perfect for sunbathing and beach walks. This retreat offers a peaceful seaside escape. [Read More] You'll have a lounge chair, take leisurely walks along the shore, and relax with water provided, suitable for those without sun sensitivity.",
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
    fullDescription:
      "Swim with dolphins off Kizimkazi Beach, guided by experts in a safe environment. This tour offers a marine adventure. [Read More] You'll take a boat to dolphin habitats, swim with guidance, and learn about marine conservation, ideal for those without sea sickness.",
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
    fullDescription:
      "Visit Mnemba Island for a private beach experience with snorkeling and seclusion. This getaway offers exclusivity. [Read More] You'll take a boat transfer, snorkel in clear waters, and enjoy a secluded lunch, perfect for those seeking privacy without mobility issues.",
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
    fullDescription:
      "Dive into the historic heart of Zanzibar with a thrilling tour through Stone Town's UNESCO-listed alleys. This walk explores cultural landmarks. [Read More] You'll visit the House of Wonders, learn about Swahili architecture, and interact with local artisans, ideal for those comfortable with walking and crowds.",
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
    fullDescription:
      "Kayak to Prison Island, exploring its history and spotting giant tortoises. This water adventure combines exercise and discovery. [Read More] You'll paddle with a guide, learn about the island's past, and observe tortoises up close, suitable for those without back issues.",
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
    fullDescription:
      "Climb Zanzibar's coastal cliffs with expert guidance and stunning ocean views. This challenge offers breathtaking scenery. [Read More] You'll use climbing gear, receive safety training, and enjoy ocean vistas, perfect for thrill-seekers without a fear of heights.",
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
    fullDescription:
      "Cycle through Zanzibar's rural villages, experiencing local life and landscapes. This ride offers cultural immersion. [Read More] You'll pedal through scenic routes, meet villagers, and learn about rural traditions, ideal for those without knee injuries.",
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
    fullDescription:
      "Explore Zanzibar's hidden caves, discovering stalactites and ancient artifacts. This tour unveils underground mysteries. [Read More] You'll navigate with helmets and flashlights, learn about geological formations, and hear historical tales, suitable for those without claustrophobia.",
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
    fullDescription:
      "Dive into Zanzibar's underwater world, exploring coral reefs and marine biodiversity. This dive offers an aquatic journey. [Read More] You'll use provided gear, follow an instructor to see vibrant marine life, and learn about reef conservation, ideal for those without ear issues.",
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
