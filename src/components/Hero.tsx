
import React from "react";
import { ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 section-padding overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(60,60,100,0.15),transparent_70%)]"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-[#332277] opacity-10 blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-[#772233] opacity-10 blur-[100px]"></div>
      </div>

      {/* 3D floating elements */}
      <div className="absolute w-20 h-20 top-1/4 left-1/3 border border-white/10 rounded-lg rotate-12 animate-float-slow"></div>
      <div className="absolute w-16 h-16 bottom-1/3 right-1/4 border border-white/5 rounded-full animate-float-medium"></div>
      <div className="absolute w-24 h-24 top-2/3 left-1/4 border border-white/10 rounded-full rotate-45 animate-float-reverse"></div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col space-y-8">
          <div className="opacity-100">
            <p className="text-sm md:text-base uppercase tracking-widest text-gray-400 mb-6">
              Web Development Agency
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold space-y-4 md:space-y-6 text-white">
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
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400" 
                delay={0.7} 
              />
            </div>
          </h1>

          <div className="opacity-100">
            <p className="text-gray-300 max-w-xl text-lg md:text-xl mt-6">
              A team of four passionate developers creating exceptional websites and web applications tailored for your business needs.
            </p>
          </div>

          <div className="opacity-100">
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md text-base font-medium transition-all hover:bg-gray-200"
              >
                View Our Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-6 py-3 rounded-md text-base font-medium transition-all hover:bg-white/10"
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
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
