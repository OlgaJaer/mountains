const menu = document.querySelector('.blog-menu');

menu.addEventListener('click', function() {
    document.querySelector('.js-blog-menu').classList.toggle('blog-menu--close');
});