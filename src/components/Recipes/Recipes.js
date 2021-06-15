import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { showModal } from "../../Redux/reducers/modalReducer";

import Card from "../Card/Card";
import Button from "../Button/Button";

const Recipes = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const history = useHistory();

  const routeTo = (id) => {
    history.push(`/recipe/${id}`);
  };
  return (
    <div>
      <h1>Here comes recipes</h1>

      <Button
        text="add recipe"
        variant="primary"
        handleClick={() => dispatch(showModal())}
      />
      {state.recipes.recipes.map((r) => (
        <Card
          routeTo={routeTo}
          key={r._id}
          recipeRating={1}
          cardTitle={r.name}
          cardText={r.description}
          imgSrc={r.image}
          id={r._id}
        />
      ))}
    </div>
  );
};

export default Recipes;
