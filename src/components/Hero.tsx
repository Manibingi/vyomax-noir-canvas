
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 section-padding overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.05),transparent_50%)]"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gray-100"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gray-100"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col space-y-8">
          <div className={`transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <p className="text-sm md:text-base uppercase tracking-widest text-gray-500 mb-6">
              Web Development Agency
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold space-y-4 md:space-y-6">
            <div className="overflow-hidden">
              <AnimatedText 
                text="We craft digital" 
                className="block" 
                delay={0.3} 
              />
            </div>
            <div className="overflow-hidden">
              <AnimatedText 
                text="experiences that" 
                className="block" 
                delay={0.5} 
              />
            </div>
            <div className="overflow-hidden">
              <AnimatedText 
                text="drive results" 
                className="block" 
                delay={0.7} 
              />
            </div>
          </h1>

          <div className={`transition-all duration-700 delay-700 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <p className="text-gray-600 max-w-xl text-lg md:text-xl mt-6">
              A team of four passionate developers creating exceptional websites and web applications tailored for your business needs.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-1000 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-md text-base font-medium transition-all hover:bg-gray-800"
              >
                View Our Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-black px-6 py-3 rounded-md text-base font-medium transition-all hover:bg-gray-50"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="animate-pulse-slow"
          aria-label="Scroll down"
        >
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-black rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
