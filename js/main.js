var swiper = new Swiper(".resultSwiper", {
    loop: true,
    breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
    },
    navigation: {
      nextEl: ".result-button-next",
      prevEl: ".result-button-prev",
    },
});


const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


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