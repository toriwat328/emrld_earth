const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

router.get('/', (req, res) => {
        User.findOne({username: req.session.username}, (error, foundUser) => {
            res.render('carbon/index.ejs', {
                footprint: foundUser.footprint,

        })
    })
})
router.post('/', (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {
        foundUser.footprint[0].remove();
        // foundUser.footprint[1].remove();
        foundUser.footprint.push(req.body);
        foundUser.save();
        console.log(req.session.username);
        console.log(foundUser);
        res.redirect('/carbon/')

    })
})



module.exports = router;
