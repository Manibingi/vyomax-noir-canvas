
import React from "react";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="group bg-white border border-gray-100 p-6 rounded-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-5 flex-grow">{description}</p>
      <a 
        href="#contact" 
        className="inline-flex items-center font-medium text-sm group-hover:underline"
      >
        Learn more
        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default ServiceCard;
