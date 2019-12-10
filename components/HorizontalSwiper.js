import React, {useState, useEffect, useCallback} from 'react';
import Swiper from 'react-id-swiper';
import { Dropbox } from 'dropbox'
import fetch from 'isomorphic-unfetch'

import { CloseButton, HeroSlide, Spinner } from './'

const dbx = new Dropbox({
  accessToken: 'Ht1Z392ffvEAAAAAAAB-bKNJI2qyCRkfs6YJ4b7mJkEX2Z9pa6PafzxGmZ31hEpJ',
  fetch
})


const HorizontalSwiper = ({path, closeSlide, cursor}) => {

  const [images, setImages] = useState([])
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const [listOfImages, setListOfImages] = useState([])
  const [entireImageCall, setEntireImageCall] = useState(null)

  const getSingleImages = async (images) => {
    try {

      const myProm = await Promise.all(images.map(async item => {
        const x = await dbx.filesDownload({ "path": item.path_display})
        return x
      }))
      setListOfImages(myProm)
     }
    catch(error) {
      console.log(error)
    }

  }

  const getFiles = async () => {

    const newImages = await dbx.filesListFolder({
      "path": path,
      "recursive": false,
      "limit": 6
    })
    setImages([...newImages.entries])
    setEntireImageCall(newImages)

  }

  const getMoreFiles = async (cursor, setImages, images) => {
    const newImages = await dbx.filesListFolderContinue({
      cursor,
    })
    setImages([
      ...images,
      ...newImages.entries,
    ])
    setEntireImageCall(newImages)

  }

    const gallerySwiperParams = {
      getSwiper: getGallerySwiper,
      spaceBetween: 0,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      loopedSlides: true,
      on: {
        init: function () {

        },
      }
    };
    const thumbnailSwiperParams = {
      getSwiper: getThumbnailSwiper,
      spaceBetween: 0,
      centeredSlides: true,
      slidesPerView: 10,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loopedSlides: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
        },
        1300 : {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 6,
        }
      }
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
      if (!entireImageCall) return
      if(entireImageCall.has_more) {
        getMoreFiles(entireImageCall.cursor, setImages, images)
      }
    }, [entireImageCall])

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
      { listOfImages.length === 0 && <Spinner />}


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
          <Swiper {...thumbnailSwiperParams} shouldSwiperUpdate={true}>
            {
              listOfImages && listOfImages.map(
                image => <HeroSlide
                  key={image.id}
                  customClass={'thumbnail-swiper'}
                  src={URL.createObjectURL(image.fileBlob)}
                />
              )
            }
          </Swiper>
        </div>

        <CloseButton closeSlide={closeSlide}/>
      </div>


  )

}


export default HorizontalSwiper
