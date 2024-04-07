
// import './App.css'
// import { useState } from 'react'

// function App() {

// const [ count,setCount]=useState(0)
// console.log(count )
// console.log(setCount)
// function onClickHandler(){
//   setCount(count + 1)
//   console.log(useState.count)
// }
// return (
//   <div>
//   <button onClick={onClickHandler}>counter {count }</button>
//   </div>
// )

// }

// export default App






// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CounterButton count={count} setCount={setCount} />
//     </div>
//   );
// }

// function CounterButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return (
//     <button onClick={onClickHandler}>
//       Counter {props.count}
//     </button>
//   );
// }

// export default App;






import "./App.css"
import { useState } from "react"




function App(){
const [todos,setTodos] = useState([{
  title:"go to gym",
  description:"yes go to mumbai",
  completed :false
},
{
  title:"study0",
  description:"jee",
  completed :true
}])

function addTodo(){
  setTodos ([...todos, {
    title : "new todo",
    description:"desc of new todo"
  }])
}

return (
  <div>
    <Todos  title = 'harkirat' description="des1"></Todos>
    <Todos  title = 'harkirat' description="des1"></Todos>
    <Todos  title = {todos[0].title} description={todos[0].description}></Todos>
    <Todos  title = {todos[1].title} description={todos[1].description}></Todos>

{todos.map((todo)=>{
  return (<Todos  title ={todo.title} description= {todo.description} ></Todos>)
})}

<button onClick = {addTodo}>add a random new todo</button>


<DummyButton></DummyButton>

  </div>
)

}
function Todos (props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

// this helps to understand whenever the parent re renders the child re renders
// the dummy button is taking no props it is literrally not getting changed when the state is changing 
// but its parent is re rendering when the state is changing hence 
// child re renders when the parent re renders it can be prevented by the memo hook
function DummyButton (){
  console.log("i am re rendering")
  return <button>this is the dummy button</button>
}


export default App