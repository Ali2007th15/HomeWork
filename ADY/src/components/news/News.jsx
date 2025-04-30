import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const News = ({ theme }) => {
  const { t } = useTranslation();
  const isDark = theme === 'dark';
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.querySelectorAll('.news-card'),
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  const newsData = Array.from({ length: 6 }, (_, i) => ({
    title: t(`title${i + 1}`),
    text: t(`text${i + 1}`),
    date: t(`date${i + 1}`),
    image: `/images/news-${i + 1}.jpg`,
  }));

  return (
    <section
      ref={containerRef}
      className="w-full bg-neutral-50 dark:bg-[#0e111b] text-neutral-800 dark:text-neutral-200 py-28 px-4 sm:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1d5c87] dark:text-blue-400">
          {t('sectionTitle')}
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
          {t('sectionSubtitle')}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="news-card group relative bg-white dark:bg-[#1a1d29] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-700"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-[#1d5c87] dark:text-blue-300 group-hover:underline">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-400">
                {item.text}
              </p>
              <span className="text-xs mt-auto opacity-70 dark:text-neutral-400 text-right">
                {item.date}
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-[#1d5c8733] pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
