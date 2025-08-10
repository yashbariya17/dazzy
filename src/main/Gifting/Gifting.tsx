import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { forwardRef, useCallback, useState, useRef } from "react";
import { ProductsList } from "../Home/Home";
import { AnimatePresence, motion } from "framer-motion";
import { FiShoppingBag, FiEye } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiVirus, CiGift } from "react-icons/ci";
import { SiCodefresh } from "react-icons/si";
const Gifting = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <main>
      <section
        className="h-[500px] bg-cover bg-center  bg-gray-700"
        // style={{ backgroundImage: "url('/images/choclatebigslider.png')" }}
      ></section>
      <section className="bg-[#f4f1ea] py-10">
        <div className="max-w-[1000px] mx-auto relative px-6">
          <div className="!overflow-x-hidden relative" ref={emblaRef}>
            <div className="flex gap-6 px-4">
              {ProductsList.slice(0, 5).map((i, index) => (
                <motion.div
                  key={i.url + i.name + open}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                  }}
                  className="flex-shrink-0 w-[160px] h-[280px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[340px] bg-white rounded-3xl shadow-lg flex flex-col items-center justify-between p-4 my-10"
                >
                  <motion.img
                    layoutId={i.url + i.name}
                    src={i.url}
                    className="w-[80%] h-[120px] object-contain mt-4"
                    alt={i.name}
                  />

                  <p className="text-center text-sm sm:text-base font-semibold mt-2">
                    {i.name}
                  </p>

                  <div className="flex justify-center gap-3 mt-3 text-xs sm:text-sm">
                    <button className="flex items-center gap-1 text-green-700 hover:underline transition">
                      <FiShoppingBag size={14} /> Read More
                    </button>
                    <button className="flex items-center gap-1 text-gray-600 hover:underline transition">
                      <FiEye size={14} /> Quick View
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#eb0029] h-12 w-12 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-700 transition"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#eb0029] h-12 w-12 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-700 transition"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      <section className="bg-[#f4f1ea] pb-10">
        <div className="bg-pink-50 py-6 px-4 rounded-lg  mx-auto max-w-[1000px] ">
          <div className="grid grid-cols-2  sm:grid-cols-4 gap-6 text-center ">
            <div className="flex flex-col items-center gap-2">
              <CiDeliveryTruck className="h-12 w-12" />
              <p className="text-indigo-900 font-medium">Same-day Delivery</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <CiVirus className="h-12 w-12" />
              <p className="text-indigo-900 font-medium">Melt-free Delivery</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <SiCodefresh className="h-12 w-12" />
              <p className="text-indigo-900 font-medium">
                Fresh &amp; Original
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <CiGift className="h-12 w-12" />
              <p className="text-indigo-900 font-medium">Gift Order</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gifting;
