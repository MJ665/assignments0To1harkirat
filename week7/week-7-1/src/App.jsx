
// import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
// import './App.css'
// import { Dashboard } from './components/Dashboard';

// import {Landing} from './components/Landing'

// function App() {


//   return (
//     <div>
//  <BrowserRouter>


//  <AppBar/>
// <Routes>
//   <Route path = "/Dashboard" element = {<Dashboard/>}/>
//   <Route path = "/" element = {<Landing />}/>
// </Routes>
//  </BrowserRouter> 
//     </div>
  
//   )
// }
// function AppBar(){
//   const navigate = useNavigate()
// return(
//   <div>
//   <button onClick={ ()=>{navigate("/")}}>Landing</button>
//   <button onClick={ ()=>{navigate("/Dashboard")}}>Dashboard</button>
//   {/* <button onClick={()=>{window.location.href = "/Dashboard"}}>Dashboard</button>  we decided in this project that we will not bring the html css js 
//   files from the server and when we are using this method the file routing is not hapenning hence this method is not optimeal */}
// </div>
// )
// }

// export default App












































// // lazyloading
// // the compelte bundle comes in the react
// // a lot of time the persong is only coming to landing page and they are not requird or givenn access of the dashboard page
// // hence we have to give incrementellay give the4m website instead of giving the whole website all to gethter
// // 
// import React, { Suspense } from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import "./App.css";

// const Dashboard = React.lazy(() => import("./components/Dashboard"));
// const Landing = React.lazy(() => import("./components/Landing"));

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <AppBar />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/Dashboard" element={<Dashboard />} />
//             <Route path="/" element={<Landing />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// }

// function AppBar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button onClick={() => navigate("/")}>Landing</button>
//       <button onClick={() => navigate("/Dashboard")}>Dashboard</button>
//     </div>
//   );
// }

// export default App;






















// suppose take this example 
// here the actual count component dosent neet the setCount prop but its needs the prop component 
// so for the child component
// we declerade it in  dada component 
// then passed the decleration in to papa component
// the it got accessed in the child component of the papa component 

// hence the code starts becoming ugly this concept is called as PROP Drilling 

// suppose
// we declered some component in per dada and passed it 
// then it got accessed to dada's brother and from dada to papa to child and child accessed 
// this is called prop drilling


//prop drilling dosent to do with re rendering with the child but it makes code un readable

// prop drilling is not a bad thing but it makes very bad to look to the code
//  the solutio to prop drilling is context api

// import { useState } from "react"
// import "./App.css"
// function App ( ){
// const [count, setCount]=useState (0)

//   return (
// <div>
//   <Count count = {count } setCount = {setCount}/>
// </div>
//   )
// }

// function Count ({count ,setCount}){
//   return <div>
//     {count}
// <Button count = {count} setCount ={setCount}/>
//   </div>
// }
// function Button ({count,setCount}){
// return (
//   <div>
//     <button onClick = {()=>{
//       setCount(count +1)
//     }}>increase</button>
//     <button onClick = {()=>{
//     setCount(count -1)
//     }}>Decrease</button>
//   </div>
// )
// }


// export default App

























// Context API
// it helps to teleport data to the component without drilling the data
// when we are using the contexxt api thei it you are pushing youyr statemanagement ourside the core react components
// how context api is different from state management tools like redux and recoil
// context api dose not have optimaization
// while state management tool like redux and recoil is highly performat beacouse it have 100 different optimization
// for that we have to create a new file to store the context 
// here we have created the new file context.jsx
 // we have to wrap anyone that want to use it

import { useContext, useState } from "react"
import "./App.css"
import { countContext } from "./context"
function App ( ){
const [count, setCount]=useState (0)

  return (
<div>
  <countContext.Provider value={{count,setCount}}>

  <Count />
  </countContext.Provider>
</div>
  )
}

function Count (){
  return <div>
<CountRenderer/>
<Button />
  </div>
}
function CountRenderer (){
  const {count} = useContext (countContext)
  return <div>
    {count}

  </div>
}


function Button (){
  const {count,setCount} = useContext (countContext)

return (
  <div>
    <button onClick = {()=>{
      setCount(count +1)
    }}>increase</button>
    <button onClick = {()=>{
    setCount(count -1)
    }}>Decrease</button>
  </div>
)
}


export default App