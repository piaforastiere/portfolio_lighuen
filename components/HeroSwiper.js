import React, {useState, useEffect} from 'react';
import Swiper from 'react-id-swiper';
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'


import HeroSlide from './HeroSlide'

  const HeroSwiper = () => {

    const [files, setFiles] = useState (null)


    // const getFiles = () => {
    //   const dbx = new Dropbox({
    //     accessToken: 'Ht1Z392ffvEAAAAAAAB-bKNJI2qyCRkfs6YJ4b7mJkEX2Z9pa6PafzxGmZ31hEpJ',
    //     fetch
    //   })
    //
    //   dbx.filesListFolder({
    //     "path": "/web_portfolio_api/estructura de fotos para  web lighuen desanto/SLIDER HOME",
    //     "recursive": false
    //   }).then(files =>
    //        setFiles(files.entries)
    //      )
    //
    // }
    //
    const params = {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    }
    //
    //
    // useEffect(() => {
    //   getFiles()
    // }, [])


    return (
        <div className="hero-space">

            <Swiper {...params}>
              <div className="swiper-slide">
                <img src="../img/hero/Slider-Foto1.jpg" alt=""/>
              </div>
              <div className="swiper-slide">
                <img src="../img/hero/Slider-Foto2.jpg" alt=""/>
              </div>
              <div className="swiper-slide">
                <img src="../img/hero/Slider-Foto3.jpg" alt=""/>
              </div>
              <div className="swiper-slide">
                <img src="../img/hero/Slider-Foto4.jpg" alt=""/>
              </div>
              <div className="swiper-slide">
                <img src="../img/hero/Slider-Foto5.jpg" alt=""/>
              </div>
              <div className="swiper-slide">
                <img src="../img/hero/Slider-Foto6.jpg" alt=""/>
              </div>
              <div className="swiper-slide">
                <img src="../img/hero/Slider-Foto7.jpg" alt=""/>
              </div>
              <div className="swiper-slide">
                <img src="../img/hero/Slider-Foto8.jpg" alt=""/>
              </div>
              <div className="swiper-slide">
                <img src="../img/hero/Slider-Foto9.jpg" alt=""/>
              </div>
              <div className="swiper-slide" >
                <img src="../img/hero/Slider-Foto10.jpg" alt=""/>
              </div>
            </Swiper>

          </div>



    )
  }
  export default HeroSwiper;
