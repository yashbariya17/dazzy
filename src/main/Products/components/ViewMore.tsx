import { motion } from "framer-motion";

const ViewMore = ({
  selectedProduct,
  setSelectedProduct,
}: {
  selectedProduct: any;
  setSelectedProduct: (val: any) => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-400/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 relative grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
          onClick={() => setSelectedProduct(null)}
        >
          ✕
        </button>

        <div className="flex items-center justify-center">
          <motion.img
            layoutId={selectedProduct.url + selectedProduct.name}
            src={selectedProduct.url}
            alt={selectedProduct.name}
            transition={{
              layout: { duration: 0.4 },
            }}
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
          <p className="text-gray-600">
            Description goes here. Add more details if needed.
          </p>
          <button className="px-4 py-2 bg-[#eb0029] text-white rounded-lg hover:bg-red-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewMore;
