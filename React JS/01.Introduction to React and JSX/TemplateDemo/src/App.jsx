import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact';
import Download from './components/Download';
import Faq from './components/Faq';
import Feature from './components/Features/Feature';
import Footer from './components/Footer';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import VideoSection from './components/VideoSection';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />

      <Banner />

      <About />

      <VideoSection />

      <Feature />

      <Team />

      <Testimonial />

      <Faq />

      <Contact />

      <Download />

      <Footer />
    </>
  )
}

export default App;