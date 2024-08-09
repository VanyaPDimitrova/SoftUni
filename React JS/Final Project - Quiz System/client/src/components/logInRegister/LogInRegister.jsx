import LogIn from './LogIn';
import Register from './Register';
import styles from './LogInRegister.module.css';

function LogInRegister() {
    return (
        <section className={styles.logIn}>
            <LogIn />
            <Register />
        </section>
    );
}

export default LogInRegister;
