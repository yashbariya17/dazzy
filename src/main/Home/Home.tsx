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

  const [emblaSlideRef, emblaSlideApi] = useEmblaCarousel({ loop: true });

  const scrollSlidePrev = useCallback(
    () => emblaSlideApi?.scrollPrev(),
    [emblaSlideApi]
  );
  const scrollSlideNext = useCallback(
    () => emblaSlideApi?.scrollNext(),
    [emblaSlideApi]
  );

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

        <div
          className="bg-amber-100 mt-[8rem] h-[550px] w-full bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: "url('/images/rooftop.png')" }}
        >
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
      <section className=" bg-amber-100 ">
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
            <div
              className="absolute h-[270px] w-[450px] bg-gray-500 right-0 translate-x-[20%] translate-y-[30%] bg-cover"
              style={{
                backgroundImage: "url('/images/25ywarsdashboard.png')",
              }}
            ></div>
          </div>
          <div className="translate-y-[8%]">
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
            <button className="bg-black text-white px-4 py-2 mt-4">
              Read More
            </button>
          </div>
        </section>
      </section>
      <img src="/images/choclatebigslider.png" />
      <section className="pt-8 bg-amber-100 ">
        <h2
          className="text-red-500 text-center text-7xl font-semibold "
          style={{
            wordSpacing: "6px",
          }}
        >
          Best Sellers
        </h2>
        <p
          className="text-center mt-2 text-gray-500 "
          style={{
            wordSpacing: "2px",
          }}
        >
          A Wide Range Of Confectionery Items
        </p>

        <div className="w-[60%] mx-auto relative mt-10">
          <div className="overflow-hidden" ref={emblaSlideRef}>
            <div className="flex px-10">
              {Array(3)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="relative  flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] h-[300px] mr-6 flex flex-col items-center "
                  >
                    <img
                      src={`/images/product${index + 1}.png`}
                      alt={`Slide ${index + 1}`}
                      className="absolute z-99 top-[0%] mt-4 w-[175px] h-auto object-contain"
                    />

                    <button className="bg-red-600 text-white w-[100px] py-2 mt-auto mb-6 z-10">
                      READ MORE
                    </button>

                    <div className="bg-white absolute bottom-0 w-full h-[50%] rounded-t-[70px]"></div>
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={scrollSlidePrev}
            className="absolute top-1/2 -translate-x-full  -translate-1/2 bg-red-500 aspect-square h-12 leading-2  font-bold text-4xl text-white rounded-full"
          >
            {"<"}
          </button>
          <button
            onClick={scrollSlideNext}
            className="absolute top-1/2 left-full -translate-1/2  bg-red-500 text-white aspect-square h-12 leading-3  font-bold text-4xl rounded-full"
          >
            {">"}
          </button>
        </div>
        <section
          className="h-[700px] overflow-hidden mr-10 ml-10 mt-20 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/images/uperportion.png')" }}
        >
          <div className="flex justify-end h-full">
            <div className="bg-red-600 rounded-3xl h-[250px] w-[500px] flex flex-col gap-3 justify-center mr-20 mt-auto mb-auto">
              <h2 className="text-white text-3xl font-semibold text-center">
                ABOUT DAZZY
              </h2>
              <div className="flex gap-5 justify-center text-center mt-5">
                <div className="text-white font-bold text-2xl bg-black rounded-2xl h-[80px] w-[100px] pt-2.5">
                  150 +{" "}
                  <p className="text-white text-xs font-light">
                    Product Rating
                  </p>
                </div>
                <div className="text-white font-bold text-2xl bg-black rounded-2xl h-[80px] w-[100px] pt-2.5">
                  36 <p className="text-white text-xs font-light">Brands</p>
                </div>
                <div className="text-white font-bold text-2xl bg-black rounded-2xl h-[80px] w-[100px] pt-2.5">
                  15+{" "}
                  <p className="text-white text-xs font-light">
                    Export Destination
                  </p>
                </div>
              </div>
              <p
                className="text-center mt-2 text-white"
                style={{ wordSpacing: "2px" }}
              >
                A Wide Range Of Confectionery Items
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#111] text-white py-16 px-4 flex flex-col md:flex-row items-center justify-center relative mt-20">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/footeraboveboard.png"
              alt="Chef"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 px-6 relative">
            <div className="text-orange-500 text-sm font-semibold mb-2 flex items-center gap-2">
              <span>🍽</span> TESTIMONIALS <span>🍽</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 max-w-xl relative">
              <div className="flex items-center mb-4">
                <img
                  src="/path/to/profile.jpg"
                  alt="Albert Flores"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Albert Flores</h3>
                  <p className="text-sm text-gray-500">Web Designer</p>
                  <div className="text-yellow-500 mt-1">★★★★☆</div>
                </div>
              </div>
              <p className="text-gray-600">
                Penatibus magnis dis point parturient montes nascetur ridiculus
                mus Ut id lorem ac enim the vestibulum blandit nec sit amet
                felis. Fusce quis diam odio Cras mattis mi quis tincidunt
              </p>
              <div className="absolute top-4 right-4 text-orange-500 text-3xl font-bold">
                ”
              </div>
            </div>
            <div className="flex mt-6 space-x-4">
              <button className="w-10 h-10 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition duration-300">
                ←
              </button>
              <button className="w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 flex items-center justify-center transition duration-300">
                →
              </button>
            </div>
          </div>
        </section>
        <footer className="bg-[#3b1e1d] text-[#f2e9df] py-10 relative mt-20">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#ed1c24] rounded-2xl px-8 py-4 flex justify-between items-center w-[90%] max-w-4xl text-white font-medium text-center text-sm md:text-base">
            <div className="w-1/3 font-light">Address</div>
            <div className="w-1/3 font-light">Mail</div>
            <div className="w-1/3 font-light">Customer care no</div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
            <img
              src="/images/dazzyfooterlogo.png"
              alt="Dazzy Logo"
              className="w-32 mb-6 md:mb-0"
            />
            <h2 className="text-3xl font-extrabold text-center md:text-right">
              footer details
            </h2>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;
