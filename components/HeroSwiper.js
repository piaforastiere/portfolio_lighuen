import React, {useState, useEffect} from 'react';
import Swiper from 'react-id-swiper';
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'


import HeroSlide from './HeroSlide'

  const HeroSwiper = () => {

    const [files, setFiles] = useState (null)

    const params = {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    }


    return (
        <div className="hero-space">

            <Swiper {...params}>
              <div className="swiper-slide" key="0">
                <img src="../img/hero/Slider-Foto1.jpg" alt=""/>
              </div>
              <div className="swiper-slide" key="1">
                <img src="../img/hero/Slider-Foto2.jpg" alt=""/>
              </div>
              <div className="swiper-slide" key="2">
                <img src="../img/hero/Slider-Foto3.jpg" alt=""/>
              </div>
              <div className="swiper-slide" key="3">
                <img src="../img/hero/Slider-Foto4.jpg" alt=""/>
              </div>
              <div className="swiper-slide" key="4">
                <img src="../img/hero/Slider-Foto5.jpg" alt=""/>
              </div>
              <div className="swiper-slide" key="5">
                <img src="../img/hero/Slider-Foto6.jpg" alt=""/>
              </div>
              <div className="swiper-slide" key="6">
                <img src="../img/hero/Slider-Foto7.jpg" alt=""/>
              </div>
              <div className="swiper-slide" key="7">
                <img src="../img/hero/Slider-Foto8.jpg" alt=""/>
              </div>
              <div className="swiper-slide" key="8">
                <img src="../img/hero/Slider-Foto9.jpg" alt=""/>
              </div>
              <div className="swiper-slide" key="9">
                <img src="../img/hero/Slider-Foto10.jpg" alt=""/>
              </div>
            </Swiper>

          </div>



    )
  }
  export default HeroSwiper;
