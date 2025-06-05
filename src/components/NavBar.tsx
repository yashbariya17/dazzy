import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="navbar-main space-y-3 bg-amber-950 text-white py-5">
      <div className="mx-auto w-fit">
        <img src="/images/logo.png" alt="Dazzy Logo" className="w-32 " />
      </div>
      <section className="flex flex-col md:flex-row justify-center gap-10 font-semibold items-center">
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
        <div>Product</div>
        <div>Gifting</div>
        <div>Contact Us</div>
        <button className="bg-red-500 px-4 py-2">Download Catlog</button>
      </section>
    </nav>
  );
};

export default NavBar;
