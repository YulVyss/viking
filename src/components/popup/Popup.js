import React, { useRef } from 'react'
import './css/style.css'

export default function Popup({ popup, setPopup, content }) {
  const popupRef = useRef()
  const closeRef = useRef()
  const inputs = useRef()

  if (popup) {
    popupRef.current.classList.add('open')
    closeRef.current.classList.add('open')
    document.querySelector('body').classList.add('_lock')
  }

  function closePopup() {
    setPopup(false)
    popupRef.current.classList.remove('open')
    closeRef.current.classList.remove('open')
    document.querySelector('body').classList.remove('_lock')
  }

  function openForm(e) {
    e.preventDefault()
    inputs.current.classList.add('open')
  }


  return (
    <div className='popup' ref={popupRef}>
      <div className="popup__wrapper">
        <div className="popup__close" ref={closeRef} onClick={closePopup}><span></span><span></span></div>
        <div className="popup__img"><img src={content.img ? content.img : ''} alt="фото" /></div>
        <div className="popup__content">
          <section className="popup-1 section">


            <h1 className="popup1__title">{content.title ? content.title : ''}</h1>
            <p className="popup1__text text">Охрана объектов в компании «Викинг-юг» — это полный комплекс мероприятий, направленных на обеспечение стабильной безопасности людей и имущества.
              После заказа услуг, вы сможете установить пост физической охраны на входе или в любом другом помещении. Мы можем предоставить услуги как невооруженных охранников, так и охранников с оружием по демократичным ценам
            </p>
            <p className="popup1__text text">В данный момент компания «Викинг-юг» проводит охрану
              на объектах любых типов, вне зависимости от сложности
              и расположения. Охрана предоставляется для:</p>
            <ul className="popup1__list">
              {content.list ? (content.list.map((item, key) => (<li className="popup1__item" key={key}>{item}</li>))) : ''}

            </ul>

          </section>

          <section className="section section5 popup2">
            <form action="#" className="section5__form form2" method='POST' >
              <div className="popup1__flex-wrapper" ref={inputs}>
                <input className='popup1__input' required type="text" name="name" id="name2" placeholder='Имя' />
                <input className='popup1__input' required type="tel" name="phone" id="phone2" placeholder='Телефон' />
              </div>
              <button className='form2__button popup__button' type='submit' onClick={e => openForm(e)}>Отправить</button>
              <p className="form2__text text">Нажимая на кнопку, Вы даете согласие на обработку <a href="/" className="form2__conf">своих персональных данных</a></p>
            </form>
          </section>
        </div>
      </div>

    </div >
  )


}
