const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const auth = require('../middleware/auth');

// Login 
router.post('/login', async(req, res) =>{
    try {
        // Req Body Data
        const { name, password } = req.body;
        
        const user = await User.findOne({ 
            where: { user_name : name }
        });

        if(user === null)
        {
            console.log("User not found");
            return res.status(401).json('Username not found');
        }

        // Data Check
        const validPassword = await bcrypt.compare(password, user.user_password)

        if(!validPassword){
            return res.status(401).json('Username or password incorrect');
        }

        // JWT Token Authorization
        
        
        const token = jwtGenerator(user.user_id);
        
        res.json({token});
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error');
    }
});

router.post('/register', async(req, res) => {
    try {
        // Req Body Data
        const { name, password } = req.body;

        // Find or create user with bcrypt

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds); 
        const bcryptPassword = await bcrypt.hash(password, salt);

        const [newUser, created] = await User.findOrCreate({
            where: { user_name: name },
            defaults: {
                user_password: bcryptPassword
            }
        });

        if(created){
            const token = jwtGenerator(newUser.user_id);

            res.json({token});
            console.log('User registered');
            
        }
        else{
            console.log('User already exists');
            res.json('User already exists');
        }
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

router.get('/is-verify', auth, async (req, res) =>
{
    try {
        res.json(true);
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;