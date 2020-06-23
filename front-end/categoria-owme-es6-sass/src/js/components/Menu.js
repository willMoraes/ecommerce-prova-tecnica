const btnOpenMenu = document.getElementById('btn-open-menu');
const btnCloseMenu = document.getElementById('btn-close-menu');
const nav = document.getElementById('nav-categories');

btnOpenMenu.addEventListener('click', () => {
    nav.classList.toggle('mobile-menu-active');
})

btnCloseMenu.addEventListener('click', () => {
    nav.classList.toggle('mobile-menu-active');
})