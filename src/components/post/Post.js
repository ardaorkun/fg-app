import styles from './post.module.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import { Link } from 'react-router-dom'
import Comments from '../comments/Comments'
import { useContext, useState } from 'react'
import AuthContext from '../../context/auth'
import axios from '../../services/fg'

const Post = ({post}) => {

    const { auth } = useContext(AuthContext)

    const [commentOpen, setCommentOpen] = useState(false)
    const [isLiked, setIsLiked] = useState()



    const handleClick = async () => {
        try {
            if (!isLiked) {
                await axios.put(`/post/like/${post._id}`, {}, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                console.log('liked')
                setIsLiked(true)
            } else {
                await axios.put(`/post/dislike/${post._id}`, {}, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                console.log('disliked')
                setIsLiked(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const calculateTimeElapsed = () => {
        const createdAt = new Date(post.createdAt)
        const currentTime = new Date()
        const timeDiff = Math.abs(currentTime - createdAt)
        const hoursElapsed = Math.floor(timeDiff / (1000 * 60 * 60))
        return hoursElapsed
      }
    
      const hoursElapsed = calculateTimeElapsed()

    return (
        <div className={styles.post}>
            <div className={styles.container}>
                <div className={styles.user}>
                    <div className={styles.user_info}>
                        <div className={styles.details}>
                            <Link to={`/profile/${post.author._id}`} style={{ textDecoration:"none", color:"inherit" }}>
                            <span className={styles.username}>{post.author.username}</span>
                            </Link>
                            <span className={styles.date}>{hoursElapsed} hours ago</span>
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                </div>
                <div className={styles.content}>
                    <h3 style={{ marginBottom: '5px' }}>{post.title}</h3>
                    <h5 style={{ marginBottom: '5px' }}>{post.game.name}</h5>
                    <p>{post.content}</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.item} onClick={handleClick}>
                        {isLiked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        {post.likes.length} Likes
                    </div>
                    <div className={styles.item} onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        {post.comments.length} Comments
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    )
}
 
export default Post