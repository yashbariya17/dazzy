import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag, FiX } from "react-icons/fi";
import { useNavigate } from "react-router";

type Product = {
  name: string;
  url: string;
  description: string;
  desc?: {
    packaging?: string;
    noOfPkt?: string | number;
    noOfUnits?: number;
    mrp?: number;
    netweight?: number;
  };
};

const products: Product[] = [
  {
    name: "Truffle Heart",
    url: "/images/giftcart/Truffle Hart.webp",
    description: "Rich cocoa blended with creamy milk chocolate.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Glorias Purple",
    url: "/images/giftcart/Glorious Puruple.webp",
    description: "Delicious coconut filling wrapped in smooth chocolate.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Glorias Red",
    url: "/images/giftcart/Glorious Red.webp",
    description: "Smooth cocoa flavor with a creamy dairy twist.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Glorias Brown",
    url: "/images/giftcart/Glorious Brown.webp",
    description: "A perfect balance of rich dark and creamy milk chocolate.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Truffles Octagon",
    url: "/images/giftcart/Truffle Ogtagon_.webp",
    description: "Crunchy hazelnuts wrapped in silky smooth chocolate.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Stacy Octagon",
    url: "/images/giftcart/Stacy Octagon.webp",
    description: "Classic creamy milk chocolate for all ages.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Bolivia Container",
    url: "/images/giftcart/Bolivia Container.webp",
    description: "Smooth milk chocolate with a playful sweet touch.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Stacy Mini",
    url: "/images/giftcart/Stacy Gifrt.webp",
    description: "Smooth milk chocolate with a playful sweet touch.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Endon Container",
    url: "/images/DAZZY LOGO.webp",
    description: "A chocolate adventure with fun flavors.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "DGold Container ",
    url: "/images/giftcart/DLOVE CONTAINER 5RS.webp",
    description: "Sweet strawberry flavor inside smooth chocolate.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Celebration Gold",
    url: "/images/centerMissing/CELEBRATION GOLD.png",
    description: "A luxurious collection of 30 rich and creamy truffles.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Celebration Red",
    url: "/images/centerMissing/CELEBRATION RED.png",
    description: "A luxurious collection of 30 rich and creamy truffles.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "Gold Box",
    url: "/images/centerMissing/GOLD BOX.png",
    description: "A luxurious collection of 30 rich and creamy truffles.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
  },
  {
    name: "DLove Love Box",
    url: "/images/centerMissing/LOVE BOX.png",
    description: "A luxurious collection of 30 rich and creamy truffles.",
    desc: {
      packaging: "Box of 12 sachets",
      noOfPkt: 12,
      noOfUnits: 120,
      mrp: 240,
      netweight: 600,
    },
    
    
  },
];

const Gifting = () => {
  const navigate= useNavigate()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return (
    <main>
      {/* Hero Section */}
      {/* <section
        className="h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/giftcart/DAZZY GIFTING SLIED.gif')",
        }}
      ></section> */}
      <img
        src="/images/giftcart/DAZZY GIFTING SLIED.gif"
        alt="logo"
        className="w-full h-auto lg:max-h-[750px] lg:object-[0px_-100px] lg:object-cover"
      />

      {/* Products Section */}
      <section className="bg-gradient-to-b from-[#fff8ff] via-[#fce8f8] to-[#f9e6ff] py-14">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.url + product.name}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                whileHover={{
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
                  className="w-full h-[180px] object-contain mt-4 drop-shadow-md"
                  alt={product.name}
                  onClick={() => setSelectedProduct(product)}
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
              <img
                src="/images/Gifting Icon/Elegant Packaging.webp"
                alt="icon"
                className="w-16 h-16 object-contain"
              />
              <p className="text-purple-900 font-medium">Premium Ingredients</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/images/Gifting Icon/Made with Care.webp"
                alt="icon"
                className="w-16 h-16 object-contain"
              />
              <p className="text-purple-900 font-medium">Made with Care</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/images/Gifting Icon/Perfect for Gifting.webp"
                alt="icon"
                className="w-16 h-16 object-contain"
              />
              <p className="text-purple-900 font-medium">Perfect for Gifting</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/images/Gifting Icon/Premium Ingredients.webp"
                alt="icon"
                className="w-16 h-16 object-contain"
              />
              <p className="text-purple-900 font-medium">Elegant Packaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
         <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-fit max-w-6xl max-h-[95vh]   overflow-y-auto p-10 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <FiX size={24} />
            </button>

            <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  className={`  sm:w-[200px]   bg-gray-100 rounded-3xl shadow-md flex flex-col items-center  p-4 max-h-[60vh] h-[400px] !w-[350px]`}
                >
                  <motion.img
                    src={selectedProduct.url}
                     alt={selectedProduct.name}
                    className={` object-contain mt-4 h-[80%] `}
                  />
                  <p className="text-center text-sm sm:text-base font-semibold mt-2">
                    {selectedProduct.name}
                  </p>
                </motion.div>
            </div>
            <div className="flex flex-col justify-center items-center my-5">
              <div className=" bg-white  flex-col md:flex-row rounded-3xl shadow-md flex gap-2  md:gap-5  justify-between p-4 mx-auto">
                <p>
                  <strong>Pkg:</strong> {selectedProduct?.desc?.packaging ?? "Box"}
                </p>
                <p>
                  <strong>No Of PKT:</strong>{" "}
                  {selectedProduct?.desc?.noOfPkt + ""}
                </p>
                {
                  selectedProduct?.desc?.noOfUnits && (
                    
                    <p>
                  <strong>No Of Units:</strong>{" "}
                  {selectedProduct?.desc?.noOfUnits ?? "500"}
                </p>
                )}
                {selectedProduct?.desc?.mrp && (

                  <p>
                  <strong>MRP:</strong> {selectedProduct?.desc?.mrp ?? "20"}
                </p>
                )}
              </div>
              <button
                className="bg-[#eb0029] text-white font-semibold py-2 px-3 rounded-full hover:bg-red-700 transition-transform duration-200 active:scale-95 mt-4"
                onClick={() => {
                  navigate("/dealership");
                }}
              >
                Dealership
              </button>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gifting;
