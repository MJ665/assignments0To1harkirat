const mongoose = require("mongoose")
const mongo_url = require("./index.js")

const todoSchema = mongoose.model({
    title:String,
    description:String
})
const todo = mongoose.Schema("todo",todoSchema)


module.exports={
    todo:todo,
    
}