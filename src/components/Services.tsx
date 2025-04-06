
import React, { useEffect, useRef } from "react";
import { Code, Palette, Globe, BarChart, Smartphone, Server } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Web Development",
    description: "We create responsive, performant websites optimized for user experience and search engines.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with your users in mind to maximize engagement.",
    icon: Palette,
  },
  {
    title: "Web Applications",
    description: "Custom web applications that solve specific business problems and streamline operations.",
    icon: Globe,
  },
  {
    title: "Digital Strategy",
    description: "Data-driven approach to maximize your digital presence and achieve business goals.",
    icon: BarChart,
  },
  {
    title: "Mobile-First Design",
    description: "Ensuring your digital products work flawlessly across all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    title: "Backend Solutions",
    description: "Robust and scalable backend systems that power your applications reliably.",
    icon: Server,
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-28 section-padding bg-gray-50 opacity-0"
    >
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 reveal-delay-1">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 reveal-delay-1">
            What we excel at
          </h2>
          <p className="text-gray-600 text-lg reveal-delay-2">
            Our team specializes in creating exceptional digital experiences through a range of tailored web development services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 reveal-delay-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
