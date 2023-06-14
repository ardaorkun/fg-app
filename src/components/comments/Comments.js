import styles from './comments.module.css'

const Comments = () => {

    //TEMP
    const comments = [
        {
            id: 1,
            content: 'Harbidenn.',
            author: '456',
            authorUsername: 'dryzee'
        },
        {
            id: 2,
            content: 'Ağla',
            author: '123',
            authorUsername: 'frezo'
        },
        {
            id: 3,
            content: 'Rocket League gelin.',
            author: '789',
            authorUsername: 'dreamyy'
        },
    ]

    return (
        <div className={styles.comments}>
            <div className={styles.write}>
                <input type='text' placeholder='Write a comment.'></input>
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className={styles.comment}>
                    <div className={styles.info}>
                        <span>{comment.authorUsername}</span>
                        <p>{comment.content}</p>
                    </div>
                    <span className={styles.date}>few minutes ago</span>
                </div>
            ))}
        </div>
    )
}
 
export default Comments