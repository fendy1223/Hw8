import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-arrow-forward',
        prevEl: '.swiper-button-arrow-back',
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        992: {
            loop: false,
            slidesPerView: 2,
        },
    },
});

const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 2.2,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        480: {
            slidesPerView: 3,
        },
    },
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-arrow-forward1',
        prevEl: '.swiper-button-arrow-back1',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
    },
});

const swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
    },

});

const swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});




