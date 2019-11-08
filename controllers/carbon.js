const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

router.get('/', (req, res) => {
        User.findOne({username: req.session.username}, (error, foundUser) => {
            res.render('carbon/index.ejs', {
                footprint: foundUser.footprint
        })
    })
})
router.post('/', (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {


    })
})

module.exports = router;
