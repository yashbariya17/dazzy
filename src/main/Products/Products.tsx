import { ProductsList } from "../Home/Home";
import { TextAnimation } from "../../components/TextAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { FiShoppingBag, FiX } from "react-icons/fi";
import ViewMore from "./components/ViewMore";
import { productObj } from "./AllProductList";
import { useLocation } from "react-router";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

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
    "Bunch Wrap",
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

const priceOptions = [0.5, 1, 2, 5, 10];

const Products = () => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  // extract ?p=<category> from url
  const queryParams = new URLSearchParams(location.search);
  const categoryFromQuery = queryParams.get("p") || "chocolate bar";

  const [open, setOpen] = useState<string>(categoryFromQuery);
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof category)[keyof typeof category][number] | ""
  >("");
  const [price, setPrice] = useState<number>(0);
  const [viewMoreProducts, setViewMoreProducts] = useState<Product[]>([]);
  const [imageView, setImageView] = useState<Record<string, any> | null>(null);
  // const [loadedCount, setLoadedCount] = useState(0);

  useLayoutEffect(() => {
    setOpen(categoryFromQuery);
  }, [categoryFromQuery]);

  const products = productObj[open] || [];
  // const handleImageLoad = () => {
  //   setLoadedCount((prev) => prev + 1);
  // };
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
    <>
      {/*  {loadedCount < 2 && (
        <div className="fixed top-0 inset-0 flex items-center justify-center bg-white z-10">
          <img src="/videos/LODING GIF.gif" alt="" />
        </div>
      )}
    */}
      <div className="w-full">
        <section className="relative h-[200px] flex items-center justify-center overflow-hidden">
          <video
            src="/CONTECT AS.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
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

          <div className="grid md:hidden grid-cols-2 border border-solid border-black border-x-0  mt-5">
            <Menu 
               viewScroll="close"
              gap={12}
              menuButton={
                <MenuButton>
                  <div className=" flex gap-2 justify-center items-center">
                    <svg viewBox="0 0 24 24" fill="none" height={25}>
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <p>Category</p>
                  </div>
                </MenuButton>
              }
              transition
            >
               {ProductsList.map((i, index) => (
                <MenuItem
                  key={index}
                  className="bg-white w-[270px] rounded-fullpy-2 group"
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

                      // also update url when selecting category
                      const params = new URLSearchParams(location.search);
                      params.set("p", i.name);
                      window.history.replaceState(
                        {},
                        "",
                        `${location.pathname}?${params.toString()}`
                      );
                    }}
                  >
                    {i.name}
                  </p>
                </MenuItem>
              ))}
            </Menu>
            <Menu
              viewScroll="close"
              gap={12}
              menuButton={
                <MenuButton>
                  {" "}
                  <div className="flex gap-2 justify-center items-center border-l border-solid border-black">
                    <span className="text-2xl text-[#292D32]">₹</span>
                    <p>Price</p>
                  </div>
                </MenuButton>
              }
              transition
            >
              {priceOptions?.map((i) => (
                <MenuItem
                  key={i}

                  onClick={() => setPrice(Number(i))}
                  className={`capitalize
                     ${
                      price ==i ? "text-[#eb0029]" : "text-black"
                    }`}
                >
                  {i}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div className="hidden md:block max-w-[1240px] px-6 mx-auto pt-20">
            <h2 className="font-semibold text-xl pb-4 w-[270px]">
              Filter By Price
              <span className="block w-[20%] h-1 bg-[#eb0029] rounded-full mt-1"></span>
            </h2>

            <div className="w-full mt-2">
              <select
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="border-2 border-solid border-[#eb0029] text-[#eb0029] rounded-full px-3 py-2 w-full max-w-[250px] focus:outline-none focus:ring-2 focus:ring-[#eb0029] cursor-pointer capitalize appearance-none"
              >
                <option value="" className="text-black">
                  Select price
                </option>
                {priceOptions?.map((i) => (
                  <option key={i} value={i} className="capitalize text-black">
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <section className=" max-w-[1240px] grid md:grid-cols-[auto_1fr] gap-16 px-6 mx-auto pt-10 pb-10">
            {/* Sidebar Categories */}
            <div className="hidden md:block space-y-3 mx-auto">
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

                      // also update url when selecting category
                      const params = new URLSearchParams(location.search);
                      params.set("p", i.name);
                      window.history.replaceState(
                        {},
                        "",
                        `${location.pathname}?${params.toString()}`
                      );
                    }}
                  >
                    {i.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Products Section */}
            <section>
              {/* Subcategory buttons */}
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

              {/* Products grid */}
              <div
                className="grid grid-rows-[auto_1fr] grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6"
                ref={ref}
              >
                {productsToRender.map(
                  (i) =>
                    (price === 0 || i.price === price) && (
                      <div
                        key={i.url + i.name + open}
                        className="w-[160px]  h-[290px] sm:w-[200px] sm:h-[300px] lg:w-[240px] lg:h-[320px] bg-gray-100 rounded-3xl shadow-md flex flex-col items-center justify-between p-4 mx-auto"
                      >
                        <motion.img
                          layoutId={i.url + i.name}
                          src={i.url}
                          className="w-[80%] h-[200px] max-h-[70%] object-contain mt-4"
                          onClick={() => {
                            if (i?.subCategory) {
                              const sameSubCatProducts = productObj[
                                open
                              ].filter((p) => p.subCategory === i.subCategory);
                              setViewMoreProducts(sameSubCatProducts);
                            } else {
                              setViewMoreProducts([i]);
                            }
                          }}
                          // onLoad={handleImageLoad}
                        />

                        <p className="text-center text-sm sm:text-base font-semibold mt-2">
                          {i.name}
                        </p>

                        <div className="flex justify-center gap-3 mt-2 text-xs sm:text-sm">
                          <button
                            onClick={() => {
                              if (i?.subCategory) {
                                const sameSubCatProducts = productObj[
                                  open
                                ].filter(
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
                    )
                )}
              </div>
            </section>
          </section>

          {/* ViewMore modal */}
          <AnimatePresence>
            {viewMoreProducts.length > 0 && (
              <ViewMore
                products={viewMoreProducts}
                onClose={() => setViewMoreProducts([])}
              />
            )}
          </AnimatePresence>

          {/* Image modal */}
          <AnimatePresence>
            {imageView && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-xl w-auto max-h-[95vh] overflow-y-auto p-6 px-12 relative"
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
    </>
  );
};

export default Products;
