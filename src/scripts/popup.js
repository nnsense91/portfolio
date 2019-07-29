const burger = document.querySelector(".burger");
const popup = document.querySelector(".popup");
const headerSocials = document.querySelector(".socials--header");
const link = document.getElementsByClassName("navigation__link");

function triggerMobileMenu() {
    burger.classList.toggle("burger--active");
    popup.classList.toggle("j-popup-disabled");
    headerSocials.classList.toggle("j-socials--hidden");
    document.body.classList.toggle("hidden");
}

burger.addEventListener("click", function () {
    triggerMobileMenu();
});

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (e) {
        burger.classList.remove("burger--active");
        popup.classList.add("j-popup-disabled");
        headerSocials.classList.remove("j-socials--hidden");
        document.body.classList.remove("hidden");
    });
}