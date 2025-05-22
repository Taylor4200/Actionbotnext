"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear any existing particles
    container.innerHTML = "";
    
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      
      // Random size between 50px and 200px
      const size = Math.floor(Math.random() * 150) + 50;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const posX = Math.floor(Math.random() * 100);
      const posY = Math.floor(Math.random() * 100);
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      
      // Random animation duration between 10s and 30s
      const duration = Math.floor(Math.random() * 20) + 10;
      particle.style.animationDuration = `${duration}s`;
      
      // Random delay
      const delay = Math.floor(Math.random() * 10);
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }
    
    // Cleanup
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="particles-container" ref={containerRef}>
      {/* Particles will be dynamically added here */}
    </div>
  );
}
