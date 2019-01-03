const parallaxContainer = document.querySelector('.parallax');
const layers = Array.from(parallaxContainer.children);

const moveLayers = e => {
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;

    layers.forEach((layer, i) => {
        const divider = i / 180;
        const positionX = initialX * divider;
        const positionY = initialY * divider;
        const bottonPosition = (window.innerHeight / 2) * divider;
        const image = layer.firstElementChild;

        image.style.botton = `-${bottonPosition}px`;
        layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
}

window.addEventListener('mousemove', moveLayers);