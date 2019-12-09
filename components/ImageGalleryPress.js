import React, { Component, useState, useEffect} from 'react';
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'

const ImageGalleryPress = ({classes, mainImg, link}) => {

const [image, setImage] = useState([])



  return(


    <a href={link}>
    <div className={`${classes}`}
         key={mainImg}>
      <img src={mainImg} alt="" />
    </div>
    </a>

  )
}

export default ImageGalleryPress
