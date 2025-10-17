const ContactUs = () => {
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
          Contact-Us
        </h2>
      </section>

      {/* Wrapper to scale entire content */}
      <div className="transform scale-[0.8] origin-top mx-auto">
        <div className="min-h-screen md:p-10 flex flex-col md:flex-row gap-8">
          {/* Map */}
          <div className="md:w-1/2">
            <iframe
              title="Baroda Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0806072346036!2d73.2928553!3d22.406849699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fd30038f8b4b9%3A0x6a3217d1ad78c4f2!2sDazzy%20Food%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1760703136329!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-[#240404] p-10 flex flex-col justify-center space-y-4">
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
              <label className="text-white block mb-1">Message Subject</label>
              <input
                type="text"
                placeholder="Describe the subject of your message."
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

export default ContactUs;
