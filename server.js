//-----------------------------------
//DEPENDENCIES
//-----------------------------------

const express = require('express')
const User = require('./models/users.js')
const bcrypt = require('bcrypt')
const methodOverride = require('method-override')
const session = require('express-session')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
require('dotenv').config()

//-----------------------------------
//PORT
//-----------------------------------

const PORT = process.env.PORT

//-----------------------------------
//DATABASE
//-----------------------------------

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

// ERROR / SUCCESS
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//-----------------------------------
//MIDDLEWARE
//-----------------------------------

//use public folder for static assets
app.use(express.static('public'))

//populate req.body with parsed info from forms
app.use(express.urlencoded({extended: true}))

//be able to use delete and put routes
app.use(methodOverride('_method'))

//enable cookies
app.use(session({
    secret: 'sfdjalsdfsljf',
    resave: false,
    saveUninitialized: false
}))

//-----------------------------------
//CONTROLLER MAPPING
//-----------------------------------

const mainController = require('./controllers/main.js')
app.use('/main', mainController)

const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)

const earthController = require('./controllers/earth.js')
app.use('/earth', earthController)

const todoController = require('./controllers/todo.js')
app.use('/todo', todoController)

const trackerController = require('./controllers/tracker.js')
app.use('/tracker', trackerController)

const carbonController = require('./controllers/carbon.js')
app.use('/carbon', carbonController)

//-----------------------------------
//ROUTES
//-----------------------------------

//GET / --> RENDER WELCOME.EJS
app.get('/', (req, res) => {
    res.render('welcome.ejs')
})

//POST TO /, SET PASSWORD THAT WAS ENTERED EQUAL TO AN ENCRYPTED PASSWORD. CREATE A NEW USER IN THE USER COLLECTION. SET SESSION'S USERNAME EQUAL TO CREATED USER'S USERNAME. PUSH INITIAL FOOTPRINT INTO CREATED USER'S COLLECTION IN ORDER FOR CARBON EMISSIONS CALCULATOR TO WORK.
app.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (error, createdUser) => {
        req.session.username = createdUser.username
        createdUser.footprint.push({
            household: 1,
            naturalgasbill: 0,
            electricitybill: 0,
            fueloilbill: 0,
            propanebill: 0
        })
        createdUser.save();
        console.log(createdUser);
        res.redirect('/main')
    })
})

app.get('/set', (req, res) => {
    req.session.username = 'tori'
    res.send('I set a cookie')
})

app.get('/get', (req, res) => {
    res.send(req.session.username);
})

app.get('/destroy', () => {
    req.session.destroy((err) => {
        if(err){
            alert('Failure to Log Out')
        } else {
            res.redirect('/')
        }
    })
})

//-----------------------------------
//LISTENER
//-----------------------------------

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
});
