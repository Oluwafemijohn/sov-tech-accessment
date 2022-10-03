import axios from "axios";
import { END_POINT } from "./ServerConstants";

// axios.defaults.headers.common = {'Authorization': `bearer ${TOKEN}`}
export const axiosInstance = axios.create({
  baseURL: END_POINT,
  timeout: 2 * 60 * 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export const axiosWithAuthInstance = axios.create({
  baseURL: END_POINT,
  timeout: 2 * 60 * 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
