'use strict';

var admin = (function() {
    $('.tabs__link').on('click', function(evt) {
        evt.preventDefault();
        var item = $(this).closest('.tabs__control'),
            contentItem = $('.tabs__content'),
            itemData = item.data('item');

        contentItem.filter('.tabs__content_' + itemData).add(item).addClass('active').siblings().removeClass('active');
    });

    var inputFile = document.querySelector('#project-file');
    var fileFake = document.querySelector('.admin-form__file-fake');

    function prepareSend(form, url, data, cb) {
        console.log(form);
        var resultContainer = form.find('#popup').show();
        var textContainer = resultContainer.find('.popup-content__text');
        textContainer.text('Отправка...');
        sendAjaxJson(url, data, function(data) {
            form.get(0).reset();
            textContainer.text(data);
            resultContainer.delay(1500).fadeOut(1500);
            if (cb) {
                cb(data);
            }
        });
    }

    var sendAjaxJson = function(url, data, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function(e) {
            var result = void 0;
            try {
                result = JSON.parse(xhr.responseText);
            } catch (e) {
                cb('Извините, ошибка в данных ');
            }
            cb(result.status);
        };
        xhr.send(JSON.stringify(data));
    }

    var upload = function(url, data) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);

        xhr.onload = function(e) {
            var result = JSON.parse(xhr.responseText);
            cb(result.status);
        };

        xhr.send(data);
    }

    inputFile.addEventListener('change', function() {
        var fileName = this.files[0].name;
        fileFake.innerHTML = fileName;
    });

    var formUpload = document.querySelector('#upload');

    formUpload.addEventListener('submit', prepareSendFile);

    function prepareSendFile(evt) {
        evt.preventDefault();
        var resultContainer = formUpload.querySelector('.status');
        var formData = new FormData();
        var file = document.querySelector('#project-file').files[0];
        var name = document.querySelector('#project-title').value;
        var tech = document.querySelector('#project-tech').value;
        var link = document.querySelector('#project-link').value;

        formData.append('photo', file, file.name);
        formData.append('name', name);
        formData.append('tech', tech);
        formData.append('link', link);

        resultContainer.innerHTML = 'Uploading...';
        fileUpload('/admin/upload', formData, function(data) {
            resultContainer.innerHTML = data;
            fileFake.innerHTML = 'Загрузить картинку';
            formUpload.reset();
        });
    }

    var formBlog = $('#form-blog');

    formBlog.on('submit', prepareSendPost);

    function prepareSendPost(evt) {
        evt.preventDefault();
        var $this = $(this);
        var url = '/admin/addpost';
        var data = {
            title: $this.find('[name="title"]').val(),
            date: $this.find('[name="date"]').val(),
            text: $this.find('[name="text"]').val()
        };
        prepareSend(formBlog, url, data);
    }

    var formSkills = document.querySelector('#skills');

    formSkills.addEventListener('submit', prepareSendSkills);

    function prepareSendSkills(e) {
        e.preventDefault();
        var data = {};
        var url = '/admin/update';
        var itemsElement = document.querySelectorAll('.admin-skills__title');
        itemsElement.forEach(function(i) {
            var inputs = i.parentNode.querySelectorAll('INPUT');
            data[i.textContent] = [];
            inputs.forEach(function(input) {
                data[i.textContent].push({ name: input.name, value: input.value });
            });
        });



        prepareSend($(formSkills), url, data);
    }
})();