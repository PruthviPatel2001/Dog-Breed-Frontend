import axios from "axios";

const baseURL = {
  dev: "http://127.0.0.1:8000/dogbreedclassifier/predict",
  prod: "https://dog-breeds-api.onrender.com/dogbreedclassifier/predict",
};

const API = axios.create({
  baseURL: baseURL.prod,
});

export const predict = async (formData: FormData) => {
  const response = await API.post("/", formData);
  return response.data;
};
