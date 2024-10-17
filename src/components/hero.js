import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


export default function Hero() {

  const headingRef = useRef(null); 
  const textRef = useRef(null); // Reference to the container of text divs
  const headlineRef = useRef(null); // Reference to the h1 containing the letters

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll('.letter'); 
    
    // GSAP animation for each letter
    gsap.fromTo(
      letters,
      { opacity: 0, y: 20, letterSpacing: '10vw' }, 
      {
        opacity: 1, y: 0, 
        stagger: 0.01, 
        duration: 1,   
        letterSpacing: '0vw',
        ease: "power2.out" 
      }
    );
    const textDivs = textRef.current.querySelectorAll('div'); // Select each div inside the text

    gsap.fromTo(
      textDivs,
      { opacity: 0, y: 50 }, // Initial state: opacity 0, 50px below
      {
        opacity: 1, y: 0, // Final state: opacity 1, in place
        ease: "power3.out", // Easing for smooth animation
        duration: 1, // Duration for each animation
        stagger: 0.3, // Stagger the animations for each line
      }
    );

    const headingletters = headlineRef.current.querySelectorAll('div'); // Get all letter divs inside h1

    // GSAP animation: each letter slides up from below (y: 50 to y: 0)
    gsap.fromTo(
      headingletters,
      { y: 600 }, // Start 50px below
      {
        y: 0, // End at the original position
        ease: 'power3.out', // Easing function for smooth movement
        duration: 1, // Duration of each letter animation
        stagger: 0.1, // Delay between each letter animation
      }
    );

  }, []);

    // Splitting the text into spans
    const splitText = (text) => {
      return text.split('').map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ));
    };

  return (
    <>
      <section className="styles_hero__XVQM0" data-header-theme="light" class="styles_hero__XVQM0" data-slice-type="home_hero" data-slice-variation="homeHero">
        <div className="styles_container__YgRn2">
        <h2
          ref={headingRef}
          className="styles_subheading__W7b9Z accent accent-40"
        >
          {splitText('Marketing')}
          <br />
          {splitText('That Fuels')}
        </h2>
        <h1 className="styles_headline__ceRGE headline animate-headline" ref={headlineRef}>
          <div style={{ position: 'relative', display: 'inline-block' }}>G</div>
          <div style={{ position: 'relative', display: 'inline-block' }}>R</div>
          <div style={{ position: 'relative', display: 'inline-block' }}>O</div>
          <div style={{ position: 'relative', display: 'inline-block' }}>W</div>
          <div style={{ position: 'relative', display: 'inline-block' }}>T</div>
          <div style={{ position: 'relative', display: 'inline-block' }}>H</div>
        </h1>
          <div className="styles_bottom__zJSuB">
            <div className="styles_scroll__X10_m styles_scroll__W_lzX">
              <svg
                viewBox="0 0 20 59"
                fill="none"
                style={{
                  transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                  opacity: 1,
                }}
              >
                <path
                  d="M1 1.264V55.2c0 1.786 2.163 2.676 3.42 1.408L19 41.9"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
              <p
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                Scroll
              </p>
            </div>
            <p className="styles_text__C1_W7 text animate-text" style={{ opacity: "1" }}>
            <div ref={textRef} style={{ textAlign: 'center', position: 'relative' }}>
              <div>Supercharge your growth journey</div>
              <div>with 'Be the Buzz' – your B2B</div>
              <div>SaaS marketing ally.</div>
            </div>
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
