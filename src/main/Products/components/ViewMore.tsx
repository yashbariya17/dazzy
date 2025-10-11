import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import type { productType } from "../AllProductList";
import { useNavigate } from "react-router";
type SingleProduct = productType[string][number];

interface ViewMoreProps {
  products: SingleProduct[];
  onClose: () => void;
}   

export default function ViewMore({ products, onClose }: ViewMoreProps) {
  const navigate = useNavigate();
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
            className="bg-white rounded-2xl shadow-xl w-fit max-w-6xl max-h-[95vh]   overflow-y-auto p-10 relative"
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
                  className={`  sm:w-[200px]   bg-gray-100 rounded-3xl shadow-md flex flex-col items-center  p-4 ${products?.length==1 ?"max-h-[70vh] h-[400px] !w-[350px]" :"w-[160px] h-[300px]"}`}
                >
                  <motion.img
                    layoutId={i.url + i.name}
                    src={i.url}
                    className={` object-contain mt-4 ${products?.length==1?"h-[80%] ":""}`}
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
                  <strong>Pkg:</strong> {products[0]?.desc?.packaging ?? "Box"}
                </p>
                <p>
                  <strong>No Of PKT:</strong>{" "}
                  {products[0]?.desc?.noOfPkt + ""}
                </p>
                {
                  products[0]?.desc?.noOfUnits && (
                    
                    <p>
                  <strong>No Of Units:</strong>{" "}
                  {products[0]?.desc?.noOfUnits ?? "500"}
                </p>
                )}
                {products[0]?.desc?.mrp && (

                  <p>
                  <strong>MRP:</strong> {products[0]?.desc?.mrp ?? "20"}
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
  );
}
