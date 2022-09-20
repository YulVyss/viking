import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import ButtonLink from '../../components/buttonLink/ButtonLink'
import Popup from '../../components/popup/Popup'
import './css/style.css'
const popupData = [
  {
    id: 0,
    title: 'Физическая охрана',
    img: '/img/img1.png',
    list: ['Охрана объектов', 'Охрана мероприятий', 'Сопровождение грузов', 'Телохранители', 'Охрана объектов с повышенным уровнем секретности (гос. тайна)', 'Консьерж-сервис', 'VIP-охрана']
  },
  {
    id: 1,
    title: 'Решение в сфере IT',
    img: '/img/img2.png',
    list: ['Биометрический учет рабочего времени', 'IT-решения в охране', 'Аутсорс IT-услуг']
  }
]

export default function Main() {
  const form = useRef()

  const [popup, setPopup] = useState(false)
  const [popupContent, setPopupContent] = useState([])

  function openPopup(e, number) {
    e.preventDefault()
    if (number === 1) {
      setPopupContent(popupData[0])
    }
    if (number === 2) {
      setPopupContent(popupData[1])
    }

    setPopup(true)
  }


  return (
    <>

      <section className="section section1">
        <div className="container">
          <h1 className="section1__title">Огромный опыт работы в сфере охранных услуг</h1>
          <p className="section1__text">Наша компания делает упор на качество, а не на количество
            У нас нет одинаковых клиентов, к каждому из них индивидуальный подход</p>
          <div className='section1__link'>
            <AnchorLink href={'#form'}><ButtonLink linkText={'Стать клиентом'} class_name={'section1__link'} /></AnchorLink>
          </div >
        </div>
      </section>
      <section className="section2 section">
        <div className="container">
          <h4 className="section2__subtitle">Охранные услуги</h4>
          <a href="/" className="section2__superlink" onClick={e => openPopup(e, 1)}>Физическая охрана</a>
          <a href="/" className="section2__superlink" onClick={e => openPopup(e, 2)}>Решение в сфере IT</a>
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
      <section className="section section4">
        <div className="container">
          <h3 className="section4__title title">Преимущества охраны объектов от охранной
            фирмы «Викинг-юг»</h3>
          <div className="section4__flex-wrapper">
            <div className="section4__block">
              <p className="section4__text text">Гарантия полной профпригодности сотрудников обеспечивается специальной физической
                и психологической подготовкой, а также регулярным повышением квалификации</p>
            </div>
            <div className="section4__block">
              <p className="section4__text text">Профессиональный подход
                к охраняемым объектам регулируется договором и обеспечивается высокой квалификацией сотрудников</p>
            </div>
            <div className="section4__block">
              <p className="section4__text text">Лояльная ценовая политика нашей организации позволяет пользоваться услугами охраны не только крупным предприятиям, но и небольшим организациям</p>
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
              <form action="#" className="section5__form form2" id="form2" ref={form}>
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
      {/* <div className="popup-wrapper" > */}
      <Popup popup={popup} setPopup={setPopup} content={popupContent} />
      {/* </div> */}


    </>
  )
}
