const DealerShip = () => {
  return (
    <main className="bg-[#fff8f0] overflow-hidden pt-10">
      {/* Intro Text */}
      <div className="max-w-4xl mx-auto text-center border border-dashed border-gray-400 p-4 text-sm text-gray-700 mb-8">
        All DAZZY brands are created by individuals who prioritize the consumer,
        utilizing the finest ingredients and cutting-edge production technology.
        We adhere to transparent quality control standards to build trust and
        credibility. This commitment results in exceptional quality and a
        delightful experience.
      </div>

      {/* Map + About Dazzy */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* India Map */}
        <div className="flex justify-center">
          <img
            src="/images/DAZZYYMAPS.png"
            alt="India Map"
            className="max-w-full h-auto"
          />
        </div>

        {/* About Dazzy Card */}
        <div className="flex items-center justify-center">
          <div className="bg-[#d92128] text-white p-10 rounded-3xl w-full max-w-md text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-6">ABOUT DAZZY</h2>
            <div className="grid grid-cols-3 gap-4 text-center text-lg font-semibold">
              <div>
                <div className="text-2xl">150+</div>
                <div className="text-sm mt-1">Product Range</div>
              </div>
              <div>
                <div className="text-2xl">36</div>
                <div className="text-sm mt-1">Brands</div>
              </div>
              <div>
                <div className="text-2xl">15+</div>
                <div className="text-sm mt-1">Export Destinations</div>
              </div>
            </div>
            <p className="text-sm mt-6">
              A Wide Range Of Confectionery Items
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#240404] px-6 py-12">
        <div className="max-w-4xl mx-auto grid gap-6 text-white">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 rounded-md bg-[#f4f2e9] text-black"
              />
            </div>

            <div>
              <label className="block mb-1">Company</label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full p-2 rounded-md bg-[#f4f2e9] text-black"
              />
            </div>

            <div>
              <label className="block mb-1">Phone</label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-2 rounded-md bg-[#f4f2e9] text-black"
              />
            </div>

            <div>
              <label className="block mb-1">Email address</label>
              <input
                type="email"
                placeholder="Your best email address"
                className="w-full p-2 rounded-md bg-[#f4f2e9] text-black"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Message Subject</label>
            <input
              type="text"
              placeholder="Briefly describe the subject of your message."
              className="w-full p-2 rounded-md bg-[#f4f2e9] text-black"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              placeholder="Write your message here."
              className="w-full p-2 rounded-md bg-[#f4f2e9] h-28 text-black"
            ></textarea>
          </div>

          <button className="mt-4 bg-[#d92128] text-white text-lg font-medium px-6 py-2 rounded-md hover:opacity-90 transition">
            Send message
          </button>
        </div>
      </div>
    </main>
  );
};

export default DealerShip;
