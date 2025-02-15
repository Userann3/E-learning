const express = require('express');

const router = express.Router();

const {user,isAdmin,isUser} = require('../Middleware/middle')
const {signup , login} = require('../Controllers/authController');
// const Auth = require('../Models/Auth');

router.post("/signup",signup);
router.post("/login",login);

router.get('/admin',user,isAdmin,(req,res)=>{
    res.send("Hello Admin");
})
router.get('/user',user,isUser,(req,res)=>{
    res.send("Hello user");
})

module.exports=router