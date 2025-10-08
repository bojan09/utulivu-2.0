import * as React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { destinationsData } from "@/constants";

import { Button } from "@/components/ui/button";

const categories = ["All", "Food", "Safari", "Beaches", "Adventures"];

const Destinations = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  // Filter posts based on active category
  const filteredPosts =
    activeCategory === "All"
      ? destinationsData
      : destinationsData.filter((post) => post.category === activeCategory);

  return (
    <section id="destinations" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="lg"
              className={cn(
                "transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              to={`/destinations/${post.id}`}
              key={post.id}
              className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {post.description}
                </p>
                <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {post.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Destinations;
