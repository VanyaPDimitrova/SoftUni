import About from './About';
import Contacts from './Contacts';
import Home from './Home';
import LogIn from './LogIn';
import styles from './Main.module.css';
import { Routes, Route } from 'react-router-dom';

function Main() {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contacts' element={<Contacts />} />
                <Route path='/LogIn' element={<LogIn />} />
            </Routes>
        </main>
    );
}

export default Main;