import Image from "next/image";
import axios from "axios";
import { Component } from "react";


async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data;
}

export default async function Home() {
  const userDetail = await getUserDetails()
  
  return (
    <> hi there
    {userDetail.email}
    {userDetail.name}
    
    </>
  )
}








// we know that  we cannot use asynchronous in the components in react 

// so how we can write the async in the home Component

// next has recentely introduce that you can write async in the components 

// but also ifii you have written use client on the top of the page then you cannot do this