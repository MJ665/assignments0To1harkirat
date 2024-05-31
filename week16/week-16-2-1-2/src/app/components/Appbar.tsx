"use client";
import { useRouter } from "next/navigation";
import { signIn,signOut } from "next-auth/react";

export default function Appbar() {
  const router = useRouter();
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
    </div>
  );
}
