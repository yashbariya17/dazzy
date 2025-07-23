import { motion } from "framer-motion"
import { productObj } from "./AllProductList"
import { useState } from "react"

const priceOptions = [
  { value: 0.50, img: "/images/001.png" },
  { value: 1, img: "/images/002.png" },
  { value: 2, img: "/images/003.png" },
  { value: 5, img: "/images/004.png" },
  { value: 10, img: "/images/005.png" },
]

const ByPrice = () => {
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null)

  const allProducts = Object.values(productObj).flat()

  const filteredProducts = selectedPrice !== null
    ? allProducts.filter((product) => product.price === selectedPrice)
    : []

  return (
    <div className="w-full overflow-x-hidden">
      <section className="h-[200px] bg-gray-500 flex items-center justify-center">
        <h2 className="text-white text-xl font-semibold">By Price</h2>
      </section>

      <section className="py-[4rem] bg-[#f4f1ea]">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center px-4">
          {priceOptions.map((coin, index) => (
            <motion.div
              key={index}
              className={`bg-white w-[150px] h-[75px] rounded-lg shadow-xl cursor-pointer border-2 transition-all duration-200 ${selectedPrice === coin.value ? "border-black" : "border-transparent"
                }`}
              onClick={() => setSelectedPrice(coin.value)}
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

      <section className="pb-[5rem] bg-[#fff]">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center px-4">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product.url}
                alt={product.name}
                className="w-full h-[120px] object-contain mb-2"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">₹{product.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ByPrice
