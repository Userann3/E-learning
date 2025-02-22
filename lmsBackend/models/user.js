const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true, // Ensure unique emails
            lowercase: true, // Store emails in lowercase
            match: [/^\S+@\S+\.\S+$/, "Invalid email format"], // Email validation
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 6, // Enforcing a minimum password length
            select: false, // Exclude password from queries by default
        },
        // profileImage: {
        //     type: String,
        //     default: "https://example.com/default-profile.png", // Set a default image
        // },
        // additionalDetails: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref: "Profile",
        // },
        // enrolledCourses: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Course",
        //     }
        // ],
        // courseProgress: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "CourseProgress",
        //     }
        // ],
        accountType: {
            type: String,
            required: true,
            enum: ["admin", "instructor", "student"],
        },
        // isApproved: {
        //     type: Boolean,
        //     default: false, // Better security: manually approve new accounts
        // },
        // isActive: {
        //     type: Boolean,
        //     default: true,
        // },
        // authToken: {
        //     type: String,
        //     select: false, // Hide token from queries
        // },
        // resetPasswordToken: {
        //     type: String,
        //     select: false,
        // },
        // resetPasswordExpires: {
        //     type: Date,
        //     select: false,
        // }
    },
    { timestamps: true }
);

// Index for faster email lookups
userSchema.index({ email: 1 });

module.exports = mongoose.model("userModel", userSchema);
