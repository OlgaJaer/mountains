(function () {

    var scrollParallax = (function () {
        var user1 = document.querySelector('.header-container');
        //var bg = document.querySelector('.header__block');
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
                this.move(user1, wScroll, 70)
                //this.move(bg, wScroll, 50);
                this.move(user, wScroll, 90);
            }
        }
    })();

    window.onscroll = function () {
        var wScroll = window.pageYOffset;
  
        scrollParallax.init(wScroll);
    };
})();