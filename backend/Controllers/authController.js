const authModel = require('../Models/Auth'); // Correct folder name
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Validation
        if (!username || !email || !password || !role) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }

        // Check if user already exists
        const existingUser = await authModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new authModel({
            username,
            email,
            password: hashedPassword,
            role
        });

        // Save user to database
        await user.save();

        // Send success response
        res.status(201).json({ message: 'User registered successfully', user });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.login = async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await authModel.findOne({email:email});
        if(!user){
            return res.status(400).json({message:'Invalid email or password'});
            }
            const isValidPassword=await bcrypt.compare(password,user.password);
            if(!isValidPassword){
                return res.status(400).json({message:'Invalid email or password'});
                }
                const payload={
                    user:user._id,
                    role:user.role,
                    email:user.email,
                }
                const token=jwt.sign(payload,"aaditya",{expiresIn:'1h'})
                user.password=undefined;
                user["token"]=token;

// create cookie
                res.cookie("token",token,{
                    expires:new Date(Date.now()+ 3*24*60*60*1000),
                    httpOnly:true,
                }).status(200).json({
                    msg:"Login successful",
                    token:token,
                    user:user,
                    success:true
                })

} catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
    }
}