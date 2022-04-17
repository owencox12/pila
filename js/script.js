
let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: ".main__item_right",
        prevEl: ".main__item_left",
      },
    })

let burger = document.querySelector(".header__burger")
let burgerMenu = document.querySelector(".header__burger_list")
let body = document.querySelector("body")

burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
    body.classList.toggle("lock")
})


let buyButton = document.querySelectorAll(".button--menu")
let overlay = document.querySelector(".overlay")
let overlayClose = document.querySelector(".overlay__close")
buyButton.forEach(function(el){
  el.addEventListener("click", function(){
    overlay.classList.toggle("overlay__active")
  })
})

overlayClose.addEventListener("click", function(){
  overlay.classList.remove("overlay__active")
})



