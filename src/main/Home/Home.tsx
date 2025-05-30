import NavBar from "../../components/NavBar";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

type ProductsType = {
  name: string;
  url: string;
}[];

const Products: ProductsType = [
  {
    name: "cholcloate bar",
    url: "",
  },
  {
    name: "centerfilled cholcloate",
    url: "",
  },
  {
    name: "decorative cholcloate",
    url: "",
  },
  {
    name: "penut cholcloate",
    url: "",
  },
  {
    name: "nought bar",
    url: "",
  },
  {
    name: "waffer rolls",
    url: "",
  },
  {
    name: "toffe",
    url: "",
  },
  {
    name: "jelly",
    url: "",
  },
  {
    name: "candy",
    url: "",
  },
  {
    name: "lollipop",
    url: "",
  },
];

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <NavBar />
      <section className="h-[500px] bg-gray-400"></section>
      <div className="uppercase text-white bg-red-500 font-semibold flex justify-center gap-16 text-lg py-2">
        <p>fssai & iso certiefied</p>
        <p>25+ year experience</p>
        <p>100%veg</p>
        <p>pan india delivery</p>
      </div>
      <section className="pt-8 bg-amber-100 ">
        <h2
          className="text-red-500 text-center text-5xl font-bold "
          style={{
            wordSpacing: "6px",
          }}
        >
          Our Products
        </h2>
        <p
          className="text-center mt-2 text-gray-500 "
          style={{
            wordSpacing: "2px",
          }}
        >
          A Wide Range Of Confectionery Items
        </p>

        <div className="bg-gray-500 mt-[8rem] h-[400px]">
          <div className="grid grid-cols-5 grid-rows-2 justify-center px-5 gap-y-[8rem] gap-x-[4rem] relative -top-10 w-fit mx-auto">
            {Products.map((i) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: "75%",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                }}
                key={i.name}
                className="bg-white relative w-[150px]  flex  justify-center gap-2 rounded-lg shadow-2xl items-center pt-6 pb-2 "
              >
                <img
                  src="/vite.svg"
                  className="h-10 absolute top-0 -translate-y-1/2"
                />
                <p className="text-center uppercase text-gray-600 w-[60%]">
                  {i.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-8 bg-amber-100 ">
        <h2
          className="text-red-500 text-center text-5xl font-bold "
          style={{
            wordSpacing: "6px",
          }}
        >
          Our Brands
        </h2>
        <p
          className="text-center mt-2 text-gray-500 "
          style={{
            wordSpacing: "2px",
          }}
        >
          A Wide Range Of Confectionery Items
        </p>

        <div className="w-[80%] mx-auto relative mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ">
              {Array(10)
                .fill("")
                .map((_, index) => (
                  <div
                    className="relative flex-[0_0_200px] mr-5 flex justify-center"
                    key={index}
                  >
                    <img
                      src={"./vite.svg"}
                      alt={`Slide ${index + 1}`}
                      className="w-16 object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-x-full  -translate-1/2 bg-red-500 aspect-square h-12 leading-2  font-bold text-4xl text-white rounded-full"
          >
            {"<"}
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 left-full -translate-1/2  bg-red-500 text-white aspect-square h-12 leading-3  font-bold text-4xl rounded-full"
          >
            {">"}
          </button>
        </div>
        <section className="h-[400px] overflow-hidden mt-16 grid grid-cols-2">
          <div className="h-[800px] rounded-tr-[250px] bg-red-500 w-[500px] relative">
            <div className="absolute h-[250px] w-[450px] bg-gray-500 right-0 translate-x-[20%] translate-y-[30%]"></div>
          </div>
          <div>
            <h2 className="font-bold capitalize text-5xl text-red-500 tracking-wider">
              25 Years
            </h2>
            <p className="font-bold uppercase">
              expierience in food industries
            </p>
            <p className="w-[400px]">
              some asjhlsf asdnaf jfamf easf jpfhbfg fcasohefsa fvsbfs cazobihaf
              afhbpbfas bopa adphfa afhp0ihf ohifas dfsphgsd asfhjnvzxofs
              fzpjpjasfjz jopzdfml hbasfoitg ajzfhjs fdsojppofzm nsdgpni asdfjas
              sfohins asdohihfdap asdphph
            </p>
            <button className="bg-black text-white px-4 py-2 mt-4">Read More</button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
