import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <section className="h-[500px] bg-gray-400"></section>
      <div className="uppercase text-white bg-red-500 font-semibold flex justify-center gap-16 text-lg py-2">
        <p>fssai & iso certiefied</p>
        <p>25+ year experience</p>
        <p>100%veg</p>
        <p>pan india delivery</p>
      </div>
      <section className="mt-8">
        <h2 className="text-red-500 text-center text-5xl font-bold " style={{
            wordSpacing:'6px'
        }}>
          Our Products
        </h2>
        <p
          className="text-center mt-2 text-gray-500 "
          style={{
            wordSpacing: "2px",
          }}
        >
          A Wide Range Of Confectionery Items
        </p>
      </section>
    </div>
  );
};

export default Home;
