const closeBtn = document.querySelector(".popup-modal__close-btn");
const pop = document.querySelector(".j-popup-modal");

closeBtn.addEventListener("click", () => {
    pop.classList.add("popup-modal--hidden");
    document.body.classList.remove("hidden");
});