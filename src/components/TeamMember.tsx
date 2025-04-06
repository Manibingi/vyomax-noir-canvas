
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  socialLinks,
}) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-display font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
        
        {socialLinks && (
          <div className="flex items-center space-x-3 mt-2">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label={`${name}'s GitHub`}
              >
                <Github size={18} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin size={18} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label={`${name}'s Twitter`}
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
