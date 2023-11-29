import './NavButtons.css';

const NavButtons = ({ gap }) => {
  return (
    <div className="nav-btn-container" style={{ gap: gap }}>
      <a className="nav-btn" href="#">
        Home
      </a>
      <a className="nav-btn" href="#attorneys">
        Attorneys
      </a>
      <a className="nav-btn" href="#practice-areas">
        Practice Areas
      </a>
      <a className="nav-btn" href="#about-us">
        About Us
      </a>
    </div>
  );
};

export default NavButtons;
