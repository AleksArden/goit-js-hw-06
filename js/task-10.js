function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

btnCreate.addEventListener('click', createElements);
btnDestroy.addEventListener('click', destroyBoxes)

function createElements() {
  const value = Number(inputEl.value);

  if (value >= inputEl.getAttribute('min') &&
    value <= inputEl.getAttribute('max')) {

    const elements = createBoxes(value);
    boxesContainer.append(...elements);
  }
}

function createBoxes(amount) {
  const arrBoxes = [];

  for (let i = 0; i < amount; i += Number(inputEl.getAttribute('step'))) {
    const boxEl = document.createElement('div');
    boxEl.style.width = 30 + 10 * i + 'px';
    boxEl.style.height = 30 + 10 * i + 'px';
    boxEl.style.backgroundColor = getRandomHexColor();

    arrBoxes.push(boxEl);
  }
  return arrBoxes;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  inputEl.value = "";
}



