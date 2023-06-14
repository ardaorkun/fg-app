import styles from './post.module.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import { Link } from 'react-router-dom'
import Comments from '../comments/Comments'
import { useState } from 'react'

const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false)

    //TEMP
    const liked = false

    return (
        <div className={styles.post}>
            <div className={styles.container}>
                <div className={styles.user}>
                    <div className={styles.user_info}>
                        <div className={styles.details}>
                            <Link to={`/profile/${post.author}`} style={{ textDecoration:"none", color:"inherit" }}>
                            <span className={styles.username}>{post.authorUsername}</span>
                            </Link>
                            <span className={styles.date}>1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                </div>
                <div className={styles.content}>
                    <h3 style={{ marginBottom: '5px' }}>{post.title}</h3>
                    <h5 style={{ marginBottom: '5px' }}>{post.game}</h5>
                    <p>{post.content}</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.item}>
                        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        0 Likes
                    </div>
                    <div className={styles.item} onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        0 Comments
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    )
}
 
export default Post