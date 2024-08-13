// import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useModalState from '../common/modal/useModalState';

import styles from './Header.module.css';

import QuizLogo from './QuizLogo.png';
import LogInRegisterModal from '../logInRegister/LogInRegisterModal';

const navigation = [
    {name: 'Home' , href: '/'},
    {name: 'Contacts' , href: '/contacts'},
];


function Header() {
    const { isModalOpen, openModal, closeModal } = useModalState();
    
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
                        <Link onClick={openModal} >
                            Log in/Register
                        </Link>
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