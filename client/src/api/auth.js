import axios from "axios";
const Api = "http://localhost:3000/api";
export const registerRequest = (user) => axios.post(`${Api}/register`, user);
