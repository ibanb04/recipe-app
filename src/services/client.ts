import axios from "axios";

const BASE_URL = "https://api.spoonacular.com";

const API_KEY = "ce789ec0cbc646c3bd59b0abd2c8c0ab";
//  67e9d5f0f24f4fc2aef92cb99bebbbbe
export default axios.create({
    baseURL: BASE_URL,
    params: {
        apiKey: API_KEY,
    },
});