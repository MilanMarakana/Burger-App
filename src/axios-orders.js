import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-b5e25.firebaseio.com/",
});

export default instance;
