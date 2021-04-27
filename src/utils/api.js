import axios from "axios";
import { URL } from "./secret"

export default axios.create({
  baseURL: `${URL}`,
});
