const textInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');


textInputEl.addEventListener('input', onTextOutputSet);

function onTextOutputSet(event) {
    if (event.currentTarget.value !== '') {
        return nameOutputEl.textContent = event.currentTarget.value;
    }
    nameOutputEl.textContent = 'Anonymous';



}

