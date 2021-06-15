import React from "react";
import { FaStar } from "react-icons/fa";

import "./Card.scss";

const Card = ({ cardTitle, recipeRating, imgSrc, handleClick }) => {
  return (
    <div className="card" onClick={handleClick} role="presentation">
      <div className="card__media">
        <img src={imgSrc} alt="Title Card" />
      </div>
      <div className="card__footer">
        <p className="card__title">{cardTitle}</p>
        <FaStar />
      </div>
    </div>
  );
};

export default Card;
