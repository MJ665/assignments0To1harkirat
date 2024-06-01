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
    </div>

  );
}
