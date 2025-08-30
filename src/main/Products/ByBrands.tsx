import { AnimatePresence, motion } from "motion/react";
import productObj from "./AllProductList";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const brandArr = [
  "endon",
  "dairy kiss",
  "d love",
  "3 stix",
  "big star",
  "truffle",
  "choco bon",
  "double paan",
  "bolivia",
  "gold",
  "delite",
  "dr. teddy",
  "kiss zone",
  "double mango",
  "emporio",
  "cocos",
  "big rolle",
  "oh! wow",
];
const ByBrands = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState<string>(state || "");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  useEffect(() => {
    setSelectedBrand(state || "");
  }, [state]);

  return (
    <div className="w-full overflow-x-hidden ">
      <section className="relative h-[200px] flex items-center justify-center mb-10 overflow-hidden">
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
         By Brands
        </h2>
      </section>

      <h2 className="text-white text-xl font-semibold">By Brands</h2>

      {selectedBrand ? (
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 my-10">
          {Object.values(productObj)
            .flat()
            .filter((i) => i.brand == selectedBrand.toLowerCase())
            .map((product) => (
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
                    setSelectedProduct(product);
                  }}
                />
                <h3 className="font-semibold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 capitalize">
                  {product.brand}
                </p>
              </div>
            ))}
        </section>
      ) : (
        <section className="pt-16 pb-20 mx-auto max-w-[1000px] px-10 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  gap-y-16 ">
            {brandArr.map((i, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.4,
                  },
                }}
                className="relative  flex justify-center px-10 mx-auto"
                key={i}
              >
                <motion.img
                  whileHover={{ scale: 0.8 }}
                  src={`/images/logos/${index + 1}.png`}
                  alt={`Slide ${index + 1}`}
                  className="w-32 object-contain aspect-auto mix-blend-color-burn cursor-pointer"
                  onClick={() => {
                    setSelectedBrand(i);
                    navigate("/byBrands", { state: i });
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}
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
              <p className="text-gray-700 text-sm">{selectedProduct?.brand}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ByBrands;
