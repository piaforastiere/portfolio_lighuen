import React, { Component, useState, useEffect} from 'react';
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'

const HeroSlide = ({src, id, customClass}) => {


  return(


      <div className={`swiper-slide ${customClass}`}>
        <img src={src} alt="" key={id}/>
      </div>

  )
}

export default HeroSlide
