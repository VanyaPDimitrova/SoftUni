import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';


function App() {

    return (
        <>
            <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Contacts' element={<Contacts />} />
                    </Routes>
                </main>
            <Footer />
        </>
    );
}

export default App;
