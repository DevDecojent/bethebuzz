import React, { useState } from 'react';

export default function Footer() {
	// State to track if the button is hovered
	const [isHovered, setIsHovered] = useState(false);

	const [formStatus, setFormStatus] = useState('idle');

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormStatus('submitted');
	};
	return (
		<>
			<footer className="styles_footer__0LLV_">
				<div className="styles_container__jRrDg">
					<div className="styles_left__SAwSE">
						<p className="styles_caption__X8ewY caption">Get In Touch</p>
						<div className="accent accent-40">
							<p>
								<a className="styles_contactLink__dNUz1" href="mailto:grow@bethebuzz.co">
									<span className="styles_contactLinkIcon__JhFms">
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
												<path
													d="M1 1L1 10C1 11.6569 2.34315 13 4 13H17.2M15 9.6L17.9757 12.5757C18.21 12.8101 18.21 13.1899 17.9757 13.4243L15 16.4"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
												<path
													d="M1 1L1 10C1 11.6569 2.34315 13 4 13H17.2M15 9.6L17.9757 12.5757C18.21 12.8101 18.21 13.1899 17.9757 13.4243L15 16.4"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
									</span>
									<span className="styles_contactLinkLabel__Hymby">grow@bethebuzz.co</span>
								</a>
							</p>
						</div>
					</div>
					<div className="styles_right__1jkaW">
						<p className="styles_caption__X8ewY caption">Let's Strategize</p>
						<div className="accent accent-40">
							<h3>
								Schedule a <br />
								strategy session
							</h3>
						</div>
						<a
							target="_blank"
							aria-label="Book a session"
							className="styles_button__DwtwR button-text styles_border-white__RlPY7"
							rel="noreferrer"
							href="https://calendly.com/online-marketing-strategy/30min?back=1"
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							style={{
								width: isHovered ? '28.1542em' : ' 409.719px',
								transition: 'width 0.4s ease-in-out', 
							}}
						>
							<div className="styles_button__container__kKhYm border-radius">
								<div
									className="styles_button__svgContainer__5Xqdx border-radius"
									style={{
										translate: 'none',
										rotate: 'none',
										scale: 'none',
										width: isHovered ? 'auto' : ' 0px',
										transform: isHovered ? 'translate(0em, 0px)' : 'translate(-0.4em, 0px)',
										transition: 'transform 0.4s ease-in-out', 
									}}
								>
									<svg
										className="styles_arrowLeft__0RHHo"
										viewBox="0 0 12 10"
										fill="none"
										style={{ 
											transform: isHovered ? 'translate(0px, 0px)' : 'scale(0, 0)',
										transition: 'transform 0.4s ease-in-out', 

										}}
									>
										<path
											d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className="styles_button__labelContainer__P9ZGZ border-radius"
									style={{
										width: isHovered ? '15.8542em' : ' 409.719px',
										transform: isHovered ? 'translate(6.15em, 0px)' : 'translate(0px, 0px)',
										transition: 'transform 0.4s ease-in-out', 
									}}
								>
									<span>Book a session</span>
									<svg className="styles_arrowRight__82iX_" viewBox="0 0 12 10" fill="none"
									style={{
										transform: isHovered ? 'translate(60px, 0px) scale(0.3, 0.3)' : 'translate(0px, 0px) scale(0, 0)',
										transition: 'transform 0.4s ease-in-out',
									}}	
									>
										<path
											d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
						</a>

						<div className="styles_navs__mRDps">
							<nav className="styles_nav__bCG7d">
								<p className="styles_caption__X8ewY caption">Navigation</p>
								<ul className="text">
									<li>
										<a className="text-link-hover text-link-hover--small js-internal-link" href="/services">
											Services<span className="text-link-hover-underline" />
										</a>
									</li>
									<li>
										<a className="text-link-hover text-link-hover--small js-internal-link" href="/plans">
											Plans<span className="text-link-hover-underline" />
										</a>
									</li>
									<li>
										<a className="text-link-hover text-link-hover--small js-internal-link" href="/success-stories">
											Success Stories<span className="text-link-hover-underline" />
										</a>
									</li>
									<li>
										<a className="text-link-hover text-link-hover--small js-internal-link" href="/blog">
											Blog<span className="text-link-hover-underline" />
										</a>
									</li>
									<li>
										<a className="text-link-hover text-link-hover--small js-internal-link" href="/team">
											Team<span className="text-link-hover-underline" />
										</a>
									</li>
									<li>
										<a className="text-link-hover text-link-hover--small js-internal-link" href="/careers">
											Careers<span className="text-link-hover-underline" />
										</a>
									</li>
								</ul>
							</nav>

							<nav className="styles_social__btmu2">
								<p className="styles_caption__X8ewY caption">Social</p>
								<ul className="text">
									<li>
										<a
											target="_blank"
											className="text-link-hover text-link-hover--small"
											rel="noreferrer"
											href="https://www.linkedin.com/company/bethebuzzmarketing/"
										>
											LinkedIn<span className="text-link-hover-underline" />
										</a>
									</li>
								</ul>
							</nav>

							<div className="styles_newsletter__tfSRJ">
								<p className="styles_caption__X8ewY caption">Newsletter</p>
								<div className="styles_newsletter__phkz5" data-form-status="idle">
									{formStatus === 'submitted' ? (
										<div className="styles_success__4mflB">
											<p className="text">Thank you!</p>
											<p className="text text-14">You have been successfully added to our mailing list.</p>
										</div>
									) : (
										<form onSubmit={handleSubmit}>
											<input className="styles_input__q3JC8 text" placeholder="Your Email" type="text" />
											<button
												aria-label="submit"
												title="submit"
												className="styles_submit__xrXKy border-radius"
												type="submit"
											>
												<span>
													<svg viewBox="0 0 12 10" fill="none">
														<path
															d="M6.7 1l3.9 4m0 0L6.7 9m3.9-4H1"
															stroke="#ffffff"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												<svg viewBox="0 0 22 15" fill="none">
													<path
														d="M1.5 7.5l5.086 5.086a2 2 0 002.828 0L20 2"
														stroke="#010561"
														strokeWidth="3"
														strokeLinecap="round"
													/>
												</svg>
											</button>
										</form>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="styles_bottom__NJV1p">
					<small>Copyright © Be The Buzz, LLC 2024 / All Rights Reserved</small>
					<small>
						<a
							className="styles_buzzworthy__Z4Wdh"
							target="_blank"
							rel="noopener noreferrer"
							href="https://buzzworthystudio.com"
						>
							<span className="wrap">
								Website by <span className="styles_label__omcnR">Buzzworthy</span>
								<span className="styles_logo__j1M4t">
									<svg fill="white" version="1.1" x="0px" y="0px" viewBox="0 0 35 35">
										<path
											className="buzzworthy-circle"
											d="M17.5,35C27.2,35,35,27.2,35,17.5S27.2,0,17.5,0S0,7.8,0,17.5S7.8,35,17.5,35z M9.2,21l2.5-15.4l3.7,4.3
											c0.9,0.9,2.2,1.6,4.1,1.7h1.8c0.1,0,0.3,0,0.4,0c5.1,0,7,2.5,6,8.7c-0.8,5.1-4.1,8.3-8.6,8.5l0,0c-0.2,0-0.5,0-0.7,0h-3
											C9.9,28.7,8.7,25,9.2,21z M17.9,23.8c1.9,0,3.3-1.6,3.7-3.8c0.4-2.3-0.6-3.9-2.5-3.9c-1.8,0-3.3,1.6-3.7,3.9
											C15.1,22.2,16.1,23.8,17.9,23.8z"
										/>
									</svg>
								</span>
							</span>
						</a>
					</small>
				</div>
			</footer>
		</>
	);
}