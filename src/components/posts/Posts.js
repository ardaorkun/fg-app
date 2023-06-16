import { useContext, useEffect, useState } from 'react'
import Post from '../post/Post'
import styles from './posts.module.css'
import axios from '../../services/fg'
import { IndexContext } from '../../context/postsIndex'
import AuthContext from '../../context/auth'

const Posts = () => {

    const { index } = useContext(IndexContext)
    const { auth } = useContext(AuthContext)

    const [posts, setPosts] = useState([])

    useEffect(() => {

        const getLatestPosts = async () => {
            try {
                const res = await axios.get('/post/get/latest', {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                setPosts(res.data)
            } catch (error) {
                return []
            }
        }
    
        const getPopularPosts = async () => {
            try {
                const res = await axios.get('/post/get/popular', {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                setPosts(res.data)
            } catch (error) {
                return []
            }
        }

        if (index === 1 || index === 3) {
            getLatestPosts()
        }
        else if (index === 2) {
            getPopularPosts()
        }

    }, [index, auth.token])

    return (
        <div className={styles.posts}>
            {posts.map(post => (
                <Post post={post} key={post._id}/>
            ))}
        </div>
    )
}
 
export default Posts