const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//INDEX ROUTE (1)
router.get('/', (req, res) => {
        res.render('todo/index.ejs')
})

//NEW ROUTE (2)
router.get('/new', (req, res) => {
    res.render('todo/new.ejs')
})




module.exports = router;
