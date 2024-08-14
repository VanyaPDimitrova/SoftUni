import LogIn from './LogIn';
import Register from './Register';
import styles from './LogInRegister.module.css';

function LogInRegister({ isLogIn }) {
    return (
        <>
            {isLogIn
                ? <LogIn />
                : <Register />
            }
        </>
    );
}

export default LogInRegister;
