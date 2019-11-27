$(document).ready(function (){

  var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // cache container
  var $container = $('#container');

  // initialize isotope
  $container.isotope({
    // options...
  });


  // filter items when filter link is clicked
  $('#filters a').click(function(){
    var selector = $(this).attr('data-filter');
    // $container.isotope({ filter: selector });
    console.log(selector);
    if ( selector == '.fashion') {
      $('.gallery').addClass('hide-gallery')
      $('#fashion').isotope({ filter: selector });
      $('#fashion').removeClass('hide-gallery')
      $('#fashion element').removeClass('hide');
      $('#container').css('display', 'none')
    }
    if ( selector == '.still'){
      $('.gallery').addClass('hide-gallery')
      $('#still-photography').isotope({ filter: selector });
      $('#still-photography').removeClass('hide-gallery')
      $('#still-photography element').removeClass('hide');

      $('#container').css('display', 'none')
    }

    if ( selector == '.theatre'){
      $('.gallery').addClass('hide-gallery')
      $('#theatre').isotope({ filter: selector });
      $('#theatre').removeClass('hide-gallery')
      $('#theatre element').removeClass('hide');

      $('#container').css('display', 'none')
    }

    if ($(selector).hasClass('hide')) {
      $('.element').addClass('hide')
      $(selector).removeClass('hide')
    }
    return false;
  });

})
