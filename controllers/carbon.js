//-----------------------------------
//DEPENDENCIES
//-----------------------------------

const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//-----------------------------------
//ROUTES (GET + POST)
//-----------------------------------

//GET /CARBON --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, AND RENDER CARBON PAGE -> SET PROPERTY FOOTPRINT TO EQUAL THE FOUNDUSER'S FOOTPRINT. --> IF NOT REDIRECT TO WELCOME PAGE
router.get('/', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            res.render('carbon/index.ejs', {
                footprint: foundUser.footprint,

            })
        })

    } else {
        res.redirect('/');
    }
})

//POST TO /CARBON --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, REMOVE EXISTING FOOTPRINT AT INDEX OF 0, PUSH USER INPUT INTO FOOTPRINT ARRAY IN FOUNDUSER COLLECTION. SAVE AND REDIRECT TO /CARBON TO REFRESH PAGE SO NEW DATA IS CALCULATED --> IF NOT REDIRECT TO WELCOME PAGE
router.post('/', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
                foundUser.footprint[0].remove();
                // foundUser.footprint[1].remove();
                foundUser.footprint.push(req.body);
                foundUser.save();
                console.log(req.session.username);
                console.log(foundUser);
                res.redirect('/carbon/')

        })

    } else {
        res.redirect('/');
    }
})

//-----------------------------------
//ROUTER EXPORT
//-----------------------------------

module.exports = router;
