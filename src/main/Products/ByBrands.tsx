import { AnimatePresence, motion } from "framer-motion";
import productObj from "./AllProductList";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState, useMemo } from "react";
import ViewMore from "./components/ViewMore";

const brandArr = [
  "endon",
  "dairy kiss",
  "d love",
  "3 stix",
  "big star",
  "truffle",
  "choco bon",
  "double paan",
  "bolivia",
  "gold",
  "delite",
  "dr. teddy",
  "kiss zone",
  "double mango",
  "emporio",
  "cocos",
  "big rolle",
  "oh! wow",
];
const ByBrands = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState<string>(state || "");
  const [viewMoreProducts, setViewMoreProducts] = useState<any[]>([]);

  const productsToRender = useMemo(() => {
    if (selectedBrand) {
      const map = new Map();
      Object.values(productObj)
        .flat()
        .filter((i) => i.brand == selectedBrand.toLowerCase())
        .forEach((i) =>
          !map.has(i?.subCategory || i.name)
            ? map.set(i?.subCategory || i.name, i)
            : ""
        );
      return Array.from(map.values());
    }
    return [];
  }, [selectedBrand]);

  const handleOpen = (product: any) => {
    if (product?.subCategory) {
      const sameSubCatProducts = Object.values(productObj)
        .flat()
        .filter(
          (i) =>
            i.brand == selectedBrand.toLowerCase() &&
            i.subCategory === product.subCategory
        );
      setViewMoreProducts(sameSubCatProducts);
    } else {
      setViewMoreProducts([product]);
    }
  };

  useEffect(() => {
    setSelectedBrand(state || "");
  }, [state]);

  return (
    <div className="w-full overflow-x-hidden ">
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
          By Brands
        </h2>
      </section>

      <h2 className="text-white text-xl font-semibold">By Brands</h2>
      <div className="max-w-[1240px] grid md:grid-cols-[auto_1fr] gap-12 px-6 mx-auto pt-10 pb-10">
        {selectedBrand && (
          <div className="space-y-3 mx-auto">
            <h2 className="font-semibold text-xl pb-4">
              Filter by Brands
              <span className="block w-[20%] h-1 bg-[#eb0029] rounded-full mt-1"></span>
            </h2>
            {brandArr.map((i, index) => (
              <div
                key={index}
                className="bg-white w-[200px] rounded-full shadow-xl py-2 group"
              >
                <p
                  className={`text-[15px] hover:text-[#eb0029] w-full pl-6 pr-5 cursor-pointer flex justify-between items-center capitalize ${
                    selectedBrand == i ? "text-[#eb0029]" : "text-gray-600"
                  }`}
                  onClick={() => {
                    setSelectedBrand(i);
                  }}
                >
                  {i}
                </p>
              </div>
            ))}
          </div>
        )}
        {selectedBrand ? (
          <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-y-10 gap-x-6 my-10">
            {productsToRender.map((product) => (
              <div
                key={product.url + product.name}
                className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[320px] bg-gray-100 rounded-3xl shadow-md flex flex-col items-center justify-between p-4 mx-auto"
              >
                <motion.img
                  src={product.url}
                  alt={product.name}
                  layoutId={product.url + product.name}
                  className="w-[80%] h-[200px] object-contain mt-4"
                  onClick={() => {
                    handleOpen(product);
                  }}
                />
                <h3 className="font-semibold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 capitalize">
                  {product.brand}
                </p>
              </div>
            ))}
          </section>
        ) : (
          <section className="pt-16 pb-20 mx-auto max-w-[1000px] px-10 lg:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  gap-y-16 ">
              {brandArr.map((i, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.4,
                    },
                  }}
                  className="relative  flex justify-center px-10 mx-auto"
                  key={i}
                >
                  <motion.img
                    whileHover={{ scale: 0.8 }}
                    src={`/images/logos/${index + 1}.png`}
                    alt={`Slide ${index + 1}`}
                    className="w-32 object-contain aspect-auto mix-blend-color-burn cursor-pointer"
                    onClick={() => {
                      setSelectedBrand(i);
                      navigate("/byBrands", { state: i });
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
      <AnimatePresence>
        {viewMoreProducts.length > 0 && (
          <ViewMore
            products={viewMoreProducts}
            onClose={() => setViewMoreProducts([])}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ByBrands;
