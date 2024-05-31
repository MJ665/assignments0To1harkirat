
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
            
            return {
                id: "user1"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }