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
