import axios from "axios";
export default axios.create({
  baseURL: "http://188.127.227.79:9000",
  headers: {
    "Content-type": "application/json"
  }
});
