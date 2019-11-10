//-----------------------------------
//DEPENDENCIES
//-----------------------------------

const express = require('express');
const router = express.Router();
const earthseed = require('../models/earthseed.js');
const User = require('../models/users.js');

//-----------------------------------
//ROUTES (GET + PUT)
//-----------------------------------

//GET /EARTH --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, AND RENDER EARTH PAGE -> SET PROPERTY ALLEARTHSEED TO EQUAL THE EARTHSEED SEED DATA. --> IF NOT REDIRECT TO WELCOME PAGE
router.get('/', (req, res) => {
    if(req.session.username){
        res.render('earth/index.ejs', {
            allEarthSeed: earthseed
        });


    } else {
        res.redirect('/');
    }

})


//PUT INDIVIDUAL TIP ON EARTH PAGE --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, WHEN USER SUBMITS ADD TO TODO BUTTON, THAT PARTICULAR TIP WILL BE PUSHED TO THE FOUNDUSER'S TODO ARRAY. SAVE AND REDIRECT TO TODO PAGE  --> IF NOT REDIRECT TO WELCOME PAGE
router.put('/:id',  (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            foundUser.todo.push(earthseed[req.params.id]);
            foundUser.save();
            // console.log(foundUser);
            res.redirect('/todo');
        })

    } else {
        res.redirect('/');
    }
})

//-----------------------------------
//ROUTER EXPORT
//-----------------------------------

module.exports = router;
