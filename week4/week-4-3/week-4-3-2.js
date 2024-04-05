/**
    * ! Important: Course selling mongo bd instance
    * we need to ssupport two types os users
    * adming 
    * users
**/


const express = require ("express")
const app = express()
app.use("express.json()")


const mongoose= require("mongoose")

mongoose.connect("mongodb+srv://hackathonmj641:1029384756@cluster0.bomrqhm.mongodb.net/myDatabase112")

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    Course:{
        id:mongoose.Schema.Types.ObjectId,
        ref:Courses
    }
})
const AdminSchema = mongoose.Schema({
    email:String,
    isAdmin :Boolean,
    password: String,
    Course:{ref:Courses}
})
const Users = mongoose.model("Users",UserSchema)
const Admin = mongoose.model("Admin",AdminSchema)


app.post("/admin/signup",(req,res)=>{})
app.post("/admin/courses",(req,res)=>{})
app.get("/admin/courses",(req,res)=>{})


app.post("/user/signup",(req,res)=>{})
app.get("/user/courses",(req,res)=>{})
app.post("/user/courses/:courseId",(req,res)=>{})
app.post("/user/purchasedCourses",(req,res)=>{})

app.listen (3000, ()=>{console.log("app listening on 3000")})