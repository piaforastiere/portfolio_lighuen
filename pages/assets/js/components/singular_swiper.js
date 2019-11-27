import React from 'react'

const swiperImages = {
  fotoUno : {
    name: 'SATALAYA IBIZA',
    modelName: 'MONIQUE SODRE',
    url: '/assets/img/slider/HOME/COLUMNA_1/FOTO_1/Lightbox Fila 10 - Foto 1.jpg'
  },
  fotoDos : {
    name: 'SATALAYA IBIZA',
    modelName: 'MONIQUE SODRE',
    url: '/assets/img/slider/HOME/COLUMNA_1/FOTO_1/Lightbox Fila 10 - Foto 2.jpg'
  },
  fotoTres : {
    name: 'SATALAYA IBIZA',
    modelName: 'MONIQUE SODRE',
    url: '/assets/img/slider/HOME/COLUMNA_1/FOTO_1/Lightbox Fila 10 - Foto 3.jpg'
  }
}
const SingularSwiper = () => {

  const { name, modelName, url } = swiperImages

  return (

    <div class="swiper-container">
      <div class="swiper-wrapper">
       <img src={url} alt=""/>
       <p>{name}</p>
       <p>
       {modelName}
       </p>
      </div>
    </div>
  )

}

export default SingularSwiper
