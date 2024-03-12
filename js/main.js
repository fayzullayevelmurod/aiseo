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