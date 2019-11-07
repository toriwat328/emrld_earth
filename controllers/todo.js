const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const earthseed = require('../models/earthseed.js');


//INDEX ROUTE (1)
router.get('/', (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {
        res.render('todo/index.ejs', {
            allTodo: foundUser.todo,
            id: foundUser.id
        })

    })


})

//NEW ROUTE (2)
router.get('/new', (req, res) => {
    res.render('todo/new.ejs')
})

//POST ROUTE (3)
router.post('/', (req, res) => {

    User.findOne({username: req.session.username}, (error, foundUser) => {
        foundUser.todo.push(req.body)
        foundUser.save();
        console.log(req.session.username);
        // console.log(foundUser);
        res.redirect('/todo');

    })


})

//SHOW ROUTE (4)
router.get('/:id', (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {
        res.render('todo/show.ejs', {
            allTodo:foundUser.todo,
            todo: foundUser.todo.id(req.params.id),
            i: req.params.id
        })

    })
})

// DELETE ROUTE (5)
router.delete('/:id', (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {
        foundUser.todo.id(req.params.id).remove();
        foundUser.save();
        res.redirect('/todo');

    })

})

// EDIT ROUTE (6)
router.get('/:id/edit', (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {
        res.render('todo/edit.ejs', {
            todo: foundUser.todo.id(req.params.id)
        })

    })

})

// PUT ROUTE (7)
router.put('/:id/', (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {
        foundUser.todo.id(req.params.id).category = req.body.category;
        foundUser.todo.id(req.params.id).action = req.body.action;
        foundUser.todo.id(req.params.id).description = req.body.description;
        foundUser.save();
        res.redirect('/todo/')
    })

})


module.exports = router;
