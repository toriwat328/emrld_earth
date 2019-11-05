const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//Get route to go to main after user signs up or logs in
router.get('/', (req, res) => {
    if(req.session.username){
        User.find({}, (error, foundUser) => {
            res.render('main/index.ejs', {
                username: req.session.username
            });
        })
    } else {
        res.redirect('/')
    }
})

module.exports = router;
