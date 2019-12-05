import React, {useState, useEffect} from 'react'
import {IoIosClose} from 'react-icons/io'

const CloseButton = ({closeSlide}) => {

  return(
    <div className="close-button">
      <IoIosClose onClick={() => closeSlide()}/>
    </div>
  )
}

export default CloseButton
