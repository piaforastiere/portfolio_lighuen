import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import All from '../components/All'
// import "../public/style.css"
import "../public/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css'


import {
  HeroSwiper,
   Files,
   HomeBody,
   Press
    } from '../components'

const Home = () => (
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
    <HeroSwiper />
    <HomeBody />
    <script src="js/scrollmagic/minified/ScrollMagic.min.js"></script>
    <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
  </div>
)

export default Home
