import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const VideoSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);
  const handleVideoEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // go to next slide when video ends
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <img src="/videos/LODING GIF.gif" alt="" />
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
      className="h-full w-full"
    >
      <SwiperSlide>
        <video
          src="/videos/OH!WOW.mp4"
          autoPlay
          muted
          className="h-auto w-full !object-cover as"
          onEnded={handleVideoEnd}
          loop
          onLoadedData={() => setLoading(false)}
          controls={false}
          playsInline
        />
      </SwiperSlide>

      <SwiperSlide>
        <video
          src="/videos/D'LOVE SLIDER.mp4"
          autoPlay
          muted
          className="h-auto w-full object-cover"
          onEnded={handleVideoEnd}
          loop
          controls={false}
          playsInline
        />
      </SwiperSlide>

      <SwiperSlide>
        <video
          src="/videos/DAZZY CHOCO BON.mp4"
          autoPlay
          muted
          className="h-auto w-full object-cover"
          onEnded={handleVideoEnd}
          loop
          controls={false}
          playsInline
        />
      </SwiperSlide>

      <SwiperSlide>
        <video
          src="/videos/BIG STAR.mp4"
          autoPlay
          muted
          className="h-auto w-full object-cover"
          onEnded={handleVideoEnd}
          loop
          controls={false}
          playsInline
        />
      </SwiperSlide>
      <SwiperSlide>
        <video
          src="/videos/FRUIT JELLOS SLIDER.mp4"
          autoPlay
          muted
          className="h-auto w-full object-cover"
          onEnded={handleVideoEnd}
          loop
          controls={false}
          playsInline
        />
      </SwiperSlide>
      <SwiperSlide>
        <video
          src="/videos/CHOCO & MILK STIX 3.mp4"
          autoPlay
          muted
          className="h-auto w-full object-cover"
          onEnded={handleVideoEnd}
          loop
          controls={false}
          playsInline
        />
      </SwiperSlide>
      <SwiperSlide>
        <video
          src="/videos/DOUBLE CANDY VIDEO .mp4"
          autoPlay
          muted
          className="h-auto w-full object-cover"
          onEnded={handleVideoEnd}
          loop
          controls={false}
          playsInline
        />
      </SwiperSlide>
    </Swiper>
    </>
  );
};

export default VideoSlider;
