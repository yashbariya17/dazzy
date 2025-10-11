const Footer = () => {
  return (
    <footer className="bg-[#4a1e0f] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1">
          <img
            src="/images/EDLOGO.webp"
            alt="Dazzy Logo"
            className="h-12 mb-4"
          />
          <h3 className="text-lg font-semibold">DAZZY FOOD PVT.LTD.</h3>
          <p className="text-sm mt-2 leading-relaxed">
            <i className="fa fa-location-dot mr-2"></i>
            16, Shah Industrial Park 3, Kotambi,
            <br />
            Vadodara - Halol Road, Vadodara,
            <br />
            Gujarat - 391510 INDIA
          </p>
        </div>

        <div className="hidden md:block h-[200px] border-1 border-amber-800 mx-4" />

        <div className="flex-1">
          <img
            src="/images/DFILOGO.webp"
            alt="Dazzy Products Logo"
            className="h-12 mb-4"
          />
          <h3 className="text-lg font-semibold">DAZZY PRODUCTS PVT. LTD.</h3>
          <p className="text-sm mt-2 leading-relaxed">
            <i className="fa fa-location-dot mr-2"></i>
            E-74, Manjusar GIDC, Savli, Vadodara
            <br />- 391775, Gujarat - INDIA
          </p>
        </div>
        <div className="hidden md:block h-[200px] border-1 border-amber-800 mx-4" />

        <div className="flex-1">
          <img
            src="/images/DPPLLOGO.webp"
            alt="Dazzy Products Logo"
            className="h-12 mb-4"
          />
          <h3 className="text-lg font-semibold">DAZZY FOOD INDUSTRIES</h3>
           <p className="text-sm mt-2 leading-relaxed">
            <i className="fa fa-location-dot mr-2"></i>
            Plot No. 515, Sayaji Market, Sayajipura, Vadodara
            <br />- 390019, Gujarat - INDIA
          </p>
        </div>
        <div className="hidden md:block h-[200px] border-1 border-amber-800 mx-4" />

        <div className="flex-1">
          <img
            src="/images/DK LOGO.png"
            alt="Dazzy Food Industries Logo"
            className="h-8 mb-7"
          />
          <h3 className="text-lg font-semibold">D.K.INDUSTRIES</h3>
          <p className="text-sm mt-2 leading-relaxed">
            <i className="fa fa-location-dot mr-2"></i>
            Plot No. 571, Sayaji Market, Sayajipura, Vadodara
            <br />- 390019, Gujarat - INDIA
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1">
          <div className="mt-8">
            <p className="text-sm">
              <i className="fa fa-envelope mr-2"></i>
              <a
                href="mailto:info@dazzyconfectionery.com"
                className="hover:underline"
              >
                info@dazzyconfectionery.com
              </a>
            </p>
            <p className="text-sm">
              <i className="fa fa-globe mr-2"></i>
              <a
                href="http://www.dazzyconfectionery.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.dazzyconfectionery.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm mt-8">
            <i className="fa fa-phone mr-2"></i>
            +91 98751 58053
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="flex-1">
          {/* <div className="flex mt-8 space-x-3">
            <img src="/chocolate1.webp" alt="Chocolate 1" className="h-16" />
            <img src="/chocolate2.webp" alt="Chocolate 2" className="h-16" />
            <img src="/chocolate3.webp" alt="Chocolate 3" className="h-16" />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
