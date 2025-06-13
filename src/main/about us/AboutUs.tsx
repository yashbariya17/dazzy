import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import './aboutus.css'

const aboutData = [
  {
    title: "Since 2001",
    description:
      "Since the inception of Dazzy, Mr. Dipak Kanani, Chairman and CEO, along with Managing Directors and his brothers, Mr. Tushar Kanani and Mr. Ashok Kanani, have been driven by a single objective: to provide the highest quality at the most competitive prices.",
    image: "/images/founder1.jpg",
    side: "right",
  },
  {
    title: "Since 2010",
    description:
      "With expansion and modernization, Dazzy grew into a full-scale production powerhouse, delivering across India.",
    image: "/images/founder2.jpg",
    side: "left",
  },
  {
    title: "Today",
    description:
      "Today, Dazzy continues to deliver trust and delight, with certified quality and a commitment to excellence.",
    image: "/images/factory.jpg",
    side: "right",
  },
] as const;

type TimelineBlockProps = {
  title: string;
  description: string;
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
          x: blockNo === 2 ? 100 : -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className={`${blockNo === 2 ? "col-start-3" : "col-start-1"} ${blockNo === 1
            ? "row-start-1"
            : blockNo === 2
              ? "row-start-2"
              : "row-start-3"
          }  w-full px-10 my-auto  col-span-1 row-span-1 `}
      >
        <div className="px-[8rem] " style={{ wordSpacing: "2px" }}>
          <h3 className="mb-2 cream-cake-font text-red-500 font-cursive text-[4rem]">
            {title}
          </h3>
          <p className="mb-2 text-sm md:text-base font-semibold">
            {description}
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: blockNo === 2 ? -100 : 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className={`${blockNo === 2 ? "col-start-1" : "col-start-3"} ${blockNo === 1
            ? "row-start-1"
            : blockNo === 2
              ? "row-start-2"
              : "row-start-3"
          } w-full h-full  col-span-1 row-span-1  flex justify-center items-center relative`}
      >
        <img
          src={image}
          alt={title}
          className="h-[90%] aspect-square rounded-full border-6 border-solid border-red-500 object-cover relative z-10"
        />
        <div
          className={`${blockNo === 2 ? "-right-8" : "-left-8"
            } absolute bg-red-500 h-2 w-[50%]  z-0`}
        >
          <span
            className={`${blockNo === 2 ? "left-full" : ""
              } block rounded-full bg-red-500 aspect-square h-6 absolute top-1/2  -translate-y-1/2`}
          >
            {" "}
          </span>
        </div>
      </motion.div>
    </>
  );
};

const AboutUs = () => {
  const { scrollY } = useScroll();

  const top = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(top, (i) => Math.max(0, Math.min(i , 1200)));
  const teamMembers = [
    {
      name: "Ralph Edwards",
      role: "Chef Lead",
      image: "chef1.jpg",
      borderColor: "border-red-500",
    },
    {
      name: "Leslie Alexander",
      role: "Chef Assistant",
      image: "chef2.jpg",
      borderColor: "border-orange-400",
    },
    {
      name: "Ronald Richards",
      role: "Chef Assistant",
      image: "chef3.jpg",
      borderColor: "border-red-500",
    },
  ];

  return (
    <main className="relative bg-[#fff8f0] min-h-[2100px] overflow-hidden">
      <section
        className="h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/premium-chocolates.jpg')" }}
      ></section>
      <section className="text-center py-12 md:py-16 bg-[#2D0B05] text-[#E5C387]">
        <p className="text-5xl md:text-7xl tracking-widest font-[Cinzel]">
          25 YEARS OF SWEET MEMORIES
        </p>
      </section>
      <div className="relative h-[1500px] grid grid-cols-[1fr_auto_1fr] grid-rows-3">
        <div className=" h-full w-[100px] bg-black col-span-1 col-start-2 row-span-3 ">
          <div
            className="w-[4px] h-full mx-auto"
            style={{
              background:
                "repeating-linear-gradient(to bottom, white 0, white 30px, transparent 30px, transparent 50px)",
            }}
          ></div>
        </div>

        <motion.img
          src="/images/truck.png"
          alt="truck"
          style={{
            top: y,
          }}
          className="absolute left-1/2 -translate-x-1/2 z-10 w-16 md:w-[80px]"
        />

        {aboutData.map((i, no) => (
          <TimelineBlock {...i} blockNo={no + 1} />
        ))}
      </div>
      <div className="w-full bg-[#2d0000] text-white text-center py-4 flex flex-wrap justify-center gap-8 text-sm md:text-base font-medium tracking-wide">
        <span>FSSAI & ISO CERTIFIED</span>
        <span>25+ YEAR EXPERIENCE</span>
        <span>100% VEG</span>
        <span>PAN INDIA DELIVERY</span>
      </div>

      {/* Design & Team Section */}
      <div className="w-full flex flex-col items-center mt-10 px-4">
        <h2 className="text-8xl md:text-8xl text-red-600 mb-4 text-center cream-cake-font">
          Vision of Company
        </h2>
        <p className="max-w-3xl text-center text-gray-700 mb-12 text-sm md:text-base">
          All DAZZY brands are created by individuals who prioritize the
          consumer, utilizing the finest ingredients and cutting-edge production
          technology. We adhere to transparent quality control standards to
          build trust and credibility. This commitment results in exceptional
          quality and a delightful experience.
        </p>

        <h3 className="text-8xl md:text-8xl text-red-600 mb-2 text-center cream-cake-font">
          Team Our Team
        </h3>
        <p className="text-center text-gray-600 mb-10 text-xs md:text-xl ">
          A Wide Range Of Confectionery Items
        </p>
        <div className="w-[60%] mx-auto relative mt-10">
          <div className="overflow-hidden">
            <div className="flex px-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative  flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] h-[300px] mr-6 flex flex-col items-center "
                >
                  <img
                    src={`/images/chef${index + 1}.jpg`}
                    alt={`Slide ${index + 1}`}
                    className="absolute z-99 top-[15%] sm:top-[0%] mt-4 w-[125px] sm:w-[175px] h-auto object-contain"
                  />

                  <div className="bg-white absolute bottom-0 w-full h-[50%] rounded-t-[70px]">
                    <div className="mt-20 pb-8 px-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
