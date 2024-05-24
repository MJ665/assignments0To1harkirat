// export function GET (){
//     return  Response.json({
//         email:"harkirat@email.com",
//         name:"name"
//     })
// }

// // we can make any file as api it is not necessary that it should have contained in the APi folder
// // we can make apis in any folder but they shoud be in the route tsx file name













import {NextRequest} from "next/server"
export async function  POST(req:NextRequest) {
    // extract the body
    const body = await req.json()
    // store the body in the Database
    console.log(body)
    return Response.json({
        msg:"you are logged in!"
    })

}

