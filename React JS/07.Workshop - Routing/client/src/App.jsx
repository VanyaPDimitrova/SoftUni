import { Route, Routes } from 'react-router-dom';

import Header from './header/Header';
import Home from './home/Home';
import Login from './login/Login';
import Register from './register/Register';
import Games from './games/Games';
import GameCreate from './createGame/GameCreate';

function App() {
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/games' element={<Games />} />
                    <Route path='/games/create' element={<GameCreate />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
