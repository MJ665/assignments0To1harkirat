import { NextRequest, NextResponse } from "next/server";

export function GET (){
    return NextResponse.json({
        message:"asd"
    })
}
export function POST (req:NextRequest){
    return NextResponse.json({
        message:"asd"
    })
}


if i have tot make it some thing like 
get or post request in 
http://localhost:3000/api/auth

then i will put my route . ts file in 
src/api/auth/route.ts




but here i want it in a way that 
http://localhost:3000/api/auth/anything

thats why my folder structure is 
src/api/auth/[...authRoutes]/route.ts