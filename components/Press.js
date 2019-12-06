import React,{ useState, useEffect} from 'react'
import $ from 'jquery'

const Press = () => {


useEffect( () => {

  var jQueryBridget = require('jquery-bridget');
  var Isotope = require('isotope-layout');
  jQueryBridget( 'isotope', Isotope, $ );

  if(!$) return //guardia

  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element',
    filter: '.HOME',
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
        <a href="https://www.academiadecine.com/2019/03/18/ahi-dentro/">
          <div class="element-press full-width  ">
            <img src="/img/press/Press - Foto 1.jpg" alt="" />
          </div>
        </a>
        <a href="https://www.revistagq.com/noticias/cultura/articulos/donde-salir-madrid-nuevo-espectaculo-discoteca-unas-chung-lee-medias-puri/31215">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 2.jpg" alt="" />
          </div>
        </a>
        <a href="https://www.timeout.es/madrid/es/teatro/the-opera-locos">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 3.jpg" alt="" />
          </div>
        </a>
        <a href="">
          <div class="element-press full-width  ">
            <img src="/img/press/Press - Foto 4.jpg" alt="" />
          </div>
        </a>
        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 5.jpg" alt="" />
          </div>
        </a>
      
        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 7.jpg" alt="" />
          </div>
        </a>
        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 8.jpg" alt="" />
          </div>
        </a>
        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 9.jpg" alt="" />
          </div>
        </a>
        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 10.jpg" alt="" />
          </div>
        </a>

        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 11.jpg" alt="" />
          </div>
        </a>
        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 12.jpg" alt="" />
          </div>
        </a>

        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 13.jpg" alt="" />
          </div>
        </a>
        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 14.jpg" alt="" />
          </div>
        </a>
        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 15.jpg" alt="" />
          </div>
        </a>
        <a href="">
          <div class="element-press ">
            <img src="/img/press/Press - Foto 16.jpg" alt="" />
          </div>
        </a>
        <a href="">
          <div class="element-press full-width">
            <img src="/img/press/Press - Foto 17.jpg" alt="" />
          </div>
        </a>





      </div>

    </div>
    </div>
  )
}

export default Press
