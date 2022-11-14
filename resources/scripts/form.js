export default class Form {
    constructor() {
      this.submit = document.querySelector('.form__btn');
      this.form = document.querySelector('.form');
      this.success = document.querySelector('.success');
      this.tel = document.querySelector('.form__tel');
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
      if (this.tel.value === '') {
        this.isTelValid;
      } else {
        this.isTelValid = true;
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
        this.form.style.display = 'none';
        this.success.classList.add('success_active');
      }
    };
    init() {
      this.tel.addEventListener('change', () => this.validation());
      this.form.addEventListener('submit', (event) => this.handleForm(event));
      this.tel.addEventListener('change', () => this.check());
      this.submit.addEventListener('click', () => this.submited());
    }
  }