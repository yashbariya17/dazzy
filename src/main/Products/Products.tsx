import { ProductsList } from "../Home/Home"
import { TextAnimation } from "../../components/TextAnimation"
import { motion } from "motion/react"
import { useRef, useState } from "react"

type productType = {
  [key: string]: { name: string; url: string }[]
}

const productObj: productType = {
  "cholcloate bar": [{ name: "some", url: "/images/DECORATIVE-CHOCOLATE.png" }],
  "centerfilled cholcloate": [],
  "decorative cholcloate": [],
  "penut cholcloate": [],
  "nought bar": [],
  "waffer rolls": [],
  toffe: [],
  jelly: [],
  candy: [],
  lollipop: [],
}

const Products = () => {
  const ref = useRef<HTMLElement>(null)

  const [open, setOpen] = useState<string>("")

  return (
    <div className="w-full ">
      <section className="h-[500px] bg-cover bg-center  bg-gray-700"></section>
      <section
        className="pt-8 bg-[#f4f1ea] "
        ref={ref}
      >
        <TextAnimation text="Our Products" />
        <p
          className="text-center mt-2 text-gray-500 "
          style={{
            wordSpacing: "2px",
          }}
        >
          A Wide Range Of Confectionery Items
        </p>
        {open ? (
          <section className="max-w-[1000px] grid grid-cols-2 px-6 lg:px-0 mx-auto pt-[8rem]">
            <div className="space-y-[8rem] pb-16">
              {ProductsList.map((i) => (
                <motion.div
                  key={i.name}
                  className="bg-white relative w-[150px]  flex  justify-center gap-2 rounded-lg shadow-2xl items-center pt-6 pb-2 min-h-[80px]"
                  layoutId={i.name}
                >
                  <motion.img
                    src={i.url}
                    className={`h-[100px] -translate-y-[80%] top-0  absolute ${i.className}`}
                  />
                  <p
                    className={`text-center uppercase  w-[60%] cursor-pointer transition-colors duration-300 ${
                      i.name === open ? "text-sky-500" : "text-gray-600"
                    }`}
                    onClick={() => {
                      ref.current?.scrollIntoView({ behavior: "smooth" })
                      setOpen(i.name)
                    }}
                  >
                    {i.name}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div className="flex flex-wrap justify-between">
              {productObj[open].map((i) => (
                <motion.div
                  initial={{
                    y: "50%",
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: "all",
                  }}
                  key={i.name}
                  className="h-[280px] w-[200px] py-4 bg-white shadow-xl rounded-2xl grid grid-rows-[1fr_auto]"
                >
                  <img
                    src={i.url}
                    className="w-[90%]"
                  />
                  <p className="py-2 text-center">{i.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        ) : (
          <div className="bg-[#f4f1ea] mt-[8rem] h-auto lg:h-[550px] w-full bg-cover bg-bottom bg-no-repeat">
            <div className="max-w-[1000px] mx-auto grid  grid-cols-2  justify-items-center md:grid-cols-4 lg:grid-cols-5 grid-rows-2 justify-center px-5 gap-y-[8rem] gap-x-[4rem] relative -top-10 ">
              {ProductsList.map((i) => (
                <motion.div
                  key={i.name}
                  className="bg-white relative w-[150px]  flex  justify-center gap-2 rounded-lg shadow-2xl 
                  items-center pt-6 pb-2  "
                  layoutId={i.name}
                >
                  <motion.img
                    initial={{
                      opacity: 0,
                      y: "-75%",
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      delay: 0.4,
                      duration: 0.4,
                    }}
                    src={i.url}
                    className={`h-[100px]  absolute top-0 -translate-y-[80%] ${i.className}`}
                  />
                  <p
                    className="text-center uppercase text-gray-600 w-[60%] cursor-pointer"
                    onClick={() => {
                      setOpen(i.name)
                    }}
                  >
                    {i.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Products
