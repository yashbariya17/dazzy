import { ProductsList } from "../Home/Home";
import { TextAnimation } from "../../components/TextAnimation";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { FiShoppingBag, FiEye } from "react-icons/fi";
import ViewMore from "./components/ViewMore";

type productType = {
  [key: string]: { name: string; url: string }[];
};

const productObj: productType = {
  "chocolate bar": [
    {
      name: "Black & White Bar",
      url: "/images/chocolatebar/Black & White Bar.png",
    },
    {
      name: "Cocoa Milk Choclate Bar",
      url: "/images/chocolatebar/Cocoa Milk Choclate Bar.png",
    },
    { name: "Coconut Bar", url: "/images/chocolatebar/Coconut Bar.png" },
    {
      name: "Dairy Kiss Cocoa",
      url: "/images/chocolatebar/Dairy Kiss Cocoa.png",
    },
    {
      name: "Dark Milk Choclate Bar",
      url: "/images/chocolatebar/Dark Milk Choclate Bar.png",
    },
    { name: "HazelNut Bar", url: "/images/chocolatebar/HazelNut Bar.png" },
    {
      name: "Milk Choclate Bar",
      url: "/images/chocolatebar/Milk Choclate Bar.png",
    },

    {
      name: "Milkies Milk Choclate Bar",
      url: "/images/chocolatebar/Milkies Milk Choclate Bar.png",
    },
    { name: "Safari Park", url: "/images/chocolatebar/Safari Park.png" },
    { name: "StrawBerry Bar", url: "/images/chocolatebar/StrawBerry Bar.png" },
    // { "name": "Celio Crunchy", "url": "/images/chocolatebar/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/chocolatebar/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/chocolatebar/largeimage.png" },
    // { "name": "Celio Crunchy", "url": "/images/chocolatebar/largeimage.png" },

    // { "name": "3 Pm Fruits Biscuits", "url": "/images/chocolatebar/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Biskins Duo", "url": "/images/chocolatebar/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/chocolatebar/JELLY.png" },
    // { "name": "Celio Crunchy", "url": "/images/chocolatebar/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/chocolatebar/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/chocolatebar/largeimage.png" }
  ],
  "centerfilled chocolate": [
    {
      name: "Truffle Bluberry",
      url: "/images/centerfilledchocolate/Truffle Bluberry.png",
    },
    {
      name: "Dazzy Dlove Choclate",
      url: "/images/centerfilledchocolate/Dazzy Dlove Choclate.png",
    },
    {
      name: "Truffle Rajbhog",
      url: "/images/centerfilledchocolate/Truffle Rajbhog.png",
    },
    {
      name: "Truffle Blueberry",
      url: "/images/centerfilledchocolate/Truffle Blueberry.png",
    },
    {
      name: "Truffle Pistachio",
      url: "/images/centerfilledchocolate/Truffle Pistachio.png",
    },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
    // { "name": "Celio Crunchy", "url": "/images/centerfilledchocolate/DECORATIVE-CHOCOLATE.png" },
  ],
  "decorative chocolate": [],
  "peanut chocolate": [],
  "nought bar": [],
  "wafer rolls": [],
  toffee: [],
  jelly: [],
  candy: [],
  lollipop: [],
};

const Products = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

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

        {open ? (
          <>
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
                    layoutId={i.name}
                  >
                    <p
                      className={`uppercase text-[15px] hover:text-[#eb0029] w-full pl-6 pr-5 cursor-pointer transition-colors duration-300 flex justify-between ${
                        i.name === open ? "text-[#eb0029]" : "text-gray-600"
                      }`}
                      onClick={() => {
                        if (window.innerWidth < 640) {
                          ref.current?.scrollIntoView({ behavior: "smooth" });
                        }
                        setOpen(i.name);
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6"
                ref={ref}
              >
                {productObj[open].map((i) => (
                  <motion.div
                    initial={{ y: "50%", opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: "all",
                      margin: "0px 0px 150px 0px",
                    }}
                    key={i.name}
                    className="w-[240px] h-[340px] bg-gray-100 rounded-3xl shadow-md flex flex-col items-center justify-between p-4 mx-auto"
                  >
                    <img
                      src={i.url}
                      className="w-[80%] h-[150px] object-contain mt-4"
                    />

                    <p className="text-center text-base font-semibold mt-4">
                      {i.name}
                    </p>

                    <div className="flex justify-center gap-4 mt-4">
                      <button
                        onClick={() => setSelectedProduct(i)}
                        className="flex items-center gap-1 text-green-700 text-sm hover:underline hover:cursor-pointer transition"
                      >
                        <FiShoppingBag size={16} /> Read More
                      </button>
                      <button className="flex items-center gap-1 text-gray-600 text-sm hover:underline transition">
                        <FiEye size={16} /> Quick View
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            {selectedProduct && (
              <ViewMore
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            )}
          </>
        ) : (
          <div className="bg-[#f4f1ea] mt-[8rem] h-auto lg:h-[550px] w-full bg-cover bg-bottom bg-no-repeat">
            <div className="max-w-[1000px] mx-auto grid grid-cols-2 justify-items-center md:grid-cols-4 lg:grid-cols-5 grid-rows-2 justify-center px-5 gap-y-[8rem] gap-x-[4rem] relative -top-10 ">
              {ProductsList.map((i) => (
                <motion.div
                  key={i.name}
                  className="bg-white relative w-[150px] flex justify-center gap-2 rounded-lg shadow-2xl items-center pt-6 pb-2"
                  layoutId={i.name}
                >
                  <motion.img
                    initial={{ opacity: 0, y: "-75%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    src={i.url}
                    className={`h-[100px] absolute top-0 -translate-y-[80%] ${i.className}`}
                  />
                  <p
                    className="text-center uppercase text-gray-600 w-[60%] cursor-pointer"
                    onClick={() => {
                      setOpen(i.name);
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
  );
};

export default Products;
