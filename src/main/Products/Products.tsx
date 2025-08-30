import { ProductsList } from "../Home/Home";
import { TextAnimation } from "../../components/TextAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { FiShoppingBag, FiX } from "react-icons/fi";
import ViewMore from "./components/ViewMore";
import { productObj } from "./AllProductList";
import { useLocation } from "react-router";

type Product = {
  name: string;
  url: string;
  price?: number;
  category?: string;
  subCategory?: string;
  description?: string;
};
const category = {
  "chocolate bar": [],
  "centerfilled chocolate": [
    "Single Twist",
    "Double Twist",
    "Pillow Pack",
    "Bunch Rape",
  ],
  "decorative chocolate": [],
  "Crunchy chocolate": [],
  "nought bar": [],
  "wafer rolls": [],
  candy: ["Pouch", "Jar"],
  toffee: ["Box", "Jar", "Pouch", "Container"],
  lollipop: [],
  jelly: [],
};

const Products = () => {
  const { state } = useLocation();

  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<string>(state || "chocolate bar");
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof category)[keyof typeof category][number] | ""
  >("");
  const [viewMoreProducts, setViewMoreProducts] = useState<Product[]>([]);
  const [imageView, setImageView] = useState<Record<string, any> | null>(null);

  useLayoutEffect(() => {
    if (state) {
      setOpen(state);
    } else {
      setOpen("chocolate bar");
    }
  }, [state]);
  const products = productObj[open] || [];
  const productsToRender = useMemo(() => {
    if (!selectedCategory) {
      const map = new Map();
      products.forEach((i) =>
        !map.has(i?.subCategory || i.name)
          ? map.set(i?.subCategory || i.name, i)
          : ""
      );
      return Array.from(map.values());
    }
    const filteredByCategory = products.filter(
      (p) => p.category === selectedCategory
    );

    const map = new Map();
    for (const p of filteredByCategory) {
      const key = p.subCategory ?? p.name;
      if (!map.has(key)) {
        map.set(key, p);
      }
    }
    return Array.from(map.values());
  }, [products, selectedCategory]);
  return (
    <div className="w-full">
      <section className="relative h-[200px] flex items-center justify-center mb-10 overflow-hidden">
        <video
          src="/CONTECT AS.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Title */}
        <h2 className="relative text-white text-2xl font-semibold z-10">
          Product Categories
        </h2>
      </section>

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
                      ref.current?.scrollIntoView({ behavior: "smooth" });
                    }
                    setSelectedCategory("");
                    setOpen(i.name);
                  }}
                >
                  {i.name}
                </p>
              </motion.div>
            ))}
          </div>
          <section>
            <div className=" flex gap-x-6 md:gap-x-10  gap-y-5 mb-5 px-4 flex-wrap justify-center md:justify-start">
              {category?.[open as keyof typeof category].map((i) => (
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
              {productsToRender.map((i) => (
                <div
                  key={i.url + i.name + open}
                  className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[320px] bg-gray-100 rounded-3xl shadow-md flex flex-col items-center justify-between p-4 mx-auto"
                >
                  <motion.img
                    layoutId={i.url + i.name}
                    src={i.url}
                    className="w-[80%] h-[200px] object-contain mt-4"
                    onClick={() => {
                      if (i?.subCategory) {
                        const sameSubCatProducts = productObj[open].filter(
                          (p) => p.subCategory === i.subCategory
                        );
                        setViewMoreProducts(sameSubCatProducts);
                      } else {
                        setViewMoreProducts([i]);
                      }
                    }}
                  />

                  <p className="text-center text-sm sm:text-base font-semibold mt-2">
                    {i.name}
                  </p>

                  <div className="flex justify-center gap-3 mt-2 text-xs sm:text-sm">
                    <button
                      onClick={() => {
                        if (i?.subCategory) {
                          const sameSubCatProducts = productObj[open].filter(
                            (p) => p.subCategory === i.subCategory
                          );
                          setViewMoreProducts(sameSubCatProducts);
                        } else {
                          setViewMoreProducts([i]);
                        }
                      }}
                      className="flex items-center gap-1 text-green-700 hover:underline hover:cursor-pointer transition"
                    >
                      <FiShoppingBag size={14} /> Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
        <AnimatePresence>
          {viewMoreProducts.length > 0 && (
            <ViewMore
              products={viewMoreProducts}
              onClose={() => setViewMoreProducts([])}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {imageView && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-xl w-auto max-h-[95vh]   overflow-y-auto p-6 px-12 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => {
                    setImageView(null);
                  }}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                  <FiX size={24} />
                </button>

                <div className="flex flex-wrap justify-center gap-4">
                  <motion.img
                    key={imageView.url + imageView.name}
                    layoutId={imageView.url + imageView.name}
                    src={imageView.url}
                    className=" h-[400px] max-h-[90%] object-contain mt-4"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Products;
