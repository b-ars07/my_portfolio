import { sendJson } from './sendAjax';

export default function prepareSend(form, url, data, method = 'POST', cb) {
    let resultContainer = form.querySelector('#popup');
    $(resultContainer).show();
    let textContainer = resultContainer.querySelector('.popup-content__text');
    textContainer.innerHTML = 'Sending...';
    sendJson(url, data, method, data => {
        form.reset();
        textContainer.innerHTML = data;
        $(resultContainer).delay(1500).fadeOut(1500);
        if (cb) {
            cb(data);
        }
    });
}