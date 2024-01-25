import axios from "axios";

const baseURL = "http://127.0.0.1:8000/dogbreedclassifier/predict";

const API = axios.create({
  baseURL,
});

export const predict = async (formData: FormData) => {
  const response = await API.post("/", formData);
  return response.data;
};
