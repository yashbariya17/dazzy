import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./main/Home/Home";
import AboutUs from "./main/about us/AboutUs";
import ContactUs from "./main/ContactUs/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router";
import Products from "./main/Products/Products";
import ByPrice from "./main/Products/ByPrice";
import DealerShip from "./main/ContactUs/DealerShip";
import JoinDazzyFamily from "./main/ContactUs/JoinDazzyFam";

function App() {
  return (
    <main>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ByPrice" element={<ByPrice />} />
          <Route path="/ByBrands" element={<ByPrice />} />
          <Route path="/DealerShip" element={<DealerShip />} />JoinDazzyFamily
          <Route path="/JoinDazzyFamily" element={<JoinDazzyFamily />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
