const targetBtn = document.querySelector('button[data-action="decrement"]')
const addListenerBt = document.querySelector('button[data-action="increment"]')
const counterValueText = document.querySelector('#value')

let counterValue = Number(counterValueText.textContent);
targetBtn.addEventListener('click', event => {
    
    counterValue = counterValue-1;
    counterValueText.innerText=counterValue
    
});
addListenerBt.addEventListener('click', () => {
   counterValue = counterValue+1;
    counterValueText.innerText=counterValue
    
});