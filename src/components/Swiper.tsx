import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Define the component using React.FC (Functional Component) for TypeScript
const VideoSlider: React.FC = () => {
  return (
      <Swiper
        // Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0} // No space between slides
        slidesPerView={1} // Show one slide at a time
        loop={true} // Enable continuous loop
        navigation={true} // Show navigation arrows
        pagination={{ clickable: true }} // Show pagination dots
        autoplay={{
          delay: 5000, // Time in ms before switching to the next video
          disableOnInteraction: false,
        }}
        className="h-full w-full"
      >
        <SwiperSlide>
          <video
            src="/videos/DAZZY_ALL_TOFFEE.mp4"
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            src="/videos/DOUBLE_CANDY_VIDEO.mp4"
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            src="/videos/DAZZY_ECLAIRS_TOFFEE.mp4"
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            src="/videos/SUPER_DELICIOUS_TASTES_CHOCOLATEY.mp4"
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
          ></video>
        </SwiperSlide>
        {/* You can add more <SwiperSlide> components for additional videos */}
      </Swiper>
  );
};

export default VideoSlider;