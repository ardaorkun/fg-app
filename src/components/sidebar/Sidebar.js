import styles from './sidebar.module.css'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import Avatar from '../../assets/images/avatar.png'

const Sidebar = () => {

    return (
        <div className={styles.sidebar}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.user}>
                        <img src={Avatar} alt=''/>
                        <span>dreamyy</span>
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
                </div>
            </div>
        </div>
    )
}
 
export default Sidebar