import React, { useState } from 'react';

export default function Slider() {
	// State to track if the button is hovered
	const [isHovered, setIsHovered] = useState(false);
	return (
		<>
			<section data-header-theme="dark" className="section" style={{ padding: '15px' }}>
				<div className="styles_block__K5nIf styles_cases__m6yDy">
					<div className="styles_slider__imNvA">
						<div className="styles_header__IUTTF accent accent-40">
							<div className="styles_headerLeft__Ol_A3">
								<h3>Latest Case Studies</h3>
								<div
									className="styles_ProgressBar__HZgIJ styles_headerProgressBar__Zmr3D"
									style={{ '--progress': 0 }}
								></div>
							</div>
							<div className="styles_nav__QtK5Z">
								{/* Prev Button */}
								<button
									aria-label="slide prev"
									title="slide prev"
									className="styles_button__CR5vR styles_prev__2AqhC border-radius"
								>
									<div
										className="styles_button__svgContainer__ppZ1p border-radius"
										style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											transform: 'translate(0px, 0px)',
										}}
									>
										<svg viewBox="0 0 12 10" fill="none">
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
											transform: 'translate(100%, 0px)',
										}}
									>
										<svg
											viewBox="0 0 12 10"
											fill="none"
											style={{
												translate: '2em, 0px',
												rotate: 'none',
												scale: 'none',
												transform: 'translate(2em, 0px) scale(0, 0)',
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
								>
									<div
										className="styles_button__svgContainer__ppZ1p border-radius"
										style={{
											translate: 'none',
											rotate: 'none',
											scale: 'none',
											transform: 'translate(0px, 0px)',
										}}
									>
										<svg viewBox="0 0 12 10" fill="none">
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
											transform: 'translate(-100%, 0px)',
										}}
									>
										<svg
											viewBox="0 0 12 10"
											fill="none"
											style={{
												translate: '-2em, 0px',
												rotate: 'none',
												scale: 'none',
												transform: 'translate(-2em, 0px) scale(0, 0)',
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
						<div className="styles_wrapper__snqbx">
							<div className="styles_case__GKy4F styles_active__XtnKp">
								<h4 className="styles_case__title__HSTEq title title-lower title-80">
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Strategic</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Integrated</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Marketing</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Approach</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Drives</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Nearly</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>7X</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Increase</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>In</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Gross</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Profit</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>for</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Cybersecurity</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block', color: 'rgb(1, 5, 97)', transform: 'translate(0px, 0px)', transformOrigin: '50% 100%', textTransform: 'uppercase' }}>Company</div>
								</h4>
								<ul className="styles_case__numbers__U3Ebb">
									<li className="styles_case__number__Xu1xo border-radius">
										<div className="styles_case__number__value___XgVj title title-100">
											<span>05</span>
										</div>
										<div className="styles_case__number__text__MjXLy">
											<p className="text">% increase in <br />closed-won rates</p>
										</div>
									</li>
									<li className="styles_case__number__Xu1xo border-radius">
										<div className="styles_case__number__value___XgVj title title-100">
											<span>20</span>
										</div>
										<div className="styles_case__number__text__MjXLy">
											<p className="text">million increase in <br />gross profit</p>
										</div>
									</li>
									<li className="styles_case__number__Xu1xo border-radius">
										<div className="styles_case__number__value___XgVj title title-100">
											<span>03</span>
										</div>
										<div className="styles_case__number__text__MjXLy">
											<p className="text">consecutive years <br />secured in Inc. 500</p>
										</div>
									</li>
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

							{/* Repeat for the next case study */}
							<div className="styles_case__GKy4F">
								<h4 className="styles_case__title__HSTEq title title-lower title-80">
									{/* Add next title */}
									<div style={{ position: 'relative', display: 'inline-block' }}>From</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>Optimizing</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>Webinars</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>to</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>Unifying</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>Marketing</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>and</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>Sales:</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>A</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>Strategic</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>Journey</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>for</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>Cybersecurity</div>{' '}
									<div style={{ position: 'relative', display: 'inline-block' }}>Impact</div>
								</h4>
								<ul className="styles_case__numbers__U3Ebb">
									<li className="styles_case__number__Xu1xo border-radius">
										<div className="styles_case__number__value___XgVj title title-100">
											<span>33</span>
										</div>
										<div className="styles_case__number__text__MjXLy">
											<p className="text">% Conversion Boost</p>
										</div>
									</li>
									<li className="styles_case__number__Xu1xo border-radius">
										<div className="styles_case__number__value___XgVj title title-100">
											<span>3</span>
										</div>
										<div className="styles_case__number__text__MjXLy">
											<p className="text">Months to Integrate <br />Sales & Marketing</p>
										</div>
									</li>
									<li className="styles_case__number__Xu1xo border-radius">
										<div className="styles_case__number__value___XgVj title title-100">
											<span>25</span>
										</div>
										<div className="styles_case__number__text__MjXLy">
											<p className="text">% Engagement Increase</p>
										</div>
									</li>
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
						</div>
					</div>
				</div>
			</section>
		</>
	);
}