import axios from "axios";
import { getToken } from "./tokenUtils";

const SERVER_URL = "http://localhost:8080/";
axios.defaults.baseURL = SERVER_URL;

const setAuthHeader = () => ({
  headers: { authorization: `Bearer ${getToken()}` }
});

export const wakeup = () => axios.get("");
export const signup = payload => axios.post(`/SignUp`, payload);
export const signin = payload => axios.post(`/Login`, payload);
