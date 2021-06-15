import recipeService from "../../services/recipes";

const recipeReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return action.payload;
    case "CREATE_RECIPES":
      return [...state, action.payload];
    case "EDIT_RECIPES":
      return action.payload;
    case "DELETE_RECIPES":
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

export const addRecipes = (recipeObj) => {
  return async (dispatch) => {
    const recipes = await recipeService.createNewRecipe(recipeObj);
    console.log("rr", recipes);
    dispatch({
      type: "CREATE_RECIPES",
      payload: recipes.data,
    });
  };
};

export const editRecipes = (id, updatedRecipe) => {
  return async (dispatch) => {
    const recipes = await recipeService.update(id, updatedRecipe);
    dispatch({
      type: "EDIT_RECIPESEdi",
      payload: recipes,
    });
  };
};
export const deleteRecipies = (id) => {
  return async (dispatch) => {
    const recipes = await recipeService.delete(id);
    dispatch({
      type: "DELETE",
      payload: recipes,
    });
  };
};
export default recipeReducer;
