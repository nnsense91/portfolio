const parallax = document.querySelector(".parallax");
const layers = parallax.children;

function moveLayers(wScroll) {

    Array.from(layers).forEach(layer => {

        const divider = layer.dataset.speed;
        const strafe = wScroll * divider;

        layer.style.transform = `translateY(-${strafe}%)`;
    });
}

window.addEventListener("scroll", e => {
    const wScroll = window.pageYOffset;

    moveLayers(wScroll);
})