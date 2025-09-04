import { AnimatePresence, motion } from "framer-motion";
import { productObj } from "./AllProductList";
import { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { FiX } from "react-icons/fi";

const priceOptions = [
  { value: 0.5, img: "/images/001.webp" },
  { value: 1, img: "/images/002.webp" },
  { value: 2, img: "/images/003.webp" },
  { value: 5, img: "/images/004.webp" },
  { value: 10, img: "/images/005.webp" },
];

const ByPrice = () => {
  const { state } = useLocation();

  const ref = useRef<HTMLDivElement>(null);
  const [imageView, setImageView] = useState<Record<string, any> | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(state || 1);

  const allProducts = Object.values(productObj).flat();
  const filteredProducts =
    selectedPrice !== null
      ? allProducts.filter((product) => product.price == selectedPrice)
      : [];

  useLayoutEffect(() => {
    if (state) {
      setSelectedPrice(state);
    } else {
      setSelectedPrice(1);
    }
  }, [state]);

  return (
    <div className="w-full ">
      <section className="relative h-[250px] flex items-center justify-center  overflow-hidden">
        <video
          src="/CONTECT AS.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Title */}
        <h2 className="relative text-white text-2xl font-semibold z-10">
          By Price
        </h2>
        <h2 className="text-white text-xl font-semibold">By Price</h2>
      </section>

      <section className="py-[4rem] bg-[#f4f1ea]">
        <div className="max-w-[1240px] grid md:grid-cols-[auto_1fr] gap-12 px-6 mx-auto pt-10 pb-10">
          {/* Left Panel */}
          <div className="space-y-3 mx-auto">
            <h2 className="font-semibold text-xl pb-4">
              Filter by Price
              <span className="block w-[20%] h-1 bg-[#eb0029] rounded-full mt-1"></span>
            </h2>
            {priceOptions.map((coin, index) => (
              <div
                key={index}
                className="bg-white w-[200px] rounded-full shadow-xl py-2 group"
              >
                <p
                  className={`text-[15px] hover:text-[#eb0029] w-full pl-6 pr-5 cursor-pointer flex justify-between items-center ${
                    selectedPrice == coin.value
                      ? "text-[#eb0029]"
                      : "text-gray-600"
                  }`}
                  onClick={() => {
                    setSelectedPrice(coin.value);
                    if (window.innerWidth < 640) {
                      ref.current?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  ₹{coin.value.toFixed(2)}
                  <span
                    className={`h-5 w-5 flex items-center justify-center text-white text-xs rounded-full ${
                      selectedPrice == coin.value
                        ? "bg-[#eb0029]"
                        : "bg-gray-400"
                    }`}
                  >
                    {allProducts.filter((p) => p.price === coin.value).length}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* Right Panel - Products */}
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6"
            ref={ref}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.url + product.name}
                className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[320px] bg-gray-100 rounded-3xl shadow-md flex flex-col items-center justify-between p-4 mx-auto"
              >
                <motion.img
                  src={product.url}
                  alt={product.name}
                  layoutId={product.url + product.name}
                  className="w-[80%] h-[200px] object-contain mt-4"
                  onClick={() => {
                    setImageView(product);
                  }}
                />
                <h3 className="font-semibold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1">₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {imageView && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl w-auto max-h-[95vh]   overflow-y-auto p-6 px-12 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => {
                  setImageView(null);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <FiX size={24} />
              </button>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.img
                  key={imageView.url + imageView.name}
                  layoutId={imageView.url + imageView.name}
                  src={imageView.url}
                  className=" h-[400px] max-h-[90%] object-contain mt-4"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ByPrice;
