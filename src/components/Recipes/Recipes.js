import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { showModal } from "../../Redux/reducers/modalReducer";

import Section from "../Section/Section";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";

import "./Recipes.scss";

const Recipes = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const history = useHistory();

  const routeTo = (id) => {
    history.push(`/recipe/${id}`);
  };
  return (
    <Section>
      {state.recipes.message ? (
        <Alert message={state.recipes.message} />
      ) : (
        console.log("should be null message", state.recipes.message)
      )}
      <div className="add__btn">
        <Button
          text="add recipe"
          variant="primary"
          handleClick={() => dispatch(showModal())}
        />
      </div>
      <div className="recipes">
        {state.recipes.recipes.map((r) => (
          <Card
            routeTo={routeTo}
            key={r._id}
            recipeRating={r.rating}
            cardTitle={r.name}
            cardText={r.description}
            imgSrc={r.image}
            id={r._id}
          />
        ))}
      </div>
    </Section>
  );
};

export default Recipes;
