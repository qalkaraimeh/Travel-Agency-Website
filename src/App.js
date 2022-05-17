import "./App.css";
import Header from "./components/Navbar/Header";
import Home from "./components/Pages/Home";
// import HeroSection from "./components/HeroSection/HeroSection";
// import CardsSection from "./components/CardsSection/CardsSection";
import ChichenItza from "./components/Pages/ChichenItza";
import Maldives from "./components/Pages/Maldives";
import Petra from "./components/Pages/Petra";
import Prauge from "./components/Pages/Prauge";
import Santorini from "./components/Pages/Santorini";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
import ContactUs from "./components/Pages/ContactUs";
import Services from "./components/Pages/Services";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />

        <Route path="/chichen-itza" element={<ChichenItza />} />
        <Route path="/maldives" element={<Maldives />} />
        <Route path="/petra" element={<Petra />} />
        <Route path="/prauge" element={<Prauge />} />
        <Route path="/santorini" element={<Santorini />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
