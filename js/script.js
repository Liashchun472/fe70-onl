// overflow hidden for body

document.querySelector('.burger-menu').addEventListener('click', function (){
  document.body.classList.toggle('fix');
});


// работа кнопки в header

document.querySelector('.burger-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu__list').classList.toggle('open');
});

// слайдер для .features

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

// слайдер для .reviews

const swiper = new Swiper('.swiper2', {
  loop: true,
  speed: 800,
  allowTouchMove: true,
  slidesPerView: 1,
});

swiper.on('slideChange', () => {
  document.querySelectorAll('.swiper-slide2').forEach(slide => {
      slide.style.opacity = '0';
  });

  const activeSlide = document.querySelector('.swiper-slide-active');
  if (activeSlide) {
      activeSlide.style.opacity = '1';
  }
});