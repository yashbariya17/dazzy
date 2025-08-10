import { motion } from "framer-motion"
import { productObj } from "./AllProductList"
import { useLayoutEffect, useRef, useState } from "react"
import { useLocation } from "react-router"

const priceOptions = [
  { value: 0.5, img: "/images/001.png" },
  { value: 1, img: "/images/002.png" },
  { value: 2, img: "/images/003.png" },
  { value: 5, img: "/images/004.png" },
  { value: 10, img: "/images/005.png" },
]

const ByPrice = () => {
  const { state } = useLocation()

  const ref = useRef<HTMLDivElement>(null)
  const [selectedPrice, setSelectedPrice] = useState<number | null>(state || 1)

  const allProducts = Object.values(productObj).flat()
  const filteredProducts =
    selectedPrice !== null
      ? allProducts.filter((product) => product.price == selectedPrice)
      : []

  useLayoutEffect(() => {
    if (state) {
      setSelectedPrice(state)
    } else {
      setSelectedPrice(1)
    }
  }, [state])

  return (
    <div className="w-full ">
      <section className="h-[200px] bg-gray-500 flex items-center justify-center">
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
              <motion.div
                key={index}
                className="bg-white w-[200px] rounded-full shadow-xl py-2 group"
                layoutId={`price-${coin.value}`}
              >
                <p
                  className={`text-[15px] hover:text-[#eb0029] w-full pl-6 pr-5 cursor-pointer flex justify-between items-center ${
                    selectedPrice == coin.value
                      ? "text-[#eb0029]"
                      : "text-gray-600"
                  }`}
                  onClick={() => {
                    setSelectedPrice(coin.value)
                    if (window.innerWidth < 640) {
                      ref.current?.scrollIntoView({ behavior: "smooth" })
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
              </motion.div>
            ))}
          </div>

          {/* Right Panel - Products */}
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6"
            ref={ref}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.url + product.name}
                className="bg-white rounded-2xl shadow-md p-4 text-center w-[160px] h-[280px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[340px] flex flex-col justify-between mx-auto"
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: "all",
                  margin: "0px 0px 150px 0px",
                }}
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
    </div>
  )
}

export default ByPrice
