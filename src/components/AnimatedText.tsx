
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
  // Set visibility to true by default
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // No delay, immediate visibility
    setIsVisible(true);
  }, []);

  return (
    <span className={cn("inline-block relative overflow-hidden", className)}>
      <span
        className={`inline-block transform transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {text}
      </span>
    </span>
  );
};

export default AnimatedText;
