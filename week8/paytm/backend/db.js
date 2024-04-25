const mongoose = require("mongoose")
const dotenv = require ("dotenv")
const path = require ("path")
const { monitorEventLoopDelay } = require("perf_hooks")
dotenv.config( {path:path.resolve(__dirname, "./.env")})
const MONGO_URL = process.env.MONGO_URL
        // mongoose.connect(MONGO_URL)

mongoose.connect (MONGO_URL).then(()=>{
    console.log("connected to mongo")
}).then(()=>{
    const user = mongoose.Schema({
        name : String ,
        age : Number,
        dob : 
    })
})