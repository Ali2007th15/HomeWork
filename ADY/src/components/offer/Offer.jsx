import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Offer.css";

const Card = ({ image, title, text, extraText }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => setExpanded(!expanded);

  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className={`card-text ${expanded ? "expanded" : ""}`}>
        {text} <span className="extra-text">{expanded && extraText}</span>
      </p>
      <button className="card-link" onClick={toggleReadMore}>
        {expanded ? t("showLess") : t("readMore")} <span className="chev">›</span>
      </button>
    </div>
  );
};

const Cards = () => {
  const { t } = useTranslation();

  return (
    <section className="cards-wrap">
      <div className="cards-grid">
        <Card
          image="src/assets/5720.webp"
          title={t("luggageTitle")}
          text={t("luggageText")}
          extraText={t("luggageExtraText")}
        />
        <Card
          image="src/assets/5711.webp"
          title={t("petsTitle")}
          text={t("petsText")}
          extraText={t("petsExtraText")}
        />
        <Card
          image="src/assets/980.webp"
          title={t("kidsTitle")}
          text={t("kidsText")}
          extraText={t("kidsExtraText")}
        />
      </div>
    </section>
  );
};

export default Cards;
