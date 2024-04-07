const express=require("express")
const app = express()
const path = require("path")
const dotenv=require("dotenv")
dotenv.config({path:path.resolve(__dirname,"./.env")})
const port = process.env.PORT
const mongo_url = process.env.MONGO_URL
const jwtPassword = process.env.JWT_PASSWORD
const zod = require("zod")
const {createTodo,updateTodo} = require("./types")
const mongoose = require("mongoose")


app.use(express.json())
app.post("/todos",function async(req,res){
    const title = req.body.title
    const description = req.body.descriptione
    const  todoCreation = createTodo.safeParse({title:title,description:description})
if(!todoCreation){
res.status (400).json({err:"todo not safeparsed", err:todoCreation.error})
}else{
    // put it in mongoDb
}

})

app.get("/todos",function async(req,res){

})

app.put("/completed",function async(req,res){
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload){res.status(400).json({msg:"not able to parse the update todo",err:parsePayload.error})}
    else{
        // update in mongo
    }
})

app .listen(port,()=>{console.log("we are running server on " + port)})


module.exports= {
    port:port,
    mongo_url : mongo_url,
    jwtPassword : jwtPassword
}