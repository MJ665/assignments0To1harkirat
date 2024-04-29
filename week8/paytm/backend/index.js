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

const signInRouter = require("./router/signIn.js");
app.use("/signIn", signInRouter);

const signUpRouter = require("./router/signUp.js");
app.use("/signUp",signUpRouter);


app.listen (PORT,  ()=>{console.log("wer are listening on " + PORT)})
