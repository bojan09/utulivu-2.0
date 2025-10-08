import * as React from "react";
import { useParams, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { DestinationDetailCarousel } from "./";

import { destinationsData } from "@/constants";

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const post = destinationsData.find((p) => p.id === Number(id));
  const [mainImage, setMainImage] = React.useState<string | undefined>(
    undefined
  );

  // Initialize mainImage with post.image when post is found
  React.useEffect(() => {
    if (post) {
      setMainImage(post.image);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">Destination Not Found</h1>
          <Link to="/">
            <Button variant="outline" className="mt-4">
              Back to Destinations
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-500">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            ← Back to Destinations
          </Button>
        </Link>
        <div className="flex flex-col gap-8">
          {/* Hero Image */}
          <div className="relative rounded-lg overflow-hidden transition-all duration-300">
            <img
              src={mainImage}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h1 className="text-3xl font-bold text-white">{post.title}</h1>
              <span className="inline-block mt-2 rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-white">
                {post.category}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-prose">
            <p className="text-muted-foreground">{post.description}</p>
          </div>

          <DestinationDetailCarousel />

          <Button asChild variant="outline">
            <Link to="/contact">Book This Experience</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
