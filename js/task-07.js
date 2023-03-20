const fontText = document.querySelector('#text');
const priceRange = document.querySelector('#font-size-control');

priceRange.addEventListener('input', (event) => {
    let price = event.target.value;
    fontText.style.fontSize = price + "px";
    
    

});