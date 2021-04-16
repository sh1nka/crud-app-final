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

router.patch('/update/:id', (req, res) => {
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