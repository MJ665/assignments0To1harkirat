"use server"

import client from "@/db"
import { NextResponse } from "next/server"
export async function getData (username:string , password :string)
{

    try {
        const users = await client.user.findMany({})
        return{
            users :users,
email :username,password:password
        }

    }catch (err){
        return {msg:"we got an error"}
    }}
