
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

























// // Context API
// // it helps to teleport data to the component without drilling the data
// // when we are using the contexxt api thei it you are pushing youyr statemanagement ourside the core react components
// // how context api is different from state management tools like redux and recoil
// // context api dose not have optimaization
// // while state management tool like redux and recoil is highly performat beacouse it have 100 different optimization
// // for that we have to create a new file to store the context 
// // here we have created the new file context.jsx
//  // we have to wrap anyone that want to use it

// import { useContext, useState } from "react"
// import "./App.css"
// import { countContext } from "./context"
// function App ( ){
// const [count, setCount]=useState (0)

//   return (
// <div>
//   <countContext.Provider value={{count,setCount}}>

//   <Count />
//   </countContext.Provider>
// </div>
//   )
// }

// function Count (){
//   return <div>
// <CountRenderer/>
// <Button />
//   </div>
// }
// function CountRenderer (){
//   const {count} = useContext (countContext)
//   return <div>
//     {count}

//   </div>
// }


// function Button (){
//   const {count,setCount} = useContext (countContext)

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




















































// Starting week 7 / week 7-2

// why do you use context api =>for more performance =>no
// why do you use context api =>to make syntax more easier & prop drilling=>yes

// in this code we can see that we decelerated count and set count in grandfather component and accessed in 2 children compoenet
// when we done the console log and do increment and decrement 
// we saw that the father component is also rerendering again when the grnadchildren are accessed
//
// why do you use state management tool=>for less number of re renders 

// import { useContext, useState } from "react"
// import "./App.css"
// import { countContext } from "./context"
// function App ( ){
// const [count, setCount]=useState (0)

//   return (
// <div>
//   <countContext.Provider value={{count,setCount}}>

//   <Count />
//   </countContext.Provider>
// </div>
//   )
// }

// function Count (){
//     console.log("Count Component rerender")
//     return <div>
// <CountRenderer/>
// <Button />
//   </div>
// }
// function CountRenderer (){
//   console.log("Countrenderer Component rerender")
//   const {count} = useContext (countContext)
//   return <div>
//     {count}

//   </div>
// }


// function Button (){
//   console.log("button Component rerender")
//   const {count,setCount} = useContext (countContext)

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





























































// // hence the companies open source only the component and do not make public how the state is changing beacouse it is related to backend calls
// // they ndo not make open state logic

// // some state management tools are zustand redux and recoil

// // we will be learning the recoil


// // the recoil is some where like this
// // consider example 
// // [value,setValue]=useState
// // [value,setValue]=useRecoilState
// // value=useRecoilValue
// // setValue=useSetRecoilState


// import { useContext, useMemo } from "react"
// import "./App.css"
// import { countContext } from "./context"
// import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"
// import { countAtom, evenSelector} from "./store/atoms/countAtom"
// // import { countAtom,selectorAtom } from "./store/atoms/countAtom"
// function App ( ){


//   return (
// <div>

// <RecoilRoot>

//   <Count />
  
// </RecoilRoot>

// </div>
//   )
// }

// function Count (){
//     console.log("Count Component rerender")
//     return <div>

// <CountRenderer/>
// <Button />
// <Selector/>
//   </div>
// }
// function CountRenderer (){
//   console.log("Countrenderer Component rerender")
//   const count= useRecoilValue (countAtom)
//   return <div>
//     {count}

//   </div>
// }


// function Button (){
//   console.log("button Component rerender")
//   // const [count,setCount]= useRecoilState (countAtom)
//   const setCount = useSetRecoilState (countAtom)
// /**
//  * setCount (count +1)
//  * setCount (c =>c+1). ----->
//  * setCount (function (c)=>{return c+1}) ----> in both of this we dont have to import count it will take the current value of the as the coung and put it into c
//  * why we should do so 
//  * beacouse the buttons components are also re rendering when we are clicking it and it is not optimal  
//  * hance we will use this format
//  * setCount (c =>c+1). 
//  */
// return (
//   <div>
//     <button onClick = {()=>{
//       // setCount(count +1)
//       setCount(c=> c+1)
//     }}>increase</button>
//     <button onClick = {()=>{
//       // setCount(count -1)
//       setCount(function (c){return c-1})
//     }}>Decrease</button>
//   </div>
// )
// }



// // Uggly way to solve

// // function Selector(){
// // console.log("the selector component has re rendered")
// // const [selector,setSelector] = useRecoilState(selectorAtom)
// // const count = useRecoilValue(countAtom)

// // if(count %2 == 0){setSelector("Even")}else{setSelector("ODD")}
// // return ( 
// //   <p>THe number is {selector}</p>
// // )
// // }


// // Better way to solve with use memo way to solve

// // function Selector(){
// // console.log("the selector component has re rendered")

// // const count = useRecoilValue(countAtom)
// // const isEven = useMemo(()=>{
// //   return count %2 == 0
// // }, [count ])

// // return ( 
// //   <p>THe number is {isEven ? "it is even ":null}</p>
// // )
// // }

// // in the same way as useMemo we can create selectors
// function Selector(){
// console.log("the selector component has re rendered")

// const evenSelector= useRecoilValue(evenSelector)


// return ( 
//   <p>THe number is {evenSelector ? "it is even ":null}</p>
// )
// }

// export default App







































































































// // FilterTodos.jsx
// import React, { useState } from "react";
// import { useRecoilState ,useSetRecoilState,useRecoilValue} from "recoil";
// import { filterAtom } from "./store/atoms/countAtom";



// import {  } from "recoil";
// import { titleAtom, descriptionAtom, todosAtom } from "./store/atoms/countAtom";

// // App.jsx
// import { RecoilRoot } from "recoil";
// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <InputForm />
//         <FilterTodos />
//         <DisplayTodos />
//       </RecoilRoot>
//     </div>
//   );
// }

// export default App;

// function InputForm() {
//   const [title, setTitle] = useRecoilState(titleAtom);
//   const [description, setDescription] = useRecoilState(descriptionAtom);
//   const setTodosAtom = useSetRecoilState(todosAtom);

//   const handleClick = () => {
//     setTodosAtom((oldTodos) => [
//       ...oldTodos,
//       { title: title, description: description }
//     ]);
//   };

//   return (
//     <div>
//       <input type="text" onChange={(e) => setTitle(e.target.value)} />
//       <input type="text" onChange={(e) => setDescription(e.target.value)} />
//       <button onClick={handleClick}>Click To Submit Form</button>
//     </div>
//   );
// }


// import { todosSelector } from "./store/atoms/countAtom";

// function DisplayTodos() {
//   const todos = useRecoilValue(todosSelector);

//   return (
//     <div>
//       {todos.map((element, index) => (
//         <div key={index}>
//           <h1>{element.title}</h1>
//           <h2>{element.description}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }




// function FilterTodos() {
//   const [filter, setFilter] = useRecoilState(filterAtom);

//   const handleChange = (e) => {
//     setFilter(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Filter by title" onChange={handleChange} />
//     </div>
//   );
// }



















































// Week 7 / Week - 7 - 3


// Recoil deep dive 
// Recoil Ofline Video


import { RecoilRoot, useRecoilValue }from "recoil"
import "./App.css"
import { networkAtom ,jobsAtom,notificationsAtom,messagingAtom} from "./store/atoms/week-7-3-Atom"

function App (){

  return(
    <RecoilRoot>

<MainApp></MainApp>
    </RecoilRoot>
  )
}
function MainApp (){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  return(
    <RecoilRoot>

<>
  <button>Home</button>
  <button>My Network({networkNotificationCount >= 100 ? "99+":networkNotificationCount})</button>
  <button>Jobs({jobsAtomCount})</button>
  <button>Messaging({messagingAtomCount})</button>
  <button>Notification({notificationsAtomCount})</button>
  <button onClick = (()=>{
    setMessagingAtomCount (messagingAtomCount + 1 )})> Me</button>

    </RecoilRoot>
  )
}


export default App