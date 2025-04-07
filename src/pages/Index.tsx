
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
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">
      {/* Galaxy animated background */}
      <GalaxyBackground />
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
