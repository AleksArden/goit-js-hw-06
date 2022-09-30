const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories:`, itemsEl.length);

const firstListCategory = document.querySelector('.item');
console.log('Category:', firstListCategory.firstElementChild.textContent);
console.log('Elements:', firstListCategory.lastElementChild.children.length);

const secondListCategory = firstListCategory.nextElementSibling;
console.log('Category:', secondListCategory.firstElementChild.textContent);
console.log('Category:', secondListCategory.lastElementChild.children.length);

const lastListCategory = secondListCategory.nextElementSibling;
console.log('Category:', lastListCategory.firstElementChild.textContent);
console.log('Category:', lastListCategory.lastElementChild.children.length);












