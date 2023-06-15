import styles from './sidebar.module.css'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import Avatar from '../../assets/images/avatar.png'
import Cookies from 'universal-cookie'
import AuthContext from '../../context/auth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const cookie = new Cookies()
    const { auth, setAuth } = useContext(AuthContext)
    const navigate = useNavigate()

    const username = auth.username

    const handleLogout = () => {
        cookie.remove('jwt')
        setAuth({})
        navigate('/login')
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.user}>
                        <img src={Avatar} alt=''/>
                        <span>{username}</span>
                    </div>
                    <hr/>
                    <div className={styles.item}>
                        <CottageOutlinedIcon />
                        <span>Home</span>
                    </div>
                    <div className={styles.item}>
                        <WhatshotOutlinedIcon />
                        <span>Popular</span>
                    </div>
                    <div className={styles.item}>
                        <AccessTimeOutlinedIcon />
                        <span>Newest</span>
                    </div>
                    <hr/>
                    <div className={styles.item}>
                        <LogoutOutlinedIcon />
                        <span onClick={handleLogout}>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Sidebar