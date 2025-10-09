// components/ImageModal.tsx
import * as React from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  images: string[];
  initialImage: string;
  alt: string;
  onClose: () => void;
}

export function ImageModal({
  images,
  initialImage,
  alt,
  onClose,
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = React.useState(
    images.indexOf(initialImage) !== -1 ? images.indexOf(initialImage) : 0
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-in fade-in duration-300">
      <div className="relative max-w-4xl w-full mx-4 flex flex-col items-center justify-center">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </>
        )}

        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="w-[50vw] h-[auto] max-h-[80vh] object-contain rounded-lg transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
