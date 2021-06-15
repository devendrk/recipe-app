import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addRecipes } from "../../Redux/reducers/recipeReducer";
import { hideModal } from "../../Redux/reducers/modalReducer";
import Button from "../Button/Button";

import "./Form.scss";

const Form = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    rating: 0,
    image: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRecipes(recipe));
    setRecipe({
      name: "",
      description: "",
      rating: 0,
      image: "",
    });
    dispatch(hideModal());
  };

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        className="form__input"
        placeholder="Recipe name"
        value={recipe.name}
        type="text"
        name="name"
        required
      />
      <input
        onChange={handleChange}
        className="form__input"
        placeholder="recipe rating"
        max="5"
        min="0"
        value={recipe.rating}
        type="number"
        name="rating"
        required
      />
      <input
        onChange={handleChange}
        className="form__input"
        placeholder="image url"
        value={recipe.imageUrl}
        type="text"
        name="image"
      />
      <textarea
        onChange={handleChange}
        rows={10}
        className="form__textarea"
        placeholder=" please write the recepie process here"
        value={recipe.description}
        name="description"
      />
      <Button variant="primary" text="add recepie" />
    </form>
  );
};

export default Form;
