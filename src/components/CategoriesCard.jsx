import './css/catCard.css';
const CategoriesCard = ({ name }) => {
  return (
    <div className="container">
      <a className="card1" href="#">
        <h3>{name}</h3>
        <p className="small">Click me to see my Meds </p>
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
  );
};

export default CategoriesCard;
