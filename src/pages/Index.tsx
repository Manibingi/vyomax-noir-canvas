
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Make all sections visible immediately on page load
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.remove("opacity-0");
      section.classList.add("animate-fade-in");
    });
    
    // Simple scroll handler to ensure any new sections become visible
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        if (!section.classList.contains("animate-fade-in")) {
          section.classList.remove("opacity-0");
          section.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* Make all sections explicitly visible with animate-fade-in class */}
      <div className="animate-fade-in">
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
