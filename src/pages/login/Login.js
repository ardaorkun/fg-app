import styles from './login.module.css'
import { useEffect, useState, useRef, useContext } from 'react'
import axios from '../../services/fg'
import AuthContext from '../../context/auth'
import jwtDecode from 'jwt-decode'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { setAuth } = useContext(AuthContext)
    const emailRef = useRef()
    const errorRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const cookies = new Cookies()

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        setError('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', {
                email: email,
                password: password
            })
            let token = res.data.token
            let decoded = await jwtDecode(token)
            let { id, role, username, createdAt } = decoded.user
            cookies.set('jwt', token, {
                expires: new Date(decoded.exp * 1000)
            })
            setAuth({ userID: id, role: role, username: username, token: token, createdAt: createdAt })
            setEmail('')
            setPassword('')
            navigate('/')
        } catch (error) {
            if (!error?.response) {
                setError('No Server Response')
            } else if (error.response?.status === 400) {
                setError('Missing email or password')
            } else if (error.response?.status === 401) {
                setError('Wrong email or password')
            } else {
                setError('Login Failed')
            }
            errorRef.current.focus()
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.login_box}>
                <div className={styles.login_header}>
                    <header>Login to Feedback Gamers</header>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.input_box}>
                        <input type='text' className={styles.input_field} placeholder='Email' autoComplete='off' ref={emailRef} onChange={(e) => setEmail(e.target.value)} value={email} required/>
                    </div>
                    <div className={styles.input_box}>
                        <input type='password' className={styles.input_field} placeholder='Password' autoComplete='off' onChange={(e) => setPassword(e.target.value)} value={password} required/>
                    </div>
                    <div className={styles.forgot}>
                        <section>
                            <input type='checkbox' id={styles.check}/>
                            <label htmlFor={styles.check}>Remember me</label>
                        </section>
                        <section>
                            <a href='/register'>Forgot password</a>
                        </section>
                    </div>
                    <div className={styles.input_submit}>
                        <button className={styles.submit_btn} id={styles.submit}></button>
                        <label htmlFor={styles.submit}>Sign In</label>
                    </div>
                </form>
                <section id={styles.error}>
                    <p ref={errorRef} aria-live="assertive">{error}</p>
                </section>
                <div className={styles.sign_up_link}>
                    <p>Don't have an account? <a href='/register'>Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login