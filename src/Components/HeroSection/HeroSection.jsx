import { IoMdMail } from 'react-icons/io';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-container">
        <div className="hero-section-text-container">
          <h1>
            You don’t have to <br />
            <span> Fight them Alone.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            <br />
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            <br />
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div>
            <form className="mail-section">
              <div>
                <div className="mail-icon">
                  <IoMdMail />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your eamil address"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Let’s Talk
              </button>
            </form>
          </div>
        </div>
        <div className="hero-section-image-container">
          <img src="hero-image.png" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
