const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://hackathonmj641:1029384756@cluster0.bomrqhm.mongodb.net/myDatabase112');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourses:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Courses"
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    discription:String,
    imageLink:String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}