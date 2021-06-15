import recipeService from "../../services/recipes";

const recipeReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return action.payload;
    default:
      return state;
  }
};

//  Action Creators
export const getRecipes = () => {
  return async (dispatch) => {
    const recipes = await recipeService.getAll();
    dispatch({
      type: "FETCH_RECIPES",
      payload: recipes.data,
    });
  };
};

export default recipeReducer;
