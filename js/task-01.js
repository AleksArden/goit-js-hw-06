// const itemsEl = document.querySelectorAll('.item');
// console.log(`Number of categories:`, itemsEl.length);

// const firstListCategory = document.querySelector('.item');
// console.log('Category:', firstListCategory.firstElementChild.textContent);
// console.log('Elements:', firstListCategory.lastElementChild.children.length);

// const secondListCategory = firstListCategory.nextElementSibling;
// console.log('Category:', secondListCategory.firstElementChild.textContent);
// console.log('Category:', secondListCategory.lastElementChild.children.length);

// const lastListCategory = secondListCategory.nextElementSibling;
// console.log('Category:', lastListCategory.firstElementChild.textContent);
// console.log('Category:', lastListCategory.lastElementChild.children.length);



const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
    const h2 = node.querySelector('h2');
    const nodeItems = node.querySelectorAll('li');
    console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
});








