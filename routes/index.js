const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controllers');



router.get('/', homeController.home);
router.use('/chess', require('./chess'));
router.use('/users', require('./users'));

module.exports = router;