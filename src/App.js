import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getRecipes } from "./Redux/reducers/recipeReducer";

import Recipes from "./components/Recipes/Recipes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SingleRecipe from "./components/SingeRecipe/SingeRecipie";
// import "./App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navbar searchVal="mock" />
        <div className="App-body">
          <Switch>
            <Route exact path="/recipe/:id" component={SingleRecipe} />
            <Route exact path="/" component={Recipes} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
