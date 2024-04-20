import RevenueCard from "./components/RevenueCard"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <div style={{display:'flex', justifyContent:"center"}}>
      <div style={{backgroundColor:"red"}}>hi there</div>
      <div style={{backgroundColor:"green"}}>hi there</div>
      <div style={{backgroundColor:"blue"}}>hi there</div>
      <div style={{backgroundColor:"yellow"}}>hi there</div>
      <div className='border pt-2'>aihdjfoaidsf</div>
     </div> */}



<div className="grid grid-cols-4">
      <RevenueCard 
      title ="hello"
      showWarning = {true}
  orderCount = {300}
  amount = {50000}
  ></RevenueCard>
</div>
    </>
  )
}

export default App
