const express = require('express');
const router = express.Router();
const earthseed = require('../models/earthseed.js');
const User = require('../models/users.js');


router.get('/', (req, res) => {

            res.render('earth/index.ejs', {
                allEarthSeed: earthseed
            });
})



router.put('/:id',  (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {
        foundUser.todo.push(earthseed[req.params.id]);
        foundUser.save();
        // console.log(foundUser);
        res.redirect('/todo');
    })
})










module.exports = router;
