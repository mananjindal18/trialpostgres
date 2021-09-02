var express = require('express');

var router = express.Router();
const userController = require('../controllers/user.controller');
router.get('/',(req,res)=>{
    console.log("in user");
    res.status(200).json("Hello in User Router");
})

router.post('/create',userController.createUser)
router.get('/getAllUsers', userController.listAllUsers);
router.get('/findOneUser/:id', userController.findUserById);
router.put('/updateUser/:id', userController.updateUserById);

module.exports = router;