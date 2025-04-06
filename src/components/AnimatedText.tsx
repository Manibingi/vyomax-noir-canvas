
import React from "react";
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
  // We'll make this component immediately visible without any delay
  return (
    <span className={cn("inline-block relative", className)}>
      <span
        className="inline-block animate-text-reveal"
        style={{ animationDelay: `${delay * 100}ms` }}
      >
        {text}
      </span>
    </span>
  );
};

export default AnimatedText;
