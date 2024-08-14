import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Modal from '../common/modal/Modal';
import LogInRegister from './LogInRegister';

import styles from './LogInRegister.module.css';

function LogInRegisterModal({ close }) {
    const [isLogIn, setIsLogIn] = useState(true); 

    const modalHeader = (
        <div className={styles.header}>
            <button 
                className={isLogIn ? styles.focusClass : undefined}
                onClick={() => setIsLogIn(true)}
            >
                Log in
            </button>

            <button 
                className={isLogIn ? undefined : styles.focusClass}
                onClick={() => setIsLogIn(false)} 
            >
                Register
            </button>
        </div>
    );

    return (
        <Modal
            close={close} 
            header={modalHeader}
            content={<LogInRegister closeModal={close} isLogIn={isLogIn} />}
        />
    );
}

export default LogInRegisterModal;
