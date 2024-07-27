import React from "react";
import registerPhoto from "../../Logos/Register-Photo.jpg";
import xMark from "../../Logos/xmark.svg";
import "../Register/Register.css";

export default function Register({ onClose, openLogin }) {
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <div className="modal-window-left-side">
          <button className="close-modal" onClick={onClose}>
            <img src={xMark} alt="close-btn" />
          </button>

          <div className="modal-window-right-side-container">
            <h1>Регистрация</h1>
            <input type="email" name="Email" placeholder="Email" />
            <input type="password" name="Password" placeholder="Password" />
            <input type="password" name="Password" placeholder="Confirm Password" />
            <button className="register-button">Регистрация</button>
            <div className="to-login-section">
              <p className="have-account">Уже есть аккаунт?</p>
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
        <div className="modal-window-right-side">
          <img
            src={registerPhoto}
            alt="Register-Photo"
            className="modal-register-photo"
          />
        </div>
      </div>
    </div>
  );
}
