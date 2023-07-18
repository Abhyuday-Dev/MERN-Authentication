const express=require('express');

//Controller functions
const {loginUser,signupUser}=require("../controllers/userController.js");


const router=express.Router();

//login route
router.post('/login', loginUser);

//Signup route
router.post('/signup', signupUser);

module.exports=router;