(function () {

    var scrollParallax = (function () {
        var bg = document.querySelector('.header__bg');
        var user = document.querySelector('.header__content');
  
        return {
            move: function (block, windowScroll, strafeAmount) {
                var strafe = windowScroll / -strafeAmount + '%';
                var style = block.style;
                var transformString = 'translate3d(0,' + strafe +', 0)'
                
                style.transform = transformString;
                style.webkitTransform = transformString;
            },
  
            init: function (wScroll) {
                this.move(bg, wScroll, 100);
                this.move(user, wScroll, 45);
            }
        }
    })();

    window.onscroll = function () {
        var wScroll = window.pageYOffset;
  
        scrollParallax.init(wScroll);
    };
})();