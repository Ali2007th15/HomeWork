import React, { useState } from "react";
import loginPhoto from "../../Logos/Login-Photo.jpg";
import xMark from "../../Logos/xmark.svg";
import "../Login/Login.css";

export default function Login({ onClose, openRegister }) {
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <div className="modal-window-left-side">
          <img
            src={loginPhoto}
            alt="Login-Photo"
            className="modal-login-photo"
          />
        </div>
        <div className="modal-window-right-side">
          <button className="close-modal" onClick={onClose}>
            <img src={xMark} alt="close-btn" />
          </button>

          <div className="modal-window-right-side-container">
            <h1>Вход</h1>
            <input type="email" name="Email" placeholder="Email" />
            <input type="password" name="Password" placeholder="Password" />
            <button className="forgot-password-button">Забыли пароль?</button>
            <button className="log-in-button">Войти</button>
            <div className="to-registration-section">
              <p className="no-account">Нет аккаунта?</p>
              <a
                href="#toRegister"
                className="to-registration-button"
                onClick={() => {
                  onClose();
                  openRegister();
                }}
              >
                Регистрация
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
