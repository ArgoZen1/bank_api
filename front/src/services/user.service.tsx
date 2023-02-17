import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/api/v1/user/";

const getUser = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

export default {
    getUser,
};