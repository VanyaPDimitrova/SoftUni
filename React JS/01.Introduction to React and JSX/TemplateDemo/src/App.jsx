import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Download from './components/DownloadSection/Download';
import Faq from './components/Faq/Faq';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer';
import Team from './components/Team/Team';
import Testimonial from './components/Testimonial/Testimonial';
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