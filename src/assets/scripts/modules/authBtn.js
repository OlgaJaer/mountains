var authBtn = document.querySelector(".js-authoriz");
var userFront = document.querySelector('.user--front');
var userBack = document.querySelector('.user--back');
var backBtn = document.querySelector(".js-back-to-main");

authBtn.addEventListener('click', function() {
    userFront.style="transform: rotateY(180deg)";
    userBack.style="transform: rotateY(360deg)";
    authBtn.style.display = 'none';
});

backBtn.addEventListener('click', function() {
    userFront.style="transform: rotateY(0deg)";
    userBack.style="transform: rotateY(180deg)";
    authBtn.style.display = 'block';
  });