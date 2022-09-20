import React from 'react'
import './css/style.css'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import ButtonLink from '../../components/buttonLink/ButtonLink'

export default function Job() {
  return (
    <>
      <section className="section section-j1">
        <div className="container">
          <div className="section-j1__flex-wrapper">
            <div className="section-j1__flex-block section-j1__flex-block1">
              <h3 className="section-j1__title title">Вакансии</h3>
              <p className="section-j1__text text">Работа в «Викинг-Юг» — это возможность профессионального и карьерного роста в одной из ведущих компаний России</p>

              <AnchorLink href={'#form'}><ButtonLink linkText={'Хочу работать'} class_name={'section-j1__link'} /></AnchorLink>
            </div>

            <div className="section-j1__flex-block section-j1__flex-block2">
              <h4 className="section-j1__block-title">168</h4>
              <p className="section-j1__text text">сотрудников в&nbsp;строю</p>
            </div>
          </div>

        </div>
      </section>


      <section className="section section-j4">
        <div className="container">

          <div className="section-j4__flex-wrapper">
            <div className="section-j4__block">
              <h4 className="section-j4__block-title">Менеджер по продажам</h4>
              <p className="section-j4__text text">Гарантия полной профпригодности сотрудников обеспечивается специальной физической
                и психологической подготовкой, а также регулярным повышением квалификации</p>
              <p className="section-j4__location">Краснодар </p>
            </div>
            <div className="section-j4__block">
              <h4 className="section-j4__block-title">Менеджер по продажам</h4>
              <p className="section-j4__text text">Профессиональный подход
                к охраняемым объектам регулируется договором и обеспечивается высокой квалификацией сотрудников</p>
              <p className="section-j4__location">Краснодар </p>
            </div>
            <div className="section-j4__block">
              <h4 className="section-j4__block-title">Менеджер по продажам</h4>
              <p className="section-j4__text text">Лояльная ценовая политика нашей организации позволяет пользоваться услугами охраны не только крупным предприятиям, но и небольшим организациям</p>
              <p className="section-j4__location">Краснодар </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section5" id='form'>
        <div className="container">
          <div className="section5__flex-wrapper">
            <div className="section5__flex-block">
              <h3 className="section5__title title">Профессионал своего дела?</h3>
              <p className="section5__text">Будем рады видеть вас в наших рядах!</p>
            </div>
            <div className="section5__flex-block">
              <form action="#" className="section5__form form2" id='form2'>
                <input type="text" name="name" id="name2" placeholder='Имя' />
                <input type="tel" name="phone" id="phone2" placeholder='Телефон' />
                <div className="section5__flex-wrapper2">
                  <button className='form2__button' type='submit'>Отправить</button>
                  <p className="form2__text text">Нажимая на кнопку, Вы даете согласие
                    на обработку <a href="/" className="form2__conf">своих персональных данных</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>

      </section>


    </>
  )
}
