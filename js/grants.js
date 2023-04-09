const swiperGrants = document?.querySelector('.swiper--grants');

const grantsSlider = new Swiper(swiperGrants, {
    slidesPerView: 'auto',
    loop: false,
    navigation: {
      nextEl: '.grants-courses__next',
      prevEl: '.grants-courses__prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});


const swiperEvents = document?.querySelector('.swiper--events');

const eventsSlider = new Swiper(swiperEvents, {
    slidesPerView: 'auto',
    loop: false,
    navigation: {
      nextEl: '.events__next',
      prevEl: '.events__prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

