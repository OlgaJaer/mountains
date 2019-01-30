(function () {

    const arrowDown = document.querySelector('.arrow__down');
    const arrowUp = document.querySelector('.arrow__up');
    const container = document.querySelector('.wrapper');
    const header = document.querySelector('.js_header');
  
        container.onclick = function (e) {
            let target = e.target;
    
            if (target === arrowDown) {
            scrollIt(header.nextElementSibling)
            }
    
            if (target === arrowUp) {
            scrollIt(header)
            }
        };
    
    function scrollIt(element) {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': element.offsetTop
        });
    }
  })();