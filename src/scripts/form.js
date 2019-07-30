import { log } from "util";

class Validate {
    constructor() {
        this.form = "j-form";
        this.name = "j-name";
        this.email = "j-email";
        this.text = "j-text";
        this.btn = "j-submit-btn";
        this.block = "j-block";
        this.errorBlock = "j-error-block";

        this.errorClass = "has-error";

        this.emptyErrorMessage = "Поле не может быть пустым";
        this.incorrectMessage = "Некорректный email адрес";

        this.isFieldCorrect = {
            name: false,
            email: false,
            text: false
        };
    }

    init() {
        this._initElements();
        this._bindEvents();
    }

    _initElements() {
        this.$form = document.querySelector(`.${this.form}`);
        this.$btn = this.$form.querySelector(`.${this.btn}`);
        this.$name = this.$form.querySelector(`.${this.name}`);
        this.$inputName = this.$name.querySelector("input");
        this.$email = this.$form.querySelector(`.${this.email}`);
        this.$inputEmail = this.$email.querySelector("input");
        this.$textarea = this.$form.querySelector(`.${this.text}`);
        this.$inputTextArea = this.$textarea.querySelector("textarea");
    }

    _bindEvents() {
        this.$btn.addEventListener("click", (event) => {
            event.preventDefault();

            const isFormFullFilled = this.checkForm();
            const name = this.$inputName.value;
            const mail = this.$inputEmail.value;
            const comment = this.$inputTextArea.value;

            let formData = new FormData();

            formData.append("name", name);
            formData.append("phone", "89222302230");
            formData.append("comment", comment);
            formData.append("to", mail);

            console.log(isFormFullFilled);
            if (isFormFullFilled) {
                fetch(`https://webdev-api.loftschool.com/sendmail`, {
                    method: "POST",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    body: formData
                }).then((response) => {
                    return response.json();
                }).then((info) => {
                    return info.message;
                }).then((message) => {
                    this.showModal(message);
                    this.$form.reset();
                }).catch(() => {
                    this.showModal("Ошибка. Что-то пошло не так..");
                })
            }
        });

        this.$inputName.addEventListener("change", (event) => {
            this.inputChangeHandler(event, "name");
        });

        this.$inputEmail.addEventListener("change", (event) => {
            const isValidEmail = event.target.checkValidity();
            const emailStr = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
            const regEmail = new RegExp(emailStr, "u");

            if (isValidEmail && regEmail.test(this.$inputEmail.value)) {
                this.inputChangeHandler(event, "email");
            } else if (isValidEmail === false || regEmail.test(this.$inputEmail.value) === false) {
                this.showErrorMessage(event.target, this.incorrectMessage);
            }
        });

        this.$inputTextArea.addEventListener("change", (event) => {
            this.inputChangeHandler(event, "text");
        });
    }

    inputChangeHandler(event, inputName) {
        if (event.target.value.length) {
            this.isFieldCorrect[inputName] = true;
            this.removeErrorMessage(event.target);
        } else {
            this.isFieldCorrect[inputName] = false;
            this.showErrorMessage(event.target, this.emptyErrorMessage);
        }
    }

    checkForm() {
        let result = true;

        if (!this.isFieldCorrect.name) {
            this.showErrorMessage(this.$inputName, this.emptyErrorMessage);
        }

        if (!this.$inputEmail.value.length) {
            this.showErrorMessage(this.$inputEmail, this.emptyErrorMessage);
        }

        if (!this.isFieldCorrect.text) {
            this.showErrorMessage(this.$inputTextArea, this.emptyErrorMessage);
        }

        for (const field in this.isFieldCorrect) {
            if ({}.hasOwnProperty.call(this.isFieldCorrect, field) && this.isFieldCorrect[field] === false) {
                result = false;
                break;
            }
        }

        return result;
    }

    showErrorMessage(element, message) {
        const parentFormBlock = element.closest(`.${this.block}`);
        const messageEl = parentFormBlock.querySelector(`.${this.errorBlock}`)

        messageEl.innerText = "";
        messageEl.classList.add(this.errorClass);
        messageEl.innerText = message;
    }

    removeErrorMessage(element) {
        const el = element.closest(`.${this.block}`).querySelector(`.${this.errorBlock}`);
        el.classList.remove(this.errorClass);
    }

    showModal(message) {
        const container = document.querySelector(".j-popup-modal");
        const content = document.querySelector(".popup-modal__content");
        const closeBtn = document.querySelector(".popup-modal__close-btn");

        container.classList.remove("popup-modal--hidden");
        document.body.classList.add("hidden");
        content.innerHTML = message;
    }
}

export default Validate;