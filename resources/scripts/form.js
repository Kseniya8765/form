export default class Form {
  constructor() {
    this.submit = document.querySelector(".form__btn");
    this.form = document.querySelector(".form");
    this.success = document.querySelector(".success");
    this.tel = document.querySelector(".form__tel");
    this.isTelValid = false;
    this.init();
  }

  handleForm = (event) => {
    event.preventDefault();
  };

  reflectChanges = (e) => {
    e.target.value;
  };

  validation = () => {
    if (this.tel.value === false) {
      this.isTelValid;
      this.tel.classList.add("form__tel_error");
    } else {
      this.isTelValid = true;
      this.tel.classList.remove("form__tel_error");
    }
  };

  checkValidity = () => {
    return this.isTelValid;
  };

  check = () => {
    this.submit.disabled = !this.checkValidity();
  };

  submited = () => {
    if (this.checkValidity()) {
      this.form.reset();
      this.form.style.display = "none";
    }
  };

  init() {
    this.tel.addEventListener("change", () => this.validation());
    this.form.addEventListener("submit", (event) => {
      this.handleForm(event);

      const formData = new FormData(this.form);
      const data = new URLSearchParams(formData);

      fetch("http://reqres.in/api/users", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          this.success.classList.add('success_active');
          console.log(error);
        });
    });
    this.tel.addEventListener("change", () => this.check());
    this.submit.addEventListener("click", () => this.submited());
  }
}
