const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//Get route to go to main after user signs up or logs in
router.get('/', (req, res) => {
        User.findOne({username: req.session.username}, (error, foundUser) => {
            res.render('main/index.ejs', {
                username: req.session.username,
                firstname: foundUser.firstname
            });
        })
})

router.post('/', (req, res) => {
    User.create(req.body, (error, createdUser) => {
        res.redirect('/main');
    })
})


module.exports = router;
