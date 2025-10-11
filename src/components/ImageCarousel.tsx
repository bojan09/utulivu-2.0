import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ImageCarouselProps {
  images: string[];
  onImageClick: (image: string) => void;
}

export function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
  // Limit to 6 images
  const carouselImages = images.slice(0, 6);

  // Responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: Math.min(carouselImages.length, 6),
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: Math.min(carouselImages.length, 3),
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 360 },
      items: Math.min(carouselImages.length, 2),
      slidesToSlide: 1,
    },
    mobileSmall: {
      breakpoint: { max: 360, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // Conditionally render arrows based on device type
  const CustomArrow = ({ deviceType }: { deviceType?: string }) => {
    return null; // Always hide arrows
  };

  return (
    <div className="w-full max-w-[52rem] mx-auto overflow-visible">
      {carouselImages.length > 0 ? (
        <Carousel
          responsive={responsive}
          infinite={carouselImages.length > 1}
          autoPlay={false}
          arrows
          containerClass="carousel-container"
          itemClass="px-1"
          customLeftArrow={<CustomArrow />}
          customRightArrow={<CustomArrow />}
        >
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className="cursor-pointer"
              onClick={() => onImageClick(img)}
            >
              <img
                src={img}
                alt={`Image ${idx + 1}`}
                className="h-30 md:h-24 w-full object-cover rounded-md transition-transform duration-200 hover:scale-105"
                onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <p className="text-center text-muted-foreground">
          No additional images available.
        </p>
      )}
    </div>
  );
}
