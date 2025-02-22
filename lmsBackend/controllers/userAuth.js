const userModel = require('../models/user');
const otpGenerator = require('otp-generator');
const redisClient = require('../config/redis');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword , accountType } = req.body;

        // 🛑 Check for missing fields
        if (!firstName || !lastName || !email || !password || !confirmPassword || !accountType) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // 🔄 Confirm password match
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Confirm password does not match",
            });
        }

        // 👤 Check if user already exists
        const isUser = await userModel.findOne({ email });
        if (isUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists, please login",
            });
        }

        // 🔢 Generate OTP
        const generatedOtp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        });

        // Function to send OTP email
        const sendOtp = async () => {
            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'brennon.hills78@ethereal.email',
                    pass: 'dN42E6sxAkATAn2NDg'
                }
            });
        
            const info = await transporter.sendMail({
                from: "jason",
                to: email,
                subject: "OTP sent successfully",
                html: `This is your OTP: ${generatedOtp}`,
            });
        };

        // Send OTP email (await to make sure it sends before continuing)
        await sendOtp();

        // Store user info in Redis
        await redisClient.hSet(`user:${email}`, {
            firstName,
            lastName,
            email,
            accountType,
            password, // You might want to hash this password
        });

        // Store OTP in Redis with expiration of 5 minutes
        await redisClient.set(`otp:${generatedOtp}`, email, {
            EX: 300,  // Expiry time in seconds (5 minutes)
        });
        
        // 📩 Send success response
        return res.status(200).json({
            success: true,
            message: "OTP sent to email. Please verify to complete signup.",
            email,
        });

    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 🛑 Check for missing fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        // 🔍 Find user in database (await is required)
        const isUser = await userModel.findOne({ email }).select("+password");
        console.log(isUser)
        if(!isUser.password){
            return console.log("pass not found")
        }

        // ❌ If user not found
        if (!isUser) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }

        // 🔑 Compare password
        const isValidPassword = await bcrypt.compare(password, isUser.password);

        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Invalid password",
            });
        }

        // 🔐 Create JWT payload
        const payload = {
            user: isUser._id,
            email: isUser.email,
            accountType: isUser.accountType,
        };

        // 📌 Generate JWT token
        const token = jwt.sign(payload, "aaditya", {
            expiresIn: "2h",
        });

        // 🍪 Set token in cookie
        res.cookie("token", token, {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Expires in 3 days
            httpOnly: true, // Prevents access from JavaScript
        }).status(200).json({
            success: true,
            message: "Login successful",
            token: token,
        });

    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}