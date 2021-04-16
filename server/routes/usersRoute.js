module.exports = function(app)
{
    console.log('usersRoute');
    const users = require('../controller/usersController');
    
    // Creating new User
    app.post('/dashboard/create', users.create);

    // Showing all users
    app.get('/dashboard/users', users.findAll);

    // Updating a user
    app.put('/dashboard/:usersId', users.update);

    // Deleting a user
    app.delete('/dashboard/:usersId', users.delete)
}