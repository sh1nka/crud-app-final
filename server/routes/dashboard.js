const router = require('express').Router();
const User = require('../models/User');
const database = require('../config/database');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {

    try {
        const user = await User.findByPk(req.user);
        if (user === null) {
            console.log('Not found!');
        } else {
            res.json(user);
            console.log(user);
        }
    }
    /*const user = await User.findOne({ where: { user_id: req.user } });
if (user === null) {
console.log('Not found!');
} else {
console.log(user); 
res.json(user);
}*/

    /* res.json(req.user);
     const user = await User.findByPk(req.user);
if (user === null) {
console.log('Not found!');
res.json(user);
} else {
console.log('found'); 
res.json(user);
 
}*/
    /*const user = await User.findOne({ 
         where: { user_id: req.user }
     });*/

    catch (error) {
        console.error(error.message)
        res.status(500).json('Server error');
    }
});

module.exports = router;