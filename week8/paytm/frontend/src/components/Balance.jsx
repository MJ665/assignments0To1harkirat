import { useState,useEffect } from "react"
import axios from "axios"

export const Balance = () => {
    const [balance,setBalance]=useState(null)
    useEffect(()=>{
     try{
            const token = localStorage.getItem("authorization")
        console.log (localStorage.getItem("authorization"))
axios.get("http://localhost:3000/api/v1/account/balance",{
    headers:{
        authorization :token}
}).then((response)=>{
    setBalance(response.data.balance)
})
}catch(err){console.error("errolr ****" + err)}

}

,[])
    return (<div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>)
}