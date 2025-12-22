import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Baku from "../../assets/Baku.png";
import Aze from "../../assets/Aze2.png";
import { useTranslation } from 'react-i18next';
import { FaTrain, FaCity, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';
import './Train.css';

const Train = () => {
    const { t } = useTranslation();

    const [isAbsheronOpen, setIsAbsheronOpen] = useState(false);
    const [isRegionalOpen, setIsRegionalOpen] = useState(false);

    const toggleAbsheronInfo = () => {
        setIsAbsheronOpen(prevState => !prevState);
        if (isRegionalOpen) {
            setIsRegionalOpen(false);
        }
    };

    const toggleRegionalInfo = () => {
        setIsRegionalOpen(prevState => !prevState);
        if (isAbsheronOpen) {
            setIsAbsheronOpen(false);
        }
    };

    return (
        <div className='train-container'>
            <div className="train-background"></div>

            <div className="train-content">
                <header className="train-header">
                    <h1 className="train-title">{t("choose category")}</h1>
                </header>

                <div className="train-grid">
                    <div className="train-card">
                        <Link to={"/detail/absheron"} className='card-link'>
                            <div className="card-image-wrapper">
                                <img src={Baku} alt={t("absheron")} className="card-image" />
                                <div className="image-gradient"></div>
                                <div className="card-overlay">
                                    <div className="overlay-icon-wrapper">
                                        <FaTrain className="overlay-icon" />
                                    </div>
                                    <h2 className="overlay-title">{t("absheron")}</h2>
                                    
                                </div>
                            </div>
                        </Link>

                        <div className="card-body">
                            <div className="card-header-section">
                                <div className="header-left">
                                    <div className="icon-wrapper">
                                        <FaTrain className="card-icon" />
                                    </div>
                                    <div className="title-wrapper">
                                        <h3 className="card-title">{t("absheron")}</h3>
                                       
                                    </div>
                                </div>
                            </div>

                            <button
                                className={`info-toggle ${isAbsheronOpen ? 'active' : ''}`}
                                onClick={toggleAbsheronInfo}
                                aria-expanded={isAbsheronOpen}
                            >
                                <span>{isAbsheronOpen ? t("hideInfo") : t("showInfo")}</span>
                                <FaChevronDown className={`chevron ${isAbsheronOpen ? 'rotated' : ''}`} />
                            </button>

                            <div className={`info-panel ${isAbsheronOpen ? 'expanded' : ''}`}>
                                <div className="info-content-wrapper">
                                    <p className="info-text">{t("text10")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="train-card">
                        <Link to={"/detail/intercity"} className='card-link'>
                            <div className="card-image-wrapper">
                                <img src={Aze} alt={t("regional")} className="card-image" />
                                <div className="image-gradient"></div>
                                <div className="card-overlay">
                                    <div className="overlay-icon-wrapper">
                                        <FaCity className="overlay-icon" />
                                    </div>
                                    <h2 className="overlay-title">{t("regional")}</h2>
                                    
                                </div>
                            </div>
                        </Link>

                        <div className="card-body">
                            <div className="card-header-section">
                                <div className="header-left">
                                    <div className="icon-wrapper regional">
                                        <FaCity className="card-icon" />
                                    </div>
                                    <div className="title-wrapper">
                                        <h3 className="card-title">{t("regional")}</h3>
                                        
                                    </div>
                                </div>
                            </div>

                            <button
                                className={`info-toggle ${isRegionalOpen ? 'active' : ''}`}
                                onClick={toggleRegionalInfo}
                                aria-expanded={isRegionalOpen}
                            >
                                <span>{isRegionalOpen ? t("hideInfo") : t("showInfo")}</span>
                                <FaChevronDown className={`chevron ${isRegionalOpen ? 'rotated' : ''}`} />
                            </button>

                            <div className={`info-panel ${isRegionalOpen ? 'expanded' : ''}`}>
                                <div className="info-content-wrapper">
                                    <p className="info-text">{t("text11")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Train;