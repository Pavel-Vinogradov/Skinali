' use strict';

let menuOpen = document.querySelector('.menu__button');
let menu = document.querySelector('.menu');
let menuButton = document.querySelector('.menu__button');
let buttonLine = document.querySelectorAll('.menu__line');
menuOpen.addEventListener('click', (event) => {
  menu.classList.toggle('menu--open');
  menuButton.classList.toggle('btn--active');
});


buttonLine.forEach((element) => {
  menuOpen.addEventListener('click', () => {
    element.classList.toggle('line--active');
  });
});

let navbarBtn = document.querySelector('.navbar__btn');
let heroBtn = document.querySelector('.hero__btn');
let offerBlock = document.getElementById('offer');

function handleButtonClick() {
  offerBlock.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}
navbarBtn.addEventListener('click', handleButtonClick);
heroBtn.addEventListener('click', handleButtonClick);
//======================

 

 


$(function () {
  $(".before-after").twentytwenty({
    before_label: 'До Скинали', // Set a custom before label
    after_label: 'После Скинали', // Set a custom after label
  });
});
//==================
$('.before-slider').slick({
  draggable: false,
  dots: true,
  dotsClass: 'before-slider__dots',
  prevArrow: $('.arrow-left'),
  nextArrow: $('.arrow-right'),
});


$('.reviews-slider').slick({
  draggable: false,
  dots: true,
  dotsClass: 'before-slider__dots',
  prevArrow: $('.review-arrow-left'),
  nextArrow: $('.review-arrow-right'),
});

let reviews = $('.reviews');
let reviewsTop = reviews.offset().top;
$(window).bind('scroll', function () {
var windowTop = $(this).scrollTop();
if (windowTop > reviewsTop) {
  $('.map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0a5b1bc6229c91bba4227add0e5b3d4df2f81c96e734fddf4c055e1c575238cf&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=true"></script>');
  $(window).unbind('scroll');
}
});
 