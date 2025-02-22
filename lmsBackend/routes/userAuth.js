const express = require('express');
const router = express.Router();

const {signup,login} = require('../controllers/userAuth');
const {verifyingOtp} = require('../controllers/verifyingOtp');
const {authMiddle,isAdmin,isStudent} = require('../middleware/authMiddleware');

router.post('/signup',signup);
router.post('/verifyOtp',verifyingOtp);
router.post('/login',login)
router.get('/test',authMiddle,isAdmin,isStudent,(req,res)=>{
    res.send('Hello World')
    })
router.get('/isStudent',authMiddle,isAdmin), (req,res) => {
    res.send("You are a student");
}
// router.get('/isAdmin',authMiddle,isAdmin), (req,res) => {
//     res.send("You are a admin");
// }

module.exports = router