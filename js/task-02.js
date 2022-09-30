const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const makeListingredients = ingredients => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList = "item";

    return itemEl;
  });
};

const elements = makeListingredients(ingredients);
listEl.append(...elements);

console.log(listEl);
