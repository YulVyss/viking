import React from 'react'
import './css/style.css'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import ButtonLink from '../../components/buttonLink/ButtonLink'

export default function About() {
  return (
    <>
      <section className="section section-a1">
        <div className="container">
          <h3 className="section-a1__title title">О компании</h3>
          <p className="section-a1__text text">Наша компания делает упор на качество, а не на количество.
            У нас нет одинаковых клиентов, к каждому из них индивидуальный подход</p>
          <AnchorLink href={'#form'}><ButtonLink linkText={'Стать клиентом'} class_name={'section-a1__link'} /></AnchorLink>
        </div>
      </section>
      <section className="section section3">
        <div className="container">
          <h3 className="section3__itle title">Опыт и профессионализм</h3>
          <div className="section3__flex-wrapper">
            <p className="section3__text_l">Мы не просто выполняем строительные работы,
              а предлагаем оптимальные решения</p>
            <p className="section3__text text">Компания базируется в Сочи и имеет в своем активе реализованные объекты в Южном, Северо-Кавказском
              и Центральном федеральных округах. Отличительной «Проф-Строй-Ресурс» является проведение строительных работ полного технологического цикла. Опыт
              и приобретенные компетенции позволяют успешно осуществлять
              весь спектр необходимых мероприятий
              и работ. «Проф-Строй-Ресурс» выполняет все необходимые предпроектные исследования, проводит согласования по проекту, самостоятельно проектирует, строит и сдает объект Заказчику «под ключ»</p>
          </div>
          <div className="section3__flex-blocks">
            <div className="section3__block section3__block_1">
              <h4 className="section3__block-title">23</h4>
              <p className="section3__text text">года успешной работы</p>
            </div>
            <div className="section3__block section3__block_2">
              <h4 className="section3__block-title">150+</h4>
              <p className="section3__text text">стационарных постов
                функционируют сегодня на территории Краснодарского края</p>
            </div>
          </div>
          <h4 className="section3__subtitle">Материальная ответственность</h4>
          <p className="section3__text_40 text">Мы несем высокую материальную ответственность
            за каждый охраняемый объект, что прописывается
            в договоре</p>
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
