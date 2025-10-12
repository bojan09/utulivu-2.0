import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonials = [
  {
    name: "Aisha Mwangi",
    location: "Dar es Salaam, Tanzania",
    text: "Utulivu Tours made my safari unforgettable! The guides were knowledgeable, and the views of the Serengeti were breathtaking.",
    rating: 5,
  },
  {
    name: "Liam Patel",
    location: "Nairobi, Kenya",
    text: "A perfect blend of adventure and relaxation. The Zanzibar beach trip was paradise!",
    rating: 4,
  },
  {
    name: "Sophie Dubois",
    location: "Paris, France",
    text: "Climbing Kilimanjaro with Utulivu was a dream come true. The support team was exceptional.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-12 bg-amber-100 dark:bg-amber-900 text-stone-800 dark:text-stone-200"
    >
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Travelers Say
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="w-full flex-shrink-0 p-6 bg-amber-50 dark:bg-amber-950 backdrop-blur-sm border-amber-200 dark:border-amber-800 animate-fade animate-duration-[1000ms]"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-stone-800 dark:text-stone-200">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-stone-600 dark:text-stone-400">
                    {testimonial.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base mb-2 text-stone-700 dark:text-stone-300">
                    {testimonial.text}
                  </p>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.822 1.418 8.308L12 18.906l-7.417 3.893 1.418-8.308-6.001-5.822 8.332-1.151z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index
                  ? "bg-blue-500 dark:bg-blue-400"
                  : "bg-gray-400 dark:bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
