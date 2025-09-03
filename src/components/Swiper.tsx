import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const VideoSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // go to next slide when video ends
    }
  };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="h-full w-full"
    >
      <SwiperSlide>
        <video
          src="/videos/DOUBLE_CANDY_VIDEO_2.mp4"
          autoPlay
          muted
          className="h-auto w-full !object-cover as"
          onEnded={handleVideoEnd}
          loop
          controls={false}
        />
      </SwiperSlide>

      <SwiperSlide>
        <video
          src="/videos/DAZZY_ALL_TOFFEE.mp4"
          autoPlay
          muted
          className="h-auto w-full object-cover"
          onEnded={handleVideoEnd}
          loop
          controls={false}
        />
      </SwiperSlide>

      <SwiperSlide>
        <video
          src="/videos/DOUBLE_CANDY_VIDEO.mp4"
          autoPlay
          muted
          className="h-auto w-full object-cover"
          onEnded={handleVideoEnd}
          loop
          controls={false}
        />
      </SwiperSlide>

      <SwiperSlide>
        <video
          src="/videos/DAZZY_ECLAIRS_TOFFEE.mp4"
          autoPlay
          muted
          className="h-auto w-full object-cover"
          onEnded={handleVideoEnd}
          loop
          controls={false}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default VideoSlider;
