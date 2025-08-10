import "./App.css"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./main/Home/Home"
import AboutUs from "./main/about us/AboutUs"
import ContactUs from "./main/ContactUs/ContactUs"
import { BrowserRouter, Routes, Route } from "react-router"
import Products from "./main/Products/Products"
import ByPrice from "./main/Products/ByPrice"
import ByBrands from "./main/Products/ByBrands"
import DealerShip from "./main/ContactUs/DealerShip"
import JoinDazzyFamily from "./main/ContactUs/JoinDazzyFam"
import WhatsAppButton from "./components/WhatsAppButton"
import Gifting from "./main/Gifting/Gifting"

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
          <Route
            path="/contact-us"
            element={<ContactUs />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="/byPrice"
            element={<ByPrice />}
          />
          <Route
            path="/byBrands"
            element={<ByBrands />}
          />
          <Route
            path="/joinDazzyFamily"
            element={<JoinDazzyFamily />}
          />
          <Route
            path="/dealerShip"
            element={<DealerShip />}
          />
            <Route
            path="/gift"
            element={<Gifting />}
          />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </main>
  )
}

export default App
