const express = require('express');
const cors = require('cors');

////// Database Configuation
const database = require ('./config/database');

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
});