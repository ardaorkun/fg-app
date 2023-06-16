import styles from './profile.module.css'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/auth'
import { useParams } from 'react-router-dom'
import ProfilePosts from '../../components/profilePosts/ProfilePosts'
import axios from '../../services/fg'

const Profile = () => {

    const { auth } = useContext(AuthContext)

    const { id } = useParams()

    const [user, setUser] = useState({})



    useEffect(() => {

        const getUser = async () => {
            try {
                const res = await axios.get(`/user/get/${id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                setUser(res.data)
            } catch (error) {
                console.log('ERROR: COULD NOT GET THE USER')
            }
        }

        getUser()

    }, [auth.token, id])

    const formatJoinDate = (dateString) => {
        const date = new Date(dateString)
        const options = { year: 'numeric', month: 'long' }
        const formatter = new Intl.DateTimeFormat('en-US', options)
        return formatter.format(date)
    }

    return (
        <div className={styles.profile}>
            <div className={styles.profile_container}>
                <div className={styles.user_info}>
                    <div className={styles.center}>
                        {user.username && (
                        <span style={{ color: '#002B5B' }}>{user.username}</span>
                        )}
                        {user.createdAt && (
                        <p>Joined in {formatJoinDate(user.createdAt)}</p>
                        )}
                    </div>
                </div>
                <ProfilePosts userID={id}/>
            </div>
        </div>
    )
}
 
export default Profile