import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import All from '../components/All'
// import "../public/style.css"
import "../public/horizontal_swiper.scss"
import 'bootstrap/dist/css/bootstrap.min.css'


import {
  HeroSwiper,
   Files,
   HomeBody,
   HorizontalSwiper
    } from '../components'

const Home = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>LIGHUEN DESANTO</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet" key="google-font-roboto"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css" />

      </Head>

    <Nav />
    <HeroSwiper />
    <HomeBody />
  </div>
)

export default Home
