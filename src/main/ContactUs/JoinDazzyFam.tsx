const JoinDazzyFamily = () => {
  return (
    <main className="relative bg-[#fff8f0] overflow-hidden">
      <section className="h-[150px] bg-gray-500 flex items-center justify-center mb-10">
        <h2 className="text-white text-xl font-semibold">Join Dazzy Family</h2>
      </section>

      {/* Scaled wrapper */}
      <div className="transform scale-[0.8] origin-top">
        <div className="min-h-screen p-10 flex">
          {/* Image replacing the map */}
          <div className="w-1/2">
            <img
              src="/images/largeimage.png"
              alt="Ahmedabad"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-1/2 bg-[#240404] p-10 flex flex-col justify-center space-y-4">
            <div>
              <label className="text-white block mb-1">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 rounded-md bg-[#f4f2e9]"
              />
            </div>

            <div>
              <label className="text-white block mb-1">Company</label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full p-2 rounded-md bg-[#f4f2e9]"
              />
            </div>

            <div>
              <label className="text-white block mb-1">Phone</label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-2 rounded-md bg-[#f4f2e9]"
              />
            </div>

            <div>
              <label className="text-white block mb-1">Email address</label>
              <input
                type="email"
                placeholder="Your best email address"
                className="w-full p-2 rounded-md bg-[#f4f2e9]"
              />
            </div>

            <div>
              <label className="text-white block mb-1">Message Subject</label>
              <input
                type="text"
                placeholder="Briefly describe the subject of your message."
                className="w-full p-2 rounded-md bg-[#f4f2e9]"
              />
            </div>

            <div>
              <label className="text-white block mb-1">Message</label>
              <textarea
                placeholder="Write your message here."
                className="w-full p-2 rounded-md bg-[#f4f2e9] h-28"
              ></textarea>
            </div>

            <button className="mt-4 bg-[#d92128] text-white text-lg font-medium px-6 py-2 rounded-md hover:opacity-90 transition">
              Send message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JoinDazzyFamily;
