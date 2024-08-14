import styles from './LogInRegister.module.css';

function LogIn() {
    return ( 
        <div className={styles.container}>
            <form className={styles.login}>
                <div className={styles.data}>
                    <div className="field">
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="email" 
                            id='email' 
                            name='email' 
                            placeholder='pesho@abv.bg'
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="password">Password: </label>
                        <input 
                            type="password"
                            id='password' 
                            name='password' 
                        />
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button type="submit" className='submitBtn'>Login</button>
                    <button className='cancelBtn'>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default LogIn;