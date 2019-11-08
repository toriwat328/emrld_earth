const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/new', (req, res) => {
    res.render('sessions/new.ejs')
})


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

router.delete('/', (req, res) => {
    User.findOneAndRemove({username: req.body.username}, (error, foundUser) => {
        res.redirect('/')
    })
})

module.exports = router;
