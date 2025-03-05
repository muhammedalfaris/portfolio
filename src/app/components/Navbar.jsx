"use client";
import { useState } from "react";
import Image from "next/image";
import "@/app/styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='navbar'>
      <div className="logo">
        <Image src="/logo.png" alt="Logo" width={45} height={45} />
      </div>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;