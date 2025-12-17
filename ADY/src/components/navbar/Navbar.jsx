import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/ADY6.png';
import { FaPhone, FaUser, FaSignOutAlt, FaArrowCircleLeft, FaBars, FaCogs } from 'react-icons/fa';
import Theme from '../theme/Theme';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import Login from '../login/Login';
import Register from '../register/Register';
import { useAuth } from '../../hooks/AuthContext';


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { isAuthenticated, userRole, logout } = useAuth();
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const openLogin = () => {
    setLoginOpen(true);
    setRegisterOpen(false);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };

  const openRegister = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
    localStorage.setItem('hasRegistered', 'true');
  };

  const closeRegister = () => {
    setRegisterOpen(false);
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const goToAdminPanel = () => {
    navigate('/admin');
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        <img src={Logo} alt='logo' />
      </Link>
      <div className='navbar-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className='icon' />
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to='/' onClick={() => setLoginOpen(false)} className='navbar-link'>
              {t('home')}
            </Link>
          </li>
          <li>
            <Link to='/train' onClick={() => setLoginOpen(false)} className='navbar-link'>
              {t('category')}
            </Link>
          </li>
          <li>
            <Link to='/news' onClick={() => setLoginOpen(false)} className='navbar-link'>
              {t('news')}
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={() => setLoginOpen(false)} className='navbar-link'>
              {t('about')}
            </Link>
          </li>
        </ul>
        <div className='navbar-link language-toggle'>
          <button onClick={() => changeLanguage('en')} className='language-button'>
            EN
          </button>
          <button onClick={() => changeLanguage('ru')} className='language-button'>
            RU
          </button>
          <button onClick={() => changeLanguage('az')} className='language-button'>
            AZ
          </button>
        </div>
        <div className='navbar-contact'>
          <div className='contact-box'>
            <FaPhone className='contact-icon' />
            <div className='contact-info'>
              <p className='help-text'>{t('help')}</p>
              <p className='phone-number'>+994 99 907 77 07</p>
            </div>
          </div>
          <Theme />
        </div>
        <div className='navbar-actions'>
          {isAuthenticated && userRole === 'admin' && (
            <button onClick={goToAdminPanel} className='admin-panel-button'>
              <FaCogs className='icon' />
            </button>
          )}
          {isAuthenticated && (
            <button onClick={goToDashboard} className='go-to-dashboard-button'>
             <FaUser className='icon' />
            </button>
          )}
          {isAuthenticated ? (
            <button onClick={logout} className='logout-button'>
              <FaSignOutAlt className='icon' />
            </button>
          ) : (
            <button onClick={openLogin} className='login-button'>
              <FaUser className='icon' />
            </button>
          )}
        </div>
      </div>
      {registerOpen && <Register onClose={closeRegister} openLogin={openLogin} />}
      {loginOpen && <Login onClose={closeLogin} openRegister={openRegister} />}
    </nav>
  );
};

export default Navbar;