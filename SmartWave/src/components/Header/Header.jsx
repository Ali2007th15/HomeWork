import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";

import logo from "../../Logos/logo.svg";
import user from "../../Logos/user.svg";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openLogin = () => {
    setLoginOpen(true);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };

  const openRegister = () => {
    setRegisterOpen(true);
  };

  const closeRegister = () => {
    setRegisterOpen(false);
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-container">
        <Link to="/home">
          <button className="nav-button">Home</button>
        </Link>
        <Link to="/catalog">
          <button className="nav-button">Catalog</button>
        </Link>
        <Link to="/news">
          <button className="nav-button">News</button>
        </Link>
        <Link to="/about">
          <button className="nav-button">About Us</button>
        </Link>
      </div>
      <div className="user-favorites-container">
        
        <div className="user-menu-container">
          <img src={user} alt="User"  />
          
        </div>
      </div>

      {loginOpen && <Login onClose={closeLogin} openRegister={openRegister} />}

      {registerOpen && (
        <Register onClose={closeRegister} openLogin={openLogin} />
      )}
    </div>
  );
}