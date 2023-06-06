const User = require('../models/user');
const CustomError = require('../utils/customError');
const asyncHandler = require('../services/asyncHandler');

const signUp = asyncHandler(async (req, res) => {
    //get data from user
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
        throw new CustomError('Please add all fields', 400);
    }

    //lets add this data to database

    //check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new CustomError('User already exists', 400);
    }

    const user = await User.create({
        email,
        password,
    });

    const token = user.getJWTtoken();
    //safety
    user.password = undefined;

    //store this token in user's cookie
    res.cookie('token', token, cookieOptions);

    // send back a response to user
    res.status(200).json({
        success: true,
        token,
        user,
    });
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
        throw new CustomError('Please fill all details', 400);
    }

    const user = User.findOne({ email }).select('+password');

    if (!user) {
        throw new CustomError('Invalid credentials', 400);
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (isPasswordMatched) {
        const token = user.getJWTtoken();
        user.password = undefined;
        res.cookie('token', token, cookieOptions);
        return res.status(200).json({
            success: true,
            token,
            user,
        });
    }

    throw new CustomError('Password is incorrect', 400);
});

module.exports = {
    signUp,
    login,
};

