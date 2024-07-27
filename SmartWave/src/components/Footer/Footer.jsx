import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
<footer className="footer">
      <div className="footer-section">
        <h4>О компании</h4>
        <ul>
          <li>
            <a href="#about">О нас</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
          
        </ul>
      </div>
      <div className="footer-section">
        <h4>Полезные ссылки</h4>
        <ul>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#support">Поддержка</a>
          </li>
          <li>
            <a href="#privacy">Политика конфиденциальности</a>
          </li>
        </ul>
      </div>
      
    </footer>
  )
}
