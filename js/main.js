let menuToggle = $('.menu-toggle');
let mobileNavContainer = $('.nav');


menuToggle.click(function(){
    menuToggle.toggleClass('menu-icon-active');
    mobileNavContainer.toggleClass('menu_active');
});


    let swiper = new Swiper('.swiper-container', {
      spaceBetween: 10,
      slidesPerView: 2,
      clickable: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        567: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }
    });



let time = 2;
let cc = 1;
$(window).scroll(function(){
  $('.stat_info').each(function(){
    let cPos = $(this).offset().top;
    let topWindow = $(window).scrollTop();
     if (cPos < topWindow + 550) {  
      if(cc < 2) {
          $('.stat_amount').addClass('stat_opacity');
          $('div').each(function(){
        let i = 1,
          num = $(this).data('max'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function(){
            if (i <= num) {
              that.html(i);
            }
            else {
              cc = cc + 2;
              clearInterval(int);
            }
              i++;
            },step);
         });

       }
      }
    });
});


// FIXED TOP
$(window).scroll(function showTopSide() {
  let topSide = $('.header_navigation');

    if($(window).scrollTop() > 100) {
      topSide.addClass('pos-fixed');
    } else {
      topSide.removeClass('pos-fixed');
    }
});



$(function (){
    $('a[href^="#"]').click(function(){
      let target = $(this).attr('href');
      $('html, body').animate(
           {
            scrollTop:$(target).offset().top - 70
           },
           800
      );
    });
});



