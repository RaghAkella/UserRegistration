const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/login', login);
router.post('/register', register);


function login(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => res.send(400));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.status(200).json({ "message": "A verification mail has been sent to yourregistered mail." }))
        .catch(err => res.status(400).json(err));
}

module.exports = router;