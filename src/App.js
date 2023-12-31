import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Login from './pages/login/Login.js'
import Register from './pages/register/Register.js'
import Home from './pages/home/Home.js'
import Profile from './pages/profile/Profile.js'
import Admin from './pages/admin/Admin.js'
import Navbar from './components/navbar/Navbar.js'
import Sidebar from './components/sidebar/Sidebar.js'
import AuthContext from './context/auth.js'
import { useContext } from 'react'
import { IndexProvider } from './context/postsIndex.js'

function App() {
  const { auth } = useContext(AuthContext)

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex', backgroundColor: '#EDE7DE' }}>
          <Sidebar />
          <div style={{flex: 4}}>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!auth.token) return <Navigate to='/login'/>
    return children
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <ProtectedRoute>
            <IndexProvider>
              <Layout />
            </IndexProvider>
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