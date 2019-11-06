const mongoose = require('mongoose')

const earthSchema = new mongoose.Schema({
    category: {type: String},
    action: {type: String},
    description: {type: String},
    completed: Boolean
});

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
    todo: [todoSchema],
    earth: [earthSchema]
});

const Earth = mongoose.model('Earth', earthSchema);
const Todo = mongoose.model('Todo', todoSchema);
const User = mongoose.model('User', userSchema);


module.exports = User;
module.exports = Todo;
module.exports = Earth;
