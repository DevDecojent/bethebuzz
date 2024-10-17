import React from "react";
import senselogo from '../assets/images/6-sense-logo.avif';
import salesforce from '../assets/images/saleforce-logo.avif';
import easywebinarlogo from '../assets/images/easywebinar-logo.avif';
import hubspotlogo from '../assets/images/hubspot-logo.avif';
import chilipiperlogo from '../assets/images/chilipiper.avif';
import zoomlogo from '../assets/images/zoom-logo.avif';



export default function Saaslandscape() {
	return (
		<>
			<section data-header-theme="dark" className="section styles_section__xTn_6">
				<div className="styles_block__K5nIf styles_block__ZCGxM">
					<div className="styles_logos__3Ueir">
						<button className="styles_button__oaMA0 styles_button__odUtR" aria-label="shuffle" title="shuffle">
							<svg viewBox="0 0 32 26" width="32" height="26" fill="none"><path d="M4.076 13c0-6.627 5.416-12 12.097-12 3.504 0 6.66 1.478 8.87 3.84M28.099 13c0 6.627-5.308 12-11.856 12a11.751 11.751 0 01-8.467-3.6m-.97-10.32l-2.333 2.314a.811.811 0 01-1.14 0L1 11.08m24.194 3.84l2.332-2.314a.811.811 0 011.141 0L31 14.92" stroke="#010561" stroke-width="2" stroke-linecap="round"></path></svg>
						</button>
						<div className="styles_item___ON4R styles_active__SmKZA active">
							<img src={senselogo} alt="senselogo" loading="lazy" width={'260px'} height={'70px'} style={{
								color: 'transparent',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, 0px)',
								opacity: '1',
							}} />
							<span className="styles_item__overlay__WFyKw" style={{
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, -100%)',
							}}></span>
						</div>
						<div className="styles_item___ON4R styles_active__SmKZA active">
							<img src={salesforce} alt="senselogo" loading="lazy" width={'218px'} height={'153px'} style={{
								color: 'transparent',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, 0px)',
								opacity: '1',
							}} />
							<span className="styles_item__overlay__WFyKw" style={{
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, -100%)',
							}}></span>
						</div>
						<div className="styles_item___ON4R styles_active__SmKZA active">
							<img src={easywebinarlogo} alt="easywebinarlogo" loading="lazy" width={'376px'} height={'63px'} style={{
								color: 'transparent',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, 0px)',
								opacity: '1',
							}} />
							<span className="styles_item__overlay__WFyKw" style={{
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, -100%)',
							}}></span>
						</div>
						<div className="styles_item___ON4R styles_active__SmKZA active">
							<img src={hubspotlogo} alt="hubspotlogo" loading="lazy" width={'303px'} height={'88px'} style={{
								color: 'transparent',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, 0px)',
								opacity: '1',
							}} />
							<span className="styles_item__overlay__WFyKw" style={{
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, -100%)',
							}}></span>
						</div>
						<div className="styles_item___ON4R styles_active__SmKZA active">
							<img src={chilipiperlogo} alt="chilipiperlogo" loading="lazy" width={'270px'} height={'152px'} style={{
								color: 'transparent',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, 0px)',
								opacity: '1',
							}} />
							<span className="styles_item__overlay__WFyKw" style={{
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, -100%)',
							}}></span>
						</div>
						<div className="styles_item___ON4R styles_active__SmKZA active">
							<img src={zoomlogo} alt="zoomlogo" loading="lazy" width={'272px'} height={'92px'} style={{
								color: 'transparent',
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, 0px)',
								opacity: '1',
							}} />
							<span className="styles_item__overlay__WFyKw" style={{
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: ' translate(0px, -100%)',
							}}></span>
						</div>
					</div>
					<div className="styles_info__xbqpG">
						<h3 className="styles_heading__om2_o title title-60">
							Masters In Your <br /> SaaS Landscape
						</h3>
						<p className="styles_text__U6sGw text">We integrate seamlessly with your platforms and team, crafting revenue-boosting strategies that continue to benefit your company long-term.</p>
					</div>
				</div>
			</section>
		</>
	);
}