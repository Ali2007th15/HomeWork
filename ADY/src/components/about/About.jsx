import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="about-page">

      <header className="hero">
        <div className="hero-media" />
        <div className="hero-overlay" />
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <h1 className="hero-title">{t("aboutHeroTitle")}</h1>
          <p className="hero-lead">{t("aboutHeroSubtitle")}</p>

          <div className="hero-stats">
            <div>
              <span>+5M</span>
              <small>{t("passengers_yearly")}</small>
            </div>
            <div>
              <span>1500km</span>
              <small>{t("rail_network")}</small>
            </div>
            <div>
              <span>24/7</span>
              <small>{t("service_hours")}</small>
            </div>
          </div>
        </motion.div>
      </header>

      {}
      <section className="section mission">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <h2 className="big-title">{t("aboutMissionTitle")}</h2>
          <p className="lead">
            {t("aboutMissionText1")}
          </p>
          <p className="lead muted">
            {t("aboutMissionText2")}
          </p>
        </motion.div>
      </section>

      {}
      <section className="section values">
        <div className="container">
          <h2 className="big-title">{t("aboutValuesTitle")}</h2>
          <div className="values-grid">
            <motion.article
              className="value value--large"
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="value-media value-media--innovation" />
              <div className="value-body">
                <h3>{t("value1Title")}</h3>
                <p>{t("value1Text")}</p>
              </div>
            </motion.article>

            <motion.article
              className="value"
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="value-media value-media--sustain" />
              <div className="value-body">
                <h3>{t("value2Title")}</h3>
                <p>{t("value2Text")}</p>
              </div>
            </motion.article>

            <motion.article
              className="value"
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="value-media value-media--comfort" />
              <div className="value-body">
                <h3>{t("value4Title")}</h3>
                <p>{t("value4Text")}</p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {}
      <section className="section history">
        <div className="history-inner">
          <motion.div
            className="history-photo"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="history-text"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="aboutbig">{t("aboutHistoryTitle")}</h1>
            <p>{t("aboutHistoryText1")}</p>
            <p>{t("aboutHistoryText2")}</p>
            <p className="muted">{t("aboutHistoryText3")}</p>
          </motion.div>
        </div>
      </section>

      {}
      <section className="section achievements">
        <div className="container">
          <h2 className="big-title">{t("aboutAchievementsTitle")}</h2>
          <div className="achievements-grid">
            <motion.div className="achievement" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="ach-thumb ach-thumb--1" />
              <h4>{t("achievement1Title")}</h4>
              <p>{t("achievement1Text")}</p>
            </motion.div>

            <motion.div className="achievement" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="ach-thumb ach-thumb--2" />
              <h4>{t("achievement2Title")}</h4>
              <p>{t("achievement2Text")}</p>
            </motion.div>

            <motion.div className="achievement" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="ach-thumb ach-thumb--3" />
              <h4>{t("achievement3Title")}</h4>
              <p>{t("achievement3Text")}</p>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
