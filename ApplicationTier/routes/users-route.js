const express = require('express');
// const getAllUsers = require('../controllers/users-controller');
// const signup = require('../controllers/users-controller');
const { getAllUsers, signup, login } = require('../controllers/users-controller');
const router = express.Router();

router.get('/', getAllUsers)
router.post('/signup', signup)
router.post('/login', login)


module.exports = router;