import { useContext, useState } from 'react'
import styles from './comments.module.css'
import axios from '../../services/fg'
import AuthContext from '../../context/auth'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const Comments = ({ comments, postID, setCommentAmount, commentAmount }) => {

    const { auth } = useContext(AuthContext)

    const [newComment, setNewComment] = useState('')

    const [commentsArray, setCommentsArray] = useState(comments)

    const calculateTimeElapsed = (createdAt) => {
        const createdTime = new Date(createdAt)
        const currentTime = new Date()
        const timeDiff = Math.abs(currentTime - createdTime)
        const hoursElapsed = Math.floor(timeDiff / (1000 * 60 * 60))
        return hoursElapsed
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/post/comment/create', {
                postID: postID,
                content: newComment
            }, { headers: { Authorization: `Bearer ${auth.token}` } })
            let data = res.data
            data.author = {
                _id: res.data.author,
                username: auth.username
            }
            const newCommentData = data
            setNewComment('')
            setCommentsArray((prevComments) => [...prevComments, newCommentData])
            setCommentAmount(++commentAmount)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (commentID) => {
        try {
            const res = await axios.delete(`/post/comment/delete/${commentID}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            })
            if (res.status === 202) {
                setCommentsArray((prevComments) =>
                prevComments.filter((comment) => comment._id !== commentID))
                setCommentAmount(--commentAmount)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.comments}>
            <div className={styles.write}>
                <form onSubmit={handleSubmit} className={styles.write_form}>
                    <input type='text' placeholder='Write a comment.' autoComplete='off' onChange={(e) => setNewComment(e.target.value)} value={newComment} required></input>
                    <button>Send</button>
                </form>
            </div>
            {commentsArray.map(comment => (
                <div className={styles.comment} key={comment._id}>
                    <div className={styles.info}>
                        <span>{comment.author.username}</span>
                        <p>{comment.content}</p>
                    </div>
                    <div className={styles.right}>
                        <div onClick={() => handleDelete(comment._id)}>
                            {auth.userID === comment.author._id && <DeleteOutlineOutlinedIcon style={{ color:"gray", cursor:"pointer" }}/>}
                        </div>
                        <span className={styles.date}>{calculateTimeElapsed(comment.createdAt)} hours ago</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comments