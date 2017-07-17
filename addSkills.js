'use strict';

//подключаем модули
const mongoose = require('mongoose');

const config = require('./config');
const skills = require('./models/skills.json');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:webadvpass@ds161022.mlab.com:61022/portfolio')
    .catch(e => {
        console.error(e);
        throw e;
    });

require('./models/db-close');
require('./models/skills');
let Model = mongoose.model('skills');
Model.remove({}).then(() => {
    skills.forEach(item => {
        let recordDb = new Model({ section: item.name, items: item.items });
        recordDb.save().then(
            //обрабатываем и отправляем ответ в браузер
            i => {
                console.log('Запись успешно добавлена');
            },
            e => {
                //если есть ошибки, то получаем их список и так же передаем в шаблон
                const error = Object.keys(e.errors)
                    .map(key => e.errors[key].message)
                    .join(', ');

                console.log('При добавление записи произошла ошибка: ' + error);
            }
        );
    });
});