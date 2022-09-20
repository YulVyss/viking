import React from 'react'
import './style.css'

export default function ButtonLink({ linkText, class_name }) {



  return (
    <div className={class_name}>
      <button className='link' >{linkText}</button>
    </div >

  )
}
