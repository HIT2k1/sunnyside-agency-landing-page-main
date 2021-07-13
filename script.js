let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu-list');

menuIcon.onclick = function() {
    menu.classList.toggle('menu-list--active');
}