const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-item a');
const navBar = document.querySelector('.navbar');

let menuStatus = false;


// ----- Menu Functions -----//

const closeMenu = () => {
    menu.classList.remove('menu-open');
        menuIcon.classList.remove('rotate');
        menuStatus = false;
}

const openMenu = () => {

    if(!menuStatus){
        menu.classList.add('menu-open');
        menuIcon.classList.add('rotate');
        menuStatus = true;
    } else { closeMenu() }
}


// const openMenu = () => {
//     menu.classList.toggle('menu-open');
//     menuIcon.classList.toggle('rotate');
// }

// -----  Menu Events ----- //

menuIcon.addEventListener('click', () => openMenu());

menuLinks.forEach(link => {
    link.addEventListener('click', () => closeMenu());
});

window.addEventListener('scroll', () => {
    navBar.classList.toggle('sticky-menu', window.scrollY > 50);
    menuLinks.forEach(link => {
        link.classList.toggle('sticky-menu', window.scrollY > 50);
    })
});


// ----- FORM ----- //

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
})