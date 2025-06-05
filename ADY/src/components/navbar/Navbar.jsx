import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/ADY6.png";
import { FaPhone, FaUser, FaSignOutAlt, FaArrowCircleLeft, FaBars, FaCogs } from 'react-icons/fa'; 
import Theme from '../theme/Theme';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import Login from '../login/Login';
import Register from '../register/Register';
import { useAuth } from '../../App'; 

const Navbar = ({ openLogin, openRegister }) => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const auth = useAuth();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setMenuOpen(false);
    };

    const handleLoginSuccess = (userData) => {
        auth.login(userData);
        setMenuOpen(false);
        
        if (userData.role === 'admin') {
            navigate('/admin'); 
        } else {
            navigate('/dashboard');
        }
    };

    const handleLogout = () => {
        auth.logout();
        navigate('/');
        setMenuOpen(false);
    };

    const goToDashboard = () => {
        navigate('/dashboard');
        setMenuOpen(false);
    };

    const goToAdminPanel = () => {
        navigate('/admin');
        setMenuOpen(false);
    };

    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-logo'>
                <img src={Logo} alt="logo" />
            </Link>

            <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars className="icon" />
            </div>

            <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(false)} className="navbar-link">
                            {t('home')}
                        </Link>
                    </li>
                    <li>
                        <Link to="/train" onClick={() => setMenuOpen(false)} className="navbar-link">
                            {t('category')}
                        </Link>
                    </li>

                    <li>
                        <Link to="/news" onClick={() => setMenuOpen(false)} className="navbar-link">
                            {t("news")}
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/about" onClick={() => setMenuOpen(false)} className="navbar-link">
                            {t("about")}
                        </Link>
                    </li>

                </ul>

                <div className='navbar-link language-toggle'>
                    <button onClick={() => changeLanguage('en')} className="language-button">EN</button>
                    <button onClick={() => changeLanguage('ru')} className="language-button">RU</button>
                    <button onClick={() => changeLanguage('az')} className="language-button">AZ</button>

                </div>

                <div className="navbar-contact">
                    <div className="contact-box">
                        <FaPhone className="contact-icon" />
                        <div className="contact-info">
                            <p className="help-text">{t("help")}</p>
                            <p className="phone-number">+994 99 907 77 07</p>
                        </div>
                    </div>
                    <Theme />
                </div>

                <div className="navbar-actions">
                    {auth.isAuthenticated && auth.userRole === 'admin' && (
                        <button onClick={goToAdminPanel} className="admin-panel-button">
                            <FaCogs className="icon" /> 
                        </button>
                    )}

                    {auth.isAuthenticated && (
                        <button onClick={goToDashboard} className="go-to-dashboard-button">
                            <FaArrowCircleLeft className="icon" />
                        </button>
                    )}

                    {auth.isAuthenticated ? (
                        <button onClick={handleLogout} className="logout-button">
                            <FaSignOutAlt className="icon" />
                        </button>
                    ) : (
                        <button onClick={openLogin} className="login-button">
                            <FaUser className="icon" />
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;