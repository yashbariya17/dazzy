const JoinDazzyFamily = () => {
  return (
    <main className="relative bg-[#fff8f0] overflow-hidden">
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
          Join Dazzy 
        </h2>
      </section>

      {/* Scaled wrapper */}
      <div className="transform scale-[0.8] origin-top">
        <div className="min-h-screen md:p-10 flex flex-col md:flex-row gap-8 lg:gap-0">
          {/* Image replacing the map */}
          <div className="w-auto md:w-1/2">
            <img
              src="/videos/JOIN_OUR_TEAM.png"
              alt="Ahmedabad"
              className=" object-cover rounded-md"
            />
          </div>

          <div className="w-auto md:w-1/2 bg-[#240404] p-10 flex flex-col justify-center space-y-4">
            <div>
              <label className="text-white block mb-1">Name</label>
              <input
                type="text"
                placeholder="Full Name"
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
              <label className="text-white block mb-1">Applying For </label>
              <input
                type="text"
                placeholder="Add Your Designation"
                className="w-full p-2 rounded-md bg-[#f4f2e9]"
              />
            </div>
            <div>
              <label className="text-white block mb-1">Message Subject</label>
              <input
                type="text"
                placeholder="Describe the subject of your message." 
                className="w-full p-2 rounded-md bg-[#f4f2e9]"
              />
            </div>
             {/* ✅ Upload Resume Field */}
            <div>
              <label className="text-white block mb-1">Upload Resume</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full p-2 rounded-md bg-[#f4f2e9] text-black file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#d92128] file:text-white hover:file:opacity-90"
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
  )
}

export default JoinDazzyFamily
