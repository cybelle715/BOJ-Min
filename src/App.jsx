import { Route, Routes } from "react-router-dom";
import "./App.css";
import  HeroSection  from "./components/hero-section/HeroSection";
import { Navbar } from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import { Home } from "./components/pages/Home";




function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
