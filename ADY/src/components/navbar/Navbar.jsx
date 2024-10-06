import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/1.webp";
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBars, FaPhone } from 'react-icons/fa6';
import Theme from '../theme/Theme';
import './Navbar.css'; 

const Navbar = () => {

    const [open, setOpen] = React.useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/train", label: "Train" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About" }
        
    ];

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-logo'>
                <img src={Logo} alt="logo" />
            </Link>

            <button onClick={handleClick} className="navbar-toggle">
                {open ? <LiaTimesSolid className='icon' /> : <FaBars className='icon' />}
            </button>

            <div className={`navbar-links ${open ? 'open' : ''}`}>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.href} onClick={handleClose} className="navbar-link">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="navbar-contact">
                    <div className="contact-box">
                        <FaPhone className="contact-icon" />
                        <div className="contact-info">
                            <p className="help-text">Need Help?</p>
                            <p className="phone-number">+994 99 907 77 07</p>
                        </div>
                    </div>
                    <Theme />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
