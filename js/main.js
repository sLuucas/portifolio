AOS.init({
    duration: 1000,
    once: true,
});


//Menu Mobile
const menuHamburguer = document.querySelector(".js-menu");
const  menuMobile = document.querySelector(".mobile");
const iconImage = document.querySelector(".icon");
const image = document.querySelector(".image");
const close = document.querySelector(".close");

menuHamburguer.addEventListener('click', ()=>{
    menuMobile.classList.toggle('active');
    iconImage.classList.toggle('active');
});

menuHamburguer.addEventListener('click', ()=>{
    menuHamburguer.classList.toggle('active');
})




//Scroll Menu Desktop
const menuLinks = document.querySelectorAll('.desktop a[href^="#"]');
const menuLinksMobile = document.querySelectorAll('.mobile a[href^="#"]');

function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    })
}

function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) =>{
    link.addEventListener("click", scrollToSection)
    })

    menuLinksMobile.forEach((link) =>{
        link.addEventListener("click", scrollToSection)
        })

