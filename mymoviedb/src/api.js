import axios from "axios";
import { getToken } from "./tokenUtils";
import { isAuthed } from "./tokenUtils";

const SERVER_URL = "http://localhost:8080/";
axios.defaults.baseURL = SERVER_URL;

const setAuthHeader = () => ({
  headers: { authorization: `Bearer ${getToken()}` }
});

export const wakeup = () => axios.get("");
export const signup = payload => axios.post(`/persons/signup`, payload);
export const signin = payload => axios.post(`/login`, payload);
export const markFavourite = id => axios.post(`/movies/`+ String(isAuthed()) + `/` + String(id), id);
export const getMovies = () => axios.get(`/movies/` + String(isAuthed()));
