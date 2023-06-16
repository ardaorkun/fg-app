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
                <Link to={`/`} style={{ textDecoration:"none" }}>
                <span>Feedback Gamers</span>
                </Link>
                <Link to={`/`} style={{ color: "inherit", textDecoration: "none", lineHeight:"0" }}>
                    <HomeOutlinedIcon style={{ cursor:"pointer", color:"black" }}/>
                </Link>
                <DarkModeOutlinedIcon style={{ cursor:"pointer" }}/>
                <div className={styles.search}>
                    <SearchOutlinedIcon />
                    <input type='text' placeholder='Search...'/>
                </div>
            </div>
            <div className={styles.right}>
                <Link to={`/profile/${auth.userID}`} style={{ color: "inherit", textDecoration: "none", lineHeight:"0" }}>
                    <PersonOutlineOutlinedIcon style={{ cursor:"pointer", color:"black" }}/>
                </Link>
                <div className={styles.user}>
                    <img src={Avatar} alt=''/>
                    <Link to={`/profile/${auth.userID}`}>
                    <span>{username}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
 
export default Navbar