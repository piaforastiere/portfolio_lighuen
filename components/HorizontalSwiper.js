import React, {useState, useEffect} from 'react';
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
  const [singleImage, setSingleImage] = useState([])

  console.log(singleImage)
  const getSingleImage = async ({path_display}) => {

    try{
      const fileUrl = await dbx.filesDownload({ "path": path_display })

      setSingleImage([
        ...images.filter(item => item.path_display !== path_display),

        URL.createObjectURL(fileUrl.fileBlob)
      ])


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
      getSwiper: getGallerySwiper,
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
      getSwiper: thumbnailSwiper,
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
      images.forEach(({path_display}) =>
        getSingleImage({path_display})
      )

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

  const handleOnClickClose = () => {

  }
  return (

    <div className="lightbox">
        <CloseButton closeSlide={closeSlide}/>
        <Swiper {...gallerySwiperParams} >
          {
            singleImage && singleImage.map(
              image => <HeroSlide customClass={'main-swiper'} src={image.src}/>
            )
          }


        </Swiper>
        <div id="thumbnail">
          <Swiper {...thumbnailSwiperParams} className="thumbnail-swiper">
            {
              singleImage && singleImage.map(
                image => <HeroSlide customClass={'main-swiper'} src={image.src}/>
              )
            }
          </Swiper>
        </div>
      </div>

  )

}


export default HorizontalSwiper
