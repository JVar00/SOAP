import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api/", //url del api
  headers: {
    "Content-type": "application/json",
  },
});
