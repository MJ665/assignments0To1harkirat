import { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<MyComponent/>
    </>
  )
}
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
          
          
          
          
          
          
          

function MyComponent (){
useEffect(()=>{console.error ("component mounted")//.  line a

return ()=>{  console.log("component unmounted")}// line B
},[])            
/*
the significance of the use Effect

if we have a use effect which have some dependencies 
then the first time dependency changes line a runns

the seconde time dependency changes first line b runs then line a runnns 
line b is for cleaning up and then line a runns

the third time the dependency change first line b runs for cleanup and then line a runns



in case of empty array 
then the components mounts on the DOM 
line a runns
then when the code goes away from the DOM
for cleanup 
line b runns
*/
            return (
          <div>
           from inside my component
          </div>
            )
          }
          export default App
