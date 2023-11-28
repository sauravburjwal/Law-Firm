import Logo from './../Logo/Logo';
import NavButtons from './../NavButtons/NavButtons';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-primary-container">
        <Logo />
        <NavButtons gap="5rem" />
        <SocialMediaIcons />
      </div>
      <div className="footer-secondary-container">
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
