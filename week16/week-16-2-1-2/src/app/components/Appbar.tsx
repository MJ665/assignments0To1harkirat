"use client";
import { useRouter } from "next/navigation";
import { signIn,signOut, useSession } from "next-auth/react";

export default function Appbar() {
  const router = useRouter();
  const session = useSession()
  return (
    <div>
      <button
        onClick={() => {
          router.push("api/auth/signin");
        }}
      >
        {" "}
        signin
      </button>

<br />




<br />


      <button
        onClick={() => {
            signIn()
        }}
      >
        {" "}
        signin next auth function
      </button>
      <br />
      <br />
      <button
        onClick={() => {
         signOut()
        }}
      >
        {" "}
        signout next auth function
      </button>


<br />
<br />
<br />
      {JSON.stringify(session)}
      <br></br>
      <br></br>this is a client side component
      <br></br>
      <br></br>the use session comes from next-auth/react so we cant really use the use session hook in server side component so we will use get server session

      <br></br>
      <br></br>
      with this we can see the user details in the component
    </div>

  );
}
