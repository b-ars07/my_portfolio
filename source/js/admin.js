import fileUpload from './upload';
import prepareSend from './prepareSend';

$('.tabs__link').on('click', function(e) {
    e.preventDefault();
    var item = $(this).closest('.tabs__control'),
        contentItem = $('.tabs__content'),
        itemData = item.data('item');

    contentItem
        .filter('.tabs__content_' + itemData)
        .add(item)
        .addClass('active')
        .siblings()
        .removeClass('active');
});

const inputFile = document.querySelector('#project-file');
var fileFake = document.querySelector('.admin-form__file-fake');

inputFile.addEventListener('change', function() {
    const fileName = this.files[0].name;
    fileFake.innerHTML = fileName;
});

const formUpload = document.querySelector('#upload');

formUpload.addEventListener('submit', prepareSendFile);

function prepareSendFile(e) {
    e.preventDefault();
    let resultContainer = formUpload.querySelector('#popup');
    $(resultContainer).show();
    let textContent = resultContainer.querySelector('.popup-content__text');
    let formData = new FormData();
    let file = document.querySelector('#project-file').files[0];
    let name = document.querySelector('#project-title').value;
    let tech = document.querySelector('#project-tech').value;
    let link = document.querySelector('#project-link').value;

    formData.append('photo', file, file.name);
    formData.append('name', name);
    formData.append('tech', tech);
    formData.append('link', link);

    textContent.innerHTML = 'Uploading...';
    fileUpload('/admin/upload', formData, function(data) {
        textContent.innerHTML = data;
        fileFake.innerHTML = 'Загрузить картинку';
        formUpload.reset();
    });
}

const formBlog = document.querySelector('#form-blog');

$(formBlog).on('submit', prepareSendPost);

function prepareSendPost(e) {
    e.preventDefault();
    const $this = $(this);
    const url = '/admin/addpost';
    let data = {
        title: $this.find('[name="title"]').val(),
        date: $this.find('[name="date"]').val(),
        text: $this.find('[name="text"]').val()
    };
    console.log(formBlog);
    prepareSend(formBlog, url, data);
}

const formSkills = document.querySelector('#skills');

formSkills.addEventListener('submit', prepareSendSkills);

function prepareSendSkills(e) {
    e.preventDefault();
    let data = {};
    const url = '/admin/update';
    const itemsElement = document.querySelectorAll('.admin-skills__title');
    itemsElement.forEach(i => {
        let inputs = i.parentNode.querySelectorAll('INPUT');
        data[i.textContent] = [];
        inputs.forEach(input => {
            data[i.textContent].push({ name: input.name, value: input.value });
        });
    });

    prepareSend(formSkills, url, data);
}

$('.js-close-popup').on('click', function(e) {
    e.preventDefault();

    $(this).closest('#popup').fadeOut(500);
});