import axios from "axios";

const baseUrl = "http://localhost:4000/api/recipes";

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const createNewRecipe = async (recepieObj) => {
  const response = await axios.post(baseUrl, recepieObj);
  return response.data;
};

export default { getAll, createNewRecipe };
