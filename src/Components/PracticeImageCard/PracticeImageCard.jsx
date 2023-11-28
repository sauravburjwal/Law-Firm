import './PracticeImageCard.css';

const PracticeImageCard = ({ src, text }) => {
  return (
    <div className="practice-image-card">
      <div>
        <img src={src} alt="Area Of Practices Image" />
      </div>
      <p className="par">{text}</p>
    </div>
  );
};

export default PracticeImageCard;
