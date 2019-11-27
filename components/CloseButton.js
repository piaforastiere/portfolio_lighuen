import React, {useState, useEffect} from 'react'
import {IoIosClose} from 'react-icons/io'

const CloseButton = ({closeSlide}) => {

  return(
    <IoIosClose onClick={() => closeSlide()}/>
  )
}

export default CloseButton
