const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const earthseed = require('../models/earthseed.js');


//INDEX ROUTE (1)
router.get('/', (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {
        res.render('todo/index.ejs', {
            allTodo: foundUser.todo
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
        console.log(foundUser);
        res.redirect('/todo');

    })


})





module.exports = router;
