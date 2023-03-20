const numberOfCategories = document.querySelectorAll(".item");
console.log('Number of categories:', numberOfCategories.length);

const Category = document.querySelector(" h2");
console.log('Category: ', Category.textContent);
const elementsCategFist = document.querySelector('.item ul');

// console.log(elementsCategFist)
const ElementsFist = elementsCategFist.children;
console.log('Elements:', ElementsFist.length);

const elementsCategSecond = document.querySelectorAll("#categories h2")[1];
console.log('Category: ', elementsCategSecond.textContent)
const elementSecond = elementsCategSecond.nextElementSibling.children;
console.log('Elements:',elementSecond.length)

const elementsCategLast = document.querySelectorAll("#categories h2")[2];
console.log('Category: ', elementsCategLast.textContent);
const childLastEl = elementsCategLast.nextElementSibling.children;
console.log('Elements:',childLastEl.length)
