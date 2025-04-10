// работа кнопки в header

document.querySelector('.burger-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu__list').classList.toggle('open');
});

// слайдер swiper 

const swiper = new Swiper('.swiper', {
  loop: false,
  navigation: false,
  pagination: false
});

function updateActiveButton(index) {
  document.querySelectorAll('.features__slider-item').forEach((item, i) => {
    if (i === index) {
      item.classList.add('features__active');
    } else {
      item.classList.remove('features__active');
    }
  });
}

document.querySelectorAll('.features__slider-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    swiper.slideTo(index);
    updateActiveButton(index);
  });
});

swiper.on('slideChange', () => {
  updateActiveButton(swiper.activeIndex);
});