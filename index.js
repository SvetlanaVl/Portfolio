var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    lazy: true, // включаем отложенную загрузку изображений

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }

    ,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

    ,
});