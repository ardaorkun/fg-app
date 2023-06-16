import { useContext, useEffect, useState } from 'react'
import Post from '../post/Post'
import styles from './profilePosts.module.css'
import axios from '../../services/fg'
import AuthContext from '../../context/auth'

const ProfilePosts = ({ userID }) => {

    const { auth } = useContext(AuthContext)

    const [posts, setPosts] = useState([])

    useEffect(() => {

        const getPostsOf = async () => {
            try {
                const res = await axios.get(`/post/get/author/${userID}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                setPosts(res.data)
            } catch (error) {
                return []
            }
        }

        getPostsOf()

    }, [userID, auth.token])

    return (
        <div className={styles.posts}>
            {posts.map(post => (
                <Post post={post} key={post._id}/>
            ))}
        </div>
    )
}
 
export default ProfilePosts