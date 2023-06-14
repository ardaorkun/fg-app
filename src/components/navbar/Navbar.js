import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import Avatar from '../../assets/images/avatar.png'

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <Link to='/' style={{ textDecoration:"none" }}>
                <span>Feedback Gamers</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <div className={styles.search}>
                    <SearchOutlinedIcon />
                    <input type='text' placeholder='Search...'/>
                </div>
            </div>
            <div className={styles.right}>
                <PersonOutlineOutlinedIcon />
                <div className={styles.user}>
                    <img src={Avatar} alt=''/>
                    <span>dreamyy</span>
                </div>
            </div>
        </div>
    )
}
 
export default Navbar