import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import {
  video_1,
  video_2,
  video_3,
  video_4,
  video_5,
  video_6,
  video_7,
  video_8,
  video_9,
  video_10,
} from "../assets/videos/";

const videoSources = [
  video_1,
  video_2,
  video_3,
  video_4,
  video_5,
  video_6,
  video_7,
  video_8,
  video_9,
  video_10,
];

const BackgroundVideo = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  useEffect(() => {
    // Select a random video on mount (page refresh)
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    setCurrentVideo(videoSources[randomIndex]);
  }, []);

  if (!currentVideo) {
    return null; // Don't render anything until a video is selected
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={cn(
          "w-full h-full object-cover",
          "transition-opacity duration-500"
        )}
      >
        <source src={currentVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30" />
      {/* Optional overlay for better content visibility */}
    </div>
  );
};

export default BackgroundVideo;
