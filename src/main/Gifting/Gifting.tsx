import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag, FiEye, FiX } from "react-icons/fi";
import { CiDeliveryTruck, CiVirus, CiGift } from "react-icons/ci";
import { SiCodefresh } from "react-icons/si";

type Product = {
  name: string;
  url: string;
  description: string;
};

const products: Product[] = [
  {
    name: "Cocoa Milk Choclate Bar",
    url: "/images/chocolatebar/Cocoa Milk Choclate Bar.png",
    description: "Rich cocoa blended with creamy milk chocolate.",
  },
  {
    name: "Coconut Bar",
    url: "/images/chocolatebar/Coconut Bar.png",
    description: "Delicious coconut filling wrapped in smooth chocolate.",
  },
  {
    name: "Dairy Kiss Cocoa",
    url: "/images/chocolatebar/Dairy Kiss Cocoa.png",
    description: "Smooth cocoa flavor with a creamy dairy twist.",
  },
  {
    name: "Dark Milk Choclate Bar",
    url: "/images/chocolatebar/Dark Milk Choclate Bar.png",
    description: "A perfect balance of rich dark and creamy milk chocolate.",
  },
  {
    name: "HazelNut Bar",
    url: "/images/chocolatebar/HazelNut Bar.png",
    description: "Crunchy hazelnuts wrapped in silky smooth chocolate.",
  },
  {
    name: "Milk Choclate Bar",
    url: "/images/chocolatebar/Milk Choclate Bar.png",
    description: "Classic creamy milk chocolate for all ages.",
  },
  {
    name: "Milkies Milk Choclate Bar",
    url: "/images/chocolatebar/Milkies Milk Choclate Bar.png",
    description: "Smooth milk chocolate with a playful sweet touch.",
  },
  {
    name: "Safari Park",
    url: "/images/chocolatebar/Safari Park.png",
    description: "A chocolate adventure with fun flavors.",
  },
  {
    name: "StrawBerry Bar",
    url: "/images/chocolatebar/StrawBerry Bar.png",
    description: "Sweet strawberry flavor inside smooth chocolate.",
  },
  {
    name: "TRUFFINS 30 PCS",
    url: "/images/centerfilledchocolate/TRUFFINS 30 PCS 1  5RS.png",
    description: "A luxurious collection of 30 rich and creamy truffles.",
  },
];

const Gifting = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="h-[500px] bg-gradient-to-r from-pink-200 via-purple-200 to-pink-300 flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#4b2e2e] drop-shadow-lg">
          🎁 Share the Love with Perfect Gifts
        </h1>
      </section>

      {/* Products Section */}
      <section className="bg-gradient-to-b from-[#fff8ff] via-[#fce8f8] to-[#f9e6ff] py-14">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.url + product.name}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.07,
                  rotate: 1,
                  boxShadow: "0px 15px 30px rgba(186,85,211,0.4)",
                }}
                className="w-full h-[280px] sm:h-[300px] md:h-[340px] 
                  bg-white rounded-3xl shadow-lg flex flex-col items-center justify-between p-4 
                  border border-pink-200 hover:border-purple-400 transition-all duration-300
                  hover:shadow-purple-300 hover:shadow-xl relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-100 via-transparent to-purple-100 opacity-60 pointer-events-none"></div>

                <motion.img
                  layoutId={product.url + product.name}
                  src={product.url}
                  className="w-[80%] h-[120px] object-contain mt-4 drop-shadow-md"
                  alt={product.name}
                />
                <p className="text-center text-sm sm:text-base font-semibold mt-2 text-purple-900">
                  {product.name}
                </p>
                <div className="flex justify-center gap-3 mt-3 text-xs sm:text-sm z-10">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1 text-pink-600 hover:text-purple-600 hover:underline transition"
                  >
                    <FiShoppingBag size={14} /> Read More
                  </button>
                  <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600 hover:underline transition">
                    <FiEye size={14} /> Quick View
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 pb-14 pt-8">
        <div className="bg-white/80 backdrop-blur-sm py-6 px-4 rounded-2xl mx-auto max-w-[1000px] shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <CiDeliveryTruck className="h-12 w-12 text-purple-600" />
              <p className="text-purple-900 font-medium">Same-day Delivery</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CiVirus className="h-12 w-12 text-pink-600" />
              <p className="text-purple-900 font-medium">Melt-free Delivery</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiCodefresh className="h-12 w-12 text-purple-600" />
              <p className="text-purple-900 font-medium">Fresh &amp; Original</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CiGift className="h-12 w-12 text-pink-600" />
              <p className="text-purple-900 font-medium">Gift Order</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                <FiX size={20} />
              </button>
              <img
                src={selectedProduct.url}
                alt={selectedProduct.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-lg font-bold text-purple-900 mb-2">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-700 text-sm">
                {selectedProduct.description || "No description available."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gifting;
