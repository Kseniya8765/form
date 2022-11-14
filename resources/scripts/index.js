import Form from "./form";

window.addEventListener('DOMContentLoaded', async () => {
  window.refs = {

    form: {
      init: () => new Form(),
      selectors: ['.form'],
    },
  };

  

  Object.keys(window.refs).forEach((ref) => {
    if (
      window.refs[ref].hasOwnProperty('init') &&
      document.querySelectorAll(window.refs[ref].selectors.join(', ')).length >
        0
    ) {
      window.refs[ref].class = window.refs[ref].init();
    }
  });
});