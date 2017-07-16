const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', function (req, res) {
  let obj = {
    title: 'Авторизация'
  };
  Object.assign(obj, req.app.locals.settings);
  res.render('pages/auth', obj);
});

module.exports = router;