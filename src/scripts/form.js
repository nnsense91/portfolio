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
                // popup
                this.$form.reset();
            }).catch(() => {
                // popup
            })
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
                //вывести ошибку о некорректном адресе
                console.log(this.incorrectMessage);

            }
        });

        this.$inputTextArea.addEventListener("change", (event) => {
            this.inputChangeHandler(event, "text");
        });
    }

    inputChangeHandler(event, inputName) {
        if (event.target.value.length) {
            this.isFieldCorrect[inputName] = true;
            // убираем сообщение с ошибкой(пустое поле)
            console.log("Удаляем сообщение об ошибке");
        } else {
            this.isFieldCorrect[inputName] = false;
            this.showErrorMessage(event.target, this.emptyErrorMessage);
            console.log(this.emptyErrorMessage);
        }
    }

    checkForm() {

    }

    showErrorMessage(element, message) {
        const parentFormBlock = element.closest(`.${this.block}`);
        const messageEl = parentFormBlock.siblings(`.${this.errorBlock}`)

        messageEl.innerText = "";
        messageEl.classList.add(this.errorClass);
        message.innerText = message;
    }

}

export default Validate;