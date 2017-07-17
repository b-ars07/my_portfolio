var formMail = document.querySelector('#feedbackForm'),
    formLogin = document.querySelector('#authForm'),
    popup = $('#popup');
popup.hide();

if (formMail) {
    formMail.addEventListener('submit', prepareSendMail);
}
if (formLogin) {
    formLogin.addEventListener('submit', prepareSendLogin);
}

function prepareSendMail(e) {
    e.preventDefault();
    const data = {
        name: formMail.name.value,
        email: formMail.email.value,
        text: formMail.text.value
    };
    const url = '/works';

    prepareSend(url, formMail, data);
}

function prepareSendLogin(e) {
    e.preventDefault();
    const data = {
        login: formLogin.login.value,
        password: formLogin.password.value
    };
    console.log(data);
    const url = '/index';

    prepareSend(url, formLogin, data, 'POST', data => {
        if (data === 'Авторизация успешна!') {
            location.href = '/admin';
        }
    });
}