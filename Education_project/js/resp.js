let burger = document.querySelector(".burger");
let navList = document.querySelector(".nav-list");
let navbar = document.querySelector(".navbar");
let rightNav = document.querySelector(".rightNav");

burger.addEventListener('click', ()=>{
     navList.classList.toggle('v-class-resp');
     rightNav.classList.toggle('v-class-resp');
     navbar.classList.toggle('h-nav-resp');

})
