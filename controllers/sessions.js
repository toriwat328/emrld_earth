//-----------------------------------
//DEPENDENCIES
//-----------------------------------

const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

//-----------------------------------
//ROUTES (GET + POST)
//-----------------------------------

//GET /SESSIONS/NEW -->  RENDER SESSIONS PAGE
router.get('/new', (req, res) => {
    res.render('sessions/new.ejs')
})

//POST TO /SESSIONS --> IF NO USER IS FOUND AFTER USER SUBMITS, REDIRECT TO SESSIONS/NEW PAGE. OTHERWISE IF USERNAME IS FOUND AND PASSWORD MATCHES, SET THE USERNAME OF THE SESSION EQUAL TO THE FOUNDUSER'S USERNAME AND REDIRECT TO THE MAIN PAGE. IF THE PASSWORD DOES NOT MATCH, REDIRECT TO SESSIONS/NEW PAGE.
router.post('/', (req, res) => {
    User.findOne({username: req.body.username}, (error, foundUser) => {
        if(foundUser === null){
            res.redirect('/sessions/new');
            console.log('empty');
            console.log(req.body.username);

        } else {
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password)
            if(doesPasswordMatch){
                req.session.username = foundUser.username;
                res.redirect('/main');
                console.log('found');
                console.log(foundUser);
            } else {
                res.redirect('/sessions/new')
                console.log(req.body.password);
                console.log(foundUser.password);
                console.log('not found');
            }
        }
    })
})

//DELETE /SESSIONS TO LOG OUT-->  REDIRECT TO WELCOME PAGE.
router.delete('/', (req, res) => {
    User.findOneAndRemove({username: req.body.username}, (error, foundUser) => {
        res.redirect('/')
    })
})

//-----------------------------------
//ROUTER EXPORTS
//-----------------------------------

module.exports = router;
