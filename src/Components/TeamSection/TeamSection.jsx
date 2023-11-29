import TeamCard from '../TeamCard/TeamCard';
import './TeamSection.css';

const TeamSection = () => {
  return (
    <div className="team-section" id="attorneys">
      <h2>Our Team</h2>
      <div className="team-card-container">
        <TeamCard
          src={'team-person-1.png'}
          name={'Danial Def'}
          casesNumber={301}
        />
        <TeamCard
          src={'team-person-2.png'}
          name={'Sanfole'}
          casesNumber={850}
        />
        <TeamCard
          src={'team-person-3.png'}
          name={'Cesforila'}
          casesNumber={470}
        />
        <TeamCard
          src={'team-person-4.png'}
          name={'Colleen'}
          casesNumber={180}
        />
        <TeamCard
          src={'team-person-5.png'}
          name={'Haldone'}
          casesNumber={212}
        />
        <TeamCard
          src={'team-person-6.png'}
          name={'Nik Jeo'}
          casesNumber={350}
        />
      </div>
    </div>
  );
};

export default TeamSection;
