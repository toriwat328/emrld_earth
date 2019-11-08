const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

router.get('/', (req, res) => {
    User.findOne({username: req.session.username}, (error, foundUser) => {
        res.render('tracker/index.ejs', {
            allTodo: foundUser.todo,
            // todos: JSON.stringify(foundUser.todo)
        })
    })

})


// router.post('/', (req, res) => {
//     User.findOne({username: req.session.username}, (error, foundUser) => {
//         if(checked === true && foundUser.todo.id(req.params.id).category === "In Your Home") {
//             document.getElementById("goal1-1").style.background="black";
//
//         } else if(checked === true && foundUser.todo.id(req.params.id).category === "On Your Table") {
//             document.getElementById("goal2-1").style.background="black";
//
//         } else if(checked === true && foundUser.todo.id(req.params.id).category === "Along Your Commute") {
//             document.getElementById("goal3-1").style.background="black";
//
//         } else if(checked === true && foundUser.todo.id(req.params.id).category === "In Your Neighborhood" ) {
//             document.getElementById("goal4-1").style.background="black";
//
//         } else {
//             res.redirect('/main')
//         }
//
//
//     })
//
//
// })

module.exports = router;


// $(() => {
//
// })
