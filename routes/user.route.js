var express = require('express');
var router = express.Router();
const {createUser,listAllUsers,findUserById,updateUserById} = require('../controllers/user');

// router.get('/',(req,res)=>{
//     console.log("in user");
//     res.status(200).json("Hello in User Router");
// })

router.post('/createUser',createUser);
router.get('/listAllUsers', listAllUsers);
router.get('/findUserById/:id', findUserById);
router.put('/updateUserById/:id',updateUserById);

module.exports = router;