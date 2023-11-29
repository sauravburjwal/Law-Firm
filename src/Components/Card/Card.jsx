import './Card.css';

const Card = ({ image, title, post, showBtn }) => {
  return (
    <div className="card">
      <img src={image} alt="Gift Image" />
      <h3>{title}</h3>
      <p className="card-post">{post}</p>
      <p>
        Amet minim mollit non deserunt ullamco est <br />
        sit aliqua dolor do amet sint. Velit officia <br />
        consequatduis enim velit mollit Exer. sit <br />
        {post ? 'aliqua dolor do amet sint. Velit officia' : null}
      </p>
      {showBtn ? <button>Read More</button> : null}
    </div>
  );
};

export default Card;
