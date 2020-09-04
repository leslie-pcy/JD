$(function () {


    var swiper1 = new Swiper('.swiper-container-1', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-1',
            prevEl: '.swiper-button-prev-1',
        },
    });

    
    var swiper2 = new Swiper('.swiper-container-2', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay:true,
        navigation: {
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2',
        },
    });  
    
    var swiper3 = new Swiper('.swiper-container-3', {
        slidesPerView: 4,
        spaceBetween: 0,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next-3',
          prevEl: '.swiper-button-prev-3',
        },
      });

      var swiper4 = new Swiper('.swiper-container-4', {
          slidesPerView: 3,
          spaceBetween: 50,
          centeredSlides: true,
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });

      var swiper5 = new Swiper('.swiper-container-5', {
        spaceBetween: 30,
        centeredSlides: true,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
 

})