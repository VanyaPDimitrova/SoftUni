import { Link, NavLink } from 'react-router-dom';

import useModalState from '../common/modal/useModalState';
import useNavigation from './useNavigation';

import LogInRegisterModal from '../logInRegister/LogInRegisterModal';

import QuizLogo from './QuizLogo.png';
import styles from './Header.module.css';

function Header({ user }) {
    const { isModalOpen, openModal, closeModal } = useModalState();
    const navigation = useNavigation(user);

    const logoutUser = () => {
        // TODO: ...
    };
    
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <div>
                        <Link to="/">
                            <img src={QuizLogo} alt="quiz logo" className={styles.logo} />
                        </Link>
                    </div>

                    <div className={styles.navigation}>
                        {navigation.map((item) => (
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
                        {!user
                            ? <Link onClick={openModal} >
                                Log in/Register
                            </Link>
                            : <Link onClick={logoutUser} >
                                Log Out
                            </Link>
                        }
                    </div>
                </nav>
            </header>
            {isModalOpen &&
                <LogInRegisterModal close={closeModal} />
            }
        </>
    );
}

export default Header;