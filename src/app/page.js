"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Hero2 from "./components/Hero2";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import Contact from "./components/Contact";

export default function Home() {
  const [gradient, setGradient] = useState("rgb(4, 4, 42)");
  const mousePosition = useRef({ x: null, y: null });

  const handleMouseMove = useCallback((e) => {
    if (mousePosition.current.x === e.pageX && mousePosition.current.y === e.pageY) {
      return; // Prevent unnecessary updates
    }

    mousePosition.current = { x: e.pageX, y: e.pageY };

    requestAnimationFrame(() => {
      setGradient(
        `radial-gradient(circle at ${e.pageX}px ${e.pageY}px, rgb(64, 3, 87), rgb(4, 4, 42) 70%)`
      );
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="app-container" style={{ background: gradient }}>
      <SocialMedia/>
      <Navbar />
      <Hero2 />
      <Experience />
      <Projects/>
      <Contact/>
    </div>
  );
}