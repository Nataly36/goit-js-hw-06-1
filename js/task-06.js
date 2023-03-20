const refs = {
    inputId: document.querySelector('#validation-input'),
    data: document.querySelector('input[data-length="6"]'),
    input: document.querySelector('input'),
};

refs.input.addEventListener('blur', () => {
    if (refs.input.value.length ===Number(refs.data.dataset.length)) {
        refs.inputId.classList.add('valid');
         refs.inputId.classList.remove('invalid')
    }
    else {
        refs.inputId.classList.add('invalid');
         refs.inputId.classList.remove('valid')
    }
});
