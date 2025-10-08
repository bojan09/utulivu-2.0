// pages/DestinationDetail.tsx
import { useParams, Link } from "react-router-dom";
// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { destinationsData } from "@/constants";

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const post = destinationsData.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Destination Not Found</h1>
        <Link to="/tours#destinations">
          <Button variant="outline" className="mt-4">
            Back to Destinations
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <Link to="/tours#destinations">
          <Button variant="ghost" className="mb-4">
            ← Back to Destinations
          </Button>
        </Link>
        <div className="flex flex-col gap-8">
          {/* Hero Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={post.image}
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

          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {post.additionalImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${post.title} ${idx + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>

          <Button asChild variant="outline">
            <Link to="/contact">Book This Experience</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
