import React, { Component, useState, useEffect} from 'react';
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'
import uuid from 'react-uuid'

import $ from 'jquery'

const ImageGallery = ({classes, mainImg, description, model, openSliderHorizontal, openVericalSlider, position, path, cursor, filters}) => {

const [image, setImage] = useState([])



  return(



      <div className={`${classes}`}
           onClick={() => openSliderHorizontal({path, cursor})}
            key={mainImg}>
        { filters ?
        <img data-img={mainImg} alt="" /> :
        <img src={mainImg} alt="" />
        }

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
