import styles from './login.module.css'

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.login_box}>
                <div className={styles.login_header}>
                    <header>Login to Feedback Gamers</header>
                </div>
                <div className={styles.input_box}>
                    <input type='text' className={styles.input_field} placeholder='Email' autoComplete='off' required/>
                </div>
                <div className={styles.input_box}>
                    <input type='password' className={styles.input_field} placeholder='Password' autoComplete='off' required/>
                </div>
                <div className={styles.forgot}>
                    <section>
                        <input type='checkbox' id={styles.check}/>
                        <label htmlFor={styles.check}>Remember me</label>
                    </section>
                    <section>
                        <a href='#'>Forgot password</a>
                    </section>
                </div>
                <div className={styles.input_submit}>
                    <button className={styles.submit_btn} id={styles.submit}></button>
                    <label htmlFor={styles.submit}>Sign In</label>
                </div>
                <div className={styles.sign_up_link}>
                    <p>Don't have an account? <a href='/register'>Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login