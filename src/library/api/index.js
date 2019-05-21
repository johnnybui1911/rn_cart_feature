import axios from "axios";

export const DEFAULT_CATEGORIES_URL = "/shop/categories/";
const API_BASE_URL = "https://api.predic8.de";
export default axios.create({
  baseURL: API_BASE_URL
});
