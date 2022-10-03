import axios from "axios";

export default axios.create({
  baseURL: "", //url del api
  headers: {
    "Content-type": "application/json",
  },
});
