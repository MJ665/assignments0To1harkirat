"use client "

import { useState } from "react"
import axios from "axios"

export default function Signup (){
    const [username,setUsername] = useState("")
    const [pass , setPass] = useState("")
    return (
        <>
        <div className="flex flex-col justify-center h-screen">
<br />
        <div className=" felx justify-center ">
<br />
            <input 
            onChange={ (e)=>{setUsername(e.target.value)}}
            placeholder="username "type="text" />
<br />
            <input onChange={ (e)=>{setPass(e.target.value)}}
                  type="password" placeholder="password" />
<br />
<div className="fex flex justify-center">
            <button onClick={ ()=>{
                axios.post("http://localhost:3000/api/user",{
                    username,pass
                })
            }}  > sign up</button>
            </div>
<br />
        </div>
<br />
        </div>
        </>
    )
}