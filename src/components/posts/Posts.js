import Post from '../post/Post'
import styles from './posts.module.css'
import axios from '../../services/fg'

const Posts = () => {

    const posts = []

    return (
        <div className={styles.posts}>
            {posts.map(post => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    ) 
}
 
export default Posts