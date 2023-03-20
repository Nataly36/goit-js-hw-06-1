const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formElement = event.currentTarget.elements;
    const mail = formElement.email.value;
    const password = formElement.password.value;
    if (!mail || !password) {
        alert('Всі поля мають бути заповнені');
    }


    formData.forEach((value, name) => {
        console.log('value=', value);
        console.log('name=',name);
    })
    const newformcl=form.reset();
}
