const inputName = document.querySelector('#name-input');
const counterValueText = document.querySelector('#name-output');
console.log(counterValueText.textContent);

inputName.addEventListener('input', (_event) => {
    const nameInput = _event.target.value;
    if (!nameInput ) {
        counterValueText.textContent ='Anonymous'
    
    } else {
         counterValueText.textContent = nameInput;
    }
   
});