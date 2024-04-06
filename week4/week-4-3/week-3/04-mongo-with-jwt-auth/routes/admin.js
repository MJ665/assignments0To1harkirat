const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,jwtPassword, Course}= require("../db/index")
const jwt = require("jsonwebtoken")
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const userName = req.body.username;
    const password = req.body.password;

    try {
        // Check if the user already exists
        const existingUser = await Admin.findOne({ username: userName });
        if (existingUser) {
            return res.status(400).json({ msg: "User  exists already" });
        }

        // If the user does not exist, create a new user
        const newUser = await Admin.create({ username: userName, password: password });
        res.status(200).json({ msg: `User created successfully ${newUser._id}` });
    } catch (err) {
        // Handle any errors that occur during user creation
        console.error("Error occurred during user signup:", err);
        res.status(500).json({ msg: "Internal server error" });
    }
});


router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const userName = req.body.username;
    const password = req.body.password;
    
    try {
        // Check if the user exists
        const existingUser = await Admin.findOne({ username: userName, password: password });
        if (!existingUser) {
            return res.status(400).json({ msg: "Username or password is incorrect or sign up first" });
        }
        
        // If the user exists, generate and send JWT token
        const token = await jwt.sign({ username: userName, password: password }, jwtPassword);
        res.status(200).json({ msg: "Signed in successfully", token: token });
    } catch (err) {
        // Handle any errors that occur
        console.error("Error occurred during user signin:", err);
        res.status(500).json({ msg: "Internal server error" });
    }
});


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
const title = req.body.title
const description = req.body.description
const price = req.body.price
const imageLink= req.body.imageLink
try{
    Course.create({title:title,description:description,price:price,imageLink:imageLink}).then((response)=>{
        res.status(200).json({msg:"course created successfully ", id :response._id})
    })
}catch(err){res.status(400).json({msg:"cant create the course", err:err})}


});
router.get('/courses', adminMiddleware, async  (req, res) => {
    // Implement fetching all courses logic
    try{
        const courses = await Course.find({})
        res.status (200).json({course:courses})
    }catch(err){
        res.status(400).json({msg:"cant fetch the courses",err:err})
    }
    
});

module.exports = router;