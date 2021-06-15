import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setActiveRecipe } from "../../Redux/reducers/recipeReducer";
import { showModal } from "../../Redux/reducers/modalReducer";

import Section from "../Section/Section";
import Button from "../Button/Button";

const SingleRecipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const id = useParams().id;

  const recipe = recipes.find((r) => r._id === id);

  const handleClick = () => {
    dispatch(setActiveRecipe(recipe));
    dispatch(showModal());
  };
  return (
    <Section>
      <Button text="edit" variant="primary" handleClick={handleClick} />
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
