
import React, { useEffect, useRef } from "react";

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas to cover the entire document
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
      console.log("Canvas size set to:", canvas.width, canvas.height);
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    
    // Star properties - increase count for more stars
    const stars: Array<{x: number, y: number, size: number, speed: number, opacity: number}> = [];
    const numStars = 500; // Even more stars for better effect
    
    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5, // Slightly larger stars
        speed: Math.random() * 0.15 + 0.05,
        opacity: Math.random() * 0.9 + 0.1
      });
    }
    
    // Nebula properties - create more and larger nebulae
    const nebulae: Array<{x: number, y: number, radius: number, color: string, speed: number}> = [];
    const numNebulae = 12; // More nebulae
    
    // More vibrant nebula colors
    const nebulaColors = [
      `rgba(138, 43, 226, 0.15)`, // Purple
      `rgba(30, 144, 255, 0.15)`, // Blue
      `rgba(255, 105, 180, 0.15)`, // Pink
      `rgba(66, 39, 90, 0.15)`, // Dark purple
      `rgba(75, 0, 130, 0.15)`, // Indigo
      `rgba(25, 25, 112, 0.15)`, // Midnight blue
      `rgba(72, 61, 139, 0.15)`, // Dark slate blue
      `rgba(106, 90, 205, 0.15)` // Slate blue
    ];
    
    // Initialize nebulae
    for (let i = 0; i < numNebulae; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 350 + 200, // Larger nebulae
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
        speed: Math.random() * 0.03 + 0.01 // Slower movement for more realistic effect
      });
    }
    
    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect for motion blur
      ctx.fillStyle = "rgba(5, 5, 15, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update nebulae first (behind stars)
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
      
      // Draw and update stars
      stars.forEach(star => {
        // Draw star with glow for brighter stars
        ctx.beginPath();
        
        if (star.size > 1.5) {
          // Add glow to larger stars
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(255, 255, 255, 0.7)";
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
        
        // Move star
        star.y += star.speed;
        
        // Reset position if star moves off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Update canvas size when document height changes
    const resizeObserver = new ResizeObserver(() => {
      setCanvasSize();
    });
    
    resizeObserver.observe(document.body);
    
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      resizeObserver.disconnect();
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        background: "linear-gradient(to bottom, #020203, #050510)",
        position: "fixed",
        width: "100%",
        height: "100%"
      }}
    />
  );
};

export default GalaxyBackground;
