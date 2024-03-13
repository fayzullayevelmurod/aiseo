var swiper = new Swiper(".resultSwiper", {
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
    },
    navigation: {
      nextEl: ".result-button-next",
      prevEl: ".result-button-prev",
    },
});


let media_menu = document.querySelector('.media_menu');
let medu_close = document.querySelector('.medu_close');
let media_menu_bg = document.querySelector('.media_menu_bg');
let burger_btn = document.querySelector('.burger_btn');

burger_btn.addEventListener('click', () => {
    media_menu.classList.add('active')
    media_menu_bg.classList.add('active')
})

media_menu_bg.addEventListener('click', () => {
    media_menu.classList.remove('active')
    media_menu_bg.classList.remove('active')
})

medu_close.addEventListener('click', () => {
    media_menu.classList.remove('active')
    media_menu_bg.classList.remove('active')
})