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

















// now we are adding 5 second artificial delay to ocheck how to add loading on our site


import Image from "next/image";
import axios from "axios";
import { Component } from "react";


async function getUserDetails() {
  await new Promise ((r)=>{

    setTimeout((r),5000)
  }) 
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
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






