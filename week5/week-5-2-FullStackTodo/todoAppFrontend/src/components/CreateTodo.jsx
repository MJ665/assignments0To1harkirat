
import { useState } from "react"
export function CreateTodo(){
    const [title , setTitle] = useState("")
    const [desc, setDesc] = useState("")
    return (<div>
        <input id="title" onChange = {(e)=>{setTitle (e.target.value)}} style = {{padding:10, margin:10 , background : "gray", color:"green"}}type = "text" placeholder="title"></input>
        <input id = "desc"  onChange = {(e)=>{setDesc (e.target.value)}}style = {{padding:10, margin:10 , background : "black", color:"red"}}type = "text" placeholder="description"></input>
        <button style = {{padding:10, margin:10 }}
        onClick = {()=>{
            fetch("http://localhost:3000/todos",{method:"POST",body:JSON.stringify({
                title:title, description:desc,completed:false
            }), headers: {
                "Content-Type": "application/json" // Set content type to JSON
              },})
        }}> add a todo</button>
    </div>)
}