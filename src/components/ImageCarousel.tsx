// components/ImageCarousel.tsx
import Slider from "react-slick";

interface ImageCarouselProps {
  images: string[];
  onImageClick: (image: string) => void;
}

export function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
  // Limit to 6 images
  const carouselImages = images.slice(0, 6);
  console.log("ImageCarousel images:", carouselImages); // Debug: Check images

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: carouselImages.length > 6,
    speed: 500,
    slidesToShow: Math.min(carouselImages.length, 6),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(carouselImages.length, 6) },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: Math.min(carouselImages.length, 2) },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      {carouselImages.length > 0 ? (
        <Slider {...sliderSettings}>
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className="px-1 cursor-pointer"
              onClick={() => {
                console.log("Clicked carousel image:", img); // Debug: Confirm click
                onImageClick(img);
              }}
            >
              <img
                src={img}
                alt={`Image ${idx + 1}`}
                className="h-24 w-full object-cover rounded-md transition-transform duration-200 hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-muted-foreground">
          No additional images available.
        </p>
      )}
    </div>
  );
}
