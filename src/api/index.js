import axios from "axios";

const API_BASE_URL = "https://api.predic8.de";
export default axios.create({
  baseURL: API_BASE_URL
});
