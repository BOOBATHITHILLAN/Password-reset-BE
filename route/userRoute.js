const {getUser,getUserRestrictData,saveUser,resetPassword,passwordUpdate}=require('../controller/userController')

const router=require('express').Router();

router.get('/',getUser)
router.get('/users',getUserRestrictData)
router.post('/createuser',saveUser)
router.put('/forgotpassword',resetPassword)
router.put('/passwordreset/:id',passwordUpdate)
 
module.exports=router; 