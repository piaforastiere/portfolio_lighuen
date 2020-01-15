import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import uuid from 'react-uuid'
import { HorizontalSwiper, VerticalSwiper, ImageGallery } from './index'

import {fashion_swiper,
      still_swiper,
      theatre_swiper,
      home_swiper } from './objects'

import { Spinner, CountDown } from './'

const HomeBody = () => {

  const [path, setPath] = useState([])
  const [isHorizontalSliderOpen, setIsHorizontalSliderOpen] = useState(false)
  const [isVerticalSliderOpen, setIsVerticalSliderOpen] = useState(false)
  const [countDown, setCountDown] = useState(true)
  //isotope
  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*");




function changeAttribute(){
  var fashion = document.querySelectorAll('.fashion img')

  fashion.forEach( element =>
      element.setAttribute("src", element.getAttribute("data-img"))
    )

  var still = document.querySelectorAll('.still img')

  still.forEach( element =>
      element.setAttribute("src", element.getAttribute("data-img"))
    )

  var theatre = document.querySelectorAll('.theatre img')
  theatre.forEach( element =>
      element.setAttribute("src", element.getAttribute("data-img"))
    )
}

 useEffect( () => {
   // main.js
 var imagesLoaded = require('imagesloaded');

 imagesLoaded( '.grid', function() {

   setIsotope(
     new Isotope(".grid", {
       itemSelector: ".element",
       percentPosition: true,
       layoutMode: "masonry",
     })

   )

  setCountDown(false)

  changeAttribute()

 })
}, [countDown])


useEffect( () => {

  var elmnt = document.getElementById("grid");


  var headerOffset = 70;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = elmnt.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - headerOffset;





  if (isotope) {
    filterKey === "*"
      ? isotope.arrange({ filter: `.HOME` })
    : isotope.arrange({ filter: `.${filterKey}` },
      window.scrollTo({
           top: offsetPosition,
           behavior: "smooth"
      }),
      document.getElementById('full-width-container').style.display = 'none'

    )
  }


},[isotope, filterKey, countDown])






return(
  <div>

  {isHorizontalSliderOpen && <HorizontalSwiper {...isHorizontalSliderOpen} closeSlide={() => setIsHorizontalSliderOpen(false)}/>}
  {isVerticalSliderOpen && <HorizontalSwiper {...isVerticalSliderOpen} closeSlide={() => setIsVerticalSliderOpen(false)}/>}


  <div className="mainContainer">
{ countDown && <CountDown /> }
  <div className="container" id="grid">
  <div className="navbarGallery">
    <div className="button-group filters-button-group gallery-nav" id="filters">
      <button className="button" onClick={() => setFilterKey("fashion")}>fashion & Portrait</button>
      <button className="button" onClick={() => setFilterKey("still")}>still photography</button>
      <button className="button" onClick={() => setFilterKey("theatre")}>theatre & Dance</button>
    </div>
  </div>

  <div className="grid">


      {
        home_swiper && home_swiper.map(item => <ImageGallery {...item} openSliderHorizontal={setIsHorizontalSliderOpen} openVericalSlider={setIsVerticalSliderOpen} key={item.mainImg} />)
      }
      {
        fashion_swiper && fashion_swiper.map(item => <ImageGallery {...item} openSliderHorizontal={setIsHorizontalSliderOpen} openVericalSlider={setIsVerticalSliderOpen} key={item.mainImg} />)
      }
      {
        still_swiper && still_swiper.map(item => <ImageGallery {...item} openSliderHorizontal={setIsHorizontalSliderOpen} openVericalSlider={setIsVerticalSliderOpen} key={item.mainImg} />)
      }
      {
        theatre_swiper && theatre_swiper.map(item => <ImageGallery {...item} openSliderHorizontal={setIsHorizontalSliderOpen} openVericalSlider={setIsVerticalSliderOpen} key={item.mainImg} />)
      }


  </div>

    <div className="full-width-container" id="full-width-container">
      <div className="video-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yOcyz_ZaP0c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="video-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pzYFVmYJWM8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>


  </div>
  </div>
  </div>
  )
}




export default HomeBody;
