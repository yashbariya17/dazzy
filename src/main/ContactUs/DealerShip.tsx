import AnimatedNumber from "../../components/AnimatedNumber"

const DealerShip = () => {
  return (
    <main className="relative bg-[#fff8f0] overflow-hidden">
      {/* Video Background Section */}
      <section className="relative h-[250px] flex items-center justify-center mb-10 overflow-hidden">
        <video
          src="/CONTECT AS.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Title */}
        <h2 className="relative text-white text-2xl font-semibold z-10">
          DealerShip
        </h2>
      </section>
      <div className="max-w-4xl mx-auto text-center p-4 text-sm text-gray-700 mb-8">
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
        <div className="bg-red-600 rounded-[50px] h-[450px] lg:h-[300px] w-auto md:w-[500px] flex flex-col gap-3 justify-center ml-5 mr-5 lg:ml-0  lg:mr-20 mt-auto mb-auto">
          <h2 className="text-white lg:text-4xl font-semibold text-center">
            ABOUT DAZZY
          </h2>
          <div className="flex flex-col md:flex-row gap-5 justify-center text-center mt-5 items-center">
            <div className="text-white font-bold lg:text-2xl bg-black rounded-2xl h-[80px] w-[100px] pt-2.5">
              <AnimatedNumber value={150} /> +{" "}
              <p className="text-white text-xs font-light">Product Rating</p>
            </div>
            <div className="text-white font-bold text-2xl bg-black rounded-2xl h-[80px] w-[100px] pt-2.5">
              <AnimatedNumber value={36} />{" "}
              <p className="text-white text-xs font-light">Brands</p>
            </div>
            <div className="text-white font-bold text-2xl bg-black rounded-2xl h-[80px] w-[100px] pt-2.5">
              <AnimatedNumber value={15} />+{" "}
              <p className="text-white text-xs font-light">
                Export Destination
              </p>
            </div>
          </div>
          <p
            className="text-center mt-2 text-white"
            style={{ wordSpacing: "2px" }}
          >
            A Wide Range Of Confectionery Items
          </p>
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
            <div>
              <label className="text-white block mb-1">City</label>
              <input
  type="text"
  placeholder="Your City Here"
  className="w-full p-2 rounded-md bg-[#f4f2e9] text-black"
/>
            </div>
            <div>
              <label className="text-white block mb-1">State</label>
              <input
  type="text"
  placeholder="Your State Here"
  className="w-full p-2 rounded-md bg-[#f4f2e9] text-black"
/>
            </div>
          </div>

          <div>
            <label className="block mb-1">Message Subject</label>
            <input
              type="text"
              placeholder="Describe the subject of your message."
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
  )
}

export default DealerShip
