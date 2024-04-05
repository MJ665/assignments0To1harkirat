const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const {Admin,Course}= require("../db/index")
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const userName = req.header.username
    const password = req.header.password
    const title = req.body.title
    const discription = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink
    // first do weathe the user exists is the admin this work is done by the admin middlewares
    try{
await Course.create ({
    title:title,discription:discription,imageLink:imageLink,price:price
}).then((response)=>{res.status(200).json({msg:"Course created successfully",courseId:response._id})})}
catch(err){res.status(400).json({msg:"some error while admini creating the course",err:err})}
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({}).then((response)=>{
        res.json ({Course:response})
    })

});

module.exports = router;