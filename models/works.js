'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  PicSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Укажите описание картинки']
    },
    tech: {
      type: String,
      required: [true, 'Укажите технологии']
    },
    link: {
      type: String,
      required: [true, 'Укажите ссылку']
    },
    picture: {
      type: String
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('works', PicSchema);