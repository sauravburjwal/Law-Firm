import PracticeImageCard from '../PracticeImageCard/PracticeImageCard';
import './PracticeSection.css';

const PracticeSection = () => {
  return (
    <div className="practice-section" id="practice-areas">
      <h2>Area of Practices</h2>
      <div className="practice-section-images-container">
        <div className="image-container">
          <PracticeImageCard
            src="area-of-practices-image-1.png"
            text={'BUSINESS LAW'}
          />
          <PracticeImageCard
            src="area-of-practices-image-2.png"
            text={'Partnership LAW'}
          />
        </div>
        <div className="image-container">
          <PracticeImageCard
            src="area-of-practices-image-3.png"
            text={'REAL ESTATE LAW'}
          />
          <PracticeImageCard
            src="area-of-practices-image-4.png"
            text={'BUSINESS LAW'}
          />
        </div>
        <div className="image-container">
          <PracticeImageCard
            src="area-of-practices-image-5.png"
            text={'LANDLORD DISPUTES'}
          />
          <PracticeImageCard
            src="area-of-practices-image-6.png"
            text={'ELDER ABUSE'}
          />
        </div>
      </div>
    </div>
  );
};

export default PracticeSection;
