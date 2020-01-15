import React, {useEffect, useState} from 'react'
import { FaRegComments } from 'react-icons/fa'
import { IoIosClose, IoIosMailOpen, IoIosPhonePortrait } from 'react-icons/io'
import { TiLocationOutline } from "react-icons/ti"

const Contact = ({closeContact}) => {

  return(
    <div className="contact-card">
    <div className="close-button">
      <IoIosClose onClick={() => closeContact()}/>
    </div>
      <div className="row">
      <div className="profilePic">
        <img src="/img/profile.jpg" alt=""/>
      </div>
      </div>
    <div className="contactInfo">

      <div className="header">
      <h2 className="contact-title">
        Lighuen Desanto
      </h2>
      <div className="location">
        <TiLocationOutline />
        <a href="https://goo.gl/maps/UmPFReVnbVV8wZeD9" target="_blank">
          <span>Madrid</span>, España.
        </a>
      </div>

        </div>
      <p className="contacts-email">
        <IoIosMailOpen/>
        <a href="mailto:info@lighuendesanto.com">
        info@lighuendesanto.com
        </a>
      </p>
      <p className="contacts-phone">
        <IoIosPhonePortrait />
        <a href="tel:34692181687">
        +34 692 18 16 87
        </a>
      </p>
    </div>

    </div>
  )
}

export default Contact
