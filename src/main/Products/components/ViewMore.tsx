import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import type { productType } from "../AllProductList";
type SingleProduct = productType[string][number];

interface ViewMoreProps {
  products: SingleProduct[];
  onClose: () => void;
}

export default function ViewMore({ products, onClose }: ViewMoreProps) {
  return (
    <AnimatePresence>
      {products?.length > 0 && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-[90%] max-w-6xl  overflow-y-auto p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <FiX size={24} />
            </button>

            <div className="flex flex-wrap justify-center gap-4">
              {products.map((i, index) => (
                <motion.div
                  key={i.url + i.name + index}
                  className="w-[160px] h-[280px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[340px] bg-gray-100 rounded-3xl shadow-md flex flex-col items-center justify-between p-4"
                >
                  <motion.img
                    layoutId={i.url + i.name}
                    src={i.url}
                    className="w-[80%] h-[120px] object-contain mt-4"
                  />
                  <p className="text-center text-sm sm:text-base font-semibold mt-2">
                    {i.name}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center my-5">
              <div className=" bg-white rounded-3xl shadow-md flex gap-5  justify-between p-4 mx-auto">
                <p>
                  <strong>Pkg:</strong> Box
                </p>
                <p>
                  <strong>Weight:</strong> 240gm
                </p>
                <p>
                  <strong>PCS MRP:</strong> 500
                </p>
                <p>
                  <strong>Masterpack:</strong> 20
                </p>
              </div>
              <button
                className="bg-[#eb0029] text-white font-semibold py-2 px-3 rounded-full hover:bg-red-700 transition-transform duration-200 active:scale-95 mt-4"
                onClick={onClose}
              >
                Dealership
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
