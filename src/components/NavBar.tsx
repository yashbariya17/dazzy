import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { NavLink, useNavigate } from "react-router"

const Products = [
  {
    name: "all variants",
    url: "/products",
  },
  {
    name: "all brands",
    url: "/ByBrands",
  },
  {
    name: "by price",
    url: "/ByPrice",
  },
]

const ContactUs = [
  {
    name: "contact us",
    url: "/contact-us",
  },
  {
    name: "dealership",
    url: "/dealership",
  },
  {
    name: "join dazzy fam",
    url: "/joinDazzyFamily",
  },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }
  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.nav className="navbar-main bg-[#391e1e]  text-white py-5">
      <div className="grid grid-cols-3 items-center px-4 md:px-8 mb-3">
        <div className="" />

        <div className="flex justify-center">
          <img
            src="/images/logo.png"
            alt="Dazzy Logo"
            className="w-32"
          />
        </div>

        <div className="flex justify-end md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {!isMobile ? (
        <section className="max-w-[800px] mx-auto flex justify-center gap-10 font-semibold items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              ` ${isActive ? "navbar-active" : ""} relative`
            }
          >
            Home <span className="absolute w-full h-0.5 top-full block"></span>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              ` ${isActive ? "navbar-active" : ""} relative`
            }
          >
            About Us
            <span className="absolute w-full h-0.5 top-full block"></span>
          </NavLink>
          <DropDown
            title="Product"
            list={Products}
          />
          <div>Gifting</div>
          <DropDown
            title="Contact Us"
            list={ContactUs}
          />
          <button className="bg-red-500 px-4 py-2">Download Catlog</button>
        </section>
      ) : (
        <section
          className={`container flex-col  justify-center  font-semibold items-center mt-4  ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <motion.ul
            className="!no-underline flex flex-col gap-5 justify-center items-center "
            variants={navVariants}
            initial={false}
            animate={isMobile ? (isOpen ? "open" : "closed") : false}
          >
            <motion.li
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className=" relative p-0 !no-underline"
              onClick={() => setIsOpen(false)}
            >
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  ` ${isActive ? "navbar-active" : ""} relative`
                }
              >
                Home{" "}
                <span className="absolute w-full h-0.5 top-full block"></span>
              </NavLink>
            </motion.li>
            <motion.li
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="no-underline"
              onClick={() => setIsOpen(false)}
            >
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  ` ${isActive ? "navbar-active" : ""} relative`
                }
              >
                About Us
                <span className="absolute w-full h-0.5 top-full block"></span>
              </NavLink>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="no-underline"
            >
              <DropDown
                title="Product"
                list={Products}
              />
            </motion.li>
            <motion.li
              variants={itemVariants}
              className=" no-underline"
            >
              Gifting
            </motion.li>
            <motion.li
              variants={itemVariants}
              className=" no-underline"
            >
              <DropDown
                title="Contact Us"
                list={ContactUs}
              />
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="bg-red-500 px-4 py-2"
            >
              Download Catlog
            </motion.li>
          </motion.ul>
        </section>
      )}
    </motion.nav>
  )
}

export default NavBar

const DropDown = ({
  title,
  list,
}: {
  title: string
  list: { name: string; url: string }[]
}) => {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  return (
    <div
      className="text-white relative"
      onMouseEnter={() => {
        setOpen(true)
      }}
      onMouseLeave={() => {
        setOpen(false)
      }}
    >
      <button
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delayChildren: 0.2,
                  staggerChildren: 0.1,
                },
              },
              exit: {
                opacity: 0,
                y: -10,
              },
            }}
            className="absolute z-50 left-1/2 -translate-x-1/2 bg-[#391e1e] rounded-md shadow-lg overflow-hidden"
          >
            {list.map((i) => (
              <motion.div
                key={i.name}
                className="capitalize relative px-4 py-2 cursor-pointer text-white text-nowrap text-center"
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                onClick={() => {
                  setOpen(false)
                  navigate(i.url)
                }}
              >
                {i.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
