const refs = {
    inputId: document.querySelector('#validation-input'),
    data: document.querySelector('input[data-length="6"]'),
    input: document.querySelector('input'),
};

refs.input.addEventListener('blur', () => {
    if (refs.input.value.length <= refs.data.dataset.length) {
        console.log('valid');
       
      refs.inputId.classList.add('valid')
    }
    else {
        console.log('invalid');
       refs.inputId.classList.add('invalid')
    }
});
