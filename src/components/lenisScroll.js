import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisScroll = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,  // Adjust scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing for smoothness
      smooth: true,    // Enable smooth scrolling
      smoothTouch: true, // Enable smooth touch scrolling
    });

    // Create a requestAnimationFrame loop for Lenis to keep it active
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default LenisScroll;
