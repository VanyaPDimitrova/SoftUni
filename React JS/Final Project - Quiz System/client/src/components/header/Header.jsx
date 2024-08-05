import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import QuizLogo from './QuizLogo.png';

const navigation = [
    {name: 'Home' , href: '/'},
    {name: 'About' , href: '/about'},
    {name: 'Contacts' , href: '/contacts'},
];

function Header() {
    return (
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
                            className={({ isActive }) => isActive ? styles.active : ''}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>


                <div className={styles.login}>
                    <Link to="/login" >
                        Log in <span>&rarr;</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;