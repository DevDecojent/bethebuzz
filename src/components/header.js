import React, { useEffect, useState } from 'react';
import bethebuzzLogoDark from '../../src/assets/images/bethebuzz-logo-dark.svg';
import bethebuzzLogoLight from '../../src/assets/images/bethebuzz-logo-light.svg';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to track whether the nav is open or closed

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the state on button click
  };
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the position of the hero section
      const heroSection = document.getElementById('b2b-section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const scrolled = window.scrollY > heroBottom;
        setIsScrolled(scrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`styles_header__qc_3q ${isOpen ? 'styles_open__phJIB' : ''}`}>
        <div className="styles_header__bar__SNNJD border-radius js-header-bar"></div>
        <a
          aria-label="homepage link"
          className={`styles_logoshape__Sq47Z js-internal-link border-radius ${isScrolled ? 'styles_scrolled__WpWnI' : ''}`}
          href="/"
        >
          <svg viewBox="0 0 98 60" width="98" height="60" fill="none">
            <path
              d="M39.867 30.121v10.416c0 .593.318 1.138.826 1.426l8.942 5.208a1.655 1.655 0 001.636 0l8.927-5.208a1.64 1.64 0 00.826-1.426V30.12a1.64 1.64 0 00-.826-1.426l-3.51-2.051"
              stroke="#010561"
              strokeWidth="2.75"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M46.157 32.157V21.74a1.64 1.64 0 00-.826-1.426l-8.943-5.208a1.655 1.655 0 00-1.636 0l-8.926 5.208A1.64 1.64 0 0025 21.74v10.416c0 .592.318 1.137.826 1.426l8.942 5.208M65.058 35.842l7.116-4.15A1.64 1.64 0 0073 30.266V19.85a1.64 1.64 0 00-.826-1.426l-8.942-5.208a1.655 1.655 0 00-1.636 0l-8.943 5.208a1.64 1.64 0 00-.826 1.426v10.416"
              stroke="#010561"
              strokeWidth="2.75"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </a>
        <a
          aria-label="homepage link"
          className={`styles_logo__sRAMY styles_logo__ER0xG js-internal-link styles_light__pfuV9 ${isScrolled ? 'styles_scrolled__WpWnI' : ''}`}
          href="/"
        >
          <img
            alt="Be The Buzz"
            loading="lazy"
            width="118"
            height="74"
            decoding="async"
            data-nimg="1"
            className="styles_light__pfuV9"
            style={{ color: 'transparent' }}
            src={bethebuzzLogoLight}
          />
          <img
            alt="Be The Buzz"
            loading="lazy"
            width="118"
            height="74"
            decoding="async"
            data-nimg="1"
            className="styles_dark__AGB9O"
            style={{ color: 'transparent' }}
            src={bethebuzzLogoDark}
          />
        </a>
        <button aria-label="Toggle Nav" className="styles_button__SYQIC" onClick={toggleMenu}>
          <svg viewBox="0 0 28 13" fill="none">
            <path d="M1 4.05882C1.89122 2.16577 3.53683 1 5.31927 1H23.9412" stroke="#010561" strokeWidth="1.5" strokeLinecap="round"></path>
            <path d="M5.58838 6.35303H22.4119" stroke="#010561" strokeWidth="1.5" strokeLinecap="round"></path>
            <path d="M26.9998 8.64697C26.1086 10.54 24.4629 11.7058 22.6805 11.7058L4.05859 11.7058" stroke="#010561" strokeWidth="1.5" strokeLinecap="round"></path>
          </svg>
        </button>
        <div
          className="styles_container__tSMES"
          style={{
            visibility: isOpen ? 'visible' : 'hidden', // Use visibility for hidden state
            // transition: 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out', // Add transition for visibility
            transition: 'all 0.8s ease-in-out', 
          }}
        >
          <div className="styles_header__bg__IxNtg"></div>
          <nav className="styles_nav__ka1_N border-radius">
            <div
              className="styles_nav__bg__WF8xS"
              style={{
                transform: isOpen ? 'translateX(0%)' : 'translateX(100%)', // Open from right to left
                transition: 'all 0.8s ease-in-out', // Duration for background opening
              }}
            ></div>
            <div
              className="styles_nav__contents__VHDno nav-contents"
              style={{
                transform: isOpen ? 'translateX(0px)' : 'translateX(-30px)', // Open from right to left
                transition: 'all 0.8s ease-in-out', // Duration for content opening
              }}
            >
              <ul className="styles_nav__main__mKPx9">
                {['Services', 'Plans', 'Success Stories', 'Blog'].map((item, index) => (
                  <li
                    className="nav-item"
                    key={item}
                    style={{
                      opacity: isOpen ? '1' : '0',
                      transform: isOpen ? 'translateY(0)' : 'translateY(-10px)', // Slide down effect
                      transition: isOpen
                        ? `opacity 0.8s ease ${0.8 + index * 0.2}s, transform 0.8s ease ${0.8 + index * 0.2}s`
                        : 'none', // Reset animation when closing
                    }}
                  >
                    <a className="title js-internal-link" href={`/${item.toLowerCase().replace(' ', '-')}`}>
                      <span>{item}</span>
                      <span style={{ color: 'var(--color-violet)' }}>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="styles_nav__small__YIvdk nav-item" style={{ opacity: isOpen ? '1' : '0' }}>
                {['Team', 'Careers'].map((item, index) => (
                  <li
                    key={item}
                    style={{
                      opacity: isOpen ? '1' : '0',
                      transform: isOpen ? 'translateY(0)' : 'translateY(-10px)', // Slide down effect
                      transition: isOpen
                        ? `opacity 0.8s ease ${0.8 + (index + 4) * 0.1}s, transform 0.8s ease ${0.8 + (index + 4) * 0.1}s`
                        : 'none', // Reset animation when closing
                    }}
                  >
                    <a className="caption text-link-hover text-link-hover--small js-internal-link" href={`/${item.toLowerCase()}`}>
                      {item}
                      <span className="text-link-hover-underline"></span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="styles_nav__contact__S0xFm accent nav-item" style={{
                opacity: isOpen ? '1' : '0',
                transform: isOpen ? 'translateY(0)' : 'translateY(-10px)', // Slide down effect
                transition: isOpen
                  ? `opacity 0.8s ease ${1}s, transform 0.8s ease ${1}s`
                  : 'none', // Reset animation when closing
              }}>
                <span className="styles_nav__contact__icon__uCYP3">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M1 1L1 10C1 11.6569 2.34315 13 4 13H17.2M15 9.6L17.9757 12.5757C18.21 12.8101 18.21 13.1899 17.9757 13.4243L15 16.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M1 1L1 10C1 11.6569 2.34315 13 4 13H17.2M15 9.6L17.9757 12.5757C18.21 12.8101 18.21 13.1899 17.9757 13.4243L15 16.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </span>
                <p>
                  <a target="_self" href="mailto:grow@bethebuzz.co" rel="noreferrer">grow@bethebuzz.co</a>
                </p>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}