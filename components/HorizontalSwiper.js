import React, {useState, useEffect, useCallback} from 'react';
import Swiper from 'react-id-swiper';
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'

import { CloseButton } from './index'
import HeroSlide from './HeroSlide'

const dbx = new Dropbox({
  accessToken: 'Ht1Z392ffvEAAAAAAAB-bKNJI2qyCRkfs6YJ4b7mJkEX2Z9pa6PafzxGmZ31hEpJ',
  fetch
})


const HorizontalSwiper = ({path, closeSlide}) => {

  const [images, setImages] = useState([])
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const [listOfImages, setListOfImages] = useState([])

  console.log({listOfImages})

  const getSingleImages = async (images) => {
    try {

      const myProm = await Promise.all(images.map(async item => {
        const x = await dbx.filesDownload({ "path": item.path_display })
        return x
      }))
      setListOfImages(myProm)
     }
    catch(error) {
      console.log(error)
    }

  }

  const getFiles = () => {

    dbx.filesListFolder({
      "path": path,
      "recursive": false
    }).then(images =>
         setImages(images.entries)
       )

  }

    const gallerySwiperParams = {
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    };
    const thumbnailSwiperParams = {
      spaceBetween: 10,
      loop: true,
      slidesPerView: 7,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    };

    useEffect(() => {
      if (!path) return
      getFiles()
    }, []);

    useEffect(() => {
      if (!images) return
      getSingleImages(images)
    }, [images]);

    useEffect(() => {
      if (
        gallerySwiper !== null &&
        gallerySwiper.controller &&
        thumbnailSwiper !== null &&
        thumbnailSwiper.controller
      ) {
        gallerySwiper.controller.control = thumbnailSwiper;
        thumbnailSwiper.controller.control = gallerySwiper;
      }
    }, [gallerySwiper, thumbnailSwiper]);


  return (

    <div className="lightbox">
        <CloseButton closeSlide={closeSlide}/>
        <Swiper {...gallerySwiperParams} shouldSwiperUpdate={true}>
          {
            listOfImages && listOfImages.map(
              image => <HeroSlide
                key={image.id}
                customClass={'main-swiper'}
                src={URL.createObjectURL(image.fileBlob)}
              />
            )
          }


        </Swiper>
        <div id="thumbnail">
          <Swiper {...thumbnailSwiperParams} className="thumbnail-swiper" shouldSwiperUpdate={true}>
            {
              listOfImages && listOfImages.map(
                image => <HeroSlide
                  key={image.id}
                  customClass={'main-swiper'}
                  src={URL.createObjectURL(image.fileBlob)}
                />
              )
            }
          </Swiper>
        </div>
      </div>

  )

}


export default HorizontalSwiper
