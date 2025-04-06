
import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Techa E-commerce Platform",
    category: "Web Development",
    description: "A fully responsive e-commerce website with integrated payment systems for a tech gadgets retailer.",
    image: "https://placehold.co/800x450/ededed/333333?text=E-commerce+Platform",
    link: "#",
  },
  {
    title: "Wellness App Dashboard",
    category: "Web Application",
    description: "A dashboard interface for a health and wellness application with data visualization.",
    image: "https://placehold.co/800x450/ededed/333333?text=Wellness+Dashboard",
    link: "#",
  },
  {
    title: "Bistro Restaurant Site",
    category: "UI/UX Design",
    description: "A modern, responsive website for an upscale restaurant featuring online reservations.",
    image: "https://placehold.co/800x450/ededed/333333?text=Restaurant+Website",
    link: "#",
  },
  {
    title: "Property Finder Portal",
    category: "Full-stack Development",
    description: "A real estate portal with advanced search functionality and virtual tour capabilities.",
    image: "https://placehold.co/800x450/ededed/333333?text=Property+Finder",
    link: "#",
  },
];

const Projects = () => {
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
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-28 section-padding bg-white opacity-0"
    >
      <div className="container-wide">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 reveal-delay-1">
            Our Projects
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-delay-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Recent work
            </h2>
            <a href="#contact" className="inline-block hover-underline font-medium">
              View all projects
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 reveal-delay-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>

        <div className="mt-20 overflow-hidden reveal-delay-3">
          <div className="py-6 bg-gray-50 whitespace-nowrap animate-marquee inline-block">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 opacity-20 mx-8">
                VYOMAX
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
