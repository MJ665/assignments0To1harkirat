const mongoose = require("mongoose")

const dotenv = require("dotenv")
const path = require("path")
dotenv.config({path:path.resolve(__dirname,"./.env")})
const myMongoUrl = process.env.MONGO_URL


mongoose.connect(myMongoUrl).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo = mongoose.model("todo",todoSchema)


module.exports={
    todo:todo,

}