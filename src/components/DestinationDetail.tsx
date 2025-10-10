// pages/DestinationDetail.tsx
import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ImageModal } from "@/components/ImageModal";
import { destinationsData } from "@/constants";
import TourCard from "@/components/TourCard";

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const post = destinationsData.find((p) => p.id === Number(id));
  const [mainImage, setMainImage] = React.useState<string | undefined>(
    undefined
  );
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  // Debug: Log post data to verify
  React.useEffect(() => {
    if (post) {
      console.log("Post data:", post);
      setMainImage(post.image);
    } else {
      console.log("Post not found for id:", id);
    }
  }, [post, id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">Destination Not Found</h1>
          <Link to="/tours#destinations">
            <Button variant="outline" className="mt-4">
              Back to Destinations
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Combine main image and additionalImages for carousel
  const carouselImages = [post.image, ...post.additionalImages].slice(0, 6);

  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-500">
      <div className="container mx-auto px-12 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            ← Back to Destinations
          </Button>
        </Link>
        <div className="md:flex gap-8">
          {/* Hero Container */}
          <div className="flex flex-col gap-8">
            {/* Hero Image */}
            <div className="relative rounded-lg overflow-hidden transition-all duration-300 md:w-[55vw]">
              <img
                src={mainImage || post.image}
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

            {/* Image Carousel */}
            <ImageCarousel
              images={carouselImages}
              onImageClick={(image) => {
                console.log("Opening modal with image:", image); // Debug
                setSelectedImage(image);
                setMainImage(image); // Optional: Update main image
              }}
            />
          </div>

          {/* Description Container */}
          <div className="flex flex-col">
            <div className="prose max-w-prose">
              <p className="text-muted-foreground my-4">{post.description}</p>
            </div>

            <Button asChild variant="outline" className="w-[11rem]">
              <Link to="/contact">Book This Experience</Link>
            </Button>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            images={carouselImages}
            initialImage={selectedImage}
            alt={post.title}
            onClose={() => setSelectedImage(null)}
          />
        )}

        {/* Tour Card */}
        <div className="flex items-center justify-center">
          <TourCard
            tour={{
              id: post.id,
              highlights: post.highlights,
              description: post.description,
              includes: post.includes,
              notSuitableFor: post.notSuitableFor,
              importantInformation: post.importantInformation,
            }}
          />
        </div>
      </div>
    </div>
  );
}
