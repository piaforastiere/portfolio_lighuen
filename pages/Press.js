import React,{ useState, useEffect} from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import $ from 'jquery'

import ImageGalleryPress from '../components/ImageGalleryPress'
import { press } from '../components/objects'

import "../public/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css'

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
    <Head>
      <meta charSet="utf-8" />
      <title>LIGHUEN DESANTO</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet" key="google-font-roboto"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </Head>

    <Nav />
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
