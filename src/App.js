import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Login from './pages/login/Login.js'
import Register from './pages/register/Register.js'
import Home from './pages/home/Home.js'
import Profile from './pages/profile/Profile.js'
import Admin from './pages/admin/Admin.js'
import Navbar from './components/navbar/Navbar.js'
import Sidebar from './components/sidebar/Sidebar.js'

function App() {

  const currentUser = true

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{flex: 10}}>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser) return <Navigate to='/login'/>
    return children
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App