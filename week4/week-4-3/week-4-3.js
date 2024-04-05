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

User.findById("1")
User.findOne({username:"hkirat@gmail.com"})
User.find({username:"hkirat@gmail.com"})
User.updateOne(
    {"id":"1"},
    {$push:{purchasedCourses:"333"}}
)
User.updateOne(
    {id:"1"},
    {password:"newPassword"}
)
User.updateMany({},{
    premium:true
})
User.deleteMany({})
User.deleteOne({
    username:"hkirat@gmail.com"
})                           

User.find
User.findById
User.findOne
User.findByIdAndDelete
User.findByIdAndUpdate
User.findOneAndDelete
User.findOneAndReplace
User.findOneAndUpdate
User.find
User.updateMany
User.updateOne


app.listen (3000,()=>{console.log("listening on 3000")});
