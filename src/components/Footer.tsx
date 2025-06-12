
const Footer = () => {
  return (
    <footer className="bg-[#3b1e1d] text-[#f2e9df] py-10 relative mt-20 ">
      <div className="max-w-[1000px] mx-auto absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#ed1c24] rounded-2xl px-8 py-4 flex justify-between items-center w-[90%]  text-white font-medium text-center text-sm md:text-base">
        <div className="w-1/3 font-light">Address</div>
        <div className="w-1/3 font-light">Mail</div>
        <div className="w-1/3 font-light">Customer care no</div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
        <img
          src="/images/dazzyfooterlogo.png"
          alt="Dazzy Logo"
          className="w-32 mb-6 md:mb-0"
        />
        <h2 className="text-3xl font-extrabold text-center md:text-right">
          footer details
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
