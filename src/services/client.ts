import axios from "axios";

const BASE_URL = "https://api.spoonacular.com";

const API_KEY = "67e9d5f0f24f4fc2aef92cb99bebbbbe";
// f2c4f5a8c98e4deaa43855043c5bba56
export default axios.create({
    baseURL: BASE_URL,
    params: {
        apiKey: API_KEY,
    },
});