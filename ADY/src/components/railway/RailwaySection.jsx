import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import "./RailwaySection.css";
import trainImg from "../../assets/tr.png";

const RailwaySection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) return;

    setLoading(true);

    emailjs
      .send(
        "service_ktivsrk",
        "template_4bwkcfi",
        { user_email: email },
        "AqrDaRC1_m2IUjEpa"
      )
      .then(() => {
        setSubmitted(true);
        setEmail("");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setSubmitted(false), 4000);
      });
  };

  return (
    <section className="railway-container">
      <div className="railway-content">
        <button className="consult-btn">{t("consultation")}</button>
        <h2 className="railway-title">{t("title")}</h2>

        <ul className="railway-list">
          <li>{t("point1")}</li>
          <li>{t("point2")}</li>
          <li>{t("point3")}</li>
          <li>{t("point4")}</li>
        </ul>

        <form onSubmit={handleSubmit} className="railway-form">
          <input
            type="email"
            placeholder={t("placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "..." : t("submit")}
          </button>
        </form>

        {submitted && (
          <p className="railway-success">{t("successMessage")}</p>
        )}
      </div>

      <div className="railway-image">
        <img src={trainImg} alt="train" />
      </div>
    </section>
  );
};

export default RailwaySection;