// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <Header title={"hello"}></Header>
//      <Header title={"hello2"}></Header>
//     </>
//   )
  
// }


// function Header ({title}){
//   return <div>
//     {title}
//   </div>
// }
// export default App




// import React ,{ useState } from "react";
// import "./App.css"

// function App(){
// const [title,setTitle] = useState("asdf")

//   return(
//     <div> <Button setTitle = {setTitle}></Button>
//     <Title title={title}></Title>
//     <h1>asdfoijasdfoi</h1>
//     <h1>asdfwqer</h1>
//     <h1>o9ijio</h1>
//     <HeaderWithButton />
//     <TitleReactMemo title={title}></TitleReactMemo>
//     </div>
//   )
// }
// function Button ({setTitle}){
//   return (
//     <button onClick={()=>{setTitle (Math.random)}}>click here to change title  </button>
//   )
// }
// function Title ({title}){
//   return ( <h1> the title is this this this {title} </h1>)
// }
// function HeaderWithButton(){
//   const [firstTitle,setFirstTitle]=useState("my name is kirat")
//   function changeTitle (){setFirstTitle ("my name is "+Math.random())}
//   return <>
//   <button onClick={changeTitle}>click me to change the title</button>
//   <Title title ={firstTitle}> </Title>
//   </>
// }
// const TitleReactMemo = React.memo(
//   function TitleReactMemo ({title}){
//     return ( <h1> the title is this this this {title} </h1>)
//   })
// export default App



















// import React ,{ useState } from "react";
// import "./App.css"

// function App(){
// const [title,setTitle] = useState("asdf")

//   return(
//     <div> <Button setTitle = {setTitle}></Button>
//     <Title title={title}></Title>
//     <Title title={title}></Title>
//     <Title title="af;ijaso"></Title>
//     <Title title="pwww23828289"></Title>
//     <Title title="mmmmmmmmm99999"></Title>
//     <h1>asdfoijasdfoi</h1>
//     <h1>asdfwqer</h1>
//     <h1>o9ijio</h1>

//     </div>
//   )
// }
// function Button ({setTitle}){
//   return (
//     <button onClick={()=>{setTitle (Math.random)}}>click here to change title  </button>
//   )
// }

// const Title = React.memo(
//   function Title ({title}){
//     return ( <h1> the title is this this this {title} </h1>)
//   })
// export default App








// import React, { useState } from "react";
// import "./App.css";

// let counter = 4
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       title: "go to gym",
//       description: "i go to gym today",
//       id: 1
//     },
//     {
//       title: "go to gym",
//       description: "i go to gym tommrow",
//       id: 2
//     },
//     {
//       title: "go to gym",
//       description: "i go to gym day after tommrow",
//       id: 3
//     }
//   ]);

//   const addTodo = () => {
//     setTodos([
//       ...todos,
//       {
//         id: counter++,
//         title: "go to gym",
//         description: "go to gym day day after tommrow"
//       }
//     ]);
//   };

//   return (
//     <div>
//       <button onClick={addTodo}>add a todo</button>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo ({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default App;








// // real wrapper this syntax the google will never use

// import React from "react"
// import "./App.css"
// function App(){
//   return <div>

// <CardWrapper innerComponent = {<TextComponent/>} />
// <CardWrapper innerComponent = {<TextComponent2/>} />
//   </div>
// }
// function TextComponent (){
//   return <div>
//     hi there
//   </div>
// }
// function TextComponent2 (){
//   return <div>
//     hi there5555555555555
//   </div>
// }
// function CardWrapper({innerComponent}){
//  // createt a div which has a border (hint : the way to create a border si border "2px solid black")
//  // and inside the div renders the prop
//  return <div style ={{border:"2px solid black"}}>
//   {innerComponent}
//  </div>
// }
// export default App



















// // this is the right way of creating the wrapper beacouse of this the code is easy and we can acces the whole children object 
// import React from "react"
// import "./App.css"
// function App(){
//   return <div>

// <CardWrapper > 
//   <CardWrapper>

// <span>hello 123 mike testing</span>
//   </CardWrapper>
//   hi there
// <TextComponent />
// </CardWrapper>

//   </div>
// }
// function TextComponent (){
//   return <div>
//     hi there
//   </div>
// }
// function TextComponent2 (){
//   return <div>
//     hi there5555555555555
//   </div>
// }
// function CardWrapper({children}){
// console.log(children)
//  return <div style ={{border:"2px solid black"}}>
//   {children}
//  </div>
// }
// export default App




















// import "./App.css"
// import React , {useEffect}from "react"


// function App(){
// useEffect(()=>{
//   alert("hi there 1")
// })
//   return (
//     <div>
//       <button>hello</button>

//     </div>
//   )
// }

// export default App








// import "./App.css";
// import React, { useEffect, useState } from "react";

// function App() {
//   const [todo, setTodo] = useState([]);

//   useEffect(() => {
//     setInterval(()=>{
//       fetch("https://sum-server.100xdevs.com/todos")
//       .then(async (res) => {
//         const json = await res.json();
//         setTodo(json.todos);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//     },1000)
    
//   }, []);

//   return (
//     <div>
//       <button>hello</button>
//       <div>
//         {todo.map((todoItem, index) => (
//           <div key={index}>
//             <p>ID: {todoItem.id}</p>
//             <p>Title: {todoItem.title}</p>
//             <p>Description: {todoItem.description}</p>
//             <p>Completed: {todoItem.completed ? "Yes" : "No"}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



























// side effect 
// in react the concept of side offects encompases any operation that reach outside the functional scope of a react component these operation can affect other copmponents interact with the browser or perform asynchronous data fetching
// example 
// setTimeout
// fetch 
//  setInterval
//  document.getElementById("")

// hooks are a feature introduced in react 16.8 that allow you t9o use state and other react features without writing a class
// they enable functional components to have access to stateful logic & lifecydcle features which were previously only possible in class components that his led to a more concise & readable way of writing components in react
// useState useEffect useCallback useMemo userRef useContext




// useState
// import { useEffect, useState } from "react"
// import "./App.css"
// function App (){
//   const [count , setCount] = useState(0)
//   return (
//     <div>
//       <button onClick={ function(){setCount (count+1)}}> click me {count }</button>
//     </div>
//   )
// }

// export default App



// // useEffect
// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then((res) => {
//         setTodos(res.data.todos); // Access response data directly
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   function Todo({ todo }) {
//     return (
//       <div>
//         <h1>ID: {todo.id}</h1>
//         <h2>Title: {todo.title}</h2>
//         <p>Description: {todo.description}</p>
//         <p>Completed: {todo.completed ? "Yes" : "No"}</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {todos.map((todo, index) => (
//         <Todo key={index} todo={todo} />
//       ))}
//     </div>
//   );
// }

// export default App;








// // useEffect
// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios";

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
//       .then((res) => {
//         const data = res.data.todos;
//         if (data.length > 0) {
//           setTodo(data[0]); // Set the first element from the fetched data
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [id]); // Run the effect whenever id changes

//   return (
//     <div>
//       <h1>ID: {todo.id}</h1>
//       <h2>Title: {todo.title}</h2>
//       <p>Description: {todo.description}</p>
//       <p>Completed: {todo.completed ? "Yes" : "No"}</p>
//     </div>
//   );
// }

// function App() {
//   const [selectedId, setSelectedId] = useState(1);

//   return (
//     <div>
//       <button onClick={() => setSelectedId(1)}>click 1</button>
//       <button onClick={() => setSelectedId(2)}>click 2</button>
//       <button onClick={() => setSelectedId(3)}>click 3</button>

//       <Todo id={selectedId} />
//     </div>
//   );
// }

// export default App;































// // useMemo
// // this is a bad solution
// // beacouse clicking on the button but not changing the value in text box still the expensive for loop operaion is getting called which is leading to bad solution
// import { useState, useMemo } from "react";
// import "./App.css";



// function App() {
// const [count, setCount ]=useState(0)
// const [inputValue,setInputValue] = useState("")
// let counting = 0
// for (let i = 0;i<=inputValue ; i++){
//   counting = counting +i
// }
//   return (
//     <div>

// <input type="text" name="textBox" id="id1" onChange={(e)=>{setInputValue(e.target.value)}} />
// <br />
// sum from 1 to {inputValue } is {counting}
//  <br />

// <button onClick = {()=>{setCount(count + 1)}}>click me {count }</button>
//     </div>
//   );
// }

// export default App;








// // useMemo
// // useEffect using solution
// // this is good solution but still whenever the typing occurs then its causing the bad solution
// import { useState,useEffect,  useMemo } from "react";
// import "./App.css";



// function App() {
// const [count, setCount ]=useState(0)
// const [inputValue,setInputValue] = useState("")
// const [finalInputValue,setFinalInputValue] = useState("")
// useEffect(()=>{
//   let counting = 0
//   for (let i = 0;i<=inputValue ; i++){
//     counting = counting +i
//   }setFinalInputValue(counting)
// },[inputValue])

//   return (
//     <div>

// <input type="text" name="textBox" id="id1" onChange={(e)=>{setInputValue(e.target.value)}} />
// <br />
// sum from 1 to {inputValue } is {finalInputValue}
//  <br />

// <button onClick = {()=>{setCount(count + 1)}}>click me {count }</button>
//     </div>
//   );
// }

// export default App;














// useMemo
// usememo
import { useState, useMemo } from "react";
import "./App.css";


function App() {
const [count, setCount ]=useState(0)
const [inputValue,setInputValue] = useState("")

let count111 = useMemo(()=>{
  let counting = 0
  for (let i = 0;i<=inputValue ; i++){
    counting = counting +i
  }return counting
},[inputValue])

  return (
    <div>

<input type="text" name="textBox" id="id1" onChange={(e)=>{setInputValue(e.target.value)}} />
<br />
sum from 1 to {inputValue } is {count111}
 <br />

<button onClick = {()=>{setCount(count + 1)}}>click me {count }</button>
    </div>
  );
}

export default App;



