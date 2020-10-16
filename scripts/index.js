// swiper

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  
  autoplay: {
    delay: 10000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    bulletElement: 'span',
    clickable: true,
  },
});

// accordion

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    heightStyle: "content",
    active: false,
    icons: false
  });
} );

// burger 

const burger = document.querySelector('.burger');
const burgerSpan = document.querySelector('.burger__span');
const menu = document.querySelector('.header__nav');
burger.addEventListener('click', function() {
  menu.classList.toggle('header__nav-visible')
  burgerSpan.classList.toggle('burger__span-active')
});