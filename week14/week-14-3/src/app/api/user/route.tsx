import { NextRequest, NextResponse  } from "next/server";
export  function GET ()
{return (NextResponse.json ({
    email :"harkirat @gmail.com",
    name :"harkirat"
}))}


export async function POST (req:NextRequest)

{
    
    const body = await req.json()
    // console.log(req.headers.get("authorization"))
    // console.log(req.nextUrl.searchParams.get("name"))
    return (NextResponse.json ({
body :body,
 msg :"here is your responce"
}))}
