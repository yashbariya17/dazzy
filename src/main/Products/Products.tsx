import { ProductsList } from "../Home/Home";
import { TextAnimation } from "../../components/TextAnimation";
import { AnimatePresence, motion } from "framer-motion";
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
  "peanut chocolate": [{
    name: "00126",
    url: "/images/peanut chocolate/00126.png",
  },
  {
    name: "Caranut Box",
    url: "/images/peanut chocolate/CARANUT BOX.png",
  },
  {
    name: "Chokers Box",
    url: "/images/peanut chocolate/CHOKERS BOX.png",
  },
  {
    name: "Chokers Container",
    url: "/images/peanut chocolate/CHOKERS CONTAINER.png",
  },
  {
    name: "Oh Wow Big Box",
    url: "/images/peanut chocolate/OH WOW BIG BOX.png",
  },
  {
    name: "Oh Wow Pouch",
    url: "/images/peanut chocolate/OH WOW POUCH.png",
  },
  {
    name: "Oh Wow Small Box",
    url: "/images/peanut chocolate/OH WOW SMALL BOX.png",
  },
  {
    name: "Oh Wow Standy Pouch",
    url: "/images/peanut chocolate/OH WOW STANDY POUCH.png",
  }],
  "nought bar": [{
    name: "BIG STAR",
    url: "/images/nugut bar/BIG STAR.png",
  },
  {
    name: "TORNUTTE  BAR CONTAINER",
    url: "/images/nugut bar/TORNUTTE  BAR CONTAINER.png",
  },
{
    name: "BRACKERS BOX",
    url: "/images/nugut bar/BRACKERS BOX.png",
  },
{
    name: "TORNUTTE  BAR BOX",
    url: "/images/nugut bar/TORNUTTE  BAR BOX.png",
  },
],

  "wafer rolls": [{
    name: "3 Stix Chocofills",
    url: "/images/wafffer rolls/3 stix chocofills.png",
  },
  {
    name: "3 Stix Kraks",
    url: "/images/wafffer rolls/3 stix kraks.png",
  },
  {
    name: "3stix Milk Fills",
    url: "/images/wafffer rolls/3stix milk fills.png",
  },
  {
    name: "Big Roll Chocolate",
    url: "/images/wafffer rolls/big roll chocolate.png",
  },
  {
    name: "Big Roll Dark",
    url: "/images/wafffer rolls/big roll dark.png",
  },
  {
    name: "Big Roll Milk",
    url: "/images/wafffer rolls/big roll milk.png",
  },
  {
    name: "Choco Stix",
    url: "/images/wafffer rolls/choco stix.png",
  },
  {
    name: "Dark Stix",
    url: "/images/wafffer rolls/dark stix.png",
  },
  {
    name: "Krack Stix",
    url: "/images/wafffer rolls/krack stix.png",
  },
  {
    name: "Rolle Stix",
    url: "/images/wafffer rolls/rolle stix.png",
  },
  {
    name: "Wafeer Roll",
    url: "/images/wafffer rolls/wafeer roll.png",
  }],
  toffee: [{
    name: "Almond Zupadi Box",
    url: "/images/toffee/ALMOND ZUPADI  BOX.png",
  },
  {
    name: "Anjeer Zupadi Box",
    url: "/images/toffee/ANJEER ZUPADI BOX.png",
  },
  {
    name: "Butter Feast Zupadi Box",
    url: "/images/toffee/BUTTER FEAST ZUPADI BOX.png",
  },
  {
    name: "Butter Scotch Zupadi Box",
    url: "/images/toffee/BUTTER SCOTCH ZUPADI BOX.png",
  },
  {
    name: "Caramal Honey",
    url: "/images/toffee/CARAMAL HONEY.png",
  },
  {
    name: "Choco Almond Grand",
    url: "/images/toffee/CHOCO ALMOND GRAND.png",
  },
  {
    name: "Cocolile Zupadi Box",
    url: "/images/toffee/COCOILLE ZUPADI BOX.png",
  },
  {
    name: "Coconut Butter Zupadi Box",
    url: "/images/toffee/COCONUT BUTTER ZUPADI BOX.png",
  },
  {
    name: "Dairy Way Zupadi Box",
    url: "/images/toffee/DAIRY WAY ZUPADI BOX.png",
  },
  {
    name: "Dry Fruit Selection Gift Box",
    url: "/images/toffee/dry fruit selection gift box.png",
  },
  {
    name: "Dry Fruit Selection Gift Pouch",
    url: "/images/toffee/dry fruit selection gift pouch.png",
  },
  {
    name: "Eclair Anjeer Cream Gift Box",
    url: "/images/toffee/eclair anjeer cream gift box.png",
  },
  {
    name: "Eclair Anjeer Cream",
    url: "/images/toffee/eclair anjeer cream.png",
  },
  {
    name: "Eclair Coconut Cream Gift Box",
    url: "/images/toffee/eclair coconut cream gift box.png",
  },
  {
    name: "Eclair Coconut Cream",
    url: "/images/toffee/eclair coconut cream.png",
  },
  {
    name: "Eclair Dark Cream Gift Box",
    url: "/images/toffee/eclair dark cream gift box.png",
  },
  {
    name: "Eclair Dark Cream",
    url: "/images/toffee/eclair dark cream.png",
  },
  {
    name: "Eclair Dark Jar",
    url: "/images/toffee/eclair dark jar.png",
  },
  {
    name: "Eclair Dark Pouch",
    url: "/images/toffee/eclair dark pouch.png",
  },
  {
    name: "Eclair Gold Jar",
    url: "/images/toffee/ECLAIR GOLD JAR.png",
  },
  {
    name: "Eclair Gold",
    url: "/images/toffee/ECLAIR GOLD.png",
  },
  {
    name: "Eclair Hazelnut Gift Box",
    url: "/images/toffee/eclair hazelnut gif box.png",
  },
  {
    name: "Eclair Hazelnut Jar",
    url: "/images/toffee/eclair hazelnut jar.png",
  },
  {
    name: "Eclair Hazelnut Pouch",
    url: "/images/toffee/eclair hazelnut pouch.png",
  },
  {
    name: "Eclair Hazelnut",
    url: "/images/toffee/eclair hazelnut.png",
  },
  {
    name: "Eclair Milk Gift Box",
    url: "/images/toffee/eclair milk gift box.png",
  },
  {
    name: "Eclair Milk Pouch",
    url: "/images/toffee/eclair milk pouch.png",
  },
  {
    name: "Eclair Milk",
    url: "/images/toffee/eclair milk.png",
  },
  {
    name: "Eclairs Carmallos",
    url: "/images/toffee/eclairs carmallos.png",
  },
  {
    name: "Eclairs Milk Jar",
    url: "/images/toffee/eclairs milk jar.png",
  },
  {
    name: "Eclairs Zupadi Box",
    url: "/images/toffee/ECLAIRS ZUPADI BOX.png",
  },
  {
    name: "Goa Almond",
    url: "/images/toffee/GOA ALMOND.png",
  },
  {
    name: "Goa Kaju",
    url: "/images/toffee/GOA KAJU.png",
  },
  {
    name: "Jewels Zupadi Box",
    url: "/images/toffee/JEWELS ZUPADI BOX.png",
  },
  {
    name: "Kaju Butter Jar",
    url: "/images/toffee/KAJU BUTTER JAR.png",
  },
  {
    name: "Kaju Butter Zupadi Box",
    url: "/images/toffee/KAJU BUTTER ZUPADI BOX.png",
  },
  {
    name: "Kasata Creme Zupadi Box",
    url: "/images/toffee/KASATA CREME  ZUPADI BOX.png",
  },
  {
    name: "Kesar Cream Zupadi Box",
    url: "/images/toffee/KESAR CREAM ZUPADI BOX.png",
  },
  {
    name: "Malai Kulfi",
    url: "/images/toffee/malai kulfi.png",
  },
  {
    name: "Natural Jar",
    url: "/images/toffee/NATURAL JAR.png",
  },
  {
    name: "Natural Zupadi Box",
    url: "/images/toffee/NATURAL ZUPADI BOX.png",
  },
  {
    name: "Pan Bites Zupadi Box",
    url: "/images/toffee/PAN BITES ZUPADI BOX.png",
  },
  {
    name: "Pista Butter Box",
    url: "/images/toffee/PISTA BUTTER BOX.png",
  },
  {
    name: "Pista Butter Jar",
    url: "/images/toffee/PISTA BUTTER JAR.png",
  },
  {
    name: "Pista Harvest",
    url: "/images/toffee/pista harvest.png",
  },
  {
    name: "Soffiti",
    url: "/images/toffee/soffiti.png",
  },
  {
    name: "Swiss Dairy Zupadi Box",
    url: "/images/toffee/SWISS DAIRY ZUPADI BOX.png",
  },
  {
    name: "Trasure",
    url: "/images/toffee/Trasure.png",
  }],
  jelly: [ {
      name: "JELLOS JELLY JAR",
      url: "/images/jelly/JELLOS JELLY JAR.png",
    },
   {
      name: "JELLOS JELLY",
      url: "/images/jelly/JELLOS JELLY.png",
    },
   {
      name: "STRAWBERRY JELLY JAR",
      url: "/images/jelly/STRAWBERRY JELLY JAR.png",
    },
   {
      name: "STRAWBERRY JELLY",
      url: "/images/jelly/STRAWBERRY JELLY.png",
    },
  ],
  candy: [ {
      name: "Breating Heart",
      url: "/images/candy/BEATING HEART.png",
    },
   {
    name: "Double Berry",
    url: "/images/candy/DOUBLE BERRY.png",
  },
{
    name: "Double Coconut",
    url: "/images/candy/DOUBLE COCONUT.png",
  },
  {
    name: "Double Guava",
    url: "/images/candy/DOUBLE GUVAVA.png",
  },
  {
    name: "Double Mango",
    url: "/images/candy/DOUBLE MANGO.png",
  },
  {
    name: "Double Orange",
    url: "/images/candy/DOUBLE ORANGE.png",
  },
  {
    name: "Fruit Bon Bon",
    url: "/images/candy/FRUIT BON BON.png",
  },
  {
    name: "Fruits Candy",
    url: "/images/candy/FRUITS CANDY.png",
  },
  {
    name: "Imli Candy",
    url: "/images/candy/IMLI CANDY.png",
  },
  {
    name: "Juzy Candy",
    url: "/images/candy/JUZY CANDY.png",
  },
  {
    name: "Kacha Aam Candy",
    url: "/images/candy/KACHA AAM CANDY.png",
  },
  {
    name: "Kacha Aam",
    url: "/images/candy/KACHA AAM.png",
  },
  {
    name: "Kisszone Dark",
    url: "/images/candy/KISSZONE DARK.png",
  },
  {
    name: "Kisszone",
    url: "/images/candy/KISSZONE.png",
  },
  {
    name: "Kisszone01",
    url: "/images/candy/KISSZONE01.png",
  },
  {
    name: "Kisszone02",
    url: "/images/candy/KISSZONE02.png",
  },
  {
    name: "Mango Candy",
    url: "/images/candy/MANGO CANDY.png",
  },
  {
    name: "Ornge Candy",
    url: "/images/candy/ORNGE CANDY.png",
  },
  {
    name: "Pan Meetha",
    url: "/images/candy/PAN MEETHA.png",
  },
  {
    name: "Pineapple Candy",
    url: "/images/candy/PINEAPPLE CANDY.png",
  },
  {
    name: "Strawberry Candy",
    url: "/images/candy/STRAWBERRY CANDY.png",
  },
  {
    name: "Tambley",
    url: "/images/candy/TAMBLEY.png",
  },],

  lollipop: [{
    name: "Fru Go Pop",
    url: "/images/lollipop/Fru Go Pop.png",
  },
  {
    name: "Frudoza",
    url: "/images/lollipop/Frudoza.png",
  },
  {
    name: "Frugo Pop Jar",
    url: "/images/lollipop/Frugo Pop Jar.png",
  },
  {
    name: "Frugo Pop Pouch",
    url: "/images/lollipop/Frugo Pop Pouch.png",
  },
  {
    name: "Frutos Lollipop Jar",
    url: "/images/lollipop/FRUTOS LOLLIPOP JAR.png",
  },
  {
    name: "Lolly Lollipop Pouch",
    url: "/images/lollipop/LOLLY LOLLIPOP  POUCH.png",
  },
  {
    name: "Lolly Lollipop",
    url: "/images/lollipop/LOLLY LOLLIPOP.png",
  }],
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
                  layoutId={i.name}
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
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6"
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
                    className="w-[160px] h-[280px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[340px] bg-gray-100 rounded-3xl shadow-md flex flex-col items-center justify-between p-4 mx-auto"
                  >
                    <motion.img
                      layoutId={i.name}
                      src={i.url}
                      className="w-[80%] h-[120px] object-contain mt-4"
                    />

                    <p className="text-center text-sm sm:text-base font-semibold mt-2">
                      {i.name}
                    </p>

                    <div className="flex justify-center gap-3 mt-2 text-xs sm:text-sm">
                      <button
                        onClick={() => setSelectedProduct(i)}
                        className="flex items-center gap-1 text-green-700 hover:underline hover:cursor-pointer transition"
                      >
                        <FiShoppingBag size={14} /> Read More
                      </button>
                      <button className="flex items-center gap-1 text-gray-600 hover:underline transition">
                        <FiEye size={14} /> Quick View
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            <AnimatePresence>
              {selectedProduct && (
                <ViewMore
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                />
              )}
            </AnimatePresence>
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
