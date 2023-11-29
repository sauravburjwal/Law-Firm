import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import AboutUs from './Components/AboutUs/AboutUs';
import CardSection from './Components/CardSection/CardSection';
import PracticeSection from './Components/PracticeSection/PracticeSection';
import TestimonialSection from './Components/TestimonialSection/TestimonialSection';
import TeamSection from './Components/TeamSection/TeamSection';
import FAQsSection from './Components/FAQsSection/FAQsSection';
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
      <TestimonialSection />
      <TeamSection />
      <FAQsSection />
      <SubscriptionSection />
      <Footer />
    </>
  );
}

export default App;
