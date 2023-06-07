searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = ()=>{
loginForm.classList.toggle('active');
// to bring login form while we click on user icons
}

document.querySelector('#close-login-btn').onclick = ()=>{
loginForm.classList.remove('active');
// to remove login form
}

window.onscroll = ()=>{
    searchForm.classList.remove('active');
    // The onscroll event occurs when an element's scrollbar is being scrolled
    if(window.scrollY > 80){
        document.querySelector('.header .header-1').classList.add('active');
        // The scrollY property of the Window interface returns the number of pixels that the document is currently
        //  scrolled vertically in the current window. This value is subpixel precise in modern browsers, meaning that
        //   it isn’t necessarily a whole number. This is a read-only property.
}else{
    document.querySelector('.header .header-1').classList.remove('active');
    // The classList JavaScript is a read-only property that is used to return CSS classes in the form of an array.
    //  The classList JavaScript allows us to add, remove,replace, toggle or check whether the specified CSS class is 
    //  present or not. To add more classes we use the add() method.
}

}

var swiper = new Swiper(".books-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev", 
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });