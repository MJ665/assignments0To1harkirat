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

    </div>
  );
}
