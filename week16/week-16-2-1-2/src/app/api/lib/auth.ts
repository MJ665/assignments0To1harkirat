

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { pages } from "next/dist/build/templates/app-page";

export const NEXT_AUTH=    {
        providers: [
            GoogleProvider({
                clientId:process.env.GOOGLE_CLIENTID || "",
                clientSecret:process.env.GOOGLE_SECRET || ""
            }),
            GithubProvider({
                clientId:process.env.GITHUB_CLIENTID || "",
                clientSecret:process.env.GITHUB_SECRET || ""
            }),
          CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: 'email', type: 'text', placeholder: '' },
              password: { label: 'password', type: 'password', placeholder: '' },
              // otp: { label: 'otp', type: 'otp', placeholder: '' },
            },
            async authorize(credentials) {
              if (!credentials) {
                return null;
              }
              const { username, password } = credentials;
              console.log(credentials);
                  // const user = await prisma.user.findOned ({where:{email:username, password :password}})
      
                  // if we return null then it will just throw error
                  // return null
                  //Sign in failed. Check the details you provided are correct.
                  return {
                    id: "user1",
                    name: "Harkirat Singh",
                    email: "harkirat@gmail.com"
                  };
                }
              })
            ],
            secret: process.env.NEXTAUTH_SECRET,
            callbacks: {
              // signIn: async ({ user }) => {
              //   if (user.email === "randompersong@gmail.com") {
              //     return false;
              //   }
              //   return true;
              // }
      
              jwt:async  ( { token , user })=>{
                console.log ( " this is token number  1 " )
                console.log (token)
                token.userId = "asdasdf"
                token.email="this is some this email.email.com"
                token.userId = token.sub
                console.log ( " this is token number  2           " )
                console.log (token)
                return token
              },
              // this the session call back helps in getting the id field in the frontend component code 
              session:async ({session,token,user}:any)=>{
                session.user.id = token.userId || token.sub
                return session
              }
              // with use of session our frontend get the access of the id but still our backend code we are not getting the access of the id 
      
            },
            pages:{
                signIn :"/signin"
            }
          }
