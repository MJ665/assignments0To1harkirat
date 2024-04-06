const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();
const {User,jwtPassword, Course}= require("../db/index")
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
      // Implement admin signup logic
      const userName = req.body.username;
      const password = req.body.password;
  
      try {
          // Check if the user already exists
          const existingUser = await User.findOne({ username: userName });
          if (existingUser) {
              return res.status(400).json({ msg: "User  exists already" });
          }
  
          // If the user does not exist, create a new user
          const newUser = await User.create({ username: userName, password: password });
          res.status(200).json({ msg: `User created successfully ${newUser._id}` });
      } catch (err) {
          // Handle any errors that occur during user creation
          console.error("Error occurred during user signup:", err);
          res.status(500).json({ msg: "Internal server error" });
      }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const userName = req.body.username;
    const password = req.body.password;
    
    try {
        // Check if the user exists
        const existingUser = await User.findOne({ username: userName, password: password });
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

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Course.find({})
        res.status (200).json({course:courses})
    }catch(err){
        res.status(400).json({msg:"cant fetch the courses",err:err})
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    try {
        const updateResult = await User.updateOne(
            { username: username },
            { "$push": { purchasedCourses: courseId } }
        );

        if (updateResult.acknowledged) {
            res.json({
                message: "Purchase complete!",
                courseId: courseId
            });
        } else {
            res.status(400).json({ msg: "Failed to update user's purchased courses" });
        }
    } catch (error) {
        console.error("Error occurred during course purchase:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router