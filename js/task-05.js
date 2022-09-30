const textInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

textInputEl.addEventListener('input', onTextOutputSet);

function onTextOutputSet(event) {

    nameOutputEl.textContent = event.currentTarget.value;
}

