import React,{ useState, useEffect} from 'react'
import $ from 'jquery'

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
    <div class="container" id="press-gallery">
      <div class="row">
        <h3 class="title-press">
          Press Publications
        </h3>
      </div>
      <div id="container" class="gallery ">
      {
        press && press.map(item => <ImageGalleryPress {...item} />)
      }


      </div>

    </div>
    </div>
  )
}

export default Press
