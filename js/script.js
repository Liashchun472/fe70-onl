// работа кнопки в header

document.querySelector('.burger-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu__list').classList.toggle('open');
});


(() => {
  let featuresSlides = document.querySelectorAll('.features__slider-item');

  let swiper = new Swiper(".swiper", {
    allowTouchMove: false
  });

  for (let i = 0; i < featuresSlides.length; i++) {
    featuresSlides[i].addEventListener('click', () => {

      if (!featuresSlides[i].classList.contains('features__active')) {
        featuresSlides.forEach(elem => elem.classList.remove('features__active'));
        featuresSlides[i].classList.add('features__active');
        swiper.slideTo(i, 300);
      }
    });
  }
})();