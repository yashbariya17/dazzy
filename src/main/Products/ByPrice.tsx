import { motion } from "framer-motion"

const priceOptions = [
  { value: "0.50", img: "/images/001.png" },
  { value: "₹1", img: "/images/002.png" },
  { value: "₹2", img: "/images/003.png" },
  { value: "₹5", img: "/images/004.png" },
  { value: "₹10", img: "/images/005.png" },
]

const ByPrice = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="h-[100px] bg-gray-500 flex items-center justify-center">
        <h2 className="text-white text-xl font-semibold">By Price</h2>
      </section>

      <section className="pt-16 pb-20 bg-[#f4f1ea]">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center px-4">
          {priceOptions.map((coin, index) => (
            <motion.div
              key={index}
              className="bg-white w-[150px] h-[75px] rounded-lg shadow-xl "
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={coin.img}
                alt={coin.value}
                className="w-[60%] mx-auto object-contain relative -translate-y-1/2"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ByPrice
