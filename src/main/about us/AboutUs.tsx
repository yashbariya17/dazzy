import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./aboutus.css";
import { useEffect, useRef, useState } from "react";
// import TeamMemberCard from "../../components/Card";

const aboutData = [
  {
    title: "Journey",
    description: (
      <p className="mb-2 text-sm md:text-base ">
        The company’s remarkable growth is attributed to the visionary
        leadership of <span className="font-bold">Mr. Dipak Kanani</span>,
        Chairman and CEO, ably supported by Managing Directors and his brothers
        - <span className="font-bold">Mr. Tushar Kanani</span> and{" "}
        <span className="font-bold">Mr. Ashok Kanani</span>. With deep-rooted
        expertise in the confectionery domain, the leadership team has steered
        the company with a singular focus—offering exceptional quality at
        optimal value while continually pushing the boundaries of innovation in
        the confectionery sector.
      </p>
    ),
    image: "/images/founder2.webp",
    side: "right",
  },
  {
    title: "Since 2001",
    description: (
      <p className="mb-2 text-sm md:text-base ">
        Since its inception in 2001, <span className="font-bold">Dazzy</span>{" "}
        has been dedicated to crafting premium sugar confectionery and moulded
        chocolate specialties that bring sweetness to life’s most cherished
        moments. What began as a modest production unit in the Sayajipura area
        of Vadodara has evolved into one of the world’s leading family-owned
        confectionery enterprises—giving rise to{" "}
        <span className="font-bold">Dazzy Food Industries</span>.
      </p>
    ),
    image: "/images/founder2.webp",
    side: "left",
  },
  {
    title: "Since 2007",
    description: (
      <p className="mb-2 text-sm md:text-base ">
        The journey began with the success of its flagship product,{" "}
        <span className="font-bold">Éclair Gold</span>, which quickly gained
        popularity and laid the foundation for the brand’s rapid growth and
        innovation. Over the years, Dazzy has consistently expanded its product
        portfolio, keeping quality and consumer delight at its core.
      </p>
    ),
    image: "/images/factory.webp",
    side: "right",
  },
  {
    title: "Since 2010",
    description: (
      <p className="mb-2 text-sm md:text-base ">
        Dazzy marked a significant milestone with the establishment of its
        second large-scale manufacturing facility—{" "}
        <span className="font-bold">Dazzy Products Pvt. Ltd.</span> — spanning
        over 100,000 sq. ft. in Manjusar GIDC, Vadodara. This facility houses
        state-of-the-art infrastructure dedicated to the production of moulded
        chocolates, lollipops, and candies. It is home to several iconic Dazzy
        brands such as{" "}
        <span className="font-bold">
          Dairy Kiss, Endon, Big Star, Jellos, and 3 Stixs
        </span>
        .
      </p>
    ),
    image: "/images/factory.webp",
    side: "left",
  },
  {
    title: "Since 2024",
    description: (
      <p className="mb-2 text-sm md:text-base ">
        Further expanding its capabilities, Dazzy launched its most advanced
        manufacturing unit in <span className="font-bold">2024</span> under{" "}
        <span className="font-bold">Dazzy Food Pvt. Ltd.</span>, covering an
        area of <span className="font-bold">200,000 sq. ft.</span> Equipped with
        cutting-edge technology and modern production lines, this facility
        manufactures premium chocolate brands such as{" "}
        <span className="font-bold">
          D’Love, Truffles, Oh! Wow, and KingKong
        </span>
        , among many others.
      </p>
    ),
    image: "/images/factory.webp",
    side: "right",
  },
  {
    title: "Today",
    description:
      "Today, Dazzy’s delectable creations are enjoyed across India and in multiple international markets. Known for their consistent taste, quality, and thoughtful packaging, Dazzy products have become an integral part of daily indulgence and gifting traditions—reflecting the brand’s commitment to excellence and joy in every bite. Driven by a dedicated team of over 1,000 professionals, Dazzy continues to innovate, grow, and deliver delight with every product it creates.",
    image: "/images/factory.webp",
    side: "left",
  },
] as const;

type TimelineBlockProps = {
  title: string;
  description: any;
  image: string;
  blockNo: number;
};

const TimelineBlock = ({
  title,
  description,
  image,
  blockNo,
}: TimelineBlockProps) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: blockNo % 2 === 0 ? 100 : -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{
          once: true,
          amount: 0.5,
          margin: "0px 0px -40% 0px",
        }}
        className={`${blockNo % 2 === 0 ? "col-start-3" : "col-start-1"} ${
          blockNo === 1
            ? "row-start-1"
            : blockNo === 2
            ? "row-start-2"
            : blockNo === 3
            ? "row-start-3"
            : blockNo === 4
            ? "row-start-4"
            : blockNo === 5
            ? "row-start-5"
            : "row-start-6"
        } hidden md:block  w-full px-10 my-auto  col-span-1 row-span-1 `}
      >
        <div className="px-[8rem] " style={{ wordSpacing: "2px" }}>
          <h3 className="mb-2 cream-cake-font text-red-500 font-cursive text-[4rem]">
            {title}
          </h3>

          {description}
          {/* <p className="mb-2 text-sm md:text-base font-semibold">
          </p> */}
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: blockNo % 2 === 0 ? -100 : 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{
          once: true,
          amount: 0.5,
          margin: "0px 0px -40% 0px",
        }}
        className={`${blockNo % 2 === 0 ? "col-start-1" : "col-start-3"} ${
          blockNo === 1
            ? "row-start-1"
            : blockNo === 2
            ? "row-start-2"
            : blockNo === 3
            ? "row-start-3"
            : blockNo === 4
            ? "row-start-4"
            : blockNo === 5
            ? "row-start-5"
            : "row-start-6"
        } hidden md:flex w-full h-full  col-span-1 row-span-1  justify-center items-center relative`}
      >
        <img
          src={image}
          alt={title}
          className="h-[90%] aspect-square rounded-full border-6 border-solid border-red-500 object-cover relative z-10"
        />
        <div
          className={`${
            blockNo % 2 === 0 ? "-right-8" : "-left-8"
          } absolute bg-red-500 h-2 w-[50%]  z-0`}
        >
          <span
            className={`${
              blockNo % 2 === 0 ? "left-full" : ""
            } block rounded-full bg-red-500 aspect-square h-6 absolute top-1/2  -translate-y-1/2`}
          >
            {" "}
          </span>
        </div>
      </motion.div>
      <div
        className="md:hidden h-[100vh] w-full flex flex-col items-center justify-center"
        style={{
          gridRowStart: blockNo,
        }}
      >
        <motion.img
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: "all",
          }}
          transition={{
            duration: 0.4,
          }}
          src={image}
          alt={title}
          className="w-[80%] max-w-[200px] aspect-square rounded-full border-6 border-solid border-red-500 object-cover relative z-10 mx-auto mt-2"
        />
        <motion.div
          className="px-[2rem] "
          style={{ wordSpacing: "2px" }}
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: "all",
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <h3 className="mb-1 cream-cake-font text-red-500 font-cursive text-[3.5rem] text-center">
            {title}
          </h3>
          <p className="mb-2 text-sm md:text-base font-semibold">
            {description}
          </p>
        </motion.div>
      </div>
    </>
  );
};

const AboutUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref });
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onResize = () => {
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;
        setSectionTop(rect.top + scrollTop);
        setSectionHeight(el.offsetHeight);
      };
      onResize();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, []);

  const top = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(
    top,
    [sectionTop - 80 - window.innerHeight / 2, sectionTop + sectionHeight],
    [0, sectionHeight]
  );
  // const teamMembers = [
  //   {
  //     name: "Ralph Edwards",
  //     role: "Chef Lead",
  //     image: "chef1.webp",
  //     borderColor: "border-red-500",
  //   },
  //   {
  //     name: "Leslie Alexander",
  //     role: "Chef Assistant",
  //     image: "chef2.webp",
  //     borderColor: "border-orange-400",
  //   },
  //   {
  //     name: "Ronald Richards",
  //     role: "Chef Assistant",
  //     image: "chef3.webp",
  //     borderColor: "border-red-500",
  //   },
  // ];

  return (
    <main className="relative bg-[#fff8f0] min-h-[2100px] overflow-hidden">
      <img
        src="/images/Quality You Can Trust,.webp"
        alt="logo"
        loading="eager"
        fetchPriority="high"
        width={5335}
        height={1376}
        className="w-full h-auto lg:min-h-[310px] lg:max-h-[600px]  "
      />
      <section className="text-center py-12 md:py-16 bg-[#2D0B05] text-[#E5C387]">
        <p className="text-xl md:text-7xl tracking-widest font-[Cinzel] ">
          25 YEARS OF SWEET MEMORIES
        </p>
      </section>

      <div
        ref={ref}
        className="relative h-auto md:h-[3000px] grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] grid-rows-6 overflow-hidden"
      >
        <div className=" h-full w-[100px] bg-black col-span-1 col-start-2 row-span-6 relative ">
          <div
            className="w-[4px] h-full mx-auto"
            style={{
              background:
                "repeating-linear-gradient(to bottom, white 0, white 30px, transparent 30px, transparent 50px)",
            }}
          ></div>
          <motion.img
            src="/images/truck.webp"
            alt="truck"
            style={{
              top: y,
            }}
            className="absolute left-1/2 -translate-x-1/2 z-10 w-[125px] md:w-[156px] !max-w-max"
          />
        </div>

        {aboutData.map((i, no) => (
          <TimelineBlock {...i} blockNo={no + 1} />
        ))}
      </div>

      {/* Highlights */}
      <div className="w-full bg-[#2d0000] text-white text-center py-4 flex flex-wrap justify-center gap-8 text-sm md:text-base font-medium tracking-wide">
        <span>FSSAI & ISO CERTIFIED</span>
        <span>25+ YEAR EXPERIENCE</span>
        <span>100% VEG</span>
        <span>PAN INDIA DELIVERY</span>
      </div>

      <div className="relative w-full flex flex-col items-center mt-10 px-4">
        <div
          className="absolute hidden lg:flex left-0 xl:left-16 bottom-[-6%] w-50 h-50 bg-no-repeat bg-contain bg-left pointer-events-none"
          style={{ backgroundImage: "url('/videos/CARTOON STICK.gif')" }}
        ></div>

        <div
          className="absolute hidden lg:flex right-0 xl:right-16 bottom-[-6%] w-50 h-50 bg-no-repeat bg-contain bg-right pointer-events-none"
          style={{ backgroundImage: "url('/videos/CARTOON CHOCOLATE.gif')" }}
        ></div>

        <h2 className="text-8xl text-red-600 mb-4 text-center cream-cake-font">
          Vision of Company
        </h2>

        <p className="max-w-3xl text-center text-gray-700 mb-12 text-sm md:text-base leading-relaxed relative z-10">
          At <span className="font-bold text-red-600">Dazzy</span>, our mission
          is to craft
          <span className="font-semibold text-gray-900">
            {" "}
            exceptional confectionery&nbsp;
          </span>
          that brings
          <span className="font-bold text-red-600"> joy</span> to everyday
          moments — through
          <span className="font-semibold"> consistent quality</span>,
          <span className="font-semibold"> affordability</span>, and a
          <span className="font-semibold"> consumer-first approach</span>.
          <br />
          <br />
          Guided by a vision to be a
          <span className="font-bold text-gray-900"> trusted global brand</span>
          , we create our products using the
          <span className="font-semibold"> finest ingredients</span>,
          <span className="font-semibold"> advanced technology</span>, and
          <span className="font-semibold"> transparent quality practices</span>.
          <br />
          <br />
          This commitment ensures every bite delivers
          <span className="font-bold text-red-600"> delight</span>,
          <span className="font-bold text-red-600"> trust</span>, and a
          <span className="font-bold text-red-600"> memorable experience</span>.
        </p>

        {/* Decorative Divider */}
        <div className="w-full flex justify-center mb-12 relative z-10">
          <div className="border-t-4 border-red-600 w-1/4"></div>
          <div className="mx-2 text-red-600 font-bold">🍫</div>
          <div className="border-t-4 border-red-600 w-1/4"></div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
