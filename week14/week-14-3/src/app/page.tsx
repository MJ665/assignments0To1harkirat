// "use client" 
//   import axios from "axios";
//   import Image from "next/image";
// import { useEffect, useState } from "react"; 

// export default function Home() {
//   const [data,setData] = useState({
//     name:"",
//     email:""
//   })
// useEffect(()=>{
// axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details").then((res)=>{setData(res.data)})
// },[])

//   return (
//     <>
//     hi there 
//     {data.email}
//     {data.name}
//     {}
//     </>
//   );
// }



// this is client side rendering














// this is server side rendering



  import axios from "axios";

  async function GetData (){
await new Promise ((r)=>{setTimeout (r,3000)})
// const responce:any = await  axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
const responce:any = await  axios.get("http://localhost:3000/api/user")

    return responce.data
}
export default async function Home() {
const data :any = await GetData()

  return (
    <div>
    hi there 
    {data.email}
    {data.name}

    <div>
      <p>
      Best practice for instantiating Prisma Client with Next.js
Problem
Many users have come across this warning while working with Next.js

in development:

warn(prisma-client) There are already 10 instances of Prisma Client actively running.

There's a related discussion
and issue

for the same.

In development, the command next dev clears Node.js cache on run. This in turn initializes a new PrismaClient instance each time due to hot reloading that creates a connection to the database. This can quickly exhaust the database connections as each PrismaClient instance holds its own connection pool.
Solution
The solution in this case is to instantiate a single instance PrismaClient and save it on the globalThis

object. Then we keep a check to only instantiate PrismaClient if it's not on the globalThis object otherwise use the same instance again if already present to prevent instantiating extra PrismaClient instances.
db.ts

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

You can extend Prisma Client using a Prisma Client extension by appending the $extends client method when instantiating Prisma Client as follows:

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    result: {
      user: {
        fullName: {
          needs: { firstName: true, lastName: true },
          compute(user) {
            return `${user.firstName} ${user.lastName}`
          },
        },
      },
    },
  })
}

After creating this file, you can now import the extended PrismaClient instance anywhere in your Next.js pages as follows:

// e.g. in `pages/index.tsx`
import prisma from './db'

export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany()

  return { props: { posts } }
}

Edit this page on GitHub

      </p>
    </div>

    </div>
  );
}
