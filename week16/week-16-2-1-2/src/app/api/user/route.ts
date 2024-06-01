import { getServerSession } from "next-auth";

export default async function GET () {
    const session = await getServerSession(  )
return  session
    
}