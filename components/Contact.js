import React, {useEffect, useState} from 'react'
import { FaRegComments } from 'react-icons/fa'
import {IoIosClose} from 'react-icons/io'

const Contact = ({closeContact}) => {

  return(
    <div className="contact-card">
    <div className="close-button">
      <IoIosClose onClick={() => closeContact()}/>
    </div>
    <FaRegComments />
      <h2 className="contact-title">
        For more information you can:
      </h2>
    <p> send an email to: <br/>
      <a href="mailto:info@lighuendesanto.com" target="_blank">info@lighuendesanto.com</a>
    </p>
    <p>
      Or give me a call to <br/>
      <a href="tel:34692181687">+34 692 18 16 87</a>
    </p>

    </div>
  )
}

export default Contact
