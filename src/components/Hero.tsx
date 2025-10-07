import { cn } from "@/lib/utils"; // Shadcn utility for classNames
import { Button } from "@/components/ui/button"; // Shadcn Button component

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1
          className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
            "mb-4 sm:mb-6"
          )}
        >
          Discover Unforgettable Adventures
        </h1>
        <p
          className={cn(
            "text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-6 sm:mb-8",
            "opacity-90"
          )}
        >
          Explore breathtaking destinations with our curated tours, designed for
          thrill-seekers and culture enthusiasts alike.
        </p>
        <Button
          size="lg"
          className={cn(
            "bg-primary hover:bg-primary/90 text-white font-semibold",
            "px-6 py-3 sm:px-8 sm:py-4 rounded-full"
          )}
          asChild
        >
          <a href="/tours">Explore Tours</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
