import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Services() {

	const headlineRef = useRef(null); // Reference to the h2 containing the letters
	const h4Ref = useRef(null); // Reference specifically for the h4 element
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
				opacity: 1,   // End fully visible
				y: 0,         // End at its original position
				ease: 'power3.out',   // Easing function for smooth movement
				duration: 1,  // Duration of the animation
				scrollTrigger: {
					trigger: h4Ref.current,  // Element that triggers the animation
					start: 'top 80%',              // When the top of h4 is 80% from the top of the viewport
					end: 'bottom 20%',             // When the bottom of h4 is 20% from the top of the viewport
					toggleActions: 'play none none none', // Only play the animation once
				},
			}
		);
	}, []);

	return (
		<>
			<section className="styles_services__51ZHk section" data-slice-type="services_explore" data-slice-variation="default">
				<header data-header-theme="light" className="styles_header__0xhVU styles_services__header__Smp1G">
					<h4
						className="accent accent-40 animate-fadeinup"
						ref={h4Ref}
						style={{
							opacity: '1',
							transform: 'translate(0px, 0px)',
						}}
					>
						Explore our tailor-made
					</h4>
					<div style={{
						width: '100%',
					}}>
						<div className='heading-wrap' >
							<h2 className="headline headline-outline animate-headline" ref={headlineRef} style={{
								opacity: '1',
							}}>
								<div style={{ position: 'relative', display: 'inline-block' }}>S</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>E</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>R</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>V</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>I</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>C</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>E</div>
								<div style={{ position: 'relative', display: 'inline-block' }}>S</div>
							</h2>
						</div>
					</div>
				</header>
				<div className="pin-spacer" style={{
					// order: 0,
					// placeSelf: 'auto',
					// gridArea: 'auto',
					// zIndex: 'auto',
					// float: 'none',
					// flexShrink: 1,
					// display: 'block',
					// margin: '0px',
					// inset: '0px',
					// position: 'relative',
					// flexBasis: 'auto',
					// overflow: 'visible',
					// boxSizing: 'border-box',
					// width: '1840px',
					// height: '900px',
					// padding: '0px 0px 200px',
				}}>
					<div className="styles_services__container__d1s9_" style={{
						// translate: 'none',
						// rotate: 'none',
						// scale: 'none',
						// left: '20px',
						// top: '69.5625px',
						// margin: '0px',
						// maxWidth: '1840px',
						// width: '1840px',
						// maxHeight: '814px',
						// height: '814px',
						// padding: '0px',
						// boxSizing: 'border-box',
						// transform: 'translate(0px, 0px)',
					}}>
						<div data-header-theme="dark" className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden" style={{
							pointerEvents: 'auto',
						}}>
							<div className="styles_services__wrapper__O4h4A swiper-wrapper">
								<div className="styles_block__K5nIf styles_service__KqFe6 swiper-slide title-50 border-radius swiper-slide-active">
									<div className="styles_service__bg__qRo9o border-radius"><span className="border-radius" style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										transform: 'translate(0px, 0px)',
									}}></span></div>
									<a href="/" className="js-internal-link styles_service__link__mJn6f" aria-label="Go-To-Market Strategy & Integration"></a>
									<div className="styles_service__wrapperShape__PruBR title-50" style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										transform: 'scale(0.25, 0.25)',
										transformOrigin: '50% 100%',
									}}>
										<div className="styles_service__shapeParent__faahW shape-parent" style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											transform: 'translate(0px, 0px)',
											clipPath: 'inset(0%)',
										}}>
											<svg fill="none" viewBox="0 0 101 101" class="styles_shape__B3q9p styles_service__shape__YJSqT title-50" style={{
												translate: 'none',
												rotate: 'none',
												scale: 'none',
												transform: 'translate(0px, 0px)',
												clipPath: 'inset(0%)'
											}}><path d="M36.282 2.04l-7.557 4.366a5.949 5.949 0 00-2.972 5.152V33.77a5.949 5.949 0 002.972 5.151l19.17 11.076.052.03a5.94 5.94 0 005.944 0L73.113 38.92a5.949 5.949 0 002.972-5.152V6.081M65.557 99.796l7.556-4.365a5.949 5.949 0 002.972-5.152V68.067a5.949 5.949 0 00-2.972-5.151L53.943 51.84l-.052-.03a5.941 5.941 0 00-5.944 0L28.725 62.917a5.95 5.95 0 00-2.972 5.152v27.687m74.044-59.475l-4.365-7.556a5.95 5.95 0 00-5.152-2.972H68.068a5.949 5.949 0 00-5.152 2.972L51.84 47.895l-.03.051a5.94 5.94 0 000 5.945l11.107 19.221a5.949 5.949 0 005.153 2.972h27.687M2.04 65.556l4.365 7.556a5.949 5.949 0 005.152 2.972H33.77a5.949 5.949 0 005.152-2.972l11.076-19.17.03-.051a5.941 5.941 0 000-5.945L38.92 28.725a5.95 5.95 0 00-5.152-2.973H6.08m69.05-19.746L66.7 3.75a5.949 5.949 0 00-5.745 1.541L45.25 20.997a5.949 5.949 0 00-1.541 5.745l5.723 21.387.016.057a5.942 5.942 0 004.203 4.203l21.446 5.739a5.949 5.949 0 005.744-1.542l19.578-19.578M26.707 95.832l8.43 2.256a5.95 5.95 0 005.745-1.541l15.706-15.707a5.949 5.949 0 001.541-5.744l-5.723-21.387-.016-.057a5.941 5.941 0 00-4.203-4.204L26.74 43.71a5.95 5.95 0 00-5.744 1.542L1.419 64.828M95.831 75.13l2.257-8.43a5.949 5.949 0 00-1.542-5.744L80.84 45.25a5.949 5.949 0 00-5.745-1.542L53.71 49.432l-.058.015a5.94 5.94 0 00-4.203 4.204L43.71 75.096a5.95 5.95 0 001.541 5.745l19.578 19.577M6.007 26.707l-2.256 8.43a5.949 5.949 0 001.54 5.744l15.707 15.706a5.949 5.949 0 005.745 1.541l21.387-5.723.057-.016a5.941 5.941 0 004.203-4.203l5.738-21.445a5.949 5.949 0 00-1.541-5.745L37.009 1.418" stroke="#010561" stroke-width="1.5" stroke-linecap="round"></path></svg>
										</div>
									</div>
									<div>
										<h3 className="styles_service__heading__JBwUp title title-50">
											<a href="/" aria-label="Go-To-Market Strategy & Integration" className="js-internal-link">
												<div>
													<div style={{
														display: 'block',
														textAlign: 'center',
														position: 'relative',
														overflow: 'hidden',
													}}>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															Go-To-Market
														</div>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															Strategy
														</div>
													</div>
													<div style={{
														display: 'block',
														textAlign: 'center',
														position: 'relative',
														overflow: 'hidden',
													}}>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															&
														</div>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															Integration
														</div>
													</div>
												</div>
											</a>
										</h3>
										<a href="/" className="styles_button__oaMA0 styles_arrows__f1d_B styles_service__button__5Ldof js-internal-link" aria-label="Go-To-Market Strategy 
                                        & Integration">
											<div>
												<svg viewBox="0 0 12 10" fill="none"><path d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
												<svg viewBox="0 0 12 10" fill="none"><path d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
											</div>
										</a>
										<div style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											opacity: '1',
											visibility: 'inherit',
											transform: 'translate(0px, 0px)',
										}} >
											<p className="text">Refine your market entry with our strategies informed by deep market research. We thoroughly integrate with your operations, leveraging analytics to drive your revenue goals.</p>
										</div>
									</div>
								</div>
								<div className="styles_block__K5nIf styles_service__KqFe6 swiper-slide title-50 border-radius swiper-slide-active">
									<div className="styles_service__bg__qRo9o border-radius"><span className="border-radius" style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										transform: 'translate(0px, 0px)',
									}}></span></div>
									<a href="/" className="js-internal-link styles_service__link__mJn6f" aria-label="Go-To-Market Strategy & Integration"></a>
									<div className="styles_service__wrapperShape__PruBR title-50" style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										transform: 'scale(0.25, 0.25)',
										transformOrigin: '50% 100%',
									}}>
										<div className="styles_service__shapeParent__faahW shape-parent" style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											transform: 'translate(0px, 0px)',
											clipPath: 'inset(0%)',
										}}>
											<svg fill="none" viewBox="0 0 101 101" class="styles_shape__B3q9p styles_service__shape__YJSqT title-50" style={{
												translate: 'none',
												rotate: 'none',
												scale: 'none',
												transform: 'rotate(100deg)',
											}}><path d="M63.867 45.55l6.9-3.986a5.433 5.433 0 002.715-4.705V16.574a5.433 5.433 0 00-2.714-4.705L53.26 1.755l-.047-.027a5.426 5.426 0 00-5.428 0L30.232 11.87a5.433 5.433 0 00-2.714 4.705V36.86m9.615 18.59l-6.9 3.986a5.433 5.433 0 00-2.715 4.705v20.285a5.433 5.433 0 002.714 4.705L47.74 99.245l.047.027a5.425 5.425 0 005.428 0L70.768 89.13a5.433 5.433 0 002.714-4.705V64.14m-10.03-7.688l7.699 2.06a5.433 5.433 0 005.246-1.407L90.74 42.762a5.433 5.433 0 001.408-5.246L86.92 17.984l-.014-.052a5.426 5.426 0 00-3.839-3.838l-19.584-5.24a5.433 5.433 0 00-5.247 1.407L43.894 24.604m-6.346 19.944l-7.699-2.06a5.433 5.433 0 00-5.246 1.407L10.26 58.238a5.433 5.433 0 00-1.407 5.246l5.226 19.532.015.052a5.426 5.426 0 003.838 3.838l19.585 5.24a5.432 5.432 0 005.246-1.407l14.343-14.343M55.45 63.867l3.986 6.9a5.433 5.433 0 004.705 2.715h20.285a5.433 5.433 0 004.705-2.714L99.245 53.26l.027-.047a5.425 5.425 0 000-5.428L89.13 30.232a5.433 5.433 0 00-4.705-2.714H64.14m-18.59 9.615l-3.986-6.9a5.433 5.433 0 00-4.705-2.715H16.574a5.433 5.433 0 00-4.705 2.714L1.755 47.74l-.027.047a5.426 5.426 0 000 5.428L11.87 70.768a5.433 5.433 0 004.705 2.714H36.86m7.688-10.03l-2.06 7.699a5.433 5.433 0 001.407 5.246L58.238 90.74a5.433 5.433 0 005.246 1.408l19.532-5.227.052-.015a5.425 5.425 0 003.838-3.838l5.24-19.584a5.433 5.433 0 00-1.407-5.247L76.396 43.894m-19.944-6.346l2.06-7.699a5.433 5.433 0 00-1.407-5.246L42.762 10.26a5.433 5.433 0 00-5.246-1.408L17.984 14.08l-.052.014a5.426 5.426 0 00-3.838 3.84l-5.24 19.584a5.433 5.433 0 001.407 5.246l14.343 14.343" stroke="#010561" stroke-width="1.5" stroke-linecap="round"></path></svg>

										</div>
									</div>
									<div>
										<h3 className="styles_service__heading__JBwUp title title-50">
											<a href="/" aria-label="Go-To-Market Strategy & Integration" className="js-internal-link">
												<div>
													<div style={{
														display: 'block',
														textAlign: 'center',
														position: 'relative',
														overflow: 'hidden',
													}}>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															Digital
														</div>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															Marketing
														</div>
													</div>
													<div style={{
														display: 'block',
														textAlign: 'center',
														position: 'relative',
														overflow: 'hidden',
													}}>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															Program
														</div>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															Execution
														</div>
													</div>
												</div>
											</a>
										</h3>
										<a href="/" className="styles_button__oaMA0 styles_arrows__f1d_B styles_service__button__5Ldof js-internal-link" aria-label="Go-To-Market Strategy 
                                        & Integration">
											<div>
												<svg viewBox="0 0 12 10" fill="none"><path d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
												<svg viewBox="0 0 12 10" fill="none"><path d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
											</div>
										</a>
										<div style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											opacity: '1',
											visibility: 'inherit',
											transform: 'translate(0px, 0px)',
										}} >
											<p className="text">Achieve growth with precision-executed digital marketing programs. We adeptly handle everything from demand generation to SEO, paid media, and beyond, aligning with sales for maximum impact on your ICP and revenue.</p>
										</div>
									</div>
								</div>
								<div className="styles_block__K5nIf styles_service__KqFe6 swiper-slide title-50 border-radius swiper-slide-active">
									<div className="styles_service__bg__qRo9o border-radius"><span className="border-radius" style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										transform: 'translate(0px, 0px)',
									}}></span></div>
									<a href="/" className="js-internal-link styles_service__link__mJn6f" aria-label="Go-To-Market Strategy & Integration"></a>
									<div className="styles_service__wrapperShape__PruBR title-50" style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										transform: 'scale(0.25, 0.25)',
										transformOrigin: '50% 100%',
									}}>
										<div className="styles_service__shapeParent__faahW shape-parent" style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											transform: 'translate(0px, 0px)',
											clipPath: 'inset(0%)',
										}}>
											<svg fill="none" viewBox="0 0 101 101" class="styles_shape__B3q9p styles_service__shape__YJSqT title-50" style={{
												translate: 'none',
												rotate: 'none',
												scale: 'none',
												transform: 'rotate(100deg)',
											}}><path d="M49.835 50.868l-7.178 4.147a5.652 5.652 0 00-2.824 4.895v21.102a5.652 5.652 0 002.824 4.894L60.869 96.43l.049.028a5.644 5.644 0 005.647 0l18.262-10.552a5.652 5.652 0 002.823-4.895V55.494m-44.139-.948l14.832-8.561a5.652 5.652 0 002.824-4.895V19.988a5.652 5.652 0 00-2.824-4.894L40.131 4.57l-.05-.028a5.645 5.645 0 00-5.647 0l-18.26 10.552a5.652 5.652 0 00-2.825 4.894v25.517M50.29 51.23l-2.143 8.009a5.652 5.652 0 001.464 5.457l14.922 14.922a5.652 5.652 0 005.457 1.464l20.319-5.437.054-.015a5.644 5.644 0 003.993-3.994l5.452-20.373a5.653 5.653 0 00-1.464-5.458L80.479 27.94M48.42 58.303l4.434-16.542a5.652 5.652 0 00-1.464-5.457L36.467 21.382a5.652 5.652 0 00-5.457-1.464L10.69 25.356l-.054.014a5.644 5.644 0 00-3.993 3.994L1.192 49.737a5.652 5.652 0 001.464 5.458L20.521 73.06m30.347-21.894l4.147 7.178a5.652 5.652 0 004.895 2.824h21.102a5.652 5.652 0 004.894-2.824L96.43 40.131l.028-.049a5.645 5.645 0 000-5.648l-10.552-18.26a5.652 5.652 0 00-4.895-2.824H55.494m-.948 44.139l-8.561-14.832a5.652 5.652 0 00-4.895-2.824H19.988a5.652 5.652 0 00-4.894 2.824L4.57 60.869l-.028.05a5.644 5.644 0 000 5.647l10.552 18.26a5.651 5.651 0 004.894 2.825h25.517M51.23 50.71l8.009 2.143a5.652 5.652 0 005.457-1.464l14.922-14.922a5.652 5.652 0 001.464-5.457L75.644 10.69l-.014-.054a5.644 5.644 0 00-3.994-3.993L51.262 1.192a5.652 5.652 0 00-5.457 1.464L27.94 20.521m30.362 32.06L41.76 48.147a5.652 5.652 0 00-5.458 1.464L21.383 64.533a5.651 5.651 0 00-1.464 5.457l5.437 20.319.015.054a5.644 5.644 0 003.993 3.993l20.374 5.452a5.653 5.653 0 005.458-1.464L73.06 80.479" stroke="#010561" stroke-width="1.5" stroke-linecap="round"></path></svg>
										</div>
									</div>
									<div>
										<h3 className="styles_service__heading__JBwUp title title-50">
											<a href="/" aria-label="Go-To-Market Strategy & Integration" className="js-internal-link">
												<div>
													<div style={{
														display: 'block',
														textAlign: 'center',
														position: 'relative',
														overflow: 'hidden',
													}}>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															Creative
														</div>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															&
														</div>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															Content
														</div>
													</div>
													<div style={{
														display: 'block',
														textAlign: 'center',
														position: 'relative',
														overflow: 'hidden',
													}}>
														<div className="title-word" style={{
															position: 'relative',
															display: 'inline-block',
															translate: 'none',
															rotate: 'none',
															scale: 'none',
															transform: 'translate(0px, 0px)',
														}}>
															Development
														</div>
													</div>
												</div>
											</a>
										</h3>
										<a href="/" className="styles_button__oaMA0 styles_arrows__f1d_B styles_service__button__5Ldof js-internal-link" aria-label="Go-To-Market Strategy 
                                        & Integration">
											<div>
												<svg viewBox="0 0 12 10" fill="none"><path d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
												<svg viewBox="0 0 12 10" fill="none"><path d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
											</div>
										</a>
										<div style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											opacity: '1',
											visibility: 'inherit',
											transform: 'translate(0px, 0px)',
										}} >
											<p className="text">Craft a compelling narrative with integrated digital campaigns. You gain access to content and creative solutions tailored specifically to resonate with your ideal customer profile and address the unique challenges within your market.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="styles_all__NwMxq" style={{ clipPath: 'inset(0%)' }}>
							<a
								aria-label="All Services"
								className="button-text border-radius js-internal-link"
								href="/services"
							>
								<svg
									className="styles_arrowLeft__bR__s"
									viewBox="0 0 12 10"
									fill="none"
								>
									<path
										d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<span>All Services</span>
								<div>
									<svg
										className="styles_arrowRight__0uifZ"
										viewBox="0 0 12 10"
										fill="none"
									>
										<path
											d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}