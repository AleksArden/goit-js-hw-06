const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

function onCountValue(step) {
    let counterValue = 0;

    btnDecrement.addEventListener('click', onDecrementValue)

    function onDecrementValue() {
        counterValue -= step;
        valueEl.textContent = counterValue;
    }

    btnIncrement.addEventListener('click', onIncrementValue)

    function onIncrementValue() {
        counterValue += step;
        valueEl.textContent = counterValue;
    }
}
onCountValue(1);


// btnDecrement.addEventListener('click', onDecrementValue);
// btnIncrement.addEventListener('click', onIncrementValue);

// let counterValue = 0;

// function onDecrementValue() {
//     counterValue -= - Number(btnDecrement.textContent);
//     valueEl.textContent = counterValue;
// }

// function onIncrementValue() {
//     counterValue += Number(btnIncrement.textContent);
//     valueEl.textContent = counterValue;
// }




