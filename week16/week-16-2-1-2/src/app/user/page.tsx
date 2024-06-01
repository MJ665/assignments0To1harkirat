import { getServerSession } from "next-auth";
import Appbar from "../components/Appbar";
export default async function userServerComponent () {
    const session = await getServerSession(  )
return (
    <div>
<Appbar></Appbar>
        usesr component
         <br />
         <br />
        this is the get serserversession component
         <br />
         <br />
         {JSON.stringify (session)}
    </div>
)
}