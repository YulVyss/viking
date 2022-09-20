import React from 'react'
import './css/style.css'

export default function Contacts() {
  return (
    <>
      <section className="section section-c1">
        <div className="container">
          <div className="section-c1__flex-wrapper">
            <div className="section-c1__flex-block">
              <h3 className="section-c1__title title">Контакты</h3>
              <p className="section-c1__text text">Мы всегда остаёмся на связи</p>
              <h4 className="section-c1__subtitle">Телефон</h4>
              <a className="section-c1__text text" href="tel:+78612595438">+7 (861) 259-54-38</a>
              <h4 className="section-c1__subtitle">Адрес</h4>
              <address className="section-c1__address text" >Краснодар, улица Базовская, д. 34</address>
              <h4 className="section-c1__subtitle">Реквизиты</h4>
              <p className="section-c1__text text">ООО "ОХРАННАЯ ФИРМА "ВИКИНГ-ЮГ"
                ИНН 2308063769</p>
            </div>
            <div className="section-c1__flex-block">
              <div className="section-c1__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.979481080263!2d38.982920480253284!3d45.02534200563403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04fc0a1f97383%3A0xa5acab3811311bf6!2z0YPQuy4g0JHQsNC30L7QstGB0LrQsNGPLCAzNCwg0JrRgNCw0YHQvdC-0LTQsNGALCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSwgMzUwMDAw!5e0!3m2!1sru!2sru!4v1663222053091!5m2!1sru!2sru" width="100%" height="450" style={{ border: '0' }} title="карта" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="section section5" id='form'>
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
