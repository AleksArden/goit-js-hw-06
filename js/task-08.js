const form = document.querySelector('.login-form');

form.addEventListener('submit', onManageLogin);

function onManageLogin(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('All fields must be filled');
        return;
    }
    const user = {
        email: email.value,
        password: password.value,
    };

    console.log(user);
    event.currentTarget.reset();
}