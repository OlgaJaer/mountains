var blur = (function () {
    var wrapper = document.querySelector('.feedback__form'),
        form = document.querySelector('.feedback__blur-elem');

    return {
        set: function() {
            var imgWidth = document.querySelector('.reviews').offsetWidth,
                imgHeight = document.querySelector('.reviews').offsetHeight,

            
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop,
                blurCSS = form.style;
                console.log(imgWidth); 
                console.log(imgHeight); 
            wrapper.style.height = imgHeight;
                
            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + imgHeight + 'px';    
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px' ;   
            console.log(blurCSS.backgroundPosition) ;   


        }
    }
}());

blur.set();

window.onresize = function () {
    blur.set();
}