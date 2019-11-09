const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//Get route to go to main after user signs up or logs in
router.get('/', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            res.render('main/index.ejs', {
                username: req.session.username,
                firstname: foundUser.firstname
            });
        })


        } else {
            res.redirect('/');
        }
})

router.post('/', (req, res) => {
    if(req.session.username){
        User.create(req.body, (error, createdUser) => {
            res.redirect('/main');
        })


        } else {
            res.redirect('/');
        }
})





module.exports = router;
