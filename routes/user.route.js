var express = require('express');
var router = express.Router();
const {createUser,listAllUsers,findUserById,updateUserById,listAllUsersPagination} = require('../controllers/user');
const auth_middleware = require("../middleware/auth.middleware");
// router.get('/',(req,res)=>{
//     console.log("in user");
//     res.status(200).json("Hello in User Router");
// })

router.post('/createUser',createUser);
router.get('/listAllUsers',auth_middleware.verifyToken ,listAllUsers);
router.get('/findUserById/:id', findUserById);
router.put('/updateUserById/:id',updateUserById);
router.get('/listAllUsersPagination/page=:page&limit=:limit',listAllUsersPagination);
module.exports = router;