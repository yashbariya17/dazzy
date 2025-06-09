import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  side: "right" | "left";
  visible: boolean;
};

const TimelineBlock = ({
  title,
  description,
  image,
  side,
  visible,
}: TimelineBlockProps) => {
  const animation = {
    hidden: { opacity: 0, x: side === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 0.6 }}
      className={`w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 absolute ${
        side === "left" ? "md:left-0 md:text-right" : "md:right-0 md:text-left"
      }`}
    >
      <div className="bg-white shadow-lg rounded-xl p-4 border-2 border-red-300">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2 text-sm md:text-base">{description}</p>
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
    </motion.div>
  );
};

const AboutUs = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < aboutData.length ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative bg-[#fff8f0] min-h-[2200px] overflow-hidden">
      {/* Header */}
      <section className="text-center py-12 md:py-16 bg-gradient-to-b from-yellow-600 to-amber-800 text-white text-3xl md:text-4xl font-bold tracking-wide">
        About Us
        <p className="text-lg md:text-xl mt-2 font-light tracking-widest">
          25 YEARS OF SWEET MEMORIES
        </p>
      </section>

      {/* Road & Timeline */}
      <div className="relative h-[1600px] flex justify-center">
        {/* Road */}
        <div className="absolute top-0 h-full w-[6px] bg-black z-0">
          <div
            className="w-[4px] h-full mx-auto"
            style={{
              background:
                "repeating-linear-gradient(to bottom, white 0, white 30px, transparent 30px, transparent 50px)",
            }}
          ></div>
        </div>

        {/* Truck */}
        <motion.img
          src="/images/truck.png"
          alt="truck"
          initial={{ y: -100 }}
          animate={{ y: Math.min(step, aboutData.length - 1) * 400 }}
          transition={{ type: "tween", duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 z-10 w-16 md:w-[80px]"
        />

        {/* Timeline Panels */}
        {aboutData.map((data, i) => (
          <div
            key={i}
            className="absolute w-full flex justify-center md:justify-between items-start"
            style={{ top: `${i * 400 + 100}px` }}
          >
            <TimelineBlock {...data} visible={step > i - 1} />
          </div>
        ))}
      </div>
      <div className="w-full bg-[#2d0000] text-white text-center py-4 flex flex-wrap justify-center gap-8 text-sm md:text-base font-medium tracking-wide">
        <span>FSSAI & ISO CERTIFIED</span>
        <span>25+ YEAR EXPERIENCE</span>
        <span>100% VEG</span>
        <span>PAN INDIA DELIVERY</span>
      </div>

      {/* Design & Team Section */}
      <div className="w-full flex flex-col items-center mt-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 text-center">
          Vision of Company
        </h2>
        <p className="max-w-3xl text-center text-gray-700 mb-12 text-sm md:text-base">
          All DAZZY brands are created by individuals who prioritize the
          consumer, utilizing the finest ingredients and cutting-edge production
          technology. We adhere to transparent quality control standards to
          build trust and credibility. This commitment results in exceptional
          quality and a delightful experience.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-2 text-center">
          Our Team
        </h3>
        <p className="text-center text-gray-600 mb-10 text-sm md:text-base">
          A Wide Range Of Confectionery Items
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
          {[
            {
              name: "Ralph Edwards",
              role: "Chef Lead",
              image: "/images/chef1.jpg",
            },
            {
              name: "Leslie Alexander",
              role: "Chef Assistant",
              image: "/images/chef2.jpg",
            },
            {
              name: "Ronald Richards",
              role: "Chef Assistant",
              image: "/images/chef3.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md w-64 sm:w-72 p-4 flex flex-col items-center border border-red-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
