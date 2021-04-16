const database = require('../config/database');

const User = require('../models/User');

console.log('usersController');

// Creating a User

exports.create = (req, res) =>
{
    User.create
    ({
        user_id: req.body.user_id,
        user_name: req.body.user_name,
        user_password: req.body.user_password
    })
    .then(user => {
        res.send(user);
    })
    .catch(err =>{
        res.status(500).send('Error ' + err);
    })
}

// Show all users
exports.findAll = (req, res) =>
{
    User.findAll()
    .then(user => {
        res.send(user);
    })
    .catch(err =>{
        res.status(500).send('Error ' + err);
    })
}

// Update a user
exports.update = (req, res) =>
{
    var user = req.body;
    const id = req.params.user_id;
    User.update
    ({
        user_id: user.user_id,
        user_name: user.user_name,
        user_password: user.user_password
    },
    {
        where: id.user_id
    })
    .then(user => {
        res.send(user);
    })
    .catch(err =>{
        res.status(500).send('Error ' + err);
    })
}

// Delete a user
exports.delete = (req, res) => {
    const id = req.params.user_id;

    User.destroy({
        where: {user_id: id}
    })
    .then(user => {
        res.status(200).send('User deleted', + user);
    })
    .catch(err =>{
        res.status(500).send('Error ' + err);
    })
}