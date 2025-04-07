
import React, { useEffect, useRef } from "react";

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Get canvas context for drawing
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
      
      // Redraw on resize
      drawBackground();
      createStars();
      createGalaxies();
    };

    // Initial resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Create stars
    const stars: { x: number; y: number; size: number; opacity: number; speed: number; }[] = [];
    
    function createStars() {
      // Clear previous stars
      stars.length = 0;
      
      // Create plenty of stars (more than before)
      const numberOfStars = Math.floor(canvas.width * canvas.height / 1000);
      
      for (let i = 0; i < numberOfStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05
        });
      }
    }

    // Create colorful galaxy clouds
    const galaxies: { x: number; y: number; size: number; color: string; rotation: number; speed: number; }[] = [];
    
    function createGalaxies() {
      // Clear previous galaxies
      galaxies.length = 0;
      
      // Colors for the nebulae
      const colors = [
        "rgba(138, 43, 226, 0.15)", // Purple
        "rgba(30, 144, 255, 0.15)",  // Blue
        "rgba(255, 105, 180, 0.15)", // Pink
        "rgba(75, 0, 130, 0.1)",     // Indigo
        "rgba(0, 191, 255, 0.1)"     // Deep sky blue
      ];
      
      // Create multiple galaxy nebulae across the canvas
      const numberOfGalaxies = 8; // Increase number of galaxy effects
      
      for (let i = 0; i < numberOfGalaxies; i++) {
        galaxies.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 300 + 200,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          speed: 0.0005 + Math.random() * 0.001
        });
      }
    }

    // Draw dark space background
    function drawBackground() {
      // Create gradient for better space effect
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#020203');
      gradient.addColorStop(0.5, '#050508');
      gradient.addColorStop(1, '#020203');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Animate the stars and galaxies
    function animate() {
      // Clear and redraw the background
      drawBackground();
      
      // Draw and animate galaxies
      galaxies.forEach(galaxy => {
        // Create nebula effect
        const gradient = ctx.createRadialGradient(
          galaxy.x, galaxy.y, 0, 
          galaxy.x, galaxy.y, galaxy.size
        );
        
        gradient.addColorStop(0, galaxy.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.save();
        ctx.translate(galaxy.x, galaxy.y);
        ctx.rotate(galaxy.rotation);
        ctx.scale(Math.sin(Date.now() * galaxy.speed) * 0.2 + 1, Math.cos(Date.now() * galaxy.speed) * 0.2 + 1);
        ctx.translate(-galaxy.x, -galaxy.y);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(galaxy.x, galaxy.y, galaxy.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
        
        // Slowly rotate the galaxies
        galaxy.rotation += galaxy.speed;
      });
      
      // Draw and animate stars
      stars.forEach(star => {
        // Twinkle effect
        const twinkle = Math.sin(Date.now() * star.speed) * 0.3 + 0.7;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }

    // Initialize and start animation
    createStars();
    createGalaxies();
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ minHeight: "100vh" }}
    />
  );
};

export default GalaxyBackground;
