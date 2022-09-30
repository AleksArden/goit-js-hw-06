const rangeInputEl = document.querySelector("#font-size-control");
const fontTextEl = document.querySelector("#text");

rangeInputEl.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    fontTextEl.style.fontSize = event.currentTarget.value + 'px';
};



