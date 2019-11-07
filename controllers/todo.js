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
        console.log(foundUser);
        res.redirect('/todo');

    })


})

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (error, foundUser) => {
        console.log(req.params.id);
        res.render('todo/show.ejs', {
            // todo: foundUser.todo,
            // index: req.params.id
        })
    })
})

// DELETE ROUTE (4)
router.delete('/:id', (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {
        foundUser.todo.id(req.params.id).remove();
        foundUser.save();
        // console.log(req.session.username);
        // console.log(foundUser);
        res.redirect('/todo');

    })

})


module.exports = router;
