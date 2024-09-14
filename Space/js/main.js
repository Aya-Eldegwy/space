const navmenu = document.getElementById('nav-meun');
const navclose = document.getElementById('nav-close');
const navtoggle = document.getElementById('nav-toggle');

if(navtoggle){
    navtoggle.addEventListener('click',() =>{
        navmenu.classList.add('show-menu')
    })
}

if(navclose){
    navclose.addEventListener('click',() =>{
        navmenu.classList.remove('show-menu')
    })
}
//to links

const navlink = document.querySelectorAll('.nav-link');
const linkaction = ()=>{
    const navmenu = document.getElementById('nav-meun');
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n=> n.addEventListener('click',linkaction));
//add blurheader
const blurheader=()=>{
    const header=document.getElementById('header')
    this.scrollY>=50 ?header.classList.add('blur-header')
                    :header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurheader); 


// swiper slide
const swiperTravel = new Swiper ('.travel-swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView:"auto",
    breakpoints:{
        1000:{
            slidesPerView: 3,
            },
            668:{
                slidesPerView: 2,
            },
            500:{
                slidesPerView: 1,
            },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
})
// scroll-up
const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                    : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

// scroll reveal
const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration: 2500,
    delay: 300,
})
sr.reveal('.home-data')
sr.reveal('.home-img',{origin:'bottom'})
sr.reveal('.home-ovni', {delay: 800})
sr.reveal('.explore-data',{origin:'right'})
sr.reveal('.explore-img',{origin:'left'})
sr.reveal('.explore-planet',{origin: 'right',delete: 800})
sr.reveal('.history-card',{interval: 100})
sr.reveal('.history-planet-1',{origin: 'left',delay: 1000})
sr.reveal('.history-planet-2',{origin: 'right',delay: 1200})
