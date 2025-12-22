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
  const coloredTitleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    const titleWords = titleRef.current.querySelectorAll('span');

    tl.from(titleWords, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
    });

    tl.from(
      coloredTitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      '-=0.4'
    );

    tl.from(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
      },
      '-=0.4'
    );

    tl.from(
      buttonRef.current,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
      },
      '-=0.3'
    );

    tl.from(
      featuresRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
      },
      '-=0.2'
    );

    tl.fromTo(
      imageRef.current,
      { x: '100%', rotation: 0 },
      {
        x: '25%',
        rotation: 0,
        duration: 2,
        ease: 'power2.inOut',
      },
      0
    );

    gsap.to(scrollRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, { scope: heroRef });

  const titleText = t('reserve1');
  const coloredText = t('reserve3');

  const titleWords = titleText.split(' ').map((word, index) => (
    <span key={index} style={{ display: 'inline-block', marginRight: '8px' }}>
      {word}
    </span>
  ));

  return (
    <div
      ref={heroRef}
      className="w-full h-[calc(100vh-8ch)] lg:px-28 md:px-16 sm:px-7 mt-[8ch] flex items-center justify-center flex-col hero relative"
    >
      <div className="flex-1 w-full flex flex-col lg:flex-row items-stretch justify-between gap-5 pb-5">
        <div className="lg:w-[35%] w-full h-auto rounded-md flex justify-center flex-col space-y-8 lg:space-y-4">
          <div className="space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-neutral-50 leading-[1.15] text-center md:text-left">
              <div ref={titleRef}>{titleWords}</div>

              <div
                ref={coloredTitleRef}
                style={{ color: '#1d5c87' }}
                className="tracking-wider"
              >
                {coloredText}
              </div>
            </h1>

            <p
              ref={subtitleRef}
              className="text-sm sm:text-lg font-normal text-neutral-300 line-clamp-4 text-ellipsis text-center md:text-left"
            >
              {t('lext1')}
            </p>
          </div>

          <Link
            ref={buttonRef}
            to="/train"
            style={{ background: '#1d5c87' }}
            className="w-fit text-neutral-50 font-medium text-base px-6 py-3 rounded-md text-white ease-in-out duration-300"
          >
            {t('reserve2')}
          </Link>

          <div ref={featuresRef} className="features-row">
            <div className="feature-item">
              <div className="feature-number">500+</div>
              <div className="feature-label">{t('routes')}</div>
            </div>

            <div className="feature-divider"></div>

            <div className="feature-item">
              <div className="feature-number">24/7</div>
              <div className="feature-label">{t('support1')}</div>
            </div>

            <div className="feature-divider"></div>

            <div className="feature-item">
              <div className="feature-number">1M+</div>
              <div className="feature-label">{t('passengers')}</div>
            </div>
          </div>
        </div>

        <div className="lg:w-[70%] w-full h-full rounded-md flex items-end justify-end relative lg:static">
          <img
            ref={imageRef}
            className="w-full max-h-[60%] object-contain relative"
            style={{ top: '-160px' }}
            src={Train2}
            alt="train img"
          />
        </div>
      </div>

      <div ref={scrollRef} className="scroll-indicator">
        <div className="scroll-text">{t('scroll')}</div>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
};

export default Hero;
