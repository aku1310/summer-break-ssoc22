import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Sponsor from './components/Sponsor';
import Timeline from './components/Timeline';
import TimelineComingSoon from './components/TimelineComingSoon';

function App() {
  return (
    <div>
      <Header/>
      <Landing/>
      <About/>
      <TimelineComingSoon/>
      {/* <Timeline/> */}
      <Sponsor/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
