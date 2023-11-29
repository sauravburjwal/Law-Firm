import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import AboutUs from './Components/AboutUs/AboutUs';
import CardSection from './Components/CardSection/CardSection';
import PracticeSection from './Components/PracticeSection/PracticeSection';
import TeamSection from './Components/TeamSection/TeamSection';
import SubscriptionSection from './Components/SubscriptionSection/SubscriptionSection';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <CardSection />
      <PracticeSection />
      <TeamSection />
      <SubscriptionSection />
      <Footer />
    </>
  );
}

export default App;
