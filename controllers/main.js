//-----------------------------------
//DEPENDENCIES
//-----------------------------------

const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//-----------------------------------
//ROUTES (GET)
//-----------------------------------

//GET /MAIN IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, RENDER MAIN PAGE AND CREATE PROPERTIES USERNAME AND FIRSTNAME TO BE USE WITHIN INDEX.EJS (TO SHOW USERS NAME ON DASHBOARD) --> IF NOT REDIRECT TO WELCOME PAGE
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

//-----------------------------------
//ROUTER EXPORT
//-----------------------------------

module.exports = router;
