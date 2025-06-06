import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  };
  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav className="navbar-main bg-amber-950 text-white py-5">
      <div className="grid grid-cols-3 items-center px-4 md:px-8">
        <div className="" />

        <div className="flex justify-center">
          <img src="/images/logo.png" alt="Dazzy Logo" className="w-32" />
        </div>

        <div className="flex justify-end md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
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
        <section className="flex justify-center gap-10 font-semibold items-center">
          <div className="relative">
            Home <span className="absolute w-full h-0.5 top-full block"></span>
          </div>
          <div>About Us</div>
          <div>Product</div>
          <div>Gifting</div>
          <div>Contact Us</div>
          <button className="bg-red-500 px-4 py-2">Download Catlog</button>
        </section>
      ) : (
        <section
          className={`flex-col  justify-center  font-semibold items-center mt-4  ${
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
            >
              Home{" "}
              <span className="absolute w-full h-0.5 top-full block"></span>
            </motion.li>
            <motion.li
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="no-underline"
            >
              About Us
            </motion.li>
            <motion.li variants={itemVariants} className="no-underline">
              Product
            </motion.li>
            <motion.li variants={itemVariants} className=" no-underline">
              Gifting
            </motion.li>
            <motion.li variants={itemVariants} className=" no-underline">
              Contact Us
            </motion.li>
            <motion.li variants={itemVariants} className="bg-red-500 px-4 py-2">
              Download Catlog
            </motion.li>
          </motion.ul>
        </section>
      )}
    </motion.nav>
  );
};

export default NavBar;
