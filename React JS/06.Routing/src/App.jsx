import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';

function App() {

    return (
        <div className="bg-white">
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/pricing' element={<Pricing />} />
            </Routes>
            
        </div>
    );
}

export default App;
