import {BrowserRouter,Routes,Route} from "react-router-dom"
import {SignUp} from "./pages/SignUp.jsx"
import {SignIn} from "./pages/SignIn.jsx"
import {Dashboard} from "./pages/Dashboard.jsx"
import {Send} from "./pages/Send.jsx"
function App() {

  return (
    <div>
          <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  <BrowserRouter>
  <Routes>

  <Route path="/signUp" element={<SignUp></SignUp>} ></Route>
  <Route path="/signIn" element={<SignIn></SignIn>} ></Route>
  <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
  <Route path="/send" element={<Send></Send>} ></Route>
  </Routes>
  </BrowserRouter>        
    </div>
  )
}

export default App
