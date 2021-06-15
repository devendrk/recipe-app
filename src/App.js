import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getRecipes } from "./Redux/reducers/recipeReducer";

import Recipes from "./components/Recipes/Recipes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import "./App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar searchVal="mock" handleSearch={() => console.log("mock")} />
      <div className="App-body">
        <Recipes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
