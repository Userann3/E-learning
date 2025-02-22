const redisClient = require('../config/redis');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');

exports.verifyingOtp = async (req, res) => {
    try {
        const { otp } = req.body;

        // 🛑 Check if OTP is provided
        if (!otp) {
            return res.status(400).json({
                success: false,
                message: "Please provide an OTP",
            });
        }

        // Retrieve email from Redis using the OTP
        const email = await redisClient.get(`otp:${otp}`);

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP",
            });
        }

        // Retrieve user data from Redis using the email
        const newData = await redisClient.hGetAll(`user:${email}`);

        // Check if user data exists
        if (!newData || Object.keys(newData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "User data not found",
            });
        }

        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(newData.password, 10);

        // Create new user model and save to MongoDB
        const newUser = new userModel({
            firstName: newData.firstName,
            lastName: newData.lastName,
            email: newData.email,
            accountType:newData.accountType,
            password: hashedPassword,
        });

        await newUser.save();

        // Send success response
        return res.status(200).json({
            success: true,
            message: "User successfully created",
        });

    } catch (err) {
        console.log("Error while verifying OTP:", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
