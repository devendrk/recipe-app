import recipeService from "../../services/recipes";

const initialState = { recipes: [], activeRecipe: null, message: null };
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FETCH_RECIPES":
      return { ...state, recipes: action.payload };
    case "SET_CREATE_RECIPES":
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case "SET_CREATE_MESSAGE":
      const name = `${action.payload} is successfully added`;
      return {
        ...state,
        message: name,
      };
    case "SET_ACTIVE_RECIPE":
      return { ...state, activeRecipe: action.payload };
    case "SET_EDIT_RECIPE":
      const updatedRecipe = state.recipes.map((r) =>
        r.id === action.payload.id ? action.payload.data : r
      );
      return {
        ...state,
        recipes: updatedRecipe,
      };
    case "SET_UPDATE_MESSAGE":
      return { ...state, message: `Recipie is successfully updated` };
    case "SET_DELETE_RECEIPE":
      const recipesAfterDelete = state.recipes.filter((r) => {
        return r._id !== action.payload;
      });
      return {
        ...state,
        recipes: recipesAfterDelete,
      };
    case "SET_DELETE_RECIPE_MESSAGE":
      return { ...state, message: action.payload };
    case "REMOVE_NOTIFICATION":
      return { ...state, message: null };
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

//  Action Creators
export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const recipes = await recipeService.getAll();
      dispatch({
        type: "SET_FETCH_RECIPES",
        payload: recipes.data,
      });
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: "cannot Get recipes" });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_NOTIFICATION",
          }),
        3000
      );
    }
  };
};

export const addRecipes = (recipeObj) => {
  return async (dispatch) => {
    try {
      const recipes = await recipeService.createNewRecipe(recipeObj);
      dispatch({
        type: "SET_CREATE_RECIPES",
        payload: recipes.data,
      });
      dispatch({
        type: "SET_CREATE_MESSAGE",
        payload: recipeObj.name,
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_NOTIFICATION",
          }),
        3000
      );
    } catch (error) {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: "opps something went wrong. Cannot create recipes",
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_NOTIFICATION",
          }),
        3000
      );
    }
  };
};

export const editRecipes = (id, updatedRecipe) => {
  return async (dispatch) => {
    try {
      const recipes = await recipeService.updateReceipe(id, updatedRecipe);
      dispatch({
        type: "SET_EDIT_RECIPE",
        payload: recipes,
      });
      dispatch({
        type: "SET_UPDATE_MESSAGE",
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_NOTIFICATION",
          }),
        3000
      );
    } catch (error) {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: " Something went wrong.Cannot update message.",
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_NOTIFICATION",
          }),
        3000
      );
    }
  };
};
export const deleteReceipe = (id) => {
  return async (dispatch) => {
    try {
      await recipeService.deleteReceipe(id);
      dispatch({
        type: "SET_DELETE_RECEIPE",
        payload: id,
      });
      dispatch({
        type: "SET_DELETE_RECIPE_MESSAGE",
        payload: `Recipe is successfull deleted`,
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_NOTIFICATION",
          }),
        3000
      );
    } catch (error) {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: " Something went wron Cannot remove resipe.",
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_NOTIFICATION",
          }),
        3000
      );
    }
  };
};

export const setActiveRecipe = (recipe) => {
  return {
    type: "SET_ACTIVE_RECIPE",
    payload: recipe,
  };
};

export default recipeReducer;
