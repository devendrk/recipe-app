import recipeService from "../../services/recipes";

const initialState = { recipes: [], activeRecipe: null };
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return { ...state, recipes: action.payload };
    case "CREATE_RECIPES":
      return { ...state, recipes: [...state.recipes, action.payload] };
    case "SET_ACTIVE_RECIPE":
      return { ...state, activeRecipe: action.payload };
    case "EDIT_RECIPES":
      const updatedRecipe = state.recipes.map((r) =>
        r.id === action.payload.id ? action.payload.id : r
      );
      return { ...state, recipes: updatedRecipe };
    case "DELETE_RECIPES":
      return { ...state, recipes: action.payload };

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
      type: "EDIT_RECIPESE",
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

export const setActiveRecipe = (recipe) => {
  return {
    type: "SET_ACTIVE_RECIPE",
    payload: recipe,
  };
};

export default recipeReducer;
