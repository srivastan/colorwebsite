const menu = document.querySelector('#mobile-menu')
const menuItem = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//comment
//display mobile menu
//ddd
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuItem.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

//Show active menu Scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homemenu = document.querySelector('#home');
    const aboutMenu = document.querySelector('#about');
    const serviceMenu = document.querySelector('#services');
    let scrollpos = window.scrollY
    console.log(scrollpos);

    //adds highlight classList
    if(window.innerWidth > 900 && scrollpos < 600){
        homemenu.classList.add('highlight')
        aboutMenu.classList.add('highlight')
        return
    }
    else if(window.innerWidth>960 && scrollpos < 1400){
        aboutMenu.classList.add('highlight')
        homemenu.classList.remove('highlight')
        serviceMenu.classList.remove('highlight')
    }
    else if (window.innerWidth > 960 && scrollpos < 2345) {
        serviceMenu.classList.remove('highlight')
        aboutMenu.classList.remove('highlight')
        
        
    }
    if ((elem && window.innerWidth < 960 && scrollpos < 600) || elem) {
        elem.classList.remove('highlight')
    }
}



window.addEventListener('scroll',highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu while navigating

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuItem.addEventListener('click', hideMobileMenu);