import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Section from "../Section/Section";

const SingleRecipe = () => {
  const recipes = useSelector((state) => state.recipes);
  const id = useParams().id;

  const recipe = recipes.find((r) => r._id === id);

  return (
    <Section>
      {recipe && (
        <div className="recipe">
          <div className="recipe__image">
            <img src={recipe.image} alt="Project" />
          </div>
          <h4>{recipe.name}</h4>
          <div className="recipe__rating">{recipe.rating}</div>
          <div className="recipe__description">{recipe.description}</div>
        </div>
      )}
    </Section>
  );
};

export default SingleRecipe;
