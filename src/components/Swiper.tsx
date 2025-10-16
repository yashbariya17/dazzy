import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const videos = [
  "/videos/OH!WOW.mp4",
  "/videos/D'LOVE SLIDER.mp4",
  "/videos/DAZZY CHOCO BON.mp4",
  "/videos/BIG STAR.mp4",
  "/videos/FRUIT JELLOS SLIDER.mp4",
  "/videos/CHOCO & MILK STIX 3.mp4",
  "/videos/DOUBLE CANDY VIDEO .mp4",
];

const VideoSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSlideChange = (swiper: any) => {
    // Pause all videos
    videoRefs.current.forEach((video) => video && video.pause());
    // Play only active one
    const currentVideo = videoRefs.current[swiper.activeIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {});
    }
  };

  const handleVideoEnd = (swiper: any) => {
    swiper.slideNext();
  };

  return (
    <>
      {loading && (
        <div className="fixed top-0 inset-0 flex items-center justify-center bg-white z-10 ">
          <img src="loader.gif" alt="" className="max-h-[75vh]"/>
        </div>
      )}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className="h-full w-full"
      >
        {videos.map((src, i) => (
          <SwiperSlide key={i}>
            <video
              ref={(el) => {
                if (el) videoRefs.current[i] = el;
              }}
              src={src}
              muted
              preload="auto"
              className="h-auto w-full object-cover"
              playsInline
              onLoadedData={() => i === 0 && setLoading(false)}
              onEnded={() => handleVideoEnd(swiperRef.current)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VideoSlider;
