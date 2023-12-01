import Swiper, { Navigation } from 'swiper';

import "@scss/components/swiper";

export function initSliders() {
    if (document.querySelector('.tabs__slider--1')) {
        new Swiper('.tabs__slider--1', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
            speed: 800,
            centeredSlides: true,
            navigation: {
                prevEl: '.tabs__swiper-button-prev--1',
                nextEl: '.tabs__swiper-button-next--1',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.4,
                },
                768: {
                    slidesPerView: 1,
                }
            }
        });
    }
    if (document.querySelector('.tabs__slider--2')) {
        new Swiper('.tabs__slider--2', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
            speed: 800,
            centeredSlides: true,
            navigation: {
                prevEl: '.tabs__swiper-button-prev--2',
                nextEl: '.tabs__swiper-button-next--2',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.4,
                },
                768: {
                    slidesPerView: 1,
                }
            }
        });
    }
    if (document.querySelector('.tabs__slider--3')) {
        new Swiper('.tabs__slider--3', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
            speed: 800,
            centeredSlides: true,
            navigation: {
                prevEl: '.tabs__swiper-button-prev--3',
                nextEl: '.tabs__swiper-button-next--3',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.4,
                },
                768: {
                    slidesPerView: 1,
                }
            }
        });
    }
}
window.addEventListener('load', initSliders);