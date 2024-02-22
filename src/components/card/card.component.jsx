import "./card.styles.scss";

const Card = ({ image, children }) => {
  return (
    <div className="card">
      <img src={image} alt="Special dish"></img>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
