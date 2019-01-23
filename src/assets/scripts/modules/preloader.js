export default function preloader() {
    var elPreloader = document.querySelector(".preloader");
    var numPreloader = elPreloader.querySelector(".preloader__num");
    var images = document.images;
    var imagesCount = images.length;
    var percent = 100 / imagesCount;
    let counter = 0;
  
    for (let i = 0; i < imagesCount; i++) {
      var img = images[i];
      var imgCopy = new Image();
      imgCopy.src = img.src;
      imgCopy.onload = imgLoad;
      imgCopy.onerror = imgLoad;
    }
  
    function imgLoad() {
      counter++;
      numPreloader.innerHTML = Math.round(percent * counter);
    }
  
    window.addEventListener("load", setStyle);
  
    function setStyle() {
      const stylePreloader = elPreloader.style;
      setTimeout(() => {
        stylePreloader.opacity = 0;
      }, 1500);
  
      setTimeout(() => {
        stylePreloader.display = "none";
      }, 2000);
    }
  }
  