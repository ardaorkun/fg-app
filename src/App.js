import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login.js'
import Register from './pages/register/Register.js'
import Home from './pages/home/Home.js'
import Admin from './pages/admin/Admin.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/home' Component={Home}/>
        <Route path='/' Component={Home}/>
        <Route path='/admin' Component={Admin}/>
      </Routes>
    </Router>
  )
}

export default App