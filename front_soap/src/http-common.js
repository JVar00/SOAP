import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api/", //url del api
  //baseURL: "https://df62-186-15-227-74.ngrok.io/api", //url del api
  headers: {
    "Content-type": "application/json",
    //"ngrok-skip-browser-warning": "true",
  },
});
