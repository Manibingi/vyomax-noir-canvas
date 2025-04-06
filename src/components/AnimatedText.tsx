
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  once = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a very short delay to ensure text is visible immediately
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 100); // Even faster animation

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={cn("inline-block relative overflow-hidden", className)}>
      <span
        className={`inline-block transform transition-transform duration-500 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {text}
      </span>
    </span>
  );
};

export default AnimatedText;
