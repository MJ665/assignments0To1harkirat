import { getServerSession } from "next-auth";
export default async function userServerComponent () {
    const session = getServerSession(  )
return (
    <div>
        <Appbar></Appbar>
        usesr component 
         {JSON.stringify (session)}
    </div>
)
}