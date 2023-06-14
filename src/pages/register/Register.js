import styles from './register.module.css'

const Register = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.register_box}>
                <div className={styles.register_header}>
                    <header>Register to Feedback Gamers</header>
                </div>
                <div className={styles.input_box}>
                    <input type='text' className={styles.input_field} placeholder='Username' autoComplete='off' required/>
                </div>
                <div className={styles.input_box}>
                    <input type='text' className={styles.input_field} placeholder='Email' autoComplete='off' required/>
                </div>
                <div className={styles.input_box}>
                    <input type='password' className={styles.input_field} placeholder='Password' autoComplete='off' required/>
                </div>
                <div className={styles.input_box}>
                    <input type='password' className={styles.input_field} placeholder='Confirm Password' autoComplete='off' required/>
                </div>
                <div className={styles.input_submit}>
                    <button className={styles.submit_btn} id={styles.submit}></button>
                    <label htmlFor={styles.submit}>Sign Up</label>
                </div>
                <div className={styles.sign_in_link}>
                    <p>Already have an account? <a href='/login'>Sign In</a></p>
                </div>
            </div>
        </div>
    )
}
 
export default Register