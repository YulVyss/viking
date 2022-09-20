import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../../components/buttonLink/ButtonLink'
import './css/style.css'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

export default function Services() {
  return (
    <>
      <section className="section-s1 section">
        <div className="container">
          <h3 className="section-s1__title title">Услуги</h3>
          <p className="section-s1__text text">Особый контроль по подбору личного состава для выполнения текущих задач, что в свою очередь трансформируется в качество оказываемых охранных услуг</p>

          <AnchorLink href={'#form'}><ButtonLink linkText={'Стать клиентом'} class_name={'section-s1__link'} /></AnchorLink>
          <Link to="/service1" className="section-s1__superlink">Физическая охрана</Link>
          <Link to="/service2" className="section-s1__superlink">Решение в сфере IT</Link>
        </div>
      </section>
      <section className="section section5">
        <div className="container">
          <div className="section5__flex-wrapper">
            <div className="section5__flex-block">
              <h3 className="section5__title title">Остались вопросы?</h3>
              <p className="section5__text">Наш менеджер позвонит и подберёт для вас подходящий вариант</p>
            </div>
            <div className="section5__flex-block">
              <form action="#" className="section5__form form2" id='form2'>
                <input type="text" name="name" id="name2" placeholder='Имя' />
                <input type="tel" name="phone" id="phone2" placeholder='Телефон' />
                <div className="section5__flex-wrapper2">
                  <button className='form2__button' type='submit'>Отправить</button>
                  <p className="form2__text text">Нажимая на кнопку, Вы даете согласие на обработку <a href="/" className="form2__conf">своих персональных данных</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
