const mongoose = require("mongoose")

const {MONGO_URL} = require ("./exportEnv")
console.log(MONGO_URL)
        // mongoose.connect(MONGO_URL)
try{
 mongoose.connect (MONGO_URL).then(()=>{
    console.log("connected to mongo")
})
}catch(err){
    throw console.error("Not Connected to MongoDb the error is "+err);
}
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
        

    })
    const User = mongoose.model ("User",userSchema) 
  const AccountSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    balance:{
        type:Number,
        required:true,
        default:0
    }
    
  })
  const Account = mongoose.model("Account",AccountSchema)



module.exports = {
    User:User,
Account:Account
}