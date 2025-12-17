import React from 'react';
import { FaMapPin, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from "../../assets/ADY7.png";
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {}
        <div className="footer-brand">
          <Link to="/" className="footer-logo-wrap">
            <image  className="footer-logo-img" />
            <span className="footer-brand-name">ADY </span>
          </Link>
          <p className="footer-description">{t("plan")}</p>
          <div className="footer-social">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
        </div>

        {}
        <div className="footer-column">
          <h3 className="footer-heading">{t("about us")}</h3>
          <ul className="footer-list">
            <li><Link to="#" className="footer-link">{t("our story")}</Link></li>
            <li><Link to="#" className="footer-link">{t("mission & vision")}</Link></li>
            <li><Link to="#" className="footer-link">{t("careers")}</Link></li>
            <li><Link to="#" className="footer-link">{t("news")}</Link></li>
          </ul>
        </div>

        {}
        <div className="footer-column">
          <h3 className="footer-heading">{t("services")}</h3>
          <ul className="footer-list">
            <li><Link to="#" className="footer-link">{t("train booking")}</Link></li>
            <li><Link to="#" className="footer-link">{t("luxury train")}</Link></li>
            <li><Link to="#" className="footer-link">{t("freight services")}</Link></li>
            <li><Link to="#" className="footer-link">{t("vip tours")}</Link></li>
          </ul>
        </div>

        {}
        <div className="footer-column">
          <h3 className="footer-heading">{t("support")}</h3>
          <ul className="footer-list">
            <li><Link to="#" className="footer-link">{t("faq & support")}</Link></li>
            <li><Link to="#" className="footer-link">{t("safety guarantee")}</Link></li>
            <li><Link to="#" className="footer-link">{t("privacy policy")}</Link></li>
            <li><Link to="#" className="footer-link">{t("terms and conditions")}</Link></li>
          </ul>
        </div>

        {}
        <div className="footer-column">
          <h3 className="footer-heading">{t("contact")}</h3>
          <div className="footer-contact-item">
            <FaMapPin className="footer-contact-icon" />
            <div>
              <p className="footer-contact-label">{t("adress")}</p>
              <p className="footer-contact-address">{t("baku - 28 may")}</p>
            </div>
          </div>
          <div className="footer-contact-item">
            <FaPhone className="footer-contact-icon" />
            <div>
              <p className="footer-contact-label">{t("phone")}</p>
              <p className="footer-contact-address">+994 99 907 77 07</p>
            </div>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope className="footer-contact-icon" />
            <div>
              <p className="footer-contact-label">Email</p>
              <p className="footer-contact-address">ady@info.az</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ADY  — {t("all rights reserved")}.</p>
      </div>
    </footer>
  );
};

export default Footer;
