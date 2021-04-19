const express = require('express');
const cors = require('cors');

////// Database Configuation
const database = require ('./config/database');
const { sequelize } = require('./models/User');

////// Database Test
database.authenticate()
try {
    console.log('Database Connected');
} 
catch (error) {
    console.log(error);
}

const app = express();

///// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

////// Routes
// Login & Register Routes
app.use('/auth', require('./routes/jwtAuth'));

// Dashboard
app.use('/dashboard', require('./routes/dashboard'));

// Root Route
app.route('/')

.get(function (req, res){
   res.send('Server App'); 
});

app.listen(7000, () => {
    console.log('Server running - Port 7000')

    sequelize.sync({ force: false }).then(() => {
        console.log('Sync')
    }).catch(err => {
        console.log('Sync err', err)
    })
});