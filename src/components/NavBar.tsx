const NavBar = () => {
  return (
    <nav className="navbar-main space-y-3 bg-amber-950 text-white py-5">
      <div className="mx-auto w-fit">
        <img src="/images/logo.png" alt="Dazzy Logo" className="w-32 " />
      </div>
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
    </nav>
  );
};

export default NavBar;
