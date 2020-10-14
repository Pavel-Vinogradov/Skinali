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


$(function () {
  $(".before-after").twentytwenty({
    before_label: 'До Скинали', // Set a custom before label
    after_label: 'После Скинали', // Set a custom after label
  });
});

$('.before-slider').slick({
  draggable: false,
  dots: true,
  dotsClass: 'before-slider__dots',
  prevArrow: $('.arrow-left'),
  nextArrow: $('.arrow-right'),
});