import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ButtonLink from '../buttonLink/ButtonLink'
import './css/style.css'

export default function Header({ styleNav, navLink }) {

  const nav = useRef()


  function openNav() {
    nav.current.classList.add('active')
    document.querySelector('body').classList.add('_lock')
  }
  function closeNav() {
    nav.current.classList.remove('active')
    document.querySelector('body').classList.remove('_lock')
  }

  return (
    <header className='header'>
      <div className="container">
        <div className="header__body">
          <div className="header__top">
            <a href="/" className="header__logo"><img src="/img/logo.png" alt="logo" /></a>
            <address className="header__address">г. Краснодар, ул. Базовская, 34</address>
            <a className="header__phone" href="tel:+78612595438">+7 (861) 259-54-38</a>
            <AnchorLink href={"#form"}><ButtonLink linkText={'Стать клиентом'} class_name={'header__link'} linkTo={'form'} /></AnchorLink>
            <div className="header__nav-mobile nav-mobile" onClick={openNav}>
              <span className="nav-mobile__item nav-mobile__item_1"></span>
              <span className="nav-mobile__item nav-mobile__item_2"></span>
              <span className="nav-mobile__item nav-mobile__item_3"></span>
            </div>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item"><Link to="/services" className={navLink === 'services' ? 'active' : ''} onClick={e => styleNav(e)}>Услуги</Link></li>
              <li className="header__nav-item"><Link to="/about" className={navLink === 'about' ? 'active' : ''} onClick={e => styleNav(e)}>О компании</Link></li>
              <li className="header__nav-item"><Link to="/job" className={navLink === 'job' ? 'active' : ''} onClick={e => styleNav(e)}>Вакансии</Link></li>
              <li className="header__nav-item"><Link to="/contacts" className={navLink === 'contacts' ? 'active' : ''} onClick={e => styleNav(e)}>Контакты</Link></li>
            </ul>
          </nav>
          <div className="header__nav_m" ref={nav}>
            <div className="header__nav-close" onClick={closeNav}>
              <span className="close close1"></span>
              <span className="close close2"></span>
            </div>
            <ul className="header__nav-list_m">
              <li className="header__nav-item"><a href="/services">Услуги</a></li>
              <li className="header__nav-item"><a href="/about">О компании</a></li>
              <li className="header__nav-item"><a href="/job">Вакансии</a></li>
              <li className="header__nav-item"><a href="/contacts">Контакты</a></li>
            </ul>
            <div className="header__mobile">
              <address className="header__address_m">г. Краснодар, ул. Базовская, 34</address>
              <a className="header__phone_m" href="tel:+78612595438">+7 (861) 259-54-38</a>
              <form action="#" className="header__form form1" id='form2'>
                <h3 className="form1__title">Оставьте заявку</h3>
                <p className="form1__text">Наш менеджер позвонит и подберёт
                  для вас подходящий вариант</p>
                <div className="form1__inputs">
                  <input type="text" name="name" id="name" placeholder='Имя' />
                  <input type="tel" name="phone" id="phone" placeholder='Телефон' />
                </div>
                <button className='form1__button' type='submit'>Заказать услугу</button>
                <p className="form1__text">Нажимая на кнопку, Вы даете согласие на обработку <a href="/" className="form1__conf">своих персональных данных</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>

    </header >
  )
}
