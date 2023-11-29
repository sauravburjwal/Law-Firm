import './SubscriptionSection.css';

const SubscriptionSection = () => {
  return (
    <div className="subscription-section">
      <div className="subscription-container">
        <h2>Subscribe Our Newsletter</h2>
        <div className="subscription-form-container">
          <input
            type="text"
            name="name"
            placeholder="Name:"
            className="subscription-name-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="subscription-email-input"
          />
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
