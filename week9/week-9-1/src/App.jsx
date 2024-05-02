import { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
// <MyComponent/>
//     </>
//   )
// }
// function MyComponent (){
//   const [count , setCount ] = useState(0)
//   const incrementCount =()=>{setCount (count+1)}
//   return (
// <div>
//   <p>{count}</p>
//   <button onClick={incrementCount}>increment</button>
// </div>
//   )
// }



// import { Component } from 'react'
// class MyComponent extends Component {
  //   constructor(props){
    //     super(props)
    //     this.state = {count:0}
    //   }
    //   incrementCount = ()=>{
      //     this.setState ({count:this.state.count +1})
      //   }
      //   render (){
        //     return(
          //       <div>
          //         <p>{this.state .count}</p>
          // <button onClick={this.incrementCount}>increment</button>
          //       </div>
          //     )
          //   }
          // }
          
          
          
          
          
          
          












// function App() {
//   let [render ,  setRender] = useState(true)
//   useEffect(()=>{
//     setInterval(()=>{
//       setRender(render = !render)
//     },5000)
//   })

//   if(!render){
//     return<div> this is second empty div</div>
//   }else{return(<MyComponent></MyComponent>)}
// }

// function MyComponent (){
// useEffect(()=>{console.log ("component mounted")//.  line a

// return ()=>{  console.log("component unmounted")}// line B
// },[])            
// /*
// the significance of the use Effect

// if we have a use effect which have some dependencies 
// then the first time dependency changes line a runns

// the seconde time dependency changes first line b runs then line a runnns 
// line b is for cleaning up and then line a runns

// the third time the dependency change first line b runs for cleanup and then line a runns



// in case of empty array 
// then the components mounts on the DOM 
// line a runns
// then when the code goes away from the DOM
// for cleanup 
// line b runns

// line b runns whenever the dependencies change or the component unmounts

// hence the useEffect has 2 parts

// line a ran when component mounted this is called life cycle events
// line b ran when component unmounted this is called life cycle events




// */
//             return (
//           <div>
//            from inside my component
//           </div>
//             )
//           }




















// // IN CLAASS BASED COMPONENT MOUNT AND UNMOUNT


// function App() {
//   let [render ,  setRender] = useState(true)
//   useEffect(()=>{
//     setInterval(()=>{
//       setRender(render = !render)
//     },5000)
//   })

//   if(!render){
//     return<div> this is second empty div</div>
//   }else{return(<MyComponent></MyComponent>)}
// }
// import React from 'react'
// class MyComponent extends React.Component{
// componentDidMount (){
//   console.log("the component mounted")
// }
// componentWillUnmount (){
//   console.log("the component unmounted")
// }
// render(){
//   return(
//   <div>
//       from inside my component
//           </div>)
// }
// }








































// SWR  
// SWR is a very famous library for react hook for data fetching
// we are trying to make the similar thing


import axios from 'axios'


function useTodos (){
  const [todos, setTodos] = useState([])
  const [loading , setLoading ] = useState (true)

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading (false)
      })
  }, [])

  return {todos , loading}
}
function App() {
 const {todos,loading} = useTodos()
 if (loading ){return (<div>loading ...</div>)}

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}





          export default App
