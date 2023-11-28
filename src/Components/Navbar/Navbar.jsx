import Logo from '../Logo/Logo';
import NavButtons from '../NavButtons/NavButtons';
import ContactButton from '../ContactButton/ContactButton';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
      <NavButtons gap="3rem" />
      <ContactButton />
    </nav>
  );
};

export default Navbar;
