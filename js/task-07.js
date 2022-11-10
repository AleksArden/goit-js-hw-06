const rangeInputEl = document.querySelector("#font-size-control");
const fontTextEl = document.querySelector("#text");

fontTextEl.style.fontSize = rangeInputEl.value + 'px';

rangeInputEl.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    fontTextEl.style.fontSize = event.currentTarget.value + 'px';
};



