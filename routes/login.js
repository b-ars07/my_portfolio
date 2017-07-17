const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let obj = {
        title: 'Авторизация'
    };
    Object.assign(obj, req.app.locals.settings);
    res.render('pages/index', obj);
});

module.exports = router;