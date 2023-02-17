import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

interface LoginResponseData {
    body: {
        token: string;
    };
}

const login = async (email: string, password: string): Promise<LoginResponseData> => {
    const response = await axios.post<LoginResponseData>(API_URL + "login", {
        email,
        password,
    });
    const token = response.data.body.token;
    if (token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    login,
    logout,
};