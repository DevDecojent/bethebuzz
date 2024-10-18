import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Slider() {

	const [isHovered, setIsHovered] = useState(false);
	const [isPrevHovered, setIsPrevHovered] = useState(false);
	const [isNextHovered, setIsNextHovered] = useState(false);


	// Sample data or you can replace it with your actual data
	const caseStudies = [
		{
			titles: [
				'Strategic', 'Integrated', 'Marketing', 'Approach', 'Drives',
				'Nearly', '7X', 'Increase', 'In', 'Gross', 'Profit', 'for',
				'Cybersecurity', 'Company'
			],
			numbersData: [
				{ number: '05', text: '% increase in closed-won rates' },
				{ number: '20', text: 'million increase in gross profit' },
				{ number: '03', text: 'consecutive years secured in Inc. 500' },
			],
		},
		{
			titles: [
				'Innovative', 'Data-Driven', 'Solutions', 'Enhance', 'Customer',
				'Engagement', 'Achieving', '20% Growth', 'in', 'Sales', 'for',
				'Tech', 'Startup'
			],
			numbersData: [
				{ number: '15', text: '% growth in customer engagement' },
				{ number: '10', text: 'million increase in revenue' },
				{ number: '02', text: 'years running for Best Place to Work' },
			],
		},
		{
			titles: [
				'Strategic', 'Integrated', 'Marketing', 'Approach', 'Drives',
				'Nearly', '7X', 'Increase', 'In', 'Gross', 'Profit', 'for',
				'Cybersecurity', 'Company'
			],
			numbersData: [
				{ number: '05', text: '% increase in closed-won rates' },
				{ number: '20', text: 'million increase in gross profit' },
				{ number: '03', text: 'consecutive years secured in Inc. 500' },
			],
		},
		{
			titles: [
				'Innovative', 'Data-Driven', 'Solutions', 'Enhance', 'Customer',
				'Engagement', 'Achieving', '20% Growth', 'in', 'Sales', 'for',
				'Tech', 'Startup'
			],
			numbersData: [
				{ number: '15', text: '% growth in customer engagement' },
				{ number: '10', text: 'million increase in revenue' },
				{ number: '02', text: 'years running for Best Place to Work' },
			],
		},

	];

	const [activeIndex, setActiveIndex] = useState(0);
	const caseStudyRef = useRef(null);
	const totalCaseStudies = caseStudies.length;

	// GSAP animation for the text reveal on index change
	useEffect(() => {
		if (caseStudyRef.current) {
			const titleSpans = caseStudyRef.current.querySelectorAll('.styles_case__title__HSTEq span');
			const numberSpans = caseStudyRef.current.querySelectorAll('.styles_case__number__Xu1xo .styles_case__number__value___XgVj span');
			const numberTexts = caseStudyRef.current.querySelectorAll('.styles_case__number__Xu1xo .styles_case__number__text__MjXLy .text');

			gsap.fromTo(
				titleSpans,
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.3, stagger: 0.03, ease: 'power3.out' }
			);
			gsap.fromTo(
				numberSpans,
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: 'power3.out' }
			);
			gsap.fromTo(
				numberTexts,
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: 'power3.out' }
			);
		}
	}, [activeIndex]);

	// Function to go to the next case study
	const handleNextClick = () => {
		setActiveIndex((prevIndex) => (prevIndex === totalCaseStudies - 1 ? 0 : prevIndex + 1));
	};

	// Function to go to the previous case study
	const handlePrevClick = () => {
		setActiveIndex((prevIndex) => (prevIndex === 0 ? totalCaseStudies - 1 : prevIndex - 1));
	};

	// Calculate the progress percentage (between 0 and 1)
	const progressPercentage = (activeIndex + 1) / totalCaseStudies;

	return (
		<>
			<section data-header-theme="dark" className="section">
				<div className="styles_block__K5nIf styles_cases__m6yDy">
					<div className="styles_slider__imNvA">
						<div className="styles_header__IUTTF accent accent-40">
							<div className="styles_headerLeft__Ol_A3">
								<h3>Latest Case Studies</h3>
								<div
									className="styles_ProgressBar__HZgIJ styles_headerProgressBar__Zmr3D"
									style={{ '--progress': progressPercentage }}
								></div>
							</div>
							<div className="styles_nav__QtK5Z">
								{/* Prev Button */}
								<button
									aria-label="slide prev"
									title="slide prev"
									className="styles_button__CR5vR styles_prev__2AqhC border-radius"
									onMouseEnter={() => setIsPrevHovered(true)}
									onMouseLeave={() => setIsPrevHovered(false)}
									onClick={handlePrevClick}
								>
									<div
										className="styles_button__svgContainer__ppZ1p border-radius"
										style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											transform: isPrevHovered ? 'translate(-104.5%, 0px)' : 'translate(0%, 0px)',
											transition: 'transform 0.3s ease',
										}}
									>
										<svg viewBox="0 0 12 10" fill="none"
											style={{
												transform: isPrevHovered ? 'translate(2em, 0px) scale(0,0)' : 'translate(0px, 0px)',
												transition: 'transform 0.3s ease',
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
									<div
										className="styles_button__svgContainer__ppZ1p border-radius"
										style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											transform: isPrevHovered ? 'translate(-4.5%, 0px)' : 'translate(100%, 0px)',
											transition: 'transform 0.3s ease',
										}}
									>
										<svg
											viewBox="0 0 12 10"
											fill="none"
											style={{
												translate: '2em, 0px',
												rotate: 'none',
												scale: 'none',
												transform: isPrevHovered ? 'translate(0px, 0px)' : 'translate(2em, 0px)',
												transition: 'transform 0.3s ease',
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

								{/* Next Button */}
								<button
									aria-label="slide next"
									title="slide next"
									className="styles_button__CR5vR styles_next__qm3f_ border-radius"
									onMouseEnter={() => setIsNextHovered(true)}
									onMouseLeave={() => setIsNextHovered(false)}
									onClick={handleNextClick}
								>
									<div
										className="styles_button__svgContainer__ppZ1p border-radius"
										style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											transform: isNextHovered ? 'translate(104.5%, 0px)' : 'translate(0%, 0px)',
											transition: 'transform 0.3s ease',
										}}
									>
										<svg viewBox="0 0 12 10" fill="none"
											style={{
												transform: isNextHovered ? 'translate(-2em, 0px) scale(0,0)' : 'translate(0px, 0px)',
												transition: 'transform 0.3s ease',
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
											transform: isNextHovered ? 'translate(4.5%, 0px)' : 'translate(-100%, 0px)',
											transition: 'transform 0.3s ease',
										}}
									>
										<svg
											viewBox="0 0 12 10"
											fill="none"
											style={{
												translate: '-2em, 0px',
												rotate: 'none',
												scale: 'none',
												transform: isNextHovered ? 'translate(0px, 0px)' : 'translate(-2em, 0px) scale(0, 0)',
												transition: 'transform 0.3s ease',
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
							</div>
						</div>
						<div className="styles_wrapper__snqbx" ref={caseStudyRef}>
							{caseStudies.length > 0 ? (
								caseStudies.map((caseStudy, index) => (
									<div
										key={index}
										className={`styles_case__GKy4F ${index === activeIndex ? 'styles_active__XtnKp' : ''}`}
									>
										<h4 className="styles_case__title__HSTEq title title-80">
											{caseStudy.titles.map((title, titleIndex) => (
												<span
													key={titleIndex}
													style={{
														position: 'relative',
														display: 'inline-block',
														color: 'rgb(1, 5, 97)', // Ensure the title is visible
													}}
												>
													{title}
												</span>
											))}
										</h4>
										<ul className="styles_case__numbers__U3Ebb">
											{caseStudy.numbersData.map((item, numberIndex) => (
												<li key={numberIndex} className="styles_case__number__Xu1xo border-radius">
													<div className="styles_case__number__value___XgVj title title-100">
														<span>{item.number}</span>
													</div>
													<div className="styles_case__number__text__MjXLy">
														<p className="text">{item.text}</p>
													</div>
												</li>
											))}
										</ul>
										<a href="/" aria-label="View Case Study" className="styles_button__DwtwR styles_case__link__CPGmd js-internal-link button-text"
											onMouseEnter={() => setIsHovered(true)}
											onMouseLeave={() => setIsHovered(false)}
										>
											<div className="styles_button__container__kKhYm border-radius">
												<div
													className="styles_button__svgContainer__5Xqdx border-radius"
													style={{
														translate: 'none',
														scale: 'none',
														rotate: 'none',
														transform: isHovered ? 'translate(0px, 0px)' : 'translate(-6.15em, 0px)',
														transition: 'transform 0.4s ease',
													}}
												>
													<svg
														className="styles_arrowLeft__0RHHo"
														viewBox="0 0 12 10"
														fill="none"
														style={{
															translate: 'none',
															rotate: 'none',
															transform: isHovered ? 'translate(0px, 0px)' : 'translate(2.878em, 0px)',
															transition: 'transform 0.4s ease',
															scale: '(0, 0)',
														}}
													>
														<path
															d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														></path>
													</svg>
												</div>
												<div
													className="styles_button__labelContainer__P9ZGZ border-radius"
													style={{
														translate: 'none',
														scale: 'none',
														rotate: 'none',
														transform: isHovered ? 'translate(6.15em, 0px)' : 'translate(0px, 0px)',
														transition: 'transform 0.4s ease',
													}}
												>
													<span>View Case Study</span>
													<svg
														className="styles_arrowRight__82iX_"
														viewBox="0 0 12 10"
														fill="none"
														style={{
															translate: 'none',
															rotate: 'none',
															transform: isHovered ? 'translate(5.75em, 0px)' : 'translate(0px, 0px)',
															transition: 'transform 0.4s ease',
															scale: '(0, 0)',
														}}
													>
														<path
															d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														></path>
													</svg>
												</div>
											</div>
										</a>
									</div>
								))
							) : (
								<p>No case studies available</p> // Fallback in case data is not available
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}