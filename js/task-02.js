const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

const ingredientsList =  ingredients.map((ingredient) => {
    const elemItem1 = document.createElement("li");
    elemItem1.textContent = ingredient;
    elemItem1.classList.add('item');
    return elemItem1
  });

 console.log(ingredientsList)

list.append(...ingredientsList)



