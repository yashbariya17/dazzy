

const ContactUs = () => {


    return (
        <main className="relative bg-[#fff8f0] overflow-hidden">
            <div className="min-h-screen p-10 flex">
                <div className="w-1/2">
                    <iframe
                        title="Ahmedabad Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8028975180253!2d72.57136231542126!3d23.033863921837776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f288a5e2ef%3A0x5d5f3ee40f79a7be!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1718027738241!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-full"
                    ></iframe>
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
        </main>
    );
};

export default ContactUs;
