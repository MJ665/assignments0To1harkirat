import { PrismaClient } from "@prisma/client";
import { toUSVString } from "util";
const prisma = new PrismaClient ()
async function main() {
    const user =await prisma.user.create({
        data :{
            email:"harkirat@gmail.com",
            firstName:"harkirat",
            lastName:"harkiratPassword",
            password:"harkiratsPassword"
        }, select:{
            id:true, 
            email:true,
            password :true
        }
    })
    const todo = await prisma.todo.create({
        data:{
            title:"harkirats Todo",
            description :"harkiratsTodoDes",
            done :false,
            userId :user.id
        },
        select:{
            id:true,
            title:true,
            userId:true
        }
    })
    console.log(user)
    console.log(todo)
}
main().then(async ()=>{
    await prisma.$disconnect()
}).catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})