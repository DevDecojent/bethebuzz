import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
	const headlineRef = useRef(null); // Reference to the h2 containing the letters
	const h4Ref = useRef(null); // Reference specifically for the h4 element
	const [isPrevHovered, setIsPrevHovered] = useState(false);
	const [isNextHovered, setIsNextHovered] = useState(false);
	useEffect(() => {
		const headingLetters = headlineRef.current.querySelectorAll('div'); // Get all letter divs inside h2

		// GSAP animation: each letter slides up from below (y: 600 to y: 0) with ScrollTrigger
		gsap.fromTo(
			headingLetters,
			{ y: 600 }, // Start from 600px below
			{
				y: 0, // End at the original position
				ease: 'power3.out', // Easing function for smooth movement
				duration: 1, // Duration of each letter animation
				stagger: 0.1, // Delay between each letter animation
				scrollTrigger: {
					trigger: headlineRef.current, // Element that triggers the animation
					start: 'top 80%', // When the top of the h2 is 80% from the top of the viewport
					end: 'bottom 20%', // End point of the scroll trigger
					toggleActions: 'play none none none', // Only play the animation once
				},
			}
		);
		// GSAP animation for fade-up on scroll
		gsap.fromTo(
			h4Ref.current,
			{
				opacity: 0,   // Start fully transparent
				y: 50,        // Start 50px below its original position
			},
			{
				opacity: 1,// End fully visible
				y: 0,// End at its original position
				ease: 'power3.out',// Easing function for smooth movement
				duration: 1,// Duration of the animation
				scrollTrigger: {
					trigger: h4Ref.current,// Element that triggers the animation
					start: 'top 80%', // When the top of h4 is 80% from the top of the viewport
					end: 'bottom 20%', // When the bottom of h4 is 20% from the top of the viewport
					toggleActions: 'play none none none', // Only play the animation once
				},
			}
		);
	}, []);
	return (
		<>
			<section className="styles_clients__0Fl_N">
				<header data-header-theme="light" className="styles_header__0xhVU">
					<h4
						className="accent accent-40 animate-fadeinup"
						ref={h4Ref}
						style={{
							opacity: '1',
							transform: 'translate(0px, 0px)',
						}}
					>
						Hear it from our
					</h4>
					<div style={{ width: '100%' }}>
						<div
							className='client-heading-wrap'
						>
							<h2 className="headline headline-outline animate-headline" ref={headlineRef} style={{
								opacity: '1',
							}}>
								<div style={{ position: 'relative', display: 'inline-block' }}>C</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>l</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>i</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>e</div>
								<br />
								<div style={{ position: 'relative', display: 'inline-block' }}>n</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>t</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>s</div>
							</h2>
						</div>
					</div>
				</header>
				<div className="slideshow_slideshow__s7R92">
					<div className="slideshow_slideshow-side__mHpmh">
						<div className="slideshow_slideshow-portraits__dK49R">
							<div
								className="slideshow_slideshow-portraitsImage___pKXk"
								style={{ zIndex: 1, transform: 'translate(-100%, 0%)' }}
							>
								<img
									alt="Sarah Craft"
									loading="lazy"
									width="196"
									height="196"
									decoding="async"
									srcSet="https://images.prismic.io/bethebuzz-cms/65cd01e99be9a5b998b5d323_292593781_455286416605025_4552678689666100770_n.jpg?auto=format%2Ccompress&rect=172%2C272%2C1027%2C1026&w=256&fit=max 1x, https://images.prismic.io/bethebuzz-cms/65cd01e99be9a5b998b5d323_292593781_455286416605025_4552678689666100770_n.jpg?auto=format%2Ccompress&rect=172%2C272%2C1027%2C1026&w=640&fit=max 2x"
									src="https://images.prismic.io/bethebuzz-cms/65cd01e99be9a5b998b5d323_292593781_455286416605025_4552678689666100770_n.jpg?auto=format%2Ccompress&rect=172%2C272%2C1027%2C1026&w=640&fit=max"
									style={{ color: 'transparent' }}
								/>
							</div>
							<div
								className="slideshow_slideshow-portraitsImage___pKXk"
								style={{ zIndex: 2, transform: 'translate(0px, 0px)' }}
							>
								<img
									alt="Sara Trammell"
									loading="lazy"
									width="196"
									height="196"
									decoding="async"
									srcSet="https://images.prismic.io/bethebuzz-cms/65ccdf619be9a5b998b5d17c_SaraTrammell.jpg?auto=format%2Ccompress&fit=max&w=256 1x, https://images.prismic.io/bethebuzz-cms/65ccdf619be9a5b998b5d17c_SaraTrammell.jpg?auto=format%2Ccompress&fit=max&w=640 2x"
									src="https://images.prismic.io/bethebuzz-cms/65ccdf619be9a5b998b5d17c_SaraTrammell.jpg?auto=format%2Ccompress&fit=max&w=640"
									style={{ color: 'transparent', transform: 'translate(0px, 0px)' }}
								/>
							</div>
							<div
								className="slideshow_slideshow-portraitsImage___pKXk"
								style={{ zIndex: 1, transform: 'translate(-100%, 0%)' }}
							>
								<img
									alt="Sarah Craft"
									loading="lazy"
									width="196"
									height="196"
									decoding="async"
									srcSet="https://images.prismic.io/bethebuzz-cms/65a1518f7a5e8b1120d57b56_client-image-1.jpg?auto=format%2Ccompress&fit=max&w=256 1x, https://images.prismic.io/bethebuzz-cms/65a1518f7a5e8b1120d57b56_client-image-1.jpg?auto=format%2Ccompress&fit=max&w=640 2x"
									src="https://images.prismic.io/bethebuzz-cms/65a1518f7a5e8b1120d57b56_client-image-1.jpg?auto=format%2Ccompress&fit=max&w=640"
									style={{ color: 'transparent' }}
								/>
							</div>
							<div
								className="slideshow_slideshow-portraitsMask__26b_Q"
								style={{
									transformOrigin: '100% 50%',
									transform: 'translate(-101%, 0%) scale(0, 1)'
								}}
							/>
						</div>
					</div>
					<div className="slideshow_slideshow-content__Drjo_">
						<header className="slideshow_slideshow-contentHeader__2NgXs">
							<button
								aria-label="Previous Slide"
								className="styles_button__CR5vR styles_prev__2AqhC border-radius slideshow_slideshow-contentButton__pwYkf"
								onMouseEnter={() => setIsPrevHovered(true)}
								onMouseLeave={() => setIsPrevHovered(false)}
							>
								<div
									className="styles_button__svgContainer__ppZ1p border-radius"
									style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										transform: isPrevHovered ? 'translate(-100%, 0px)' : 'translate(0%, 0px)',
										transition: 'transform 0.5s ease',
									}}
								>
									<svg viewBox="0 0 12 10" fill="none" style={{
										transform: isPrevHovered ? 'translate(2em, 0px) scale(0, 0)' : 'translate(0px, 0px)',
										transition: 'transform 0.5s ease',
									}}>
										<path
											d="M4.9 9L1 5m0 0l3.9-4M1 5h9.6"
											stroke="#010561"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div
									className="styles_button__svgContainer__ppZ1p border-radius"
									style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										transform: isPrevHovered ? 'translate(0%, 0px)' : 'translate(100%, 0px)',
										transition: 'transform 0.5s ease',
									}}
								>
									<svg
										viewBox="0 0 12 10"
										fill="none"
										style={{
											transform: isPrevHovered ? 'translate(0px, 0px)' : 'translate(2em, 0px) scale(0, 0)',
											transition: 'transform 0.5s ease',
										}}
									>
										<path
											d="M4.9 9L1 5m0 0l3.9-4M1 5h9.6"
											stroke="#010561"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</button>
							<div className="slideshow_slideshow-portraits__dK49R">
								<div
									className="slideshow_slideshow-portraitsImage___pKXk"
									style={{
										zIndex: 2,
										transform: 'translate(0px, 0px)',
									}}
								>
									<img
										alt="Sarah Craft"
										loading="lazy"
										width={196}
										height={196}
										decoding="async"
										data-nimg="1"
										style={{ color: 'transparent', transform: 'translate(0px, 0px)' }}
										srcSet="
                                    https://images.prismic.io/bethebuzz-cms/65cd01e99be9a5b998b5d323_292593781_455286416605025_4552678689666100770_n.jpg?auto=format%2Ccompress&rect=172%2C272%2C1027%2C1026&w=256&fit=max 1x,
                                    https://images.prismic.io/bethebuzz-cms/65cd01e99be9a5b998b5d323_292593781_455286416605025_4552678689666100770_n.jpg?auto=format%2Ccompress&rect=172%2C272%2C1027%2C1026&w=640&fit=max 2x
                                    "
										src="https://images.prismic.io/bethebuzz-cms/65cd01e99be9a5b998b5d323_292593781_455286416605025_4552678689666100770_n.jpg?auto=format%2Ccompress&rect=172%2C272%2C1027%2C1026&w=640&fit=max"
									/>
								</div>
								<div
									className="slideshow_slideshow-portraitsImage___pKXk"
									style={{
										zIndex: 1,
										transform: 'translate(-100%, 0%)',
									}}
								>
									<img
										alt="Sarah Craft"
										loading="lazy"
										width={196}
										height={196}
										decoding="async"
										data-nimg="1"
										style={{ color: 'transparent' }}
										srcSet="
                                        https://images.prismic.io/bethebuzz-cms/65ccdf619be9a5b998b5d17c_SaraTrammell.jpg?auto=format%2Ccompress&fit=max&w=256 1x,
                                        https://images.prismic.io/bethebuzz-cms/65ccdf619be9a5b998b5d17c_SaraTrammell.jpg?auto=format%2Ccompress&fit=max&w=640 2x
                                        "
										src="https://images.prismic.io/bethebuzz-cms/65ccdf619be9a5b998b5d17c_SaraTrammell.jpg?auto=format%2Ccompress&fit=max&w=640"
									/>
								</div>
								<div
									className="slideshow_slideshow-portraitsImage___pKXk"
									style={{
										zIndex: 1,
										transform: 'translate(-100%, 0%)',
									}}
								>
									<img
										alt="Sarah Craft"
										loading="lazy"
										width={196}
										height={196}
										decoding="async"
										data-nimg="1"
										style={{ color: 'transparent' }}
										srcSet="
                                    https://images.prismic.io/bethebuzz-cms/65a1518f7a5e8b1120d57b56_client-image-1.jpg?auto=format%2Ccompress&fit=max&w=256 1x,
                                    https://images.prismic.io/bethebuzz-cms/65a1518f7a5e8b1120d57b56_client-image-1.jpg?auto=format%2Ccompress&fit=max&w=640 2x
                                    "
										src="https://images.prismic.io/bethebuzz-cms/65a1518f7a5e8b1120d57b56_client-image-1.jpg?auto=format%2Ccompress&fit=max&w=640"
									/>
								</div>
								<div
									className="slideshow_slideshow-portraitsMask__26b_Q"
									style={{
										transformOrigin: '100% 50%',
										transform: 'translate(-101%, 0%) scale(0, 1)',
									}}
								/>
							</div>
							<button aria-label="next Slide" title className="styles_button__CR5vR styles_next__qm3f_ border-radius slideshow_slideshow-contentButton__pwYkf"
								onMouseEnter={() => setIsNextHovered(true)}
								onMouseLeave={() => setIsNextHovered(false)}
							>
								<div
									className="styles_button__svgContainer__ppZ1p border-radius"
									style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										transform: isNextHovered ? 'translate(100%, 0px)' : 'translate(0%, 0px)',
										transition: 'transform 0.5s ease',
									}}
								>
									<svg
										viewBox="0 0 12 10"
										fill="none"
										style={{
											transform: isNextHovered ? 'translate(-2em, 0px) scale(0, 0)' : 'translate(0px, 0px)',
											transition: 'transform 0.5s ease',
										}}
									>
										<path
											d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1"
											stroke="#010561"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div
									className="styles_button__svgContainer__ppZ1p border-radius"
									style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										transform: isNextHovered ? 'translate(0%, 0px)' : 'translate(-100%, 0px)',
										transition: 'transform 0.5s ease',
									}}
								>
									<svg
										viewBox="0 0 12 10"
										fill="none"
										style={{
											transform: isNextHovered ? 'translate(0px, 0px)' : 'translate(-2em, 0px) scale(0, 0)',
											transition: 'transform 0.5s ease',
										}}
									>
										<path
											d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1"
											stroke="#010561"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</button>
						</header>
						<div className="slideshow_slideshow-articles__sjzQn">
							<article className="slideshow_slideshow-article__ztzrb slideshow_--selected__jJos1" style={{ opacity: 1 }}>
								<h4 className="slideshow_slideshow-articleTitle__OckzX title title-130">
									<div style={{ transform: 'translate(0px, 0px)' }}>Meredith Watkins</div>
								</h4>
								<div className="slideshow_slideshow-articleSubtitle__WTbzq text text-14">
									<div style={{ transform: 'translate(0px, 0px)' }}>CEO &amp; Managing Partner</div>
								</div>
								<svg
									className="slideshow_slideshow-articleIcon__J6wJ_"
									xmlns="http://www.w3.org/2000/svg"
									width="57"
									height="54"
									viewBox="0 0 57 54"
									fill="none"
								>
									<path
										className="star"
										d="M35.2288 18.1385C34.5527 22.5592 36.8333 25.3963 38.8747 26.8395M32.2666 38.0795C33.0199 36.9619 33.5644 35.7195 34.2644 34.5675C34.6244 33.9758 35.0515 33.3865 35.6734 33.0765C36.0312 32.8987 36.4314 32.824 36.8258 32.7559C38.296 32.5016 39.7856 32.3027 41.2047 31.8473C41.9255 31.6169 42.6356 31.3128 43.2086 30.8226C43.9128 30.2184 44.3179 29.2923 44.2158 28.3615C44.1137 27.4307 43.5207 26.6137 42.9191 25.8747C41.2936 23.8793 39.1316 22.1997 38.7369 19.5097C38.6176 18.695 38.7793 17.8711 38.8375 17.0514C38.9046 16.0879 38.8268 15.1196 38.748 14.1561C38.6971 13.5256 38.6556 12.7329 38.3249 12.1742C37.9567 11.5503 37.075 11.2331 36.3949 11.1695C35.5909 11.0937 34.788 11.2881 34.0206 11.5295C32.3716 12.0472 30.9424 12.9446 29.3539 13.5753C29.0564 13.693 28.7467 13.797 28.4254 13.7951C28.0997 13.7939 27.7839 13.6836 27.4768 13.5747C25.2752 12.7976 23.0078 11.7371 20.652 11.6314C20.0118 11.6024 19.3474 11.7271 18.8309 12.0972C18.3123 12.469 17.9862 13.0595 17.831 13.6763C17.6758 14.2931 17.6758 14.938 17.7091 15.5748C17.7937 17.182 18.0788 18.7725 18.3643 20.3592C18.431 20.7289 18.496 21.1136 18.3923 21.4732C18.3067 21.7686 18.1125 22.0194 17.9223 22.2616C16.8088 23.6842 15.6854 25.0995 14.5825 26.531C13.8051 27.5409 13.1897 28.9309 13.8794 30.1673C14.5065 31.2924 15.7699 31.739 16.942 32.0554C17.6157 32.2377 18.2911 32.4194 18.9754 32.5564C20.0214 32.7659 21.2411 32.7624 22.1459 33.397C22.4506 33.6105 22.6942 33.8969 22.9217 34.189C24.2647 35.9126 25.2667 37.8776 26.743 39.5027C27.5101 40.3474 28.5974 40.9265 29.702 40.4261C30.8066 39.9258 31.6206 39.0429 32.2704 38.08L32.2666 38.0795Z"
										stroke="#5E29F9"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
										style={{ opacity: 1, transformOrigin: '0px 0px' }}
										data-svg-origin="28.905773162841797 25.882349967956543"
										transform="matrix(1,0,0,1,0,0)"
									/>
									<path
										className="lines"
										d="M50.2451 30.3207L55.8331 32.5057M31.2428 47.1617L32.2579 53.0752M7.08393 28.8568L1.17041 29.8719M15.4704 5.73513L11.547 1.19568M41.8082 6.23674L45.2712 1.33702"
										stroke="#5E29F9"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
										style={{ opacity: 1, transformOrigin: '0px 0px' }}
										data-svg-origin="28.501754641532898 27.135440230369568"
										transform="matrix(1,0,0,1,0,0)"
									/>
								</svg>
								<div className="slideshow_slideshow-articleText__4F5E0 text">
									<div style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
										“When working with BetheBuzz, I never felt like a client. Her ability to read between the lines of any business plan to determine the most cost-effective, efficient way to move forward is uncanny. Not only that, she goes above and beyond – learning about the team dynamics to ensure everyone is working cohesively toward a common goal. I’ve never felt so empowered to take on the challenges of growing a new business than I have when working with Miad.”
									</div>
								</div>
							</article>
							<article className="slideshow_slideshow-article__ztzrb" style={{ opacity: 0 }}>
								<h4 className="slideshow_slideshow-articleTitle__OckzX title title-130">
									<div>Sara Trammell</div>
								</h4>
								<div className="slideshow_slideshow-articleSubtitle__WTbzq text text-14">
									<div>Director of Marketing at Optery</div>
								</div>
								<svg
									className="slideshow_slideshow-articleIcon__J6wJ_"
									xmlns="http://www.w3.org/2000/svg"
									width="57"
									height="54"
									viewBox="0 0 57 54"
									fill="none"
								>
									<path
										className="star"
										d="M35.2288 18.1385C34.5527 22.5592 36.8333 25.3963 38.8747 26.8395M32.2666 38.0795C33.0199 36.9619 33.5644 35.7195 34.2644 34.5675C34.6244 33.9758 35.0515 33.3865 35.6734 33.0765C36.0312 32.8987 36.4314 32.824 36.8258 32.7559C38.296 32.5016 39.7856 32.3027 41.2047 31.8473C41.9255 31.6169 42.6356 31.3128 43.2086 30.8226C43.9128 30.2184 44.3179 29.2923 44.2158 28.3615C44.1137 27.4307 43.5207 26.6137 42.9191 25.8747C41.2936 23.8793 39.1316 22.1997 38.7369 19.5097C38.6176 18.695 38.7793 17.8711 38.8375 17.0514C38.9046 16.0879 38.8268 15.1196 38.748 14.1561C38.6971 13.5256 38.6556 12.7329 38.3249 12.1742C37.9567 11.5503 37.075 11.2331 36.3949 11.1695C35.5909 11.0937 34.788 11.2881 34.0206 11.5295C32.3716 12.0472 30.9424 12.9446 29.3539 13.5753C29.0564 13.693 28.7467 13.797 28.4254 13.7951C28.0997 13.7939 27.7839 13.6836 27.4768 13.5747C25.2752 12.7976 23.0078 11.7371 20.652 11.6314C20.0118 11.6024 19.3474 11.7271 18.8309 12.0972C18.3123 12.469 17.9862 13.0595 17.831 13.6763C17.6758 14.2931 17.6758 14.938 17.7091 15.5748C17.7937 17.182 18.0788 18.7725 18.3643 20.3592C18.431 20.7289 18.496 21.1136 18.3923 21.4732C18.3067 21.7686 18.1125 22.0194 17.9223 22.2616C16.8088 23.6842 15.6854 25.0995 14.5825 26.531C13.8051 27.5409 13.1897 28.9309 13.8794 30.1673C14.5065 31.2924 15.7699 31.739 16.942 32.0554C17.6157 32.2377 18.2911 32.4194 18.9754 32.5564C20.0214 32.7659 21.2411 32.7624 22.1459 33.397C22.4506 33.6105 22.6942 33.8969 22.9217 34.189C24.2647 35.9126 25.2667 37.8776 26.743 39.5027C27.5101 40.3474 28.5974 40.9265 29.702 40.4261C30.8066 39.9258 31.6206 39.0429 32.2704 38.08L32.2666 38.0795Z"
										stroke="#5E29F9"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
									/>
									<path
										className="lines"
										d="M50.2451 30.3207L55.8331 32.5057M31.2428 47.1617L32.2579 53.0752M7.08393 28.8568L1.17041 29.8719M15.4704 5.73513L11.547 1.19568M41.8082 6.23674L45.2712 1.33702"
										stroke="#5E29F9"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
									/>
								</svg>
								<div className="slideshow_slideshow-articleText__4F5E0 text">
									<div>
										“Discovering Be the Buzz (BTB) turned out to be a game-changer for me as a
										cybersecurity marketing leader at a startup. Their influence wasn't just about
										optimizing campaigns; it was about building meaningful connections at scale,
										all atop an integrated digital marketing strategy. In a field as competitive as
										ours, finding an agency like BTB that not only deeply understands your market
										but also passionately supports your vision is priceless. A significant part of
										this success can be attributed to Miad, among the most strategic minds I've
										encountered. She has assembled a team of unparalleled experts, each excelling
										in their craft, embodying a level of expertise and commitment that's exceptionally
										rare. With BTB, we didn't merely hit our immediate objectives; we laid the
										groundwork for sustained success. Hands down, I will work with them again!”
									</div>
								</div>
							</article>
							<article className="slideshow_slideshow-article__ztzrb" style={{ opacity: 0 }}>
								<h4 className="slideshow_slideshow-articleTitle__OckzX title title-130">
									<div>Sara Craft</div>
								</h4>
								<div className="slideshow_slideshow-articleSubtitle__WTbzq text text-14">
									<div>CEO of KoilSocial</div>
								</div>
								<svg
									className="slideshow_slideshow-articleIcon__J6wJ_"
									xmlns="http://www.w3.org/2000/svg"
									width="57"
									height="54"
									viewBox="0 0 57 54"
									fill="none"
								>
									<path
										className="star"
										d="M35.2288 18.1385C34.5527 22.5592 36.8333 25.3963 38.8747 26.8395M32.2666 38.0795C33.0199 36.9619 33.5644 35.7195 34.2644 34.5675C34.6244 33.9758 35.0515 33.3865 35.6734 33.0765C36.0312 32.8987 36.4314 32.824 36.8258 32.7559C38.296 32.5016 39.7856 32.3027 41.2047 31.8473C41.9255 31.6169 42.6356 31.3128 43.2086 30.8226C43.9128 30.2184 44.3179 29.2923 44.2158 28.3615C44.1137 27.4307 43.5207 26.6137 42.9191 25.8747C41.2936 23.8793 39.1316 22.1997 38.7369 19.5097C38.6176 18.695 38.7793 17.8711 38.8375 17.0514C38.9046 16.0879 38.8268 15.1196 38.748 14.1561C38.6971 13.5256 38.6556 12.7329 38.3249 12.1742C37.9567 11.5503 37.075 11.2331 36.3949 11.1695C35.5909 11.0937 34.788 11.2881 34.0206 11.5295C32.3716 12.0472 30.9424 12.9446 29.3539 13.5753C29.0564 13.693 28.7467 13.797 28.4254 13.7951C28.0997 13.7939 27.7839 13.6836 27.4768 13.5747C25.2752 12.7976 23.0078 11.7371 20.652 11.6314C20.0118 11.6024 19.3474 11.7271 18.8309 12.0972C18.3123 12.469 17.9862 13.0595 17.831 13.6763C17.6758 14.2931 17.6758 14.938 17.7091 15.5748C17.7937 17.182 18.0788 18.7725 18.3643 20.3592C18.431 20.7289 18.496 21.1136 18.3923 21.4732C18.3067 21.7686 18.1125 22.0194 17.9223 22.2616C16.8088 23.6842 15.6854 25.0995 14.5825 26.531C13.8051 27.5409 13.1897 28.9309 13.8794 30.1673C14.5065 31.2924 15.7699 31.739 16.942 32.0554C17.6157 32.2377 18.2911 32.4194 18.9754 32.5564C20.0214 32.7659 21.2411 32.7624 22.1459 33.397C22.4506 33.6105 22.6942 33.8969 22.9217 34.189C24.2647 35.9126 25.2667 37.8776 26.743 39.5027C27.5101 40.3474 28.5974 40.9265 29.702 40.4261C30.8066 39.9258 31.6206 39.0429 32.2704 38.08L32.2666 38.0795Z"
										stroke="#5E29F9"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
									/>
									<path
										className="lines"
										d="M50.2451 30.3207L55.8331 32.5057M31.2428 47.1617L32.2579 53.0752M7.08393 28.8568L1.17041 29.8719M15.4704 5.73513L11.547 1.19568M41.8082 6.23674L45.2712 1.33702"
										stroke="#5E29F9"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
									/>
								</svg>
								<div className="slideshow_slideshow-articleText__4F5E0 text">
									<div>
										“When working with BetheBuzz, I never felt like a client. As my right-hand person, Miad has personally helped me outline my product development life cycle and prepare for investor presentations with a thorough go-to-market plan. Her ability to read between the lines of any business plan to determine the most cost-effective, efficient way to move forward is uncanny. I’ve never felt so empowered to take on the challenges of growing a new business than I have when working with Miad.”
									</div>
								</div>
							</article>
						</div>
					</div>
					<div className="slideshow_slideshow-side__mHpmh">
						<div className="slideshow_slideshow-portraits__dK49R">
							<div
								className="slideshow_slideshow-portraitsImage___pKXk"
								style={{
									zIndex: 1,
									transform: 'translate(-100%, 0%)',
								}}
							>
								<img
									alt="Sarah Craft"
									loading="lazy"
									width="196"
									height="196"
									decoding="async"
									data-nimg="1"
									style={{ color: 'transparent' }}
									srcSet="
                                    https://images.prismic.io/bethebuzz-cms/65cd01e99be9a5b998b5d323_292593781_455286416605025_4552678689666100770_n.jpg?auto=format%2Ccompress&rect=172%2C272%2C1027%2C1026&w=256&fit=max 1x,
                                    https://images.prismic.io/bethebuzz-cms/65cd01e99be9a5b998b5d323_292593781_455286416605025_4552678689666100770_n.jpg?auto=format%2Ccompress&rect=172%2C272%2C1027%2C1026&w=640&fit=max 2x
                                    "
									src="https://images.prismic.io/bethebuzz-cms/65cd01e99be9a5b998b5d323_292593781_455286416605025_4552678689666100770_n.jpg?auto=format%2Ccompress&rect=172%2C272%2C1027%2C1026&w=640&fit=max"
								/>
							</div>
							<div
								className="slideshow_slideshow-portraitsImage___pKXk"
								style={{
									zIndex: 1,
									transform: 'translate(-100%, 0%)',
								}}
							>
								<img
									alt="Sarah Craft"
									loading="lazy"
									width="196"
									height="196"
									decoding="async"
									data-nimg="1"
									style={{ color: 'transparent' }}
									srcSet="
                                    https://images.prismic.io/bethebuzz-cms/65ccdf619be9a5b998b5d17c_SaraTrammell.jpg?auto=format%2Ccompress&fit=max&w=256 1x,
                                    https://images.prismic.io/bethebuzz-cms/65ccdf619be9a5b998b5d17c_SaraTrammell.jpg?auto=format%2Ccompress&fit=max&w=640 2x
                                    "
									src="https://images.prismic.io/bethebuzz-cms/65ccdf619be9a5b998b5d17c_SaraTrammell.jpg?auto=format%2Ccompress&fit=max&w=640"
								/>
							</div>
							<div
								className="slideshow_slideshow-portraitsImage___pKXk"
								style={{
									zIndex: 2,
									transform: 'translate(0px, 0px)',
								}}
							>
								<img
									alt="Sarah Craft"
									loading="lazy"
									width="196"
									height="196"
									decoding="async"
									data-nimg="1"
									style={{
										color: 'transparent',
										transform: 'translate(0px, 0px)',
									}}
									srcSet="
                                    https://images.prismic.io/bethebuzz-cms/65a1518f7a5e8b1120d57b56_client-image-1.jpg?auto=format%2Ccompress&fit=max&w=256 1x,
                                    https://images.prismic.io/bethebuzz-cms/65a1518f7a5e8b1120d57b56_client-image-1.jpg?auto=format%2Ccompress&fit=max&w=640 2x
                                    "
									src="https://images.prismic.io/bethebuzz-cms/65a1518f7a5e8b1120d57b56_client-image-1.jpg?auto=format%2Ccompress&fit=max&w=640"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}