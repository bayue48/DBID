import axios from "axios";

export default axios.create({
  baseURL: `process.env.REACT_APP_API`,
});

export const KEY = process.env.REACT_APP_KEY;
