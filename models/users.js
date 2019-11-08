const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    category: {type: String},
    action: {type: String},
    description: {type: String},
    completed: {type: Boolean, default: false}
});

const footprintSchema = new mongoose.Schema({
    household: {type: Number},
    naturalgasbill: {type: Number},
    electricitybill: {type: Number},
    fueloilbill: {type: Number},
    propanebill: {type: Number},
    naturalgas: {type: Number},
    electricity: {type: Number},
    fueloil: {type: Number},
    propane: {type: Number},
    footprint: {type: Number}
});


const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    todo: [todoSchema],
    footprint: [footprintSchema]
});



const User = mongoose.model('User', userSchema);



module.exports = User;
