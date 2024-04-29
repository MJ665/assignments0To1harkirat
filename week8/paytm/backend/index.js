const express = require("express");

const app = express()

const {PORT}= require("./exportEnv.js")

const cors = require("cors")
app.use(express.json())
app.use(cors())

// app.use(cors({origin: "http:localhost:5173"}))
const v1Route = require ("./routes/index.js")
app.use("/api/v1",v1Route)



app.listen (PORT,  ()=>{console.log("wer are listening on " + PORT)})
