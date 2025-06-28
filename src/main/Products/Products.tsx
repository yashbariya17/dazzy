import { ProductsList } from "../Home/Home"
import { TextAnimation } from "../../components/TextAnimation"
import { motion } from "motion/react"
import { useRef, useState } from "react"

type productType = {
  [key: string]: { name: string; url: string }[]
}

const productObj: productType = {
  "chocolate bar": [
    { name: "Choclate", url: "/images/DECORATIVE-CHOCOLATE.png" },
    { name: "someassa", url: "/images/DECORATIVE-CHOCOLATE.png" },
    { name: "someassa", url: "/images/DECORATIVE-CHOCOLATE.png" }
  ],
  "centerfilled chocolate": [],
  "decorative chocolate": [],
  "peanut chocolate": [],
  "nought bar": [],
  "wafer rolls": [],
  toffee: [],
  jelly: [],
  candy: [],
  lollipop: [],
}

const Products = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState<string>("")

  return (
    <div className="w-full ">
      <section className="h-[500px] bg-cover bg-center  bg-gray-700"></section>
      <section className="pt-8 bg-[#f4f1ea] ">
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
          <section className="max-w-[1240px]  grid  md:grid-cols-[auto_1fr] gap-16 px-6 mx-auto pt-[8rem] pb-10">
            <div className="space-y-3 mx-auto">
              <h2 className="font-semibold text-xl pb-4">
                Product Categories{" "}
                <span className="block w-[20%] h-1 bg-[#eb0029] rounded-full"></span>
              </h2>
              {ProductsList.map((i) => (
                <motion.div
                  key={i.name}
                  className="bg-white w-[270px] rounded-full shadow-2xl py-2 group"
                  layoutId={i.name}
                >
                  <p
                    className={`uppercase text-[15px] hover:text-[#eb0029]  w-full pl-6 pr-5 cursor-pointer transition-colors duration-300 flex justify-between ${
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
                      className={`block text-center leading-5 group-hover:bg-[#eb0029] transition-colors duration-300 aspect-square h-5 text-white rounded-full ${
                        i.name === open ? "bg-[#eb0029]" : "bg-gray-400"
                      }`}
                    >
                      {productObj[i.name].length}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 justify-between"
              ref={ref}
            >
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
                    margin: "0px 0px 150px 0px",
                  }}
                  key={i.name}
                  className="h-[280px] w-[200px] py-4 bg-white shadow-xl rounded-2xl grid grid-rows-[1fr_auto] mx-auto"
                >
                  <img
                    src={i.url}
                    className="w-[90%]"
                  />
                  <p className="py-2 text-center">{i.name}</p>
                </motion.div>
              ))}
            </div>
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
