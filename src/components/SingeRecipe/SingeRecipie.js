import React from "react";
import Section from "../Section/Section";

const SingleRecipe = ({
  imgSrc,
  recipeName,
  recipeRating,
  recipeDescription,
}) => {
  return (
    <Section>
      <div className="recipe">
        <div className="recipe__image">
          <img src={imgSrc} alt="Project" />
        </div>
        <h4>{recipeName}</h4>
        <div className="recipe__rating">{recipeRating}</div>
        <div className="recipe__description">{recipeDescription}</div>
      </div>
    </Section>
  );
};

export default SingleRecipe;
