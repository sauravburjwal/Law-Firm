import './Card.css';

const Card = ({ percent }) => {
  return (
    <div className="card">
      <img src="card-gift-image.png" alt="Gift Image" />
      <h3>{percent}% Success Rate</h3>
      <p>
        Amet minim mollit non deserunt ullamco est <br />
        sit aliqua dolor do amet sint. Velit officia <br /> consequatduis enim
        velit mollit Exer.
      </p>
      <button>Read More</button>
    </div>
  );
};

export default Card;
