import React from "react";
import { cn } from "@/lib/utils"; // Shadcn utility for classNames
import { Button } from "@/components/ui/button"; // Shadcn Button component

const About: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
              )}
            >
              About Our Tours
            </h2>
            <p
              className={cn(
                "text-base sm:text-lg lg:text-xl text-muted-foreground max-w-prose"
              )}
            >
              At Wanderlust Adventures, we’ve been crafting unforgettable travel
              experiences for over a decade. Our passion for exploration drives
              us to curate tours that blend adventure, culture, and breathtaking
              landscapes.
            </p>
            <p
              className={cn(
                "text-base sm:text-lg lg:text-xl text-muted-foreground max-w-prose"
              )}
            >
              Our mission is to connect travelers with the heart of each
              destination, guided by local experts who share authentic stories
              and hidden gems. Whether you’re seeking a thrilling trek or a
              serene cultural journey, we’re here to make your dream trip a
              reality.
            </p>
            <Button
              size="lg"
              className={cn(
                "bg-primary hover:bg-primary/90 text-white font-semibold",
                "px-6 py-3 sm:px-8 sm:py-4 rounded-full"
              )}
              asChild
            >
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-lg">
              {/* Replace with your image, e.g., <img src="/path/to/image.jpg" alt="Team exploring destination" className="w-full h-full object-cover" /> */}
              Placeholder: Add your team or destination image here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
