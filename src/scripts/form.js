class Validate {
    constructor() {
        this.form = "j-form";
        this.name = "j-name";
        this.email = "j-email";
        this.text = "j-text";
        this.btn = "j-submit-btn";
        this.blockClass = "j-block";

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
        this.$inputEmail = this.$name.querySelector("input");
        this.$textarea = this.$form.querySelector(`.${this.text}`);
        this.$inputTextArea = this.$name.querySelector("textarea");
    }

    _bindEvents() {
        this.$btn.addEventListener("click", (event) => {
            event.preventDefault();
        })
    }

}

export default Validate;