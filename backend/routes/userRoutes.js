const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userMiddleware = require("../middlewares/user");
const User = require("../models/userModel");
const innovativeProd = require("../models/innovativeProdModel");
const wasteReq = require("../models/wasteReqModel");


router.post("/signup", async(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const cPassword = req.body.cPassword;
    res.cookie("email", email);
    // Input handling
    if (!username || !email || !password || !cPassword) {
        return res.json({msg : "All fields are required."});
    }
    if (!email.includes('@')) {
        return res.json({msg : 'Enter a correct email address.'});
    }    
    if(password.length<8){
        return res.json({msg : "Password should contain atleast 8 characters"})
    }
    if(password !== cPassword){
        return res.json({msg:"Password and Confirm password should be same"})
    }

    const existingUser = await User.findOne({ email});
    if (existingUser) {
        return res.json({msg: 'User already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
    });

    await user.save();

    res.status(200).json({msg : 'User created successfully'} );
})

router.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
        return res.json({ msg: 'Incorrect email and password' });
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
        const token = jwt.sign({ email: email }, process.env.SECRET, { expiresIn: "20h" });
        res.cookie("token", token, {
            httpOnly: true,
        });

        // Return the user's email in the response
        return res.status(200).json({ msg: "Login successful", email: user.email });
    } else {
        return res.json({ msg: 'Incorrect email and password' });
    }
});

router.patch("/updateUsersInnovativeProd", userMiddleware, async (req, res) => {
    try {
        const userEmail = req.user.email;
        console.log(userEmail);
        const description = req.body.description;
        const product = await innovativeProd.findOne({ description });
        console.log(product)
        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }

        const productId = product._id;
        const userDoc = await User.findOne({ email: userEmail });

        console.log(userDoc)

        if (!userDoc) {
            return res.status(404).json({ msg: "User not found" });
        }

        if (!userDoc.innovativeProds) {
            userDoc.innovativeProds = [];
        }

        userDoc.innovativeProds.push(productId);
        await userDoc.save();

        res.json({ msg: "Product uploaded successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

router.get("/getUsersWasteReq" ,async (req, res) => {
    try {
        const userEmail = req.body
        const userDoc = await User.findOne({ email:userEmail });
        if (!userDoc) {
            return res.json({ msg: "User not found" });
        }

        const arrOfObjectIds = userDoc.wasteReq;

        const wasteReqDocuments = await wasteReq.find({ _id: { $in: arrOfObjectIds } });

        res.status(200).json({ wasteReqDocuments });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

router.get("/getUsersInnovativeProds", async (req,res)=>{
    try{
        const userEmail = req.body;
        const userDoc = await User.findOne({email: userEmail});
        if(!userDoc){
            return res.json({msg : "User not found"});
        }

        const arrOfObjectIds = userDoc.wasteReq;
        const wasteReqDocuments = await wasteReq.find({_id:{$in: arrOfObjectIds}});
        res.status(200).json({wasteReqDocuments});
    }catch(err){
        console.log(err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
})


router.get("/satisfiedRequirements", userMiddleware, async(req, res) => {
    try {
        const userEmail = req.user.email;
        const userDoc = await User.findOne({ email: userEmail });
        if (!userDoc) {
            return res.json({ msg: "User not found" });
        }

        const arrOfObjectIds = userDoc.wasteReq;

        const wasteReqDocuments = await wasteReq.find({
            _id: { $in: arrOfObjectIds },
            quantity: 0
        });

        res.status(200).json({wasteReqDocuments});
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});


router.get("/profile", userMiddleware, async(req,res)=>{
    const email = req.user.email;
    const user = await User.findOne({email});
    return res.json(user);
})

module.exports = router;