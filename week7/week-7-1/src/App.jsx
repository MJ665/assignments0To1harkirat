
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












































// lazyloading
// the compelte bundle comes in the react
// a lot of time the persong is only coming to landing page and they are not requird or givenn access of the dashboard page
// hence we have to give incrementellay give the4m website instead of giving the whole website all to gethter
// 
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing</button>
      <button onClick={() => navigate("/Dashboard")}>Dashboard</button>
    </div>
  );
}

export default App;
