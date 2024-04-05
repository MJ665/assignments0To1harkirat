const mongoose = require("mongoose")
const express = require("express")
const app = exepress()
app.use(express.json())


mongoose.connect("mongodb+srv://hackathonmj641:1029384756@cluster0.bomrqhm.mongodb.net/myDatabase112")
const UserSchema =new mongoose.Schema({
    email:String,
   password: String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]
})
const CourseSchema=new mongoose.Schema({
    title:String,
    price:5999
})
const User = mongoose.model("User",UserSchema)
const Course = mongoose.model("Course",CourseSchema)

app.listen (3000,()=>{console.log("listening on 3000")});
