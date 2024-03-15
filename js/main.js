AOS.init();

let swiper = new Swiper(".resultSwiper", {
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

let swiper2 = new Swiper(".quizSwiper", {
  spaceBetween: 10,
  allowTouchMove: false,
  pagination: {
    el: ".quiz-pagination",
    type: "progressbar",
  },
  effect: 'fade',
  navigation: {
    nextEl: ".quiz-button-next",
    prevEl: ".quiz-button-prev",
  },
});

let quiz_fraction_current = document.querySelector('.quiz-fraction .current');
let quiz_fraction_len = document.querySelector('.quiz-fraction .len');

function makeFraction() {
  quiz_fraction_current.textContent = swiper2.activeIndex + 1
  quiz_fraction_len.textContent = swiper2.slides.length
}

makeFraction()

swiper2.on('slideChange', () => {
  makeFraction()
})


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


let modal_contact_btn = document.querySelectorAll('.modal_contact_btn');
let modal_contact = document.querySelector('.modal_contact');
let modal_close = document.querySelector('.modal_close');
let quiz_modal = document.querySelector('.quiz_modal');
let quiz_modal_btn = document.querySelectorAll('.quiz_modal_btn');


modal_contact_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal_contact.classList.toggle('active')
        media_menu_bg.classList.toggle('active')
        modal_close.classList.toggle('active')
    })
})


media_menu_bg.addEventListener('click', () => {
  modal_contact.classList.remove('active')
  media_menu_bg.classList.remove('active')
  modal_close.classList.remove('active')
  quiz_modal.classList.remove('active')
})

modal_close.addEventListener('click', () => {
  modal_contact.classList.remove('active')
  media_menu_bg.classList.remove('active')
  modal_close.classList.remove('active')
  quiz_modal.classList.remove('active')
})




quiz_modal_btn.forEach(btn2 => {
    btn2.addEventListener('click', () => {
        quiz_modal.classList.add('active')
        media_menu_bg.classList.toggle('active')
        modal_close.classList.toggle('active')
    })
})