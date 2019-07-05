const border = document.querySelectorAll(".form__data");
const ico = document.querySelectorAll(".form__ico");

for (let i = 0; i < border.length; i++) {
  border[i].addEventListener(
    "focus",
    function(e) {
      this.classList.add("form__data--active");
      ico[i].classList.add("form__ico--active");
    },
    true
  );
}

for (let i = 0; i < border.length; i++) {
  border[i].addEventListener(
    "blur",
    function(e) {
      this.classList.remove("form__data--active");
      ico[i].classList.remove("form__ico--active");
    },
    true
  );
}
