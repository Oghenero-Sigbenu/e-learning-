import axios from "axios";
require("dotenv").config();

const instance = axios.create({
    baseURL: (process.env.NODE_ENV === 'development') ? "http://localhost:5000/api/v1" :"https://lero-api.herokuapp.com/api/v1",
	// baseURL: "http://localhost:5000/api/v1",
    headers: {
        "Content-Type": "Application/json"
    }
});

export default instance;