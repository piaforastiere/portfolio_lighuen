import React, { useState, useEffect } from 'react'
import $ from 'jquery'

import HorizontalSwiper from './HorizontalSwiper'
import ImageGallery from './ImageGallery'

import {fashion_swiper,
      still_swiper,
      theatre_swiper,
      home_swiper } from './objects'

const HomeBody = () => {

  const [path, setPath] = useState([])
  const [isHorizontalSliderOpen, setIsHorizontalSliderOpen] = useState(false)
  
  useEffect(() => {
      var jQueryBridget = require('jquery-bridget');
      var Isotope = require('isotope-layout');
      jQueryBridget( 'isotope', Isotope, $ );

      if(!$) return //guardia

      // init Isotope
      var $grid = $('.grid').isotope({
        itemSelector: '.element',
        filter: '.HOME',
      });
      // filter functions
      var filterFns = {

      };
      // bind filter button click
      $('.filters-button-group').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });



  }, [])


  const handleClick = () => {

  };


return(
  <div>
  {isHorizontalSliderOpen && <HorizontalSwiper {...isHorizontalSliderOpen} closeSlide={() => setIsHorizontalSliderOpen(false)} />}
  <div className="container">
  <div className="navbarGallery">
    <div className="button-group filters-button-group gallery-nav">
      <button className="button is-checked" data-filter=".fashion">fashion</button>
      <button className="button" data-filter=".still">still photography</button>
      <button className="button" data-filter=".theatre">theatre</button>
    </div>
  </div>

  <div className="grid">


      {
        home_swiper && home_swiper.map(item => <ImageGallery {...item} openSlider={setIsHorizontalSliderOpen} />)
      }
      {
        fashion_swiper && fashion_swiper.map(item => <ImageGallery {...item} openSlider={setIsHorizontalSliderOpen} />)
      }
      {
        still_swiper && still_swiper.map(item => <ImageGallery {...item} openSlider={setIsHorizontalSliderOpen} />)
      }
      {
        theatre_swiper && theatre_swiper.map(item => <ImageGallery {...item} openSlider={setIsHorizontalSliderOpen} />)
      }


  </div>
  </div>

  </div>
  )
}




export default HomeBody;
