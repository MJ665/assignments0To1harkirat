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
    try{
    const body = await req.json()
    await client.user.create({
        data :{
            email:body.username,
            password:body.pass
        }
    })
    const users = await client.user.findMany({})
    // console.log(req.headers.get("authorization"))
    // console.log(req.nextUrl.searchParams.get("name"))
    return NextResponse.json ({
        users:users,
body :body,
 msg :"here is your responce"
})}
catch(err){
return NextResponse.json({msg:"we got an error while pusing the code" ,err : err})}
}
