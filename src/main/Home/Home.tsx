import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { forwardRef, useCallback, useState } from "react";
import AnimatedNumber from "../../components/AnimatedNumber";
import { TextAnimation } from "../../components/TextAnimation";
import { Link } from "react-router";
import Autoplay from "embla-carousel-autoplay";
import "./home.css";
type ProductsType = {
  name: string;
  url: string;
  className?: string;
}[];

export const ProductsList: ProductsType = [
  {
    name: "chocolate bar",
    url: "/images/1stimg.png",
  },
  {
    name: "centerfilled chocolate",
    url: "/images/2ndimg.png",
  },
  {
    name: "decorative chocolate",
    url: "/images/DECORATIVE-CHOCOLATE.png",
  },
  {
    name: "Crunchy chocolate",
    url: "/images/4thimg.png",
    className: "left-[0px]",
  },
  {
    name: "nought bar",
    url: "/images/5thimg.png",
  },
  {
    name: "wafer rolls",
    url: "/images/6thimg.png",
  },
  {
    name: "candy",
    url: "/images/CANDY.png",
  },
  {
    name: "toffee",
    url: "/images/TOFFEE.png",
    className: "left-[25px] top-[10px]",
  },
  {
    name: "lollipop",
    url: "/images/10thimg.png",
  },
  {
    name: "jelly",
    url: "/images/JELLY.png",
  },
];

const Home = () => {
  const autoplayOptions = { delay: 2000, stopOnInteraction: false };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const [] = useEmblaCarousel({ loop: true });

  const [aboutModal, setAboutModal] = useState(false);
  const [emblaSlideRef, emblaSlideApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

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
      <AnimatePresence mode="wait">
        {aboutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-[rgba(0,0,0,0.3)] fixed h-screen w-full z-10 top-0 flex justify-center items-center"
            onClick={() => {
              setAboutModal(false);
              document.body.style.overflow = "auto";
            }}
          >
            <motion.section
              className="rounded-xl max-w-[90%]"
              animate={{
                backgroundColor: "#f4f1ea",
              }}
              transition={{
                delay: 0.3,
              }}
            >
              <motion.img
                layoutId="aboutImage"
                className="w-[600px] max-w-full h-auto rounded-lg"
                src="/images/25ywarsdashboard.png"
                transition={{
                  duration: 0.3,
                }}
              />
              <motion.div
                className="*:text-center space-y-3 grid"
                initial={{ gridTemplateRows: "0fr" }}
                animate={{
                  gridTemplateRows: "1fr",
                }}
                transition={{
                  delay: 0.4,
                }}
              >
                <div className="overflow-hidden">
                  <TextAnimation text="25 Years" />
                  <p className="font-bold uppercase">
                    expierience in food industries
                  </p>
                  <p className="text-wrap w-[500px] mx-auto pb-2">
                    Founded in 2001, Dazzy is a family-owned confectionery house
                    producing high-quality sugar candies and moulded chocolate
                    specialties. With decades of experience, Dazzy is now one of
                    the largest and most trusted confectionery
                    manufacturers in the world.
                  </p>
                </div>
              </motion.div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
      <section className="h-[500px] bg-gray-700 flex items-center justify-center">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/images/Videos/DAZZY ECLAIRS TOFFEE.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="bg-[#eb0029]">
        <div className="max-w-[1000px] uppercase text-white  mx-auto font-semibold flex justify-center md:gap-16 text-lg py-2 flex-col md:flex-row gap-2 items-center">
          <p>fssai & iso certiefied</p>
          <p>25+ year experience</p>
          <p>100%veg</p>
          <p>pan india delivery</p>
        </div>
      </section>
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
          style={{ backgroundImage: "url('/images/rooftop.png')" }}
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
      <section className=" bg-[#f4f1ea] ">
        <TextAnimation text="Our Brands" />
        <p
          className="text-center mt-2 text-gray-500 "
          style={{
            wordSpacing: "2px",
          }}
        >
          A Wide Range Of Confectionery Items
        </p>

        <div className=" w-[54%] lg:w-[80%] max-w-[1000px] mx-auto relative mt-10 ">
          <div className="overflow-hidden relative " ref={emblaRef}>
            <div className="flex -ml-4">
              {Array(18)
                .fill("")
                .map((_, index) => (
                  <div
                    className="relative flex-[0_0_100%]  lg:flex-[0_0_20%] md:pl-4 flex justify-center"
                    key={index}
                  >
                    <img
                      src={`/images/logos/${index + 1}.png`}
                      alt={`Slide ${index + 1}`}
                      className="w-28 object-contain aspect-auto transition duration-300 transform hover:scale-110"
                    />
                  </div>
                ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-x-full -translate-y-1/2 bg-[#eb0029] aspect-square h-12 font-bold text-white text-4xl rounded-full flex items-center justify-center"
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
            className="absolute top-1/2 left-full   -translate-y-1/2 bg-[#eb0029] text-white aspect-square h-12 font-bold text-4xl rounded-full flex items-center justify-center"
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
        <section className="relative isolate">
          <div className="absolute h-full w-full bg-[#eb0029]  -left-[20%] md:-left-[60%] rounded-tr-[250px] z-[-1] "></div>
          <section className="md:h-[650px] lg:h-[550px] max-w-[1000px] mx-auto  lg:mr-auto  mt-16 md:mt-8 lg:mt-16 grid md:grid-cols-2">
            <motion.img
              layoutId="aboutImage"
              src="/images/25ywarsdashboard.png"
              className="w-[90%] sm:w-[70%] md:w-[90%] xl:w-[600px] xl:-translate-x-[30%] !max-w-max md:my-auto  mx-auto lg:mr-auto lg:ml-0 my-8 "
            />
            <div className="bg-[#f4f1ea] pt-8 md:ml-auto flex ">
              <div className="justify-self-center items-center self-center !h-fit mx-auto md:h-auto lg:mb-10">
                <h2 className="font-bold capitalize text-5xl text-[#eb0029] tracking-wider">
                  25 Years
                </h2>
                <p className="font-bold uppercase">
                  of expierience in food industries
                </p>
                <p className="lg:w-[400px] text-wrap w-[300px]">
                  Founded in 2001, Dazzy is a family-owned confectionery house
                  producing high-quality sugar candies and moulded chocolate
                  specialties. With decades of experience, Dazzy is now one of
                  the largest and most trusted confectionery
                  manufacturers in the world.
                </p>
                {/* <MouseComponent className="my-4 sm:mb-10 lg:mb-0 rounded-lg "> */}
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#c70022" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#eb0029] text-white px-4 py-2 my-2 rounded"
                >
                  <Link to="/about-us" className="block">
                    Read More
                  </Link>
                </motion.button>

                {/* </MouseComponent> */}
              </div>
            </div>
          </section>
        </section>
      </section>
      <video
        src="/WITH TEXT.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full"
      />
      <section className="pt-8 bg-[#f4f1ea] ">
        <TextAnimation text="Best Sellers" />
        <p
          className="text-center mt-2 text-gray-500 "
          style={{
            wordSpacing: "2px",
          }}
        >
          A Wide Range Of Confectionery Items
        </p>

        <div className="w-[54%] md:w-[85%] max-w-[1000px] mx-auto relative md:mt-10">
          <div className="overflow-hidden" ref={emblaSlideRef}>
            <div className="flex md:px-10">
              {Array(11)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="relative  flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_20%] h-[300px] mr-14 md:mr-5 flex flex-col items-center justify-center"
                  >
                    <div className="bg-white absolute bottom-0 w-full h-[50%] rounded-t-[70px] shadow-xl z-0"></div>
                    <img
                      src="/images/brown.png"
                      alt="brown background"
                      className="absolute bottom-20  left-5 md:left-3 w-[80%] md:w-[90%] md:h-auto z-10 pointer-events-none select-none"
                    />

                    <img
                      src={`/images/BestSeller/${index + 1}.png`}
                      alt={`Slide ${index + 1}`}
                      className="absolute z-20 top-[15%] sm:top-[0%] mt-5 w-28 h-[150px] md:h-[200px]  sm:w-[155px]  object-contain animate-upDown"
                    />

                    <button className="bg-red-600 text-white w-20 md:w-[100px] py-1 md:py-2 mt-auto mb-6 z-20 text-[12px]">
                      READ MORE
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={scrollSlidePrev}
            className="absolute top-1/2 -translate-x-full -translate-y-1/2 bg-[#eb0029] aspect-square h-12 font-bold text-white rounded-full flex items-center justify-center ml-[-10px]"
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
            className="absolute top-1/2 left-full -translate-y-1/2  bg-[#eb0029] text-white aspect-square h-12 font-bold rounded-full flex items-center justify-center ml-[10px]"
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
          className="h-[700px] overflow-hidden  mt-10 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/images/SLIEDER.png')" }}
        >
          <div className="flex  justify-center lg:justify-end h-full max-w-[1000px] mx-auto">
            <div className="bg-red-600 rounded-[50px] h-[450px] lg:h-[250px] w-[80%] md:w-[500px] flex flex-col gap-3 justify-center ml-5 mr-5 lg:ml-0  lg:mr-20 mt-auto mb-auto">
              <h2 className="text-white lg:text-3xl font-semibold text-center">
                ABOUT DAZZY
              </h2>
              <div className="flex flex-col md:flex-row gap-5 justify-center text-center mt-5 items-center">
                <div className="text-white font-bold lg:text-2xl bg-black rounded-2xl h-[80px] w-[100px] pt-2.5">
                  <AnimatedNumber value={50} className="text-[24px]" /> +{" "}
                  <p className="text-white text-xs font-bold">Brands</p>
                </div>
                <div className="text-white font-bold text-2xl bg-black rounded-2xl h-[80px] w-[100px] pt-2.5">
                  <AnimatedNumber value={300} />+{" "}
                  <p className="text-white text-xs font-bold">SKU</p>
                </div>
                <div className="text-white font-bold text-2xl bg-black rounded-2xl h-[80px] w-[100px] pt-2.5">
                  <AnimatedNumber value={1000} />+{" "}
                  <p className="text-white text-xs font-bold">Team</p>
                </div>
              </div>
              <p
                className="text-center mt-2 text-white font-bold text-lg"
                style={{
                  wordSpacing: "2px",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.4)",
                }}
              >
                Pan India Presence
              </p>
            </div>
          </div>
        </section>
        <section className="relative bg-[#111] text-white flex items-center justify-center min-h-[600px] px-6 isolate">
          <video
            src="/What Our Clients Say Background .mp4 "
            loop
            muted
            autoPlay
            playsInline
            className="absolute h-full w-full z-[-1] object-cover"
          ></video>
          <div className="text-center max-w-xl px-4">
            <div className="flex justify-center items-center gap-2 mb-4 text-orange-500 text-sm font-semibold">
              <img src="/images/feedback.png" className="w-6 h-6 invert" />
              <h2>TESTIMONIALS</h2>
              <img src="/images/feedback.png" className="w-6 h-6 invert" />
            </div>
            <h3 className="text-3xl font-bold mb-6">What Our Clients Say</h3>
            <Slider />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;

const testimonials = [
  {
    name: "Albert Flores",
    occupation: "Web Designer",
    ratings: "★★★★☆",
    review:
      " Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt",
    id: 1,
  },
  {
    name: "Albert Flores",
    occupation: "Web Designer",
    ratings: "★★★★☆",
    review:
      " Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt",
    id: 2,
  },
  {
    name: "Albert Flores",
    occupation: "Web Designer",
    ratings: "★★★★☆",
    review:
      " Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt",
    id: 3,
  },
];

const Slider = () => {
  const [selectedItem, setSelectedItem] = useState(testimonials[0]);
  const [direction, setDirection] = useState<1 | -1>(1);

  function setSlide(newDirection: 1 | -1) {
    const nextItem = wrap(
      1,
      testimonials.length,
      selectedItem.id + newDirection
    );
    setSelectedItem(testimonials[nextItem - 1]);
    setDirection(newDirection);
  }

  return (
    <>
      <section>
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <Slide
            name={selectedItem.name}
            occupation={selectedItem.occupation}
            ratings={selectedItem.ratings}
            review={selectedItem.review}
            key={selectedItem.id}
          />
        </AnimatePresence>
      </section>
      <div className="flex mt-6 space-x-4 mx-auto w-fit *:text-2xl *:font-extrabold *:grid *:place-items-center  pb-16 sm:pb-0">
        <button
          className="w-10 h-10 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition duration-300"
          onClick={() => setSlide(-1)}
        >
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
        <button
          className="w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 flex items-center justify-center transition duration-300"
          onClick={() => setSlide(1)}
        >
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
    </>
  );
};

const Slide = forwardRef(function Slide(
  {
    name,
    occupation,
    ratings,
    review,
  }: {
    name: string;
    occupation: string;
    ratings: string;
    review: string;
  },
  ref: React.Ref<HTMLDivElement>
) {
  const direction = usePresenceData();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          visualDuration: 0.5,
          bounce: 0.4,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0,
        transformOrigin: direction === -1 ? "right center" : "left center",
      }}
      className="bg-white text-gray-800 rounded-xl lg:h-[315px] shadow-lg p-6 max-w-xl relative border-orange-500 border-t-4 h-[250px] flex flex-col  justify-center  "
    >
      <div className="flex items-center mb-4">
        <img
          src="images/user.jpg"
          alt="Albert Flores"
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="font-bold text-sm md:text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{occupation}</p>
          <div className="text-yellow-500 mt-1">{ratings}</div>
        </div>
      </div>
      <p className="text-gray-600 text-sm md:text-[16px]">{review}</p>
      <div className="absolute top-0 right-4 text-orange-500 text-[4.5rem] font-bold">
        ”
      </div>
    </motion.div>
  );
});
