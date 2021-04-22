import axios from "axios";

const URL = process.env.REACT_APP_API;

export default axios.create({
  baseURL: `${URL}`,
});
