import { NextRequest, NextResponse  } from "next/server";
export  function GET ()
{return (NextResponse.json ({
    email :"harkirat @gmail.com",
    name :"harkirat"
}))}

import { PrismaClient} from "@prisma/client"
 const client = new PrismaClient()
export async function POST (req:NextRequest)

{
    
    const body = await req.json()
    client.user.create({
        data :{
            email:body.username,
            name:body.password
        }
    })
    // console.log(req.headers.get("authorization"))
    // console.log(req.nextUrl.searchParams.get("name"))
    return (NextResponse.json ({
body :body,
 msg :"here is your responce"
}))}
