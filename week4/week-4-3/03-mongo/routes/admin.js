const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const {Admin}= require("../db/index")
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const userName = req.body.username
    const password = req.body.password
    await Admin.findOne({username:userName, password:password}).then(async (value)=>{
        if (value){res.status(400).json({msg:"user already exists"})}else{
            try{const  newAdminUser = await  new   Admin({username:userName, password: password})
            await newAdminUser.save()
            res.status(200).json({msg:"Admin created successfully"})
        }catch(err){res.status(405).json({msg:'cant creat the user',err:err})}

        }
    })

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    res.send("works courses")
});

module.exports = router;