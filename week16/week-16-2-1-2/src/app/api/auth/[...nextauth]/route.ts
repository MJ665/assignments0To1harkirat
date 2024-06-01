
// i had named this folder page as authRoutes 
// but beacouse the next is opinionated so i have to rename it to nextAuth

// import { NextRequest, NextResponse } from "next/server";

// // export function GET (req:NextRequest , args:any){
// //     console.log (args.params.authRoutes)
// //     return NextResponse.json({
// //         message:"asd"
// //     })
// // }
// export function GET(
//   req: NextRequest,
//   { params: { authRoutes } }: { params: { authRoutes: string[] } }
// ) {
//   console.log(authRoutes);
//   return NextResponse.json({
//     message: "asd",
//   });
// }
// export function POST(req: NextRequest) {
//   return NextResponse.json({
//     message: "asd",
//   });
// }

// // if i have tot make it some thing like
// // get or post request in
// // http://localhost:3000/api/auth

// // then i will put my route . ts file in
// // src/api/auth/route.ts

// // but here i want it in a way that
// // http://localhost:3000/api/auth/anything

// // thats why my folder structure is
// // src/api/auth/[...authRoutes]/route.ts















import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        //   otp: { label: 'otp', type: 'otp', placeholder: '' },
        },
        async authorize(credentials: any) {
            
            const username = credentials . username
            const password = credentials . password
            console.log(credentials)
            // const user = await prisma.user.findOned ({where:{email:username, password :password}})

            // if we return null then it will just throw error
            // return null
            //Sign in failed. Check the details you provided are correct.
            return {
                id: "user1",name:"harkirat singh ", email:"harkirat@gmail.com"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
    signIn:({user}=>{
      if(user.email== "randompersong@gmail.com"){return false}
      return true
    })
  }
})

export { handler as GET, handler as POST }