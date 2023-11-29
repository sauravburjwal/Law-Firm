import Card from '../Card/Card';

import './CardSection.css';

const CardSection = () => {
  return (
    <div className="card-section">
      <h2>Why Choose us?</h2>
      <div className="card-container">
        <Card
          image={'card-gift-image.png'}
          title={'98% Success Rate'}
          showBtn
        />
        <Card
          image={'card-gift-image.png'}
          title={'100% Success Rate'}
          showBtn
        />
        <Card
          image={'card-gift-image.png'}
          title={'100% Success Rate'}
          showBtn
        />
      </div>
    </div>
  );
};

export default CardSection;
