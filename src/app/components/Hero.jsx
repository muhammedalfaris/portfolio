"use client";
import { useState } from "react";
import "@/app/styles/Hero.css";

const Hero = () => {
  const [gradient, setGradient] = useState("rgb(4, 4, 30)"); 

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setGradient(`radial-gradient(circle at ${x}px ${y}px, rgb(49, 0, 67), rgb(4, 4, 30) 70%)`);
  };

  const handleMouseLeave = () => {
    setGradient("rgb(4, 4, 30)"); 
  };

  return (
    <div
      id = "hero"
      className="hero"
      style={{ background: gradient }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      Welcome to My Portfolio
    </div>
  );
};

export default Hero;