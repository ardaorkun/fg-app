import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import Avatar from '../../assets/images/avatar.png'
import AuthContext from '../../context/auth'
import { useContext } from 'react'

const Navbar = () => {

    const { auth } = useContext(AuthContext)
    
    const username = auth.username

    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <Link to='/' style={{ textDecoration:"none" }}>
                <span>Feedback Gamers</span>
                </Link>
                <HomeOutlinedIcon style={{ cursor:"pointer" }}/>
                <DarkModeOutlinedIcon style={{ cursor:"pointer" }}/>
                <div className={styles.search}>
                    <SearchOutlinedIcon />
                    <input type='text' placeholder='Search...'/>
                </div>
            </div>
            <div className={styles.right}>
                <PersonOutlineOutlinedIcon style={{ cursor:"pointer" }}/>
                <div className={styles.user}>
                    <img src={Avatar} alt=''/>
                    <span>{username}</span>
                </div>
            </div>
        </div>
    )
}
 
export default Navbar