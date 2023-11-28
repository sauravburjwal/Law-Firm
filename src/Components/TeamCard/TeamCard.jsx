import './TeamCard.css';

const TeamCard = ({ src, name, casesNumber }) => {
  return (
    <div className="team-card">
      <img src={src} alt="Team Person Photo" />
      <div className="team-card-tex-container">
        <p className="name">{name}</p>
        <p className="cases-number">{casesNumber} Cases</p>
      </div>
    </div>
  );
};

export default TeamCard;
