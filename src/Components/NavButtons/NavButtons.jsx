import './NavButtons.css';

const NavButtons = ({ gap }) => {
  return (
    <div className="nav-btn-container" style={{ gap: gap }}>
      <button className="nav-btn">
        <a href="#">Home</a>
      </button>
      <button className="nav-btn">
        <a href="#attorneys">Attorneys</a>
      </button>
      <button className="nav-btn">
        <a href="#practice-areas">Practice Areas</a>
      </button>
      <button className="nav-btn">
        <a href="#about-us">About Us</a>
      </button>
    </div>
  );
};

export default NavButtons;
