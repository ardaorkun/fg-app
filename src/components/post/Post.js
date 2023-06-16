import styles from './post.module.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { Link } from 'react-router-dom'
import Comments from '../comments/Comments'
import { useContext, useState } from 'react'
import AuthContext from '../../context/auth'
import axios from '../../services/fg'

const Post = ({post}) => {

    const { auth } = useContext(AuthContext)

    const initialLike = post.likes.some((like) => like.username === auth.username)
    const [isLiked, setIsLiked] = useState(initialLike)
    let [likeAmount, setLikeAmount] = useState(post.likes.length)
    
    const [commentOpen, setCommentOpen] = useState(false)
    let [commentAmount, setCommentAmount] = useState(post.comments.length)

    const handleClick = async () => {
        try {
            if (!isLiked) {
                await axios.put(`/post/like/${post._id}`, {}, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                setIsLiked(true)
                setLikeAmount(++likeAmount)
            } else {
                await axios.put(`/post/dislike/${post._id}`, {}, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                setIsLiked(false)
                setLikeAmount(--likeAmount)
            }
        } catch (error) {
            console.log('ERROR: COULD NOT LIKE OR DISLIKE')
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

    const handleDelete = async (postID) => {
        try {
            const res = await axios.delete(`/post/delete/${postID}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            })
            if (res.status === 202) {
                window.location.reload()
            }
        } catch (error) {
            console.log('ERROR: COULD NOT DELETE THE POST')
        }
    }

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
                    <div>
                        <MoreHorizOutlinedIcon />
                        {post.author._id === auth.userID && (
                            <div onClick={() => handleDelete(post._id)}>
                                <DeleteOutlineOutlinedIcon style={{ cursor: "pointer" }} />
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.content}>
                    <h3 style={{ marginBottom: '5px' }}>{post.title}</h3>
                    <h5 style={{ marginBottom: '5px' }}>{post.game && post.game.name}</h5>
                    <p>{post.content}</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.item} onClick={handleClick}>
                        {isLiked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        {likeAmount} Likes
                    </div>
                    <div className={styles.item} onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        {commentAmount} Comments
                    </div>
                </div>
                {commentOpen && <Comments comments={post.comments} postID={post._id} setCommentAmount={setCommentAmount} commentAmount={commentAmount}/>}
            </div>
        </div>
    )
}
 
export default Post