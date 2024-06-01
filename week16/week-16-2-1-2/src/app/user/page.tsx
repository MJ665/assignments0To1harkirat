import { getServerSession } from "next-auth";
import Appbar from "../components/Appbar";
import { NEXT_AUTH } from "../api/lib/auth";
export default async function userServerComponent () {
    const session = await getServerSession( NEXT_AUTH )
return (
    <div>
<Appbar></Appbar>
        usesr component
         <br />
         <br />
        this is the get serserversession component
         <br />
         <br />
when we add the NEXT_AUTH which is all the next auth config inside the getServerSession we are able to get the useid in the server component as well 
         <br />
         <br />
         so make it a thumb rule that to add the NEXT_auth config and pass it in the every getServerSession function to get the user id there

         <br />
         <br />
         {JSON.stringify (session)}
    </div>
)
}