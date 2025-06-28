import { motion } from "motion/react"

const ByBrands = () => {
  return (
    <div className="w-full overflow-x-hidden ">
      <section className="h-[200px] bg-gray-500 flex items-center justify-center">
        <h2 className="text-white text-xl font-semibold">By Brands</h2>
      </section>

      <section className="pt-16 pb-20 mx-auto max-w-[1000px] px-10 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  gap-y-16 ">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div
                className="relative  flex justify-center px-10 mx-auto"
                key={index}
              >
                <motion.img
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.4,
                  }}
                  src={`/images/logos/logo_${index + 1}.png`}
                  alt={`Slide ${index + 1}`}
                  className="w-32 object-contain aspect-auto mix-blend-color-burn"
                />
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default ByBrands
