export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#destinations", label: "Destinations" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact Us" },
];

// DestinationsData images
import {
  darjani_spice_market,
  darjani_spice_market_2,
  house_of_wonders,
  old_fort,
  stone_town,
  street_artist,
  sultans_palace,
} from "./assets/images/destinations";

interface Destination {
  id: number;
  link: string;
  title: string;
  description: string;
  category: string;
  image: string; // Vite imports resolve to strings
  additionalImages: string[];
}

export const destinationsData: Destination[] = [
  {
    id: 1,
    link: "stone-market-feast",
    title: "Spice Market Feast",
    description:
      "Explore Zanzibar's vibrant spice markets with a guided food tour.",
    category: "Food",
    image: darjani_spice_market,
    additionalImages: [darjani_spice_market, darjani_spice_market_2],
  },

  {
    id: 2,
    link: "jungle-safari-adventure",
    title: "Jungle Safari Adventure",
    description: "Track wildlife in Zanzibar's lush reserves.",
    category: "Safari",
    image: street_artist,
    additionalImages: [darjani_spice_market, darjani_spice_market_2],
  },
  {
    id: 3,
    link: "nungwi-beach-day",
    title: "Nungwi Beach Day",
    description: "Relax on the pristine sands of Nungwi with crystal waters.",
    category: "Beaches",
    image: sultans_palace,
    additionalImages: [darjani_spice_market, darjani_spice_market_2],
  },
  {
    id: 4,
    link: "stone-town-exploration",
    title: "Stone Town Exploration",
    description:
      "Wander the labyrinthine alleys of this historic Swahili trading hub, blending Arab, Indian, and European influences with carved doors and coral architecture",
    category: "Adventures",
    image: stone_town,
    additionalImages: [
      darjani_spice_market,
      darjani_spice_market_2,
      house_of_wonders,
      old_fort,
      street_artist,
      sultans_palace,
    ],
  },
  {
    id: 5,
    link: "seafood-cooking-class",
    title: "Seafood Cooking Class",
    description: "Learn to cook local seafood dishes with expert chefs.",
    category: "Food",
    image: old_fort,
    additionalImages: [darjani_spice_market, darjani_spice_market_2],
  },
];
