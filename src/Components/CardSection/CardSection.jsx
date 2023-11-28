import Card from '../Card/Card';

import './CardSection.css';

const CardSection = () => {
  return (
    <div className="card-section">
      <h2>Why Choose us?</h2>
      <div className="card-container">
        <Card percent={98} />
        <Card percent={100} />
        <Card percent={100} />
      </div>
    </div>
  );
};

export default CardSection;
