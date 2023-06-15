import styles from './register.module.css'
import { useNavigate } from 'react-router-dom'
import axios from '../../services/fg'
import { useEffect, useState, useRef } from 'react'

const Register = () => {
    const navigate = useNavigate()
    const usernameRef = useRef()
    const errorRef = useRef()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordSeq, setPasswordSeq] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    useEffect(() => {
        setError('')
    }, [username, email, password, passwordSeq])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (password === passwordSeq) {
                await axios.post('/user/register',{
                    username: username,
                    email: email,
                    password: password
                })
                navigate('/login')
            } else {
                setError('Passwords must be identical')
            }
        } catch (error) {
            if (!error?.response) {
                setError('No Server Response')
            } else if (error.response?.status === 400) {
                setError('Missing username, email or password')
            } else {
                setError('Try another username and email')
            }
            errorRef.current.focus()
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.register_box}>
                <div className={styles.register_header}>
                    <header>Register to Feedback Gamers</header>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.input_box}>
                        <input type='text' className={styles.input_field} placeholder='Username' autoComplete='off' ref={usernameRef} onChange={(e) => setUsername(e.target.value)} value={username} required/>
                    </div>
                    <div className={styles.input_box}>
                        <input type='text' className={styles.input_field} placeholder='Email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} required/>
                    </div>
                    <div className={styles.input_box}>
                        <input type='password' className={styles.input_field} placeholder='Password' autoComplete='off' onChange={(e) => setPassword(e.target.value)} value={password} required/>
                    </div>
                    <div className={styles.input_box}>
                        <input type='password' className={styles.input_field} placeholder='Confirm Password' autoComplete='off' onChange={(e) => setPasswordSeq(e.target.value)} value={passwordSeq} required/>
                    </div>
                    <div className={styles.input_submit}>
                        <button className={styles.submit_btn} id={styles.submit}></button>
                        <label htmlFor={styles.submit}>Sign Up</label>
                    </div>
                </form>
                <section id={styles.error}>
                    <p ref={errorRef} aria-live="assertive">{error}</p>
                </section>
                <div className={styles.sign_in_link}>
                    <p>Already have an account? <a href='/login'>Sign In</a></p>
                </div>
            </div>
        </div>
    )
}
 
export default Register