
const dotenv = require ("dotenv")
const path = require ("path")
// const { monitorEventLoopDelay } = require("perf_hooks")
dotenv.config( {path:path.resolve(__dirname, "./.env")})
const MONGO_URL = process.env.MONGO_URL

const PORT= process.env.PORT
const JWT_SECRET= process.env.JWT_SECRET

module.exports = {
    MONGO_URL:MONGO_URL,
    PORT:PORT,

    JWT_SECRET:JWT_SECRET
}