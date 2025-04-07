
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GalaxyBackground from "@/components/GalaxyBackground";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded
    setLoaded(true);
    
    // Force the body to have a dark background
    document.body.style.backgroundColor = "#020203";
    document.body.style.color = "white";
    document.documentElement.style.backgroundColor = "#020203";
    
    return () => {
      // Cleanup styles when component unmounts
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* Galaxy animated background - applied at the top level */}
      <GalaxyBackground />
      
      {/* Content container with z-index to appear above the background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
