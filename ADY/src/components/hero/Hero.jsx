import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Train2 from '../../assets/ADY5.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const accentLineRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      accentLineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 1, ease: 'power2.out' }
    );

    tl.from(titleRef.current, { opacity: 0, y: 30, duration: 0.8 }, '-=0.6');
    tl.from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');
    tl.from(buttonRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.3');

    tl.fromTo(
      imageRef.current,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' },
      0.3
    );

    gsap.to(imageRef.current, { y: '+=6', duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }, { scope: heroRef });

  const titleText = t('reserve1');
  const coloredText = t('reserve3');

  return (
    <div ref={heroRef} className="hero-minimal">
      <div className="minimal-accent-circle minimal-accent-circle-1" />
      <div className="minimal-accent-circle minimal-accent-circle-2" />

      <div className="hero-minimal-content">
        <div className="hero-minimal-text">
          <div ref={accentLineRef} className="accent-line" />

          <h1 ref={titleRef} className="hero-minimal-title" style={{ textAlign: 'left' }}>
            {titleText}
            <br />
            <span className="hero-minimal-title-accent" style={{ color: ' #12517fff' }}>
              {coloredText}
            </span>
          </h1>

          <p ref={subtitleRef} className="hero-minimal-subtitle">
            {t('lext1')}
          </p>

          {}
          <Link ref={buttonRef} to="/train" className="hero-new-button">
            <span>{t('reserve2')}</span>
            <svg
              className="button-arrow"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 10H15M10 5L15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <div className="hero-minimal-stats">
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">{t('support1')}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">10M+</span>
              <span className="stat-label">{t('passengers')}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">100</span>
              <span className="stat-label">{t('route')}</span>
            </div>
          </div>
        </div>

        <div className="hero-minimal-image">
          <div className="image-glow" />
          <img ref={imageRef} src={Train2} alt="train" className="train-image" />
        </div>
      </div>

   
    </div>
  );
};

export default Hero;