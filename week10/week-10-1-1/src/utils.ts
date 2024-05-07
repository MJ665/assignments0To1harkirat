import { Client  } from "pg";
import dotenv from "dotenv"
dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL
export async function getClient() {
    const client = new Client (DATABASE_URL )
    await client .connect()
    return client
}