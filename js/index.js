
function hero() {
    const hero = document.querySelector('.hero');
    
    if(hero) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(hero, {
        scrollTrigger: {
          trigger: hero,
          start:'1800 bottom',
          scrub: true,
        },
        opacity : 0,
      })
    }
  }

hero();

function swiperThumb() {
    const swiperThumb = new Swiper(".swiper--topical-thumb", {
      slidesPerView: 'auto',
      freeMode: false,
      watchSlidesProgress: false,
      allowTouchMove : false,
    });
    const swiperTopical = new Swiper(".swiper--topical", {
      spaceBetween: 10,
      slidesPerView:'auto',
      navigation: {
        nextEl: ".topical__next",
        prevEl: ".topical__prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      thumbs: {
        swiper: swiperThumb,
      },
      on : {
        slideChange() {
          const currentSlide             = this.realIndex + 1;
          const sliderSlideCurrent       = document.querySelector('.current-slide');
          sliderSlideCurrent.textContent = currentSlide;
        },
        beforeInit() {
          const numOfSlides      = this.wrapperEl.querySelectorAll('.swiper-slide').length;
          const totalSlide       = document.querySelector('.total-slides');
          totalSlide.textContent = numOfSlides;
        },
      },
    });
  }

swiperThumb();
