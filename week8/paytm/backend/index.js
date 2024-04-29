const express = require("express");
const db = require("./db")
const {User } = require("./db.js")

const app = express()
const dotenv = require ("dotenv")
const path = require ("path")

dotenv.config( {path:path.resolve(__dirname, "./.env")})
const MONGO_URL = process.env.MONGO_URL
const PORT= process.env.PORT
const cors = require("cors")
app.use(express.json())
app.use(cors())
// app.use(cors({origin: "http:localhost:5173"}))

const v1Route = require ("./routes/index.js")
app.use("/api/v1",v1Route)


app.listen (PORT,  ()=>{console.log("wer are listening on " + PORT)})
