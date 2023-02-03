import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/api/v1" });

export const logIn = (formData) =>
  API.post("/admins/signin", formData, {
    withCredentials: true,
  });

export const signUp = (formData) => API.post("/admins/register", formData);
