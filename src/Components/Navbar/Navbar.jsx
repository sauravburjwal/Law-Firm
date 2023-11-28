import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src="nav-logo-icon.png" alt="Logo" />
        <p></p>
      </div>
      <div className="nav-btn-container">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Attorneys</button>
        <button className="nav-btn">Practice Areas</button>
        <button className="nav-btn">About Us</button>
      </div>
      <div className="nav-contact-btn">
        <button className="contact-btn">Contact Now</button>
      </div>
    </div>
  );
};

export default Navbar;
