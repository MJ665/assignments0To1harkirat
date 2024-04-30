import {BrowserRouter} from "react"
import {SignUp} from "./components/SignUp.jsx"
import {SignIn} from "./components/SignIn.jsx"
import {Dashboard} from "./components/Dashboard.jsx"
import {Send} from "./components/Send.jsx"
function App() {

  return (
    <div>
          <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  <BrowserRouter>
  <Routes>

  <Router path="/signUp" element{<SignUp></SignUp>} ></Router>
  <Router path="/signIn" element{<SignIn></SignIn>} ></Router>
  <Router path="/Dashboard" element{<Dashboard></Dashboard>} ></Router>
  <Router path="/send" element{<Send></Send>} ></Router>
  </Routes>
  </BrowserRouter>        
    </div>
  )
}

export default App
