import React, { Component, useState, useEffect} from 'react';
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'

const ImageGalleryPress = ({classes, mainImg, link}) => {

const [image, setImage] = useState([])



  return(


    <a href={link} target='_blank' key={mainImg}>
      <div className={`${classes}`}>
        <img src={mainImg} alt="" />
      </div>
    </a>

  )
}

export default ImageGalleryPress
