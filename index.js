import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import imgsData from "./imgs.js";


const swiperWrapper = document.querySelector('.swiper-wrapper');
const containerPopupContent = document.querySelector('.container-popup-content');
const popUpReview = document.querySelector('.pop-up-review');
const popUpReviewScreenDimming = document.querySelector('.pop-up-review-screen-dimming');
const popUpReviewImg = document.querySelector('.pop-up-review-img');

function seeNameList() {
  for (let i = 0; i < imgsData[0].length; i++) {
    
    console.log(imgsData[0][i].name)
    const swiperSlide = document.createElement("div");

    swiperSlide.classList.add("swiper-slide");

    const swiperSlideImg = document.createElement("img");

    swiperSlideImg.classList.add("swiper-slide-img");
    
    swiperSlideImg.src = imgsData[0][i].image;
    
    swiperSlideImg.alt = imgsData[0][i].name;

    swiperSlide.append(swiperSlideImg);

    swiperWrapper.append(swiperSlide);

  }
}
seeNameList();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const imgs = document.querySelectorAll('.swiper-slide-img');

const closeMenu = () => {
  console.log('yes');
};

for (let i = 0; i < imgs.length; i += 1) {
  imgs[i].addEventListener('click', closeMenu);
}


imgs.forEach(img => {
  img.addEventListener('click', (e) => {
    const id = e.target.alt;

    for (let i = 0; i < imgsData[0].length; i++) {

      if (id === imgsData[0][i].name) {
        console.log('Great!')

        const popupImg = document.createElement("img");

        popupImg.classList.add("swiper-slide-img");

        popupImg.src = imgsData[0][i].image;

        popupImg.alt = imgsData[0][i].name;

        containerPopupContent.append(popupImg);

        popUpReviewScreenDimming.classList.add('pop-up-review-screen-dimming-active');

        popUpReview.classList.add('pop-up-review-active');

        popUpReview.classList.add('pop-up-review-active-size');

        popUpReviewImg.classList.add('pop-up-review-img-active');

        document.body.style.overflow = 'hidden';
      }
    }
  });
});

function sayHello() {
  containerPopupContent.innerHTML = '';
  popUpReview.classList.remove('pop-up-review-active-size');
}

const closeReviews = () => {
  popUpReview.classList.remove('pop-up-review-active');
  popUpReviewScreenDimming.classList.remove('pop-up-review-screen-dimming-active');
  popUpReviewImg.classList.remove('pop-up-review-img-active');
  document.body.style.overflow = '';
  setTimeout(sayHello, 500);
};

popUpReviewImg.addEventListener('click', closeReviews);

popUpReviewScreenDimming.addEventListener('click', closeReviews);

