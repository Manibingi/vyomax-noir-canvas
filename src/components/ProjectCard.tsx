
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  image,
  link,
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[16/9] overflow-hidden bg-gray-100 mb-5">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-500">{category}</p>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label={`View ${title} project`}
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
