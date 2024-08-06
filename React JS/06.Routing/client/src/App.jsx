import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About/About';
import Pricing from './components/Pricing';
import Developers from './components/Developers';
import Articles from './components/Articles';
import ArticleContent from './components/ArticleContent';
import NotFound from './components/NotFound';
import Mission from './components/About/Mission';
import Contacts from './components/About/Contacts';
import OurTeam from './components/About/OurTeam';

function App() {

    return (
        <div className="bg-white">
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}>
                    <Route path='mission' element={<Mission /> } />
                    <Route path='contacts' element={<Contacts /> } />
                    <Route path='team' element={<OurTeam /> } />
                </Route>
                <Route path='/developers' element={<Developers />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/articles/:articleId' element={<ArticleContent />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/not-found' element={<NotFound /> } />
                <Route path='*' element={<NotFound /> } />
            </Routes>
            
        </div>
    );
}

export default App;
