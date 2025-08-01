import { motion } from "framer-motion";
import { productObj } from "./AllProductList";
import { useRef, useState } from "react";

const priceOptions = [
  { value: 0.5, img: "/images/001.png" },
  { value: 1, img: "/images/002.png" },
  { value: 2, img: "/images/003.png" },
  { value: 5, img: "/images/004.png" },
  { value: 10, img: "/images/005.png" },
];

const ByPrice = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const allProducts = Object.values(productObj).flat();
  const filteredProducts =
    selectedPrice !== null
      ? allProducts.filter((product) => product.price === selectedPrice)
      : [];

  return (
    <div className="w-full overflow-x-hidden">
      <section className="h-[200px] bg-gray-500 flex items-center justify-center">
        <h2 className="text-white text-xl font-semibold">By Price</h2>
      </section>

      {selectedPrice === null ? (
        // Initial view – price options grid
        <section className="py-[4rem] bg-[#f4f1ea]">
          <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center px-4">
            {priceOptions.map((coin, index) => (
              <motion.div
                key={index}
                className="bg-white w-[150px] h-[75px] rounded-lg shadow-xl cursor-pointer border-2 border-transparent transition-all duration-200"
                onClick={() => {
                  setSelectedPrice(coin.value);
                  if (window.innerWidth < 640) {
                    ref.current?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={coin.img}
                  alt={`₹${coin.value}`}
                  className="w-[60%] mx-auto object-contain relative -translate-y-1/2"
                />
              </motion.div>
            ))}
          </div>
        </section>
      ) : (
        // Filtered view – left price panel + right product grid
        <section className="py-[4rem] bg-[#f4f1ea]">
          <div className="max-w-[1240px] grid md:grid-cols-[auto_1fr] gap-12 px-6 mx-auto pt-10 pb-10">
            {/* Left Panel */}
            <div className="space-y-3 mx-auto">
              <h2 className="font-semibold text-xl pb-4">
                Filter by Price
                <span className="block w-[20%] h-1 bg-[#eb0029] rounded-full mt-1"></span>
              </h2>
              {priceOptions.map((coin, index) => (
                <motion.div
                  key={index}
                  className="bg-white w-[200px] rounded-full shadow-xl py-2 group"
                  layoutId={`price-${coin.value}`}
                >
                  <p
                    className={`text-[15px] hover:text-[#eb0029] w-full pl-6 pr-5 cursor-pointer flex justify-between items-center ${
                      selectedPrice === coin.value
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
                        selectedPrice === coin.value
                          ? "bg-[#eb0029]"
                          : "bg-gray-400"
                      }`}
                    >
                      {
                        allProducts.filter(
                          (p) => p.price === coin.value
                        ).length
                      }
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right Panel - Products */}
            <div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6"
              ref={ref}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-4 text-center w-[160px] h-[280px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[340px] flex flex-col justify-between mx-auto"
                  initial={{ y: "50%", opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={product.url}
                    alt={product.name}
                    className="w-[80%] h-[120px] object-contain mx-auto"
                  />
                  <h3 className="font-semibold mt-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">₹{product.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ByPrice;
