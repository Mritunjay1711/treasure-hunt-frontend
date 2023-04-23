import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import NavBar from './components/Navbar'
import UpdateRiddle from './pages/UpdateRiddle'
import AdminLogin from './pages/AdminLogin'
import Game from './pages/Game'
import Win from './pages/Win'

const App = () => {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/updatelevel1" element={<UpdateRiddle level={"level1"}/>}/>
          <Route path="/updatelevel2" element={<UpdateRiddle level={"level2"}/>}/>
          <Route path="/updatelevel3" element={<UpdateRiddle level={"level3"}/>}/>
          <Route path="/updatelevel4" element={<UpdateRiddle level={"level4"}/>}/>
          <Route path="/updatelevel5" element={<UpdateRiddle level={"level5"}/>}/>
          <Route path="/game/:name" element={<Game/>}/>
          <Route path="/win/:name" element={<Win/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App