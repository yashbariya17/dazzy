import { motion } from "framer-motion";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-[#3b1e1d] text-[#f2e9df] py-10 relative mt-20">
      <div className="max-w-[1000px] mx-auto absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#ed1c24] rounded-2xl px-8 py-4 flex justify-between items-center w-[90%] text-white font-medium text-center text-sm md:text-base">
        <div className="w-1/3 font-light">Address</div>
        <div className="w-1/3 font-light">Mail</div>
        <div className="w-1/3 font-light">Customer care no</div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto px-4 gap-10">
        <img
          src="/images/dazzyfooterlogo.png"
          alt="Dazzy Logo"
          className="w-32 mb-6 md:mb-0"
        />

        <div className="flex flex-col md:flex-row gap-10 w-full justify-between">
          <div className="w-[70%]">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              Dazzy Foods is your go-to brand for fresh, flavorful experiences.
              Since 1998, we’ve been serving happiness with every bite.
            </p>
          </div>
          <div className="flex justify-between items-center flex-1 gap-2">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm space-y-1">
                {[
                  { label: "About Us", href: "/about-us" },
                  { label: "Contact Us", href: "/contact-us" },
                  { label: "Products", href: "/products" },
                  { label: "By Price", href: "/ByPrice" },
                  { label: "By Brands", href: "/ByBrands" },
                
                  // { label: "FAQs", href: "/faq" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="no-underline"
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        ` ${isActive ? "navbar-active" : ""} relative`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <ul className="text-sm space-y-1">
                {[
                  {
                    label: "Facebook",
                    href: "https://facebook.com/dazzyfoods",
                  },
                  {
                    label: "Instagram",
                    href: "https://instagram.com/dazzyfoods",
                  },
                  { label: "Twitter", href: "https://twitter.com/dazzyfoods" },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com/company/dazzyfoods",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="no-underline"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-10 px-4">
        © {new Date().getFullYear()} winkelpix All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
