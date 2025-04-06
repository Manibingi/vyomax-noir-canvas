
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
    // Reduced delay to make text appear faster
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 500);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={cn("inline-block relative overflow-hidden", className)}>
      <span
        className={`inline-block transform transition-transform duration-700 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {text}
      </span>
    </span>
  );
};

export default AnimatedText;
