import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-college-event-hub-2.onrender.com/api"
});

export default API;
