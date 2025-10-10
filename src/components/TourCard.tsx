import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface TourData {
  id: number;
  highlights: string[];
  description: string;
  includes: string[];
  notSuitableFor: string[];
  importantInformation: string[];
  seeMoreLink?: string;
}

interface TourCardProps {
  tour: TourData;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <Card className="border rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg w-full md:w-[80vw] md:mt-12">
      <CardContent className="p-3 sm:py-4 sm:px-12 grid grid-cols-1 gap-4">
        <div>
          <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Highlights
          </CardTitle>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm sm:text-base">
            {tour.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />

          <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">
            Includes
          </CardTitle>
          <ul className=" text-gray-700 dark:text-gray-300 space-y-1 text-sm sm:text-base">
            {tour.includes.map((item, index) => (
              <li key={index}>✔️ {item}</li>
            ))}
          </ul>

          <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />

          <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">
            Not suitable for
          </CardTitle>
          <ul className=" text-gray-700 dark:text-gray-300 space-y-1 text-sm sm:text-base">
            {tour.notSuitableFor.map((item, index) => (
              <li key={index}>❌ {item}</li>
            ))}
          </ul>
          <hr className="border-t border-gray-300 dark:border-gray-600 my-6" />
          <div>
            <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">
              Important information
            </CardTitle>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm sm:text-base">
              {tour.importantInformation.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TourCard;
