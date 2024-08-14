import LogIn from './LogIn';
import Register from './Register';
import styles from './LogInRegister.module.css';

function LogInRegister({ closeModal, isLogIn }) {
    return (
        <>
            {isLogIn
                ? <LogIn closeModal={closeModal} />
                : <Register closeModal={closeModal} />
            }
        </>
    );
}

export default LogInRegister;
