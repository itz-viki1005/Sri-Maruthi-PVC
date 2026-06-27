import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

 const openWhatsApp = () => {
  const message = encodeURIComponent(
    "Hello! I am interested in your PVC interior services. I would like to get a free quotation for my project."
  );

  window.open(`https://wa.me/918220444463?text=${message}`, "_blank");
};

  return (
    <nav className="navbar">
      
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Sree Maruthi PVC" className="logo-img" />
        <div>
          <h2 className="logo">SRI MARUTHI PVC</h2>
          <p className="tagline">Interior Works</p>
        </div>
      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Menu */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>

        <button
          className="cta"
          onClick={openWhatsApp}
        >
          GET QUOTE
        </button>
      </div>
    </nav>
  );
}

export default Navbar;