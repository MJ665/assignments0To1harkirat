// import Image from "next/image";
// import axios from "axios";
// import { Component } from "react";


// async function getUserDetails() {
//   const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//   return response.data;
// }

// export default async function Home() {
//   const userDetail = await getUserDetails()
  
//   return (
//     <>   <div className="flex flex-col justify-center h-screen">
//     <div className="flex justify-center"><div className="border p-8 rounded"><div>
//       Name:{userDetail?.name}
//       </div>
//       {userDetail?.email}
//       </div></div>
//   </div>
    
//     </>
//   )
// }








// we know that  we cannot use asynchronous in the components in react 

// so how we can write the async in the home Component

// next has recentely introduce that you can write async in the components 

// but also ifii you have written use client on the top of the page then you cannot do this

// next js lets you write bvackend routes just like express does

// this s why next is considered to be a full stack frame workerData
// the benefiats of using next js for backend routes in clueds 

// code in single reportErrorall standart thing you get in a backend framewoork like isExpression
// server components can directly talk to the backend
















// now we are adding 5 second artificial delay to ocheck how to add loading on our site


import Image from "next/image";
import axios from "axios";
import { Component } from "react";
import { workerData } from "worker_threads"
import { isExpression } from "typescript"


async function getUserDetails() {
  await new Promise ((r)=>{

    setTimeout((r),5000)
  }) 
  // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  
  
  
   const response = await axios.get("http://localhost:3000/api/user")

/* to make it to call our own backend api route folder 

we have to just replace the url with our local host url 
this is wrong for a few reason we can do the same thing in a better way in the future but for now we can do it in thisi way

*/


  return response.data;
}

export default async function Home() {
  const userDetail = await getUserDetails()
  
  return (
    <>   <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center"><div className="border p-8 rounded"><div>
      Name:{userDetail?.name}
      </div>
      {userDetail?.email}
      </div></div>
  </div>
    
    </>
  )
}






