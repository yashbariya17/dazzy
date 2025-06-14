import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import "./aboutus.css"
import { useEffect, useRef, useState } from "react"

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
] as const

type TimelineBlockProps = {
  title: string
  description: string
  image: string
  blockNo: number
}

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
          margin: "0px 0px -40% 0px",
        }}
        className={`${blockNo === 2 ? "col-start-3" : "col-start-1"} ${
          blockNo === 1
            ? "row-start-1"
            : blockNo === 2
            ? "row-start-2"
            : "row-start-3"
        } hidden md:block  w-full px-10 my-auto  col-span-1 row-span-1 `}
      >
        <div
          className="px-[8rem] "
          style={{ wordSpacing: "2px" }}
        >
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
          margin: "0px 0px -40% 0px",
        }}
        className={`${blockNo === 2 ? "col-start-1" : "col-start-3"} ${
          blockNo === 1
            ? "row-start-1"
            : blockNo === 2
            ? "row-start-2"
            : "row-start-3"
        } hidden md:flex w-full h-full  col-span-1 row-span-1  justify-center items-center relative`}
      >
        <img
          src={image}
          alt={title}
          className="h-[90%] aspect-square rounded-full border-6 border-solid border-red-500 object-cover relative z-10"
        />
        <div
          className={`${
            blockNo === 2 ? "-right-8" : "-left-8"
          } absolute bg-red-500 h-2 w-[50%]  z-0`}
        >
          <span
            className={`${
              blockNo === 2 ? "left-full" : ""
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
  )
}

const AboutUs = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [sectionTop, setSectionTop] = useState(0)
  const [sectionHeight, setSectionHeight] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (el) {
      const onResize = () => {
        const rect = el.getBoundingClientRect()
        const scrollTop = window.scrollY || window.pageYOffset
        setSectionTop(rect.top + scrollTop)
        setSectionHeight(el.offsetHeight)
      }
      onResize()
      window.addEventListener("resize", onResize)
      return () => window.removeEventListener("resize", onResize)
    }
  }, [])

  const top = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })


  const y = useTransform(
    top,
    [sectionTop - 80 - window.innerHeight / 2, sectionTop + sectionHeight],
    [0, sectionHeight]
  )
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
  ]

  return (
    <main className="relative bg-[#fff8f0] min-h-[2100px] overflow-hidden">
      <section className="h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/images/premium-chocolates.jpg')" }} />
      <section className="text-center py-12 md:py-16 bg-[#2D0B05] text-[#E5C387]">
        <p className="text-5xl md:text-7xl tracking-widest font-[Cinzel]">25 YEARS OF SWEET MEMORIES</p>
      </section>

      <div
        ref={ref}
        className="relative h-auto md:h-[1500px] grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] grid-rows-3 overflow-hidden"
      >
        <div className=" h-full w-[100px] bg-black col-span-1 col-start-2 row-span-3 relative ">
          <div
            className="w-[4px] h-full mx-auto"
            style={{
              background:
                "repeating-linear-gradient(to bottom, white 0, white 30px, transparent 30px, transparent 50px)",
            }}
          ></div>
          <motion.img
            src="/images/truck.png"
            alt="truck"
            style={{
              top: y,
            }}
            className="absolute left-1/2 -translate-x-1/2 z-10 w-[125px] md:w-[156px] !max-w-max"
          />
        </div>

        {aboutData.map((i, no) => (
          <TimelineBlock
            {...i}
            blockNo={no + 1}
          />
        ))}
      </div>

      {/* Highlights */}
      <div className="w-full bg-[#2d0000] text-white text-center py-4 flex flex-wrap justify-center gap-8 text-sm md:text-base font-medium tracking-wide">
        <span>FSSAI & ISO CERTIFIED</span>
        <span>25+ YEAR EXPERIENCE</span>
        <span>100% VEG</span>
        <span>PAN INDIA DELIVERY</span>
      </div>

      {/* Vision and Our Team */}
      <div className="w-full flex flex-col items-center mt-10 px-4">
        <h2 className="text-8xl text-red-600 mb-4 text-center cream-cake-font">Vision of Company</h2>
        <p className="max-w-3xl text-center text-gray-700 mb-12 text-sm md:text-base">
          All DAZZY brands are created by individuals who prioritize the consumer, utilizing the finest ingredients and cutting-edge production
          technology. We adhere to transparent quality control standards to build trust and credibility. This commitment results in exceptional
          quality and a delightful experience.
        </p>

        <h3 className="text-8xl text-red-600 mb-2 text-center cream-cake-font">Our Team</h3>
        <p className="text-center text-gray-600 mb-10 text-xs md:text-xl">A Wide Range Of Confectionery Items</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10 px-4 max-w-6xl w-full">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-t-[140px] shadow-lg pt-10 pb-6 px-4 relative flex flex-col items-center">
              <img
                src={`/images/${member.image}`}
                alt={member.name}
                className={`w-[180px] h-[180px] object-cover rounded-t-[100px] ${member.borderColor} border-[6px]`}
              />
              <div className="absolute top-[210px] left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.88L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.11C16.5 7.63 17.22 7.97 18 7.97C19.66 7.97 21 6.63 21 4.97C21 3.31 19.66 1.97 18 1.97C16.34 1.97 15 3.31 15 4.97C15 5.21 15.04 5.44 15.09 5.67L8.04 9.86C7.5 9.34 6.78 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.78 15 7.5 14.66 8.04 14.14L15.16 18.32C15.11 18.54 15.08 18.77 15.08 19C15.08 20.66 16.42 22 18.08 22C19.74 22 21.08 20.66 21.08 19C21.08 17.34 19.74 16 18.08 16Z" />
                  </svg>
                </div>
              </div>
              <div className="mt-14 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default AboutUs
