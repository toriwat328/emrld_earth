const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    category: {type: String},
    action: {type: String},
    description: {type: String},
    completed: Boolean
});


const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    todo: [todoSchema]
});


const User = mongoose.model('User', userSchema)

module.exports = User;
