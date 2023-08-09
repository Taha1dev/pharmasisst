import React from 'react';
import './css/catCard.css';
const CategoriesCard = () => {
  return (
    <div className="container">
      <a className="card1" href="#">
        <h3>This is option 1</h3>
        <p className="small">
          Card description with lots of great facts and interesting details.
        </p>
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
  );
};

export default CategoriesCard;
