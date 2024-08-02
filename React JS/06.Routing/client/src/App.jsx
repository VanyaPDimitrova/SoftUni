import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Developers from './components/Developers';
import Articles from './components/Articles';
import ArticleContent from './components/ArticleContent';

function App() {

    return (
        <div className="bg-white">
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/developers' element={<Developers />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/articles/:articleId' element={<ArticleContent />} />
                <Route path='/pricing' element={<Pricing />} />
            </Routes>
            
        </div>
    );
}

export default App;
