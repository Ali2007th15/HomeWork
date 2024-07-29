
import React from "react";
import xMark from "../../Logos/xmark.svg";
import "../Register/Register.css";

export default function Register({ onClose, openLogin }) {
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <button className="close-modal" onClick={onClose}>
          <img src={xMark} alt="close-btn" />
        </button>
        <div className="modal-window-container">
          <h1>Регистрация</h1>
          <input type="email" name="Email" placeholder="Email" />
          <input type="password" name="Password" placeholder="Password" />
          <input type="password" name="Password" placeholder="Confirm Password" />
          <button className="register-button">Регистрация</button>
          <div className="to-login-section">
      
            <a
              href="#toLogin"
              className="to-login-button"
              onClick={() => {
                onClose();
                openLogin();
              }}
            >
              Вход
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
