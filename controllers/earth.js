const express = require('express');
const router = express.Router();
const earthseed = require('../models/earthseed.js');
const User = require('../models/users.js');


router.get('/', (req, res) => {

            res.render('earth/index.ejs', {
                allEarthSeed: earthseed
            });
})















module.exports = router;
