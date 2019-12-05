import React, { Component, useState, useEffect} from 'react';
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'

const ImageGallery = ({classes, mainImg, description, model, openSlider, openVericalSlider, position = '', path, cursor}) => {

const [image, setImage] = useState([])



  return(


    <div className={`${classes}`}
         onClick={() => openSlider({path, cursor})}
         key={mainImg}>
      <img src={mainImg} alt="" />
      { description ?
        <div className="image-description">
        <p>
        {description} <br/>
        {model}
        </p>
      </div> : <div></div>
    }
    </div>

  )
}

export default ImageGallery
