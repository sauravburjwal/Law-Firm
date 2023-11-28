import './PracticeImageCard.css';

const PracticeImageCard = ({ src, text }) => {
  return (
    <div className="practice-image-card">
      <img src={src} alt="Area Of Practices Image" />
      <p>{text}</p>
    </div>
  );
};

export default PracticeImageCard;
