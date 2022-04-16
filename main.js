const closeNav = document.querySelector('.close');
const openNav = document.querySelector('.open');
const navModal = document.querySelector('.navigation');
const nav = document.querySelector('.nav');


console.log(navModal)

navModal.addEventListener('click', (e)=>{
    // console.log(e.target)
    if(e.target.classList.contains('navigation')){
        navModal.classList.remove('active');
    }
})

openNav.addEventListener('click',()=>{
    navModal.classList.add('active');
    navModal.classList.add
    // console.log('clicked');
})
closeNav.addEventListener('click',()=>{
    navModal.classList.remove('active');
})

var swiper = new Swiper(".mySwiper", {
spaceBetween: 30,
centeredSlides: true,
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});

