//-----------------------------------
//DEPENDENCIES 
//-----------------------------------

const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const earthseed = require('../models/earthseed.js');

//-----------------------------------
//ROUTES (ALL 7 RESTFUL ROUTES)
//-----------------------------------

//INDEX ROUTE (1)
//GET /TODO --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, AND RENDER CARBON PAGE -> SET PROPERTY ALLTODO TO EQUAL THE FOUNDUSER'S TODO ARRAY. --> IF NOT REDIRECT TO WELCOME PAGE
router.get('/', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            res.render('todo/index.ejs', {
                allTodo: foundUser.todo,
                id: foundUser.id
            })

        })

    } else {
        res.redirect('/');
    }


})

//NEW ROUTE (2)
//GET /TODO/NEW FOR CREATING A NEW TODO --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, AND RENDER NEW TODO PAGE ->  IF NOT REDIRECT TO WELCOME PAGE
router.get('/new', (req, res) => {
    if(req.session.username){
        res.render('todo/new.ejs', {

        })

    } else {
        res.redirect('/');
    }
})

//POST ROUTE (3)
//POST TO /TODO --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, IF COMPLETED IS CHECKED 'ON' THIS EQUALS TRUE, OTHERWISE ITS FALSE. PUSH USER INPUT FROM NEW TODO PAGE INTO THE FOUNDUSER'S TODO ARRAY. SAVE AND REDIRECT TO TODO PAGE. ->  IF NOT REDIRECT TO WELCOME PAGE
router.post('/', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            if(req.body.completed === 'on'){

            req.body.completed = true;

            } else {

            req.body.completed = false;

            }
            foundUser.todo.push(req.body)
            foundUser.save();
            console.log(req.session.username);
            console.log(foundUser);
            res.redirect('/todo');

        })

    } else {
        res.redirect('/');
    }

})

//SHOW ROUTE (4)
//GET /TODO/:ID FOR SHOWING INDIVIDUAL TODO --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, AND RENDER SHOW TODO PAGE. -> SET PROPERTY TODO TO EQUAL THE FOUNDUSER'S TODO ARRAY FOR A SPECIFIC ID OF THE TODO WE WANT TO SHOW.  ->  IF NOT REDIRECT TO WELCOME PAGE
router.get('/:id', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            res.render('todo/show.ejs', {
                allTodo:foundUser.todo,
                todo: foundUser.todo.id(req.params.id),
                i: req.params.id
            })

        })

    } else {
        res.redirect('/');
    }
})

// DELETE ROUTE (5)
//DELETE /TODO/:ID FOR DELETING INDIVIDUAL TODO --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, FIND THE TODO ARRAY WITHIN THAT COLLECTION AND THE ID OF THE TODO IN WHICH THE BUTTON WAS PUSHED AND REMOVE. SAVE AND REDIRECT TO TODO PAGE.  ->  IF NOT REDIRECT TO WELCOME PAGE
router.delete('/:id', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            foundUser.todo.id(req.params.id).remove();
            foundUser.save();
            res.redirect('/todo');

        })

    } else {
        res.redirect('/');
    }

})

// EDIT ROUTE (6)
//GET /TODO/:ID/EDIT FOR EDITING INDIVIDUAL TODO --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, AND RENDER EDIT TODO PAGE. -> SET PROPERTY TODO TO EQUAL THE FOUNDUSER'S TODO ARRAY FOR A SPECIFIC ID OF THE TODO WE WANT TO SHOW.  ->  IF NOT REDIRECT TO WELCOME PAGE
router.get('/:id/edit', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            res.render('todo/edit.ejs', {
                todo: foundUser.todo.id(req.params.id)
            })

        })

    } else {
        res.redirect('/');
    }

})

// PUT ROUTE (7)
//GET /TODO/:ID FOR PUTTING EDITED DATA INTO INDIVIDUAL TODO --> IF USER IS LOGGED IN, FIND COLLECTION OF USER THAT LOGGED IN, IF COMPLETED IS 'ON' THIS EQUALS TRUE OTHERWISE FALSE -> SET EACH PROPERTY WITHIN THE INDIVIDUAL TODO EQUAL TO USER'S INPUT FOR THAT PROPERTY. SAVE AND REDIRECT TO TODO PAGE ->  IF NOT REDIRECT TO WELCOME PAGE
router.put('/:id/', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            if(req.body.completed === 'on'){

            req.body.completed = true;

            } else {

            req.body.completed = false;

            }
            foundUser.todo.id(req.params.id).category = req.body.category;
            foundUser.todo.id(req.params.id).action = req.body.action;
            foundUser.todo.id(req.params.id).description = req.body.description;
            foundUser.todo.id(req.params.id).completed = req.body.completed;
            foundUser.save();
            res.redirect('/todo/')
        })

    } else {
        res.redirect('/');
    }

})

//-----------------------------------
//ROUTER EXPORT
//-----------------------------------

module.exports = router;
