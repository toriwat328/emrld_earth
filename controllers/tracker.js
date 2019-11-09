const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

router.get('/', (req, res) => {
    if(req.session.username){
        User.findOne({username: req.session.username}, (error, foundUser) => {
            res.render('tracker/index.ejs', {
                allTodo: foundUser.todo,
                // todos: JSON.stringify(foundUser.todo)
            })
        })

        } else {
            res.redirect('/');
        }

})



module.exports = router;
