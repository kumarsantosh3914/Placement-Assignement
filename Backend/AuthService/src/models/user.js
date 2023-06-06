const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { JWT_EXPIRY, JWT_SECRET } = require('../config/serverConfig');

// Define the user schema
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Middleware function to encrypt the password before saving
userSchema.pre('save', async function encryptPassword(next) {
    try {
        const user = this;
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

// User methods
userSchema.methods = {
    // Compare entered password with stored password
    comparePassword: async function (enteredPassword) {
        try {
            return await bcrypt.compare(enteredPassword, this.password);
        } catch (error) {
            throw error;
        }
    },

    // Generate JWT token for user
    getJWTtoken: function () {
        try {
            return JWT.sign({ _id: this._id }, JWT_SECRET, {
                expiresIn: JWT_EXPIRY,
            });
        } catch (error) {
            throw error;
        }
    },
};

module.exports = mongoose.model('User', userSchema);
