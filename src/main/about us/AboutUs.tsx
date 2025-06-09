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
      className={`absolute w-1/2 px-8 top-0 ${
        side === "left" ? "left-0 text-right" : "right-0 text-left"
      }`}
    >
      <div className="bg-white shadow-lg rounded-xl p-4 border-2 border-red-300">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
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
    }, 2000); // every 2s a new panel appears
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative bg-[#fff8f0] min-h-[1800px] overflow-hidden">
      {/* Header */}
      <section className="text-center py-16 bg-gradient-to-b from-yellow-600 to-amber-800 text-white text-4xl font-bold tracking-wide">
        About Us
        <p className="text-xl mt-2 font-light tracking-widest">
          25 YEARS OF SWEET MEMORIES
        </p>
      </section>

      {/* Road */}
      <div className="relative h-[1400px] flex justify-center">
        <div className="absolute top-0 h-full w-[8px] bg-black z-0">
          <div
            className="w-[4px] h-full mx-auto"
            style={{
              background:
                "repeating-linear-gradient(to bottom, white 0, white 30px, transparent 30px, transparent 50px)",
            }}
          ></div>
        </div>

        {/* Truck Animation */}
        <motion.img
          src="/images/truck.png"
          alt="truck"
          initial={{ y: -100 }}
          animate={{ y: step * 400 }}
          transition={{ type: "tween", duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 z-10 w-[80px]"
        />

        {/* Timeline Blocks */}
        {aboutData.map((data, i) => (
          <div
            key={i}
            className="absolute top-[100px] left-0 right-0"
            style={{ top: `${i * 400 + 100}px` }}
          >
            <TimelineBlock {...data} visible={step > i} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AboutUs;
