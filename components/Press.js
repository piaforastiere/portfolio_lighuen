import React,{ useState, useEffect} from 'react'
import $ from 'jquery'
import uuid from 'react-uuid'

import ImageGalleryPress from './ImageGalleryPress'
import { press } from './objects'

const Press = () => {


useEffect( () => {

  var jQueryBridget = require('jquery-bridget');
  var Isotope = require('isotope-layout');
  jQueryBridget( 'isotope', Isotope, $ );

  if(!$) return //guardia

  // init Isotope
  var $grid = $('.grid').isotope({
  });

}, [])
  return(
    <div>
    <div className="container" id="press-gallery">
      <div className="row">
        <h3 className="title-press">
          Press Publications
        </h3>
      </div>
      <div id="container" className="gallery ">
      {
        press && press.map(item => <ImageGalleryPress {...item} key={uuid()}/>)
      }


      </div>

    </div>
    </div>
  )
}

export default Press
