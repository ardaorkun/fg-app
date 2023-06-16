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

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [selectedGame, setSelectedGame] = useState('')
    const [games, setGames] = useState([])

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

    useEffect(() => {

        const getGames = async () => {
            try {
                const res = await axios.get('/game/get', {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                setGames(res.data)
            } catch (error) {
                console.log('ERROR: COULD NOT FETCH THE GAMES')
            }
        }

        getGames()

    }, [auth.token])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/post/create', {
                title,
                content,
                gameID: selectedGame
            }, { headers: { Authorization: `Bearer ${auth.token}` } })
            if (res.status === 201) {
                window.location.reload()
            }
        } catch (error) {
            console.log('ERROR: COULD NOT CREATE THE POST')
        }
    }

    return (
        <div className={styles.posts}>
            <div className={styles.post}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <span>Create a new post</span>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)} required>
                                <option value="">Select a game</option>
                                {games.map((game) => (
                                    <option key={game._id} value={game._id}>
                                        {game.name}
                                    </option>
                                ))}
                            </select>
                            <input type='text' placeholder='Write a title' autoComplete='off' onChange={(e) => setTitle(e.target.value)} value={title} required></input>
                            <input type='text' placeholder='Write your thoughts' autoComplete='off' onChange={(e) => setContent(e.target.value)} value={content} required></input>
                            <button>Post</button>
                        </form>
                    </div>
                </div>
            </div>
            {posts.map(post => (
                <Post post={post} key={post._id}/>
            ))}
        </div>
    )
}
 
export default Posts