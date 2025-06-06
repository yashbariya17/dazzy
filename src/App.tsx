import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./main/Home/Home";
import AboutUs from "./main/about us/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <main>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
