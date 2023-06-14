import styles from './profile.module.css'
import Posts from '../../components/posts/Posts'

const Profile = () => {

    return (
        <div className={styles.profile}>
            <div className={styles.profile_container}>
                <div className={styles.user_info}>
                    <div className={styles.center}>
                        <span>dreamyy</span>
                        <p>Joined in 2023</p>
                    </div>
                </div>
                <Posts /> 
            </div>
        </div>
    )
}
 
export default Profile