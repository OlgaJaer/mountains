// полноэкранное меню 
var openMenu = document.querySelector(".header__menu");
var popup = document.querySelector('.popup');
var closeMenu = document.querySelector(".popup__btn");

openMenu.onclick = function() {
    popup.style.display = "block";
    document.body.classList.add('scroll-hidden');
}
  
closeMenu.onclick = function() {
    popup.style.display = "none";
    document.body.classList.remove('scroll-hidden');
}