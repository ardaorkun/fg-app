import Posts from '../../components/posts/Posts'
import styles from './home.module.css'

const Home = () => {
    
    return (
        <div className={styles.home}>
            <Posts />
        </div>
    )
}
 
export default Home