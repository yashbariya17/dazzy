import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

type ProductsType = {
  name: string;
  url: string;
  className?: string;
}[];

const Products: ProductsType = [
  {
    name: "cholcloate bar",
    url: "/images/1stimg.png",
  },
  {
    name: "centerfilled cholcloate",
    url: "/images/2ndimg.png",
  },
  {
    name: "decorative cholcloate",
    url: "",
  },
  {
    name: "penut cholcloate",
    url: "/images/4thimg.png",
  },
  {
    name: "nought bar",
    url: "/images/5thimg.png",
  },
  {
    name: "waffer rolls",
    url: "/images/6thimg.png",
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
    url: "/images/10thimg.png",
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
    <div className="w-full overflow-x-hidden">
      <section
        className="h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/choclatebigslider.png')" }}
      ></section>
      <div className="uppercase text-white bg-red-500 font-semibold flex justify-center md:gap-16 text-lg py-2 flex-col md:flex-row gap-2 items-center">
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
          className="bg-amber-100 mt-[8rem] h-auto lg:h-[550px] w-full bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: "url('/images/rooftop.png')" }}
        >
          <div className="grid  grid-cols-2  justify-items-center md:grid-cols-4 lg:grid-cols-5 grid-rows-2 justify-center px-5 gap-y-[8rem] gap-x-[4rem] relative -top-10 ">
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
                  src={i.url}
                  className={`h-[100px] absolute top-0 -translate-y-[80%] ${i.className}`}
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

        <data> </data>
        <div className=" w-[54%] lg:w-[80%] mx-auto relative mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {Array(6)
                .fill("")
                .map((_, index) => (
                  <div
                    className="relative flex-[0_0_100%]  lg:flex-[0_0_20%] md:pl-4 flex justify-center"
                    key={index}
                  >
                    <img
                      src={`/images/logos/logo_${index + 1}.png`}
                      alt={`Slide ${index + 1}`}
                      className="w-32 object-contain aspect-auto mix-blend-color-burn"
                    />
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-x-full -translate-y-1/2 bg-red-500 aspect-square h-12 font-bold text-white text-4xl rounded-full flex items-center justify-center"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute top-1/2 left-full -translate-y-1/2 md:-translate-y-1/2 md:-translate-1/2 bg-red-500 text-white aspect-square h-12 font-bold text-4xl rounded-full flex items-center justify-center"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <section className="h-[800px] lg:h-[550px] overflow-hidden mt-16 grid lg:grid-cols-2 ">
          <div className="h-[350px] lg:h-[800px] rounded-tr-[250px] bg-red-500 lg:w-[500px] w-[300px] relative">
            <div
              className="absolute h-[180px] lg:h-[300px] w-[280px] lg:w-[480px] bg-gray-500 right-10 md:right-0 translate-x-[30%] lg:translate-x-[20%] translate-y-[80%] lg:translate-y-[45%] bg-contain lg:bg-cover "
              style={{
                backgroundImage: "url('/images/25ywarsdashboard.png')",
              }}
            ></div>
          </div>
          <div className="md:translate-y-[8%] justify-self-center">
            <h2 className="font-bold capitalize text-5xl text-red-500 tracking-wider">
              25 Years
            </h2>
            <p className="font-bold uppercase">
              expierience in food industries
            </p>
            <p className="lg:w-[400px] text-wrap w-[300px]">
              Established in 1995 in Baroda, Gujarat, Dazzy Food Industries
              began as a confectionery distribution company founded by Mr.
              Deepak Kanani. With strong support from his brothers, the company
              grew steadily, guided by the motto: “To Deliver the Best.” In
              2002, Dazzy launched its own production line, expanding into
              lollipops, chocolates, candies, toffees, and éclairs. Known for
              innovation in both product and packaging, Dazzy has created
              bestselling items that stand out in the market. Today, Dazzy is a
              trusted name in the Indian confectionery industry with a growing
              pan-India presence and a focus on quality, creativity, and market
              expansion.
            </p>
            <button className="bg-black text-white px-4 py-2 mt-4 sm:mb-10 lg:mb-0">
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
                      className="absolute z-99 top-[15%] sm:top-[0%] mt-4 w-[125px] sm:w-[175px] h-auto object-contain"
                    />
                    <button className="bg-red-600 text-white w-20 md:w-[100px] py-1 md:py-2 mt-auto mb-6 z-10 text-[12px]">
                      READ MORE
                    </button>

                    <div className="bg-white absolute bottom-0 w-full h-[50%] rounded-t-[70px]"></div>
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={scrollSlidePrev}
            className="absolute top-1/2 -translate-x-full -translate-y-1/2 bg-red-500 aspect-square h-12 font-bold text-white rounded-full flex items-center justify-center"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollSlideNext}
            className="absolute top-1/2 left-full -translate-y-1/2 md:-translate-x-1/2 bg-red-500 text-white aspect-square h-12 font-bold rounded-full flex items-center justify-center"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <section
          className="h-[700px] overflow-hidden mr-10 ml-10 mt-20 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/images/uperportion.png')" }}
        >
          <div className="flex lg:justify-end h-full">
            <div className="bg-red-600 rounded-3xl h-[450px] lg:h-[250px] w-auto md:w-[500px] flex flex-col gap-3 justify-center ml-5 mr-5 lg:ml-0  lg:mr-20 mt-auto mb-auto">
              <h2 className="text-white lg:text-3xl font-semibold text-center">
                ABOUT DAZZY
              </h2>
              <div className="flex flex-col md:flex-row gap-5 justify-center text-center mt-5 items-center">
                <div className="text-white font-bold lg:text-2xl bg-black rounded-2xl h-[80px] w-[100px] pt-2.5">
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
        <section className="bg-[#111] text-white flex flex-col md:flex-row items-center  relative mt-20 ">
          <div className="w-auto h-[600px] flex justify-center relative ">
            <img
              src="/images/footeraboveboard.png"
              alt="Chef"
              className="rounded-lg w-full h-full object-cover "
            />
          </div>
          <div className="w-fit top-12 md:mt-0 px-6 relative md:right-10 ">
            <div className="text-orange-500 text-sm font-semibold mb-2 flex items-center gap-2 mx-auto w-fit">
              <span>🍽</span> TESTIMONIALS <span>🍽</span>
            </div>
            <div className="text-3xl font-bold text-white mb-6 mx-auto w-fit">
              What Our Clients Say
            </div>
            <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 max-w-xl relative border-orange-500 border-t-4 h-[250px] flex flex-col  justify-center  ">
              <div className="flex items-center mb-4">
                <img
                  src="images/user.jpg"
                  alt="Albert Flores"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
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
              <div className="absolute top-0 right-4 text-orange-500 text-[4.5rem] font-bold">
                ”
              </div>
            </div>
            <div className="flex mt-6 space-x-4 mx-auto w-fit *:text-2xl *:font-extrabold *:grid *:place-items-center  pb-16 sm:pb-0">
              <button className="w-10 h-10 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition duration-300">
                <svg
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 flex items-center justify-center transition duration-300">
                <svg
                  width="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
