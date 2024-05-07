import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main(username:string) {
    const user = await prisma.user.findUnique({
        where:{
            email :username
        }
    })
    console.log(user)
}

main("harkirat@gmail.com").then(async ()=>{
    await prisma.$disconnect()
}).catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})