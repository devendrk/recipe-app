import React from "react";
import Modal from "react-modal";

import Button from "../Button/Button";

import "./Form.scss";

const Form = ({
  handleSubmit,
  recipeName,
  recipeRating,
  recipeDescription,
  imageUrl,
}) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form__input"
        placeholder="Recipe name"
        value={recipeName}
        type="text"
      />
      <input
        className="form__input"
        placeholder="recipe rating"
        value={recipeRating}
        type="number"
      />
      <input
        className="form__input"
        placeholder="image url"
        value={imageUrl}
        type="text"
      />
      <textarea
        rows={10}
        className="form__textarea"
        placeholder=" please write the recepie process here"
        value={recipeDescription}
      />
      <Button variant="primary" text="add recepie" />
    </form>
  );
};

export default Form;
