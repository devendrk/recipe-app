import React from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card";

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes);
  console.log("reci", recipes);

  return (
    <div>
      <h1>Here comes recipes</h1>
      {recipes.map((r) => (
        <Card
          key={r._id}
          recipeRating={1}
          cardTitle={r.name}
          cardText={r.description}
          imgSrc={r.image}
        />
      ))}
    </div>
  );
};

export default Recipes;
