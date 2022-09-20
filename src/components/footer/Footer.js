import React from 'react'
import './css/style.css'
import { Link } from 'react-router-dom'

export default function Footer({ styleNav }) {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__body">
          <div className="footer__logo"><img src="/img/logo.svg" alt="logo" /></div>
          <div className="footer__address">
            <a href='/' className="footer__text_light">«Викинг-Юг», 2022</a>
            <p className="footer__text_light">Все права защищены. Предложение
              не является публичной офертой</p>
          </div>
          <ul className="footer__nav footer__nav1">
            <li className="footer__nav-item"><Link to="/services" onClick={e => styleNav(e)}>Услуги</Link></li>
            <li className="footer__nav-item"><Link to="/about" onClick={e => styleNav(e)}>О компании</Link></li>
            <li className="footer__nav-item"><Link to="/job" onClick={e => styleNav(e)}>Вакансии</Link></li>
            <li className="footer__nav-item"><Link to="/contacts" onClick={e => styleNav(e)}>Контакты</Link></li>
          </ul>
          <ul className="footer__nav footer__nav2">
            <li className="footer__nav-item"><a href="/">Физическая охрана</a></li>
            <li className="footer__nav-item"><a href="/">Решения в сфере IT</a></li>
          </ul>
          <div className="footer__contacts">
            <a className='footer__phone' href="tel:+"> +7 (861) 259-54-38</a>
            <address className="footer__address">г. Краснодар, ул.&nbsp;Базовская,&nbsp;34</address>
          </div>
          <a className='footer__dev' href="http://" target="_blank" rel="noopener noreferrer">Разработано в DATMAR</a>
        </div>
      </div>

    </footer>
  )
}
