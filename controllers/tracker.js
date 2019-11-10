//-----------------------------------
//DEPENDENCIES
//-----------------------------------

const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//-----------------------------------
//ROUTES (GET)
//-----------------------------------

//GET /TRACKER --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, AND RENDER TRACKER PAGE -> SET PROPERTY ALLTODO TO EQUAL THE FOUNDUSER'S TODO ARRAY. --> IF NOT REDIRECT TO WELCOME PAGE
router.get('/', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            res.render('tracker/index.ejs', {
                allTodo: foundUser.todo,

            })
        })

    } else {
        res.redirect('/');
    }

})

//-----------------------------------
//ROUTER EXPORT
//-----------------------------------

module.exports = router;
