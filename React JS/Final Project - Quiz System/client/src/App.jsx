import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import { AuthContext } from './context/AuthContext';


function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
    };

    return (
        <AuthContext.Provider value={contextData}>
            <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Contacts' element={<Contacts />} />
                    </Routes>
                </main>
            <Footer />
        </AuthContext.Provider>
    );
}

export default App;
