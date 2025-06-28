import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router";

const Products = [
  {
    name: "All Variants",
    url: "/products",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-layout-grid-icon lucide-layout-grid"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
  {
    name: "All Brands",
    url: "/ByBrands",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-badge-check-icon lucide-badge-check"
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "By Price",
    url: "/ByPrice",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-tag-icon lucide-tag"
      >
        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      </svg>
    ),
  },
];

const ContactUs = [
  {
    name: "Contact Us",
    url: "/contact-us",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-phone-icon lucide-phone"
      >
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      </svg>
    ),
  },
  {
    name: "Dealership",
    url: "/dealership",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-handshake-icon lucide-handshake"
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
  },
  {
    name: "Join Dazzy Fam",
    url: "/joinDazzyFamily",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user-plus-icon lucide-user-plus"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" x2="19" y1="8" y2="14" />
        <line x1="22" x2="16" y1="11" y2="11" />
      </svg>
    ),
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<null | "product" | "contact">(
    null
  );
  const closeTimeout = useRef<null | number>(null);
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
    <motion.nav className="navbar-main bg-[#391e1e]  text-white py-5">
      <div className="grid grid-cols-3 items-center px-4 md:px-8 mb-3">
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
        <section className="max-w-[800px] mx-auto flex justify-center gap-10 font-semibold items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              ` ${isActive ? "navbar-active" : ""} relative`
            }
          >
            Home{" "}
            <span className="absolute underline-bar underline-bar w-full h-0.5 top-full block"></span>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              ` ${isActive ? "navbar-active" : ""} relative`
            }
          >
            About Us
            <span className="absolute underline-bar w-full h-0.5 top-full block"></span>
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => {
              if (closeTimeout.current) clearTimeout(closeTimeout.current);
              setHoverMenu("product");
            }}
            onMouseLeave={() => {
              closeTimeout.current = setTimeout(() => setHoverMenu(null), 300);
            }}
          >
            <button className="relative">
              Product
              <span className="underline-bar absolute left-0 top-full w-full h-0.5 block"></span>
            </button>

            <AnimatePresence>
              {hoverMenu === "product" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="
          absolute top-full left-1/2 -translate-x-1/2 mt-10
          rounded-xl
          bg-[#391e1e]
          shadow-lg
          text-white
          w-52
          z-50
          py-2
        "
                >
                  {Products.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.url}
                      className={({ isActive }) =>
                        `relative block px-4 py-2 ${
                          isActive ? "navbar-active" : ""
                        }`
                      }
                      onClick={() => setHoverMenu(null)}
                    >
                      <div className="flex gap-2 items-center">
                        {item.icon}
                        <span className="relative inline-block">
                          {item.name}
                          <span className="underline-bar absolute left-0 top-full w-full h-0.5 block"></span>
                        </span>
                      </div>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            Gifting
            <span className="absolute underline-bar w-full h-0.5 top-full block"></span>
          </div>
          <div
            className="relative"
            onMouseEnter={() => {
              if (closeTimeout.current) clearTimeout(closeTimeout.current);
              setHoverMenu("contact");
            }}
            onMouseLeave={() => {
              closeTimeout.current = setTimeout(() => setHoverMenu(null), 300);
            }}
          >
            <button className="relative">
              Contact
              <span className="underline-bar absolute left-0 top-full w-full h-0.5 block"></span>
            </button>

            <AnimatePresence>
              {hoverMenu === "contact" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="
          absolute top-full left-1/2 -translate-x-1/2 mt-10
          rounded-xl
                    bg-[#391e1e]

           shadow-2xl
          text-white w-52 z-50 py-2
        "
                >
                  {ContactUs.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.url}
                      className={({ isActive }) =>
                        `relative block px-4 py-2 ${
                          isActive ? "navbar-active" : ""
                        }`
                      }
                      onClick={() => setHoverMenu(null)}
                    >
                      <div className="flex gap-2 items-center">
                        {item.icon}
                        <span className="relative inline-block">
                          {item.name}
                          <span className="underline-bar absolute left-0 top-full w-full h-0.5 block"></span>
                        </span>
                      </div>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
                <span className="absolute underline-bar w-full h-0.5 top-full block"></span>
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
                <span className="absolute underline-bar w-full h-0.5 top-full block"></span>
              </NavLink>
            </motion.li>
            <motion.li variants={itemVariants} className="no-underline">
              <DropDown title="Product" list={Products} />
            </motion.li>
            <motion.li variants={itemVariants} className=" no-underline">
              Gifting
            </motion.li>
            <motion.li variants={itemVariants} className=" no-underline">
              <DropDown title="Contact Us" list={ContactUs} />
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

const DropDown = ({
  title,
  list,
}: {
  title: string;
  list: { name: string; url: string; icon: any }[];
}) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="text-white relative"
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <button className="cursor-pointer" onClick={() => setOpen(!open)}>
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
            className="absolute underline-bar z-50 left-1/2 -translate-x-1/2 bg-[#391e1e] rounded-md shadow-lg overflow-hidden"
          >
            {list.map((i) => (
              <motion.div
                key={i.name}
                className="capitalize relative px-4 py-2 cursor-pointer text-white text-nowrap text-center flex gap-2"
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                onClick={() => {
                  setOpen(false);
                  navigate(i.url);
                }}
              >
                {i?.icon} {i.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
