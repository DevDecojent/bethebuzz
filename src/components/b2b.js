import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import elephantImg from "../assets/images/ZgL2JccYqOFdyGDS_img-10-.avif";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function B2b() {
	// State to track if the button is hovered
	const [isHovered, setIsHovered] = useState(false);

	const svgRef = useRef(null); // Reference for the SVG container
	useEffect(() => {
		// GSAP animation: Rotate and move the SVG based on scroll
		gsap.to(svgRef.current, {
			y: 550, // Moves the SVG down (adjust value as needed)
			rotate: 360, // Rotates the SVG 360 degrees
			ease: 'none', // No easing for linear scroll effect
			scrollTrigger: {
				trigger: svgRef.current, // The element to watch for scrolling
				start: 'top bottom', // When the top of the SVG hits the bottom of the viewport
				end: 'bottom top', // When the bottom of the SVG leaves the top of the viewport
				scrub: 1, // Smooth animation tied to the scroll position
			},
		});
	}, []);

	return (
		<>
			<section className="section styles_section__wwoJW" id="b2b-section">
				<div className="styles_container__VvCHC">
					<div className="styles_block__K5nIf styles_left__i3WQf">
						<h2 className="styles_left__heading__VK6df title title-80">
							Crafting B2B <br /> SaaS <strong>Success</strong> <br /> with Marketing <br /> Mastery
						</h2>
						<p className="styles_left__text__pTdct text">Results from a Cybersecurity Company after 36 months of partnership with Be the Buzz</p>
						<div className="styles_left__numbers__EZl70">
							<div className="styles_number__VnznC border-radius">
								<div className="styles_number__value__ayTB4 title title-60">567<sub>%</sub></div>
								<p className="styles_number__text__FRNy7 text">Gross profit <br /> surge</p>
							</div>
							<div className="styles_number__VnznC border-radius">
								<div className="styles_number__value__ayTB4 title title-60">500</div>
								<p className="styles_number__text__FRNy7 text">Consecutive Inc. 500 <br /> spot holder</p>
							</div>
							<div className="styles_number__VnznC border-radius">
								<div className="styles_number__value__ayTB4 title title-60">02<sup>nd</sup></div>
								<p className="styles_number__text__FRNy7 text">2nd Fastest-growing <br /> company in California</p>
							</div>
						</div>
						<a href="/" className="styles_left__link__U2aWL text-link text-link-hover text-link-hover--large hover-text js-internal-link">
							View Case Study
							<span className="text-link-hover-underline"></span>
						</a>
					</div>
					<div className="styles_block__K5nIf styles_right__fLwu_">
						<div className="styles_right__shape__S6cyG">
							<div
								className="pin-spacer"
								style={{
									order: 0,
									placeSelf: 'auto',
									gridArea: 'auto',
									zIndex: 'auto',
									float: 'none',
									flexShrink: 1,
									display: 'block',
									margin: 0,
									inset: 'auto',
									position: 'relative',
									flexBasis: 'auto',
									overflow: 'visible',
									boxSizing: 'border-box',
									width: '160px',
									height: '740px',
									padding: '0px 0px 576px',
								}}
							>
								<div
									className="styles_right__shapeInner__od0tH"
									ref={svgRef} // Attach the ref to the div containing the SVG
									style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										inset: '0px auto auto 0px',
										margin: 0,
										maxWidth: '160px',
										width: '160px',
										maxHeight: '164px',
										height: '164px',
										padding: 0,
										transform: 'translate(0px, 0px)',
									}}
								>
									<svg
										fill="none"
										viewBox="0 0 101 101"
										className="styles_shape__B3q9p styles_right__shapeSvg__uGpEA title-80"
									>
										<path
											d="M27.62 91.19L25.8 68.634a5.31 5.31 0 012.654-4.6l18.978-7.187a5.312 5.312 0 015.307 0l.046.026 18.023 6.252a5.31 5.31 0 012.653 4.599l-.909 23.466c0 1.898-1.468 3.745-3.11 4.694M27.62 91.19v.001m0-.001c0 1.898 1.814 3.745 3.456 4.694M72.553 8.637l1.819 21.647a5.31 5.31 0 01-2.654 4.6L52.74 42.98a5.31 5.31 0 01-5.307 0l-.046-.026-18.932-8.07a5.31 5.31 0 01-2.654-4.599L27.62 8.637c0-1.898 1.814-4.09 3.456-5.04m41.477 5.04v-.001m0 .001c0-1.898-1.814-3.745-3.456-4.694"
											stroke="#010561"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M5.013 63.214l14.02-16.748a5.31 5.31 0 015.13-1.376l19.145 7.85a5.312 5.312 0 013.752 3.752l.014.051 6.928 17.275a5.311 5.311 0 01-1.376 5.129l-15.84 15.84c-1.342 1.342-3.878 1.388-5.71.897M5.013 63.214h0m0 0c-1.342 1.342-1.388 3.878-.897 5.71m91.044-32.31L82.048 52.451a5.31 5.31 0 01-5.129 1.376l-20.054-6.94a5.31 5.31 0 01-3.752-3.753l-.014-.051L45.262 24.9a5.31 5.31 0 011.376-5.129l16.749-14.93c1.342-1.343 3.878-1.388 5.71-.898m26.063 32.67h0m0 0c1.342-1.342 1.733-3.878 1.243-5.71"
											stroke="#010561"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M63.387 94.987l-15.84-15.84a5.31 5.31 0 01-1.375-5.128l6.94-17.327a5.31 5.31 0 013.753-3.752l.051-.014 19.094-6.928a5.31 5.31 0 015.128 1.376l14.022 15.84c1.342 1.342 1.387 4.224.897 6.056m-32.67 25.717h0m0 0c1.342 1.342 4.223 1.388 6.055.897M36.786 4.84l15.84 15.84A5.31 5.31 0 0154 25.807l-6.94 17.327a5.311 5.311 0 01-3.753 3.752l-.051.014-19.094 7.837a5.31 5.31 0 01-5.128-1.376L5.013 36.613C3.671 35.271 3.28 32.39 3.77 30.558M36.786 4.84h0m0 0c-1.342-1.342-3.878-1.733-5.71-1.243"
											stroke="#010561"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M8.81 27.447l22.556-.91a5.31 5.31 0 014.6 2.654l7.187 18.07a5.312 5.312 0 010 5.306l-.026.046-7.16 18.023a5.31 5.31 0 01-4.6 2.654L8.81 72.38c-1.898 0-3.745-1.814-4.694-3.456M8.81 27.447H8.81m.001 0c-1.898 0-4.091 1.468-5.04 3.11M91.363 72.38l-21.647.91a5.31 5.31 0 01-4.6-2.654L57.02 52.567a5.311 5.311 0 010-5.307l.026-.046 8.07-18.932a5.31 5.31 0 014.599-2.654l21.648 1.819c1.898 0 4.09 1.814 5.04 3.456m-5.04 41.478h.001m-.001 0c1.898 0 3.745-1.47 4.694-3.111"
											stroke="#010561"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</div>
							</div>
						</div>
						<div className="styles_right__image__w3IUx styles_image__TrEqJ">
							<div style={{
								paddingBottom: '67.71037181996086%',
							}}>
								<img src={elephantImg} alt="elephantImg" loading="lazy" width={'511px'} height={'346px'} style={{
									color: 'transparent',
								}} />
							</div>
						</div>
						<h3 className="styles_right__heading__AuDBN title title-80">
							We Fuel the Buzz That <br /> Fuels Your Growth
						</h3>
						<p className="styles_right__text__5DHek text">
							In the world of B2B SaaS companies, brand recognition is pivotal. We prioritize aligning sales & marketing for partnership-led success for real business outcomes over vanity metrics, focusing on revenue, market positioning, and tangible brand growth. We don't just create buzz; we shape it to speak the language of your B2B SaaS audience.
						</p>
						<a href="/" className="styles_button__DwtwR styles_right__button__bVlJn button-text"
						 onMouseEnter={() => setIsHovered(true)}
						 onMouseLeave={() => setIsHovered(false)}
						 >
							<div className="styles_button__container__kKhYm border-radius">
								<div className="styles_button__svgContainer__5Xqdx border-radius" style={{
									translate: 'none',
									scale: 'none',
									rotate: 'none',
									transform: isHovered ? 'translate(0px, 0px)' : 'translate(-6.15em, 0px)', 
									transition: 'transform 0.4s ease', 
								}}>
									<svg class="styles_arrowLeft__0RHHo" viewBox="0 0 12 10" fill="none"
										style={{
											translate: 'none',
											rotate: 'none',
											transform: isHovered ? 'translate(0px, 0px)' : 'translate(2.878em, 0px)', 
											transition: 'transform 0.4s ease', 
											scale: '(0, 0)'
										}}>
										<path d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
								</div>
								<div className="styles_button__labelContainer__P9ZGZ border-radius"
									style={{
										translate: 'none',
										scale: 'none',
										rotate: 'none',
										transform: isHovered ? 'translate(6.15em, 0px)' : 'translate(0px, 0px)', 
										transition: 'transform 0.4s ease', 
									}}>
									<span>Book a Consultation</span>
									<svg class="styles_arrowRight__82iX_" viewBox="0 0 12 10" fill="none"
										style={{
											translate: 'none',
											rotate: 'none',
											transform: isHovered ? 'translate(5.75em, 0px)' : 'translate(0px, 0px)', 
											transition: 'transform 0.4s ease', 
											scale: 'none'
										}}>
										<path d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										</path>
									</svg>
								</div>
							</div>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}