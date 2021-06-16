import React from "react";

import "./Card.scss";

const Card = ({ cardTitle, recipeRating, imgSrc, routeTo, id }) => {
  return (
    <div className="card" onClick={() => routeTo(id)} role="presentation">
      <div className="card__media">
        <img src={imgSrc} alt="Title Card" />
      </div>
      <div className="card__footer">
        <p className="card__title">{cardTitle}</p>
        <p className="card__rating">{recipeRating}</p>
      </div>
    </div>
  );
};

export default Card;
