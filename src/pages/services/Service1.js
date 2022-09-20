import React from 'react'
import ButtonLink from '../../components/buttonLink/ButtonLink'
import './css/style.css'

export default function Services() {
  return (
    <>
      <section className="service1-1 section">
        <div className="container">
          <h4 className="service1-1__subtitle">Услуги - Физическая охрана</h4>
          <h1 className="service1-1__title ">Физическая охрана</h1>
        </div>

        <div className="service1-1__img"><img src="/img/img1.png" alt="photo" /></div>
        <div className="container">
          <p className="service1-1__text text">Охрана объектов в компании «Викинг-юг» — это полный комплекс мероприятий, направленных на обеспечение стабильной безопасности людей и имущества.
            После заказа услуг, вы сможете установить пост физической охраны на входе или в любом другом помещении. Мы можем предоставить услуги как невооруженных охранников, так и охранников с оружием по демократичным ценам
          </p>
          <p className="service1-1__text text">В данный момент компания «Викинг-юг» проводит охрану
            на объектах любых типов, вне зависимости от сложности
            и расположения. Охрана предоставляется для:</p>
          <ul className="service1-1__list">
            <li className="service1-1__item">Охрана объектов</li>
            <li className="service1-1__item">Телохранители</li>
            <li className="service1-1__item">Консьерж-сервис</li>
            <li className="service1-1__item">Охрана мероприятий</li>
            <li className="service1-1__item service1-1__item_l">Охрана объектов с повышенным уровнем секретности (гос. тайна)</li>
            <li className="service1-1__item">VIP-охрана</li>
            <li className="service1-1__item">Сопровождение грузов</li>
          </ul>
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
