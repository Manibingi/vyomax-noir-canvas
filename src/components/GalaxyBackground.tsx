
import React, { useEffect, useRef } from "react";

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas to full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    
    // Star properties
    const stars: Array<{x: number, y: number, size: number, speed: number, opacity: number}> = [];
    const numStars = 200;
    
    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
    
    // Nebula properties
    const nebulae: Array<{x: number, y: number, radius: number, color: string, speed: number}> = [];
    const numNebulae = 5;
    
    // Initialize nebulae
    for (let i = 0; i < numNebulae; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 100,
        color: [
          `rgba(66, 39, 90, 0.3)`, 
          `rgba(115, 75, 109, 0.3)`, 
          `rgba(23, 42, 99, 0.3)`, 
          `rgba(90, 24, 154, 0.3)`
        ][Math.floor(Math.random() * 4)],
        speed: Math.random() * 0.05 + 0.01
      });
    }
    
    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(5, 5, 8, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update stars
      stars.forEach(star => {
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Move star
        star.y += star.speed;
        
        // Reset position if star moves off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Draw and update nebulae
      nebulae.forEach(nebula => {
        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0, 
          nebula.x, nebula.y, nebula.radius
        );
        
        gradient.addColorStop(0, nebula.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        // Draw nebula
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Move nebula
        nebula.y += nebula.speed;
        
        // Reset position if nebula moves off screen
        if (nebula.y - nebula.radius > canvas.height) {
          nebula.y = -nebula.radius;
          nebula.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: "linear-gradient(to bottom, #050508, #0a0a18)" }}
    />
  );
};

export default GalaxyBackground;
