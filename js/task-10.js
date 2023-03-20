function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btCreate = document.querySelector('button[data-create]');
const btDestroy = document.querySelector('button[data-destroy]');
const boxDiv = document.querySelector('#boxes');
const input = document.querySelector('#controls input');


btCreate.addEventListener('click', () => {
  createBoxes(Number(input.value));
});


function createBoxes( amount) {
  let colrDiv = getRandomHexColor();
  let newBoxs = '';
  const widthHeigth = 30;
  for (let i = 0; i <= amount; i+=1) {
    let newBox = `<div class='box-element' 
    style='backgroundColor:${colrDiv};
    width:${widthHeigth + i * 10}px; 
    height:${widthHeigth + i * 10}px;'>
    </div>`;
    newBoxs += newBoxs;
  };
  boxDiv.insertAdjacentHTML('beforeend',newBoxs);
}

btDestroy.addEventListener('click', () => {
  boxDiv.innerHTML = '';
});



