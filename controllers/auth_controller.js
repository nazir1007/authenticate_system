//------require the Library--------//
const bcrypt = require("bcryptjs");

//--------- Importing user model ----------//
const User = require('../models/user_model');

//--------- Importing token file ----------//
const TokenAndSetCookie = require('../utils/token')

//---------controller for Signup Handle----------//
module.exports.signup = async(req, res) => {
    try{
        const {name, email, password, confirmPassword } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error: "Password don't match"})
        }

        const user = await User.findOne({ email });

        if(user){
            return res.status(400).json({error: "Email already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        })

        if(newUser){
            TokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            })

        } else{
            res.status(400).json({error: "Invalid user Data"});
        }
    } catch (error) {
        console.log("Error in SignUp controller", error.message);
        res.status(500).json({error : "Internal Server error"})

    }
}

//---------controller for Login Handle----------//
module.exports.login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({ error: "Invalid email or password"})
        }

        TokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    }catch(error){
        console.log("Error in Login controller", error.message);
        res.status(500).json({error : "Internal Server error"})
    }
}

//---------controller for Logout Handle----------//
module.exports.logout = (req, res) => {
    try{
        res.cookie("jwt", "", { maxAge: 0});
        res.status(200).json({ message: "Logged out successfully" })
    }catch(error){
        console.log("Error in Logout controller", error.message);
        res.status(500).json({error : "Internal Server error"})
    }
}