import { PrismaClient } from "@prisma/client";
import { toUSVString } from "util";
const prisma = new PrismaClient ()
interface UpdateParams {
    firstName :string
    lastName : string 
}
async function main(username:string, {firstName, lastName}:UpdateParams) {
    await prisma.user.update({
        where:{email:username},
        data:{
            firstName:firstName,
            lastName:lastName
        }
    })
    console.log("update successful")
}
main("harkirat@gmail.com",{firstName:"harkiratNew",lastName:"singhNew"}).then(async ()=>{
    await prisma.$disconnect()
}).catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})