import { ProductsList } from '../Home/Home'
import { TextAnimation } from "../../components/TextAnimation";
import {  motion } from "motion/react";

const Products = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <section
        className="h-[500px] bg-cover bg-center  bg-gray-700"
        // style={{ backgroundImage: "url('/images/choclatebigslider.png')" }}
      ></section>
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

        <div
          className="bg-[#f4f1ea] mt-[8rem] h-auto lg:h-[550px] w-full bg-cover bg-bottom bg-no-repeat"
        //   style={{ backgroundImage: "url('/images/rooftop.png')" }}
        >
          <div className="max-w-[1000px] mx-auto grid  grid-cols-2  justify-items-center md:grid-cols-4 lg:grid-cols-5 grid-rows-2 justify-center px-5 gap-y-[8rem] gap-x-[4rem] relative -top-10 ">
            {ProductsList.map((i) => (
              <div
                key={i.name}
                className="bg-white relative w-[150px]  flex  justify-center gap-2 rounded-lg shadow-2xl items-center pt-6 pb-2 "
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
                <p className="text-center uppercase text-gray-600 w-[60%]">
                  {i.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
