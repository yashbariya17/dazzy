import { ProductsList } from "../Home/Home"
import { TextAnimation } from "../../components/TextAnimation"
import { AnimatePresence, motion } from "framer-motion"
import { useLayoutEffect, useRef, useState } from "react"
import { FiShoppingBag, FiEye } from "react-icons/fi"
import ViewMore from "./components/ViewMore"
import { productObj } from "./AllProductList"
import { useLocation } from "react-router"

const category = ["box", "packet"] as const

const Products = () => {
  const { state } = useLocation()

  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<string>(state || "chocolate bar")
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof category)[number] | ""
  >("")

  useLayoutEffect(() => {
    if (state) {
      setOpen(state)
    } else {
      setOpen("chocolate bar")
    }
  }, [state])

  return (
    <div className="w-full">
      <section className="h-[200px] bg-cover bg-center bg-gray-500"></section>

      <section className="pt-8 bg-[#f4f1ea]">
        <TextAnimation text="Our Products" />
        <p
          className="text-center mt-2 text-gray-500"
          style={{ wordSpacing: "2px" }}
        >
          A Wide Range Of Confectionery Items
        </p>

        <section className="max-w-[1240px] grid md:grid-cols-[auto_1fr] gap-16 px-6 mx-auto pt-20 pb-10">
          <div className="space-y-3 mx-auto">
            <h2 className="font-semibold text-xl pb-4">
              Product Categories
              <span className="block w-[20%] h-1 bg-[#eb0029] rounded-full mt-1"></span>
            </h2>
            {ProductsList.map((i, index) => (
              <motion.div
                key={index}
                className="bg-white w-[270px] rounded-full shadow-2xl py-2 group"
              >
                <p
                  className={`uppercase text-[15px] hover:text-[#eb0029] w-full pl-6 pr-5 cursor-pointer transition-colors duration-300 flex justify-between ${
                    i.name === open ? "text-[#eb0029]" : "text-gray-600"
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 640) {
                      ref.current?.scrollIntoView({ behavior: "smooth" })
                    }
                    setOpen(i.name)
                  }}
                >
                  {i.name}
                  <span
                    className={`block text-center leading-5 text-[10px] group-hover:bg-[#eb0029] transition-colors duration-300 aspect-square h-5 text-white rounded-full ${
                      i.name === open ? "bg-[#eb0029]" : "bg-gray-400"
                    }`}
                  >
                    {productObj[i.name].length}
                  </span>
                </p>
              </motion.div>
            ))}
          </div>
          <section>
            <div className=" flex gap-10 mb-5 px-4 flex-wrap">
              {category.map((i) => (
                <button
                  key={i}
                  className={`${
                    selectedCategory !== i
                      ? "border-2 border-solid border-[#eb0029] text-[#eb0029]"
                      : "bg-[#eb0029] text-white font-semibold"
                  } py-1 min-w-16 px-3 rounded-full capitalize cursor-pointer transition-transform duration-200 active:scale-90`}
                  onClick={() => setSelectedCategory(i)}
                >
                  {i}
                </button>
              ))}
            </div>
            <div
              className="grid grid-rows-[auto_1fr] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6"
              ref={ref}
            >
              {productObj[open]
                .filter(
                  (i) => !selectedCategory || i?.category === selectedCategory
                )
                .map((i) => (
                  <motion.div
                    initial={{ y: "50%", opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: "all",
                      margin: "0px 0px 150px 0px",
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    key={i.url + i.name + open}
                    className="w-[160px] h-[280px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[340px] bg-gray-100 rounded-3xl shadow-md flex flex-col items-center justify-between p-4 mx-auto"
                  >
                    <motion.img
                      layoutId={i.url + i.name}
                      src={i.url}
                      className="w-[80%] h-[120px] object-contain mt-4"
                    />

                    <p className="text-center text-sm sm:text-base font-semibold mt-2">
                      {i.name}
                    </p>
                    {/* <p className="text-sm text-gray-700 mt-1">₹{i.price}</p> */}

                    <div className="flex justify-center gap-3 mt-2 text-xs sm:text-sm">
                      <button
                        onClick={() => setSelectedProduct(i)}
                        className="flex items-center gap-1 text-green-700 hover:underline hover:cursor-pointer transition"
                      >
                        <FiShoppingBag size={14} /> Read More
                      </button>
                      <button className="flex items-center gap-1 text-gray-600 hover:underline transition">
                        <FiEye size={14} /> Quick View
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </section>
        </section>
        <AnimatePresence>
          {selectedProduct && (
            <ViewMore
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}

export default Products
