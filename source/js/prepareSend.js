import { sendJson } from './sendAjax';

export default function prepareSend(url, form, data, method = 'POST', cb) {
  let resultContainer = form.querySelector('.status');
  resultContainer.innerHTML = 'Sending...';
  sendJson(url, data, method, data => {
    form.reset();
    resultContainer.innerHTML = data;
    if (cb) {
      cb(data);
    }
  });
}