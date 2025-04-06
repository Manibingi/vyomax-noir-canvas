
import React, { useEffect, useRef } from "react";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "Alex Smith",
    role: "Front-end Developer",
    image: "https://placehold.co/400x600/ededed/333333?text=Alex+Smith",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jamie Chen",
    role: "Back-end Developer",
    image: "https://placehold.co/400x600/ededed/333333?text=Jamie+Chen",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Taylor Reed",
    role: "UI/UX Designer",
    image: "https://placehold.co/400x600/ededed/333333?text=Taylor+Reed",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Morgan Lee",
    role: "Full-stack Developer",
    image: "https://placehold.co/400x600/ededed/333333?text=Morgan+Lee",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 section-padding bg-white opacity-0"
    >
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-20">
          <div className="lg:w-2/5 reveal-delay-1">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              A dedicated team of digital craftsmen
            </h2>
            <p className="text-gray-600 mb-4">
              VyomaX is a collaborative team of four skilled developers with a shared passion for creating beautiful, functional websites and web applications. We combine our diverse expertise to deliver exceptional digital experiences that drive results.
            </p>
            <p className="text-gray-600 mb-8">
              Since our inception, we've been committed to staying at the forefront of web technologies, ensuring our clients receive cutting-edge solutions that stand out in an increasingly competitive digital landscape.
            </p>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 reveal-delay-2">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-delay-3">
          <div className="text-center">
            <h3 className="text-5xl font-display font-bold">50+</h3>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-display font-bold">30+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-display font-bold">5+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-display font-bold">12</h3>
            <p className="text-gray-600 mt-2">Industry Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
