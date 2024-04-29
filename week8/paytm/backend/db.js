const mongoose = require("mongoose")
const dotenv = require ("dotenv")
const path = require ("path")
// const { monitorEventLoopDelay } = require("perf_hooks")
dotenv.config( {path:path.resolve(__dirname, "./.env")})
const MONGO_URL = process.env.MONGO_URL
console.log(MONGO_URL)
        // mongoose.connect(MONGO_URL)

mongoose.connect (MONGO_URL).then(()=>{
    console.log("connected to mongo")
})
    const userSchema = mongoose.Schema({
        username : {
            type :String,
            required:true,
            unique:true ,
            trim:true ,
            lowercase : true,
            minLength :3 ,
            maxLength : 30
        },
        firstName : {
            type : String,
            required:true,
            minLength:2
        },
        lastName :  {
            type : String,
            required:true,
            minLength:2,
            maxLength:50
        },
        password: {
            type : String,
            required:true,
            minLength:8,
            maxLength:50
        }
        ,
        currentBalance: {type:Number, default:0  },
        

    })
  


const User = mongoose.model ("User",userSchema) 
module.exports = {
    User:User

}