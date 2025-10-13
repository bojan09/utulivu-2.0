import { Button } from "@/components/ui/button";

import about_img_2 from "../assets/images/about_img_2.png";

const About = () => {
  return (
    <section
      id="about"
      className="mt-[-4rem] pb-10 md:pt-16 bg-amber-50 dark:bg-emerald-950"
    >
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-emerald-900 dark:text-amber-100">
              About Utulivu Tours
            </h2>
            <p className="text-lg text-emerald-800 dark:text-amber-200">
              Founded in 2015 in Arusha, Tanzania, Utulivu Tours is dedicated to
              creating serene and authentic travel experiences across East
              Africa's breathtaking landscapes. "Utulivu" means peace in
              Swahili, reflecting our commitment to mindful, sustainable
              tourism.
            </p>
            <p className="text-base text-emerald-700 dark:text-amber-300">
              We specialize in personalized safaris, cultural immersions, and
              adventure trips, partnering with local communities to preserve
              Tanzania's natural beauty and heritage. Our expert guides ensure
              safe, enriching journeys for solo travelers, families, and groups.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600 dark:text-amber-400">
                  500+
                </p>
                <p className="text-sm text-emerald-700 dark:text-amber-300">
                  Happy Travelers
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600 dark:text-amber-400">
                  50+
                </p>
                <p className="text-sm text-emerald-700 dark:text-amber-300">
                  Destinations
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600 dark:text-amber-400">
                  10+
                </p>
                <p className="text-sm text-emerald-700 dark:text-amber-300">
                  Years Experience
                </p>
              </div>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <a href="/contact"> Learn More</a>
            </Button>
          </div>
          {/* Image */}
          <div className="order-first md:order-last rounded-2xl">
            <img
              src={about_img_2}
              alt="Utulivu Tours guide leading a safari group in Tanzania"
              className="object-contain w-full h-auto max-h-96 md:max-h-[35rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
