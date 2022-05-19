import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:5000";

export async function getProviders() {
    const response = await axios.get(`${BASE_URL}/providers`);
    return response.data;
}

export async function postSelectedProviders(selectedProviders) {
    return await axios.post(`${BASE_URL}/providers`, selectedProviders, {});
}

export async function getRecommendedMovies() {
    const response = await axios.get(`${BASE_URL}/recommended`);
    return response.data;
}