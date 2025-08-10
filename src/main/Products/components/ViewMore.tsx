import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiShoppingCart } from "react-icons/fi";
import type { productType } from "../AllProductList";
type SingleProduct = productType[string][number];

interface ViewMoreProps {
  products: SingleProduct[];
  onClose: () => void;
}

export default function ViewMore({ products, onClose }: ViewMoreProps) {
  return (
    <AnimatePresence>
      {products && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center  items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-6 w-[90%] max-w-5xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition "
            >
              <FiX size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              More from <span className="text-green-600">{products[0]?.subCategory}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[400px] overflow-scroll">
              {products.map((product, index) => (
                <motion.div
                  key={product.url + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-100 rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <img
                    src={product.url}
                    alt={product.name}
                    className="w-[150px] h-[150px] object-contain"
                  />

                  <h3 className="mt-3 text-center font-semibold text-lg">
                    {product.name}
                  </h3>

                  <p className="text-green-600 font-bold mt-1">
                    ₹{product.price}
                  </p>

                  <p className="text-gray-600 text-sm text-center mt-2 line-clamp-2">
                    {product?.description || "This is a high-quality product you'll love."}
                  </p>

                  <button className="mt-4 flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition">
                    <FiShoppingCart /> Add to Cart
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
