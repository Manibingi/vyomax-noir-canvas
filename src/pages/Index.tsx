
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#171717] text-white overflow-x-hidden">
      {/* 3D animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(43,43,74,0.3),rgba(10,10,20,1))]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#332277] opacity-20 blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#772233] opacity-10 blur-[80px] animate-pulse-slow"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-white opacity-70 animate-float-slow"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 rounded-full bg-white opacity-50 animate-float-slow-reverse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-white opacity-60 animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-white opacity-40 animate-float-fast"></div>
      </div>

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
