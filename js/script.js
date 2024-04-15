/*menu hamburguer

const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu; 
});

function toggleMenu() {
    const nav = document.querySelector('nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    }  else {
        nav.style.display = 'none';
    }
}
*/

/*menu-mobile teste*/

const menuMobile = document.querySelector('.menu-mobile');
const menuOverlay = document.querySelector('.menu-overlay');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
    body.classList.toggle('sidebar-active');
});

menuOverlay.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-active');
    body.classList.remove('sidebar-active');
});
