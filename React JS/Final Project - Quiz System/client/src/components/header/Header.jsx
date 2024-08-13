import { Link, NavLink } from 'react-router-dom';

import useModalState from '../common/modal/useModalState';
import useNavigation from './useNavigation';

import LogInRegisterModal from '../logInRegister/LogInRegisterModal';

import QuizLogo from './QuizLogo.png';
import styles from './Header.module.css';

function Header({ user }) {
    const { isModalOpen, openModal, closeModal } = useModalState();
    const nav = useNavigation(user);
    
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src={QuizLogo} alt="quiz logo" className={styles.logo} />
                        </Link>
                    </div>

                    <div className={styles.navigation}>
                        {nav.map((item) => (
                            <NavLink 
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) => isActive ? styles.active  : ''}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>


                    <div className={styles.login}>
                        <Link onClick={openModal} >
                            Log in/Register
                        </Link>
                    </div>
                </nav>
            </header>

            <LogInRegisterModal open={isModalOpen} close={closeModal} />
        </>
    );
}

export default Header;