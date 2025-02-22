const jwt = require('jsonwebtoken');

exports.authMiddle = async (req, res , next) =>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message : "Unauthorized"});
        }
        const decodedData = jwt.verify(token,"aaditya")
        req.user = decodedData

        next();
    } catch(err){
        return res.status(404).json({
            success:false,
            message:"error in fetching jwt"
        })
    }
}

exports.isAdmin = (req, res, next) => {
    try{
        if(req.user.accountType !== "admin"){
            return res.status(403).json({
                success:false,
                message:"You are not an admin you are a " + req.user.accountType
                })
                }
                next()
    } catch(err){
        return res.status(404).json({
            success:false,  
            message:"error in admin route"
        })
    }
}
exports.isStudent = (req, res, next) => {
    try{
        if(req.user.accountType !== "student"){
            return res.status(403).json({
                success:false,
                message:"You are not an student you are a " + req.user.accountType
                })
                }
                next()
    } catch(err){
        return res.status(404).json({
            success:false,  
            message:"error in student route"
        })
    }
}

