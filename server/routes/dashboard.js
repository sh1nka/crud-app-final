const router = require('express').Router();
const User = require('../models/User');
const database = require('../config/database');
const auth = require('../middleware/auth');
const express = require('express');

router.get('/', auth, async (req, res) => {

    try {
        const user = await User.findByPk(req.user);
        if (user === null) {
            res.json('User not found');
            console.log('Not found!');
        } 
        else {
            res.json(user);
        }
    }

    catch (error) {
        console.error(error.message)
        res.status(500).json('Server error');
    }
});

router.post('/create/users', (req, res) => {
    User.create({
        user_name: req.body.name,
        user_password: req.body.password
    }).then(post => {
        res.json(post);
    });
});

// Read All

router.get('/read/users', async(req, res) => {
    try {
        const users = await User.findAll();
        if (users === null) {
            res.json('User not found');
            console.log('Not found!');
        } 
        else {
            res.json(users);
        }
    }

    catch (error) {
        console.error(error.message)
        res.status(500).json('Server error');
    }
});

// Read
router.get('/read/:id', (req, res) => {
    User.findByPk(req.params.id)
    .then(post => {res.json(post)})
});

// Update
router.put('/update/:id', (req, res) => {
    console.log(req, res)
        User.update({
        user_name: req.body.name,
        user_password: req.body.password,
    },
    {
        where: {user_id : req.params.id}
    })
    .then(result => {
        res.json(result);
    });
});

// Delete

router.delete('/remove/:id', (req, res) =>
{
    User.destroy({
            where: {user_id : req.params.id}
        })
        .then(result =>{
            res.json(result);
        })
});

module.exports = router;