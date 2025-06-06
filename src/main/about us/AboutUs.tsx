const AboutUs = () => {
  return (
    <main>
      <section className="bg-gray-500 text-5xl text-white text-center py-16">
        <h2>About Us</h2>
      </section>
      <section className="bg-amber-950 text-[4.5rem] text-center py-4">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-600 via-yellow-200 to-yellow-600 from-20% via-45%  to-100%">
          25 YEARS OF SWEET MEMORIES
        </h2>
      </section>
      <section className="grid grid-cols-[1fr_auto_1fr] min-h-[800px]">
        <div></div>
        <div className="h-full bg-gray-800 w-[100px]">
          <div
            className="h-full w-6"
            style={{
              background:
                "repeating-linear-gradient(to bottom,white 0,white 30px,transparent 30px,transparent 50px)",
            }}
          ></div>
        </div>
        <div></div>
      </section>
    </main>
  );
};

export default AboutUs;
