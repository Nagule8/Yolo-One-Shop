import axios from "axios";

export default axios.create({
  baseURL: "https://yolooneshop.azurewebsites.net/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json"
  }
});