import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

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
    url: "/byBrands",
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
  // {
  //   name: "By Price",
  //   url: "/byPrice",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="lucide lucide-tag-icon lucide-tag"
  //     >
  //       <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
  //       <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  //     </svg>
  //   ),
  // },
];

const byType = [
  { state: "chocolate bar", name: "chocolate" },
  { state: "centerfilled chocolate", name: "Centerfilled Chocolate" },
  { state: "decorative chocolate", name: "Decorative Chocolate" },
  { state: "Crunchy chocolate", name: "Crunchy chocolate" },
  { state: "nought bar", name: "Nought Bar" },
  { state: "wafer rolls", name: "wafer rolls" },
  { state: "toffee", name: "Toffee" },
  { state: "jelly", name: "Jelly" },
  { state: "candy", name: "Candy" },
  { state: "lollipop", name: "Lollipop" },
];
const byBrands = [
  "dairy kiss",
  "bolivia",
  "truffle",
  "Choco Bon",
  "Delite",
  "Emporio",
  "Cocos",
  "double candy",
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
    name: "Join Dazzy",
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
const upIcon = (
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
    className="lucide lucide-chevron-up-icon lucide-chevron-up"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);
const downIcon = (
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
    className="lucide lucide-chevron-down-icon lucide-chevron-down"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
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
  const downloadMultiplePdfs = (num: number) => {
    const files = [
      {
        url: "/Files/Dazzy Chocolate Catalogue.pdf",
        name: "Dazzy Chocolate Catalogue.pdf",
      },
      { url: "/Files/Dazzy CT Catalogue.pdf", name: "Dazzy CT Catalogue.pdf" },
    ];
    const file = files[num];
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav className="navbar-main bg-[#391e1e]  text-white py-5">
      <div className="grid grid-cols-3 items-center px-4 md:px-8 mb-3">
        <div className="" />

        <div className="flex justify-center">
          <img src="/images/logo.webp" alt="Dazzy Logo" className="w-32" />
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
          <NavItemLink to={"/"}>Home</NavItemLink>
          <NavItemLink to="/about-us">About Us</NavItemLink>
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
            <button className="relative">Product</button>
            <AnimatePresence>
              {hoverMenu === "product" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="
          absolute top-full left-1/2 -translate-x-1/2 mt-10
          rounded-xl bg-[#391e1e]
          shadow-2xl text-white w-auto z-50 py-2 
        "
                >
                  <section className="flex gap-x-4 px-5 py-3 w-[480px]">
                    <div>
                      <h2 className="px-4 py-2 whitespace-nowrap text-2xl relative">
                        <span className="relative inline-block">
                          By Type
                          <span className="static-bar absolute left-0 -bottom-1 block"></span>
                        </span>
                      </h2>
                      {byType.map((i) => (
                        <NavLink
                          key={i.name}
                          to={{
                            pathname: "/products",
                            search: `?p=${i.state}`,
                          }}
                          state={i.state}
                          className="relative block px-4  py-[2px] group"
                        >
                          <span className="relative inline-block capitalize font-normal">
                            {i.name}
                            {/* <span className="underline-bar absolute left-0 top-full w-full h-0.5 block"></span> */}
                          </span>
                          <motion.div
                            // layoutId="indicator"
                            // initial={{ opacity: 0 }}
                            // whileHover={{ opacity: 1 }}
                            className="bg-amber-300 h-full absolute w-2 top-0 left-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          ></motion.div>
                        </NavLink>
                      ))}
                    </div>
                    <span className="block h-[280px] bg-[#442424] w-[1px] mt-auto"></span>
                    {/* <div>
                      <h2 className="px-4 py-2 whitespace-nowrap text-2xl relative">
                        <span className="relative inline-block">
                          By Price
                          <span className="static-bar absolute left-0 -bottom-1 block"></span>
                        </span>
                      </h2>
                      {byPrice.map((i) => (
                        <NavLink
                          key={i}
                          to={`/byPrice`}
                          state={i}
                          className="relative block px-4  py-[2px] group"
                        >
                          <span className="relative inline-block capitalize font-normal ">
                            {i} Rs.
                          </span>
                          <motion.div
                            className="bg-amber-300 h-full absolute w-2 top-0 left-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          ></motion.div>
                        </NavLink>
                      ))}
                    </div> */}
                    <span className="block h-[280px] bg-[#442424] w-[1px] mt-auto"></span>
                    <div>
                      <h2 className="px-4 py-2 whitespace-nowrap text-2xl relative">
                        <span className="relative inline-block">
                          By Brands
                          <span className="static-bar absolute left-0 -bottom-1 block"></span>
                        </span>
                      </h2>
                      {byBrands.map((i) => (
                        <NavLink
                          key={i}
                          to={`/byBrands`}
                          state={i}
                          className="relative block px-4 py-[2px] group "
                        >
                          <span className="relative inline-block capitalize font-normal">
                            {i}
                            {/* <span className="underline-bar absolute left-0 top-full w-full h-0.5 block"></span> */}
                          </span>
                          <motion.div
                            // layoutId="indicator"
                            // initial={{ opacity: 0 }}
                            // whileHover={{ opacity: 1 }}
                            className="bg-amber-300 h-full absolute w-2 top-0 left-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          ></motion.div>
                        </NavLink>
                      ))}
                      <NavLink
                        to={`/byBrands`}
                        state={""}
                        className="relative block px-4 py-2 "
                      >
                        {/* // border white 
                        rounded corner 
                        hover: color font brown
                        */}
                        <span className="relative inline-block capitalize font-normal border-[1px] border-solid border-white rounded-xl   text-white bg-[#391e1e] py-1 px-2 hover:bg-white hover:text-[#391e1e]">
                          see more
                        </span>
                      </NavLink>
                    </div>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItemLink to="/gift">Gifting</NavItemLink>
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
            <button className="relative">Contact</button>
            <DropdownMenu items={ContactUs} isOpen={hoverMenu === "contact"} />
          </div>
          <Menu
            menuClassName={"!w-auto"}
            menuButton={
              <MenuButton>
                <button className="bg-red-500 px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-red-700 active:scale-90">
                  Download Catalogue
                </button>
              </MenuButton>
            }
            transition
            arrow
          >
            <MenuItem onClick={() => downloadMultiplePdfs(1)}> Candy</MenuItem>
            <MenuItem onClick={() => downloadMultiplePdfs(0)}>
              {" "}
              Chocolate
            </MenuItem>
          </Menu>
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
            <MobileNavItem
              to="/"
              label="Home"
              onClick={() => setIsOpen(false)}
              itemVariants={itemVariants}
            />
            <MobileNavItem
              to="/about-us"
              label="About Us"
              onClick={() => setIsOpen(false)}
              itemVariants={itemVariants}
            />
            <motion.li variants={itemVariants} className="no-underline">
              <AccordionDropDown
                title="Product"
                list={Products}
                closeMobileMenu={() => setIsOpen(false)}
              />
            </motion.li>
            <motion.li variants={itemVariants} className=" no-underline">
              <MobileNavItem
                to="/gift"
                label="Gifting"
                onClick={() => setIsOpen(false)}
                itemVariants={itemVariants}
              />
            </motion.li>
            <motion.li variants={itemVariants} className=" no-underline">
              <AccordionDropDown
                title="Contact Us"
                list={ContactUs}
                closeMobileMenu={() => setIsOpen(false)}
              />
            </motion.li>
            <Menu
              menuClassName={"!w-auto"}
              menuButton={
                <MenuButton>
                  <motion.li
                    variants={itemVariants}
                    className="bg-red-500 px-4 py-2"
                  >
                    Download Catalogue{" "}
                  </motion.li>
                </MenuButton>
              }
              transition
              arrow
            >
              <MenuItem onClick={() => downloadMultiplePdfs(1)}>
                {" "}
                Candy
              </MenuItem>
              <MenuItem onClick={() => downloadMultiplePdfs(0)}>
                {" "}
                Chocolate
              </MenuItem>
            </Menu>
          </motion.ul>
        </section>
      )}
    </motion.nav>
  );
};

export default NavBar;

export const NavItemLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `${isActive ? "navbar-active" : ""} relative`}
  >
    {children}
    <span className="absolute underline-bar w-full h-0.5 top-full block"></span>
  </NavLink>
);
export const AccordionDropDown = ({
  title,
  list,
  closeMobileMenu,
}: {
  title: string;
  list: { name: string; url: string; icon: any }[];
  closeMobileMenu: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="w-full">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full px-4 py-2 text-white font-semibold"
      >
        <span>{title}</span>
        <span className="ml-2">{open ? upIcon : downIcon}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, height: 0 },
              visible: {
                opacity: 1,
                height: "auto",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delayChildren: 0.1,
                  staggerChildren: 0.07,
                },
              },
              exit: {
                opacity: 0,
                height: 0,
              },
            }}
            className="bg-[#391e1e] rounded-md overflow-hidden"
          >
            {list.map((item) => (
              <motion.li
                key={item.name}
                className="flex items-center gap-2 px-6 py-2 text-white border-t border-[#4c2d2d]"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                onClick={() => {
                  setOpen(false);
                  closeMobileMenu();
                  navigate(item.url);
                }}
              >
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `relative block px-4 py-2 ${
                      isActive ? "navbar-active" : ""
                    }`
                  }
                  onClick={() => closeMobileMenu()}
                >
                  {({ isActive }) => (
                    <div className="flex gap-2 items-center">
                      {item.icon}
                      <span className="relative inline-block">
                        {item.name}
                        {isActive && (
                          <span className="underline-bar absolute left-0 top-full w-full h-0.5 block"></span>
                        )}
                      </span>
                    </div>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
export const DropdownMenu = ({
  items,
  isOpen,
}: {
  items: any[];
  isOpen: boolean;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          absolute top-full left-1/2 -translate-x-1/2 mt-10
          rounded-xl bg-[#391e1e]
          shadow-2xl text-white w-52 z-50 py-2
        "
      >
        {items.map((item) => (
          <NavLink
            key={item.name}
            to={item.url}
            className={({ isActive }) =>
              `relative block px-4 py-2 ${isActive ? "navbar-active" : ""}`
            }
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
);

export const MobileNavItem = ({
  to,
  label,
  onClick,
  itemVariants,
}: {
  to: string;
  label: string;
  onClick: () => void;
  itemVariants: any;
}) => (
  <motion.li
    variants={itemVariants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="no-underline"
    onClick={onClick}
  >
    <NavItemLink to={to} onClick={onClick}>
      {label}
    </NavItemLink>
  </motion.li>
);
