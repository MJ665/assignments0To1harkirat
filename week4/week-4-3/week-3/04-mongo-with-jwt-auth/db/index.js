const mongoose = require('mongoose');

const dotenv = require("dotenv")
dotenv.config({path:"../.env"})

mongoose.connect(process.env.MONGO_URL);
// Connect to MongoDB
// mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourse:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Course
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    imageLink:String,
    published:Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
    jwtPassword:process.env.JWT_PASSWORD
}
