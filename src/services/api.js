import axios from "axios";
axios.defaults.withCredentials = true;

const { VITE_BASE_URL } = import.meta.env;

export async function getProviders() {
    const response = await axios.get(`${BASE_URL}/providers`);
    return response.data;
}

export async function getGenres() {
    const response = await axios.get(`${BASE_URL}/genres`)
    return response.data;
}

export async function postSelectedProviders(selectedProviders) {
    return await axios.post(`${BASE_URL}/providers`, selectedProviders, {});
}

export async function getRecommendedMovies(page, genre, watchProvider) {
    const response = await axios.get(`${BASE_URL}/recommended/${page}?genre=${genre}&watch_provider=${watchProvider}`);
    return response.data;
}

export async function getMovieDetails(id) {
    const response = await axios.get(`${BASE_URL}/movie/${id}`);
    return response.data;
}

export async function getMoviesByProvider(providerId) {
    const response = await axios.get(`${BASE_URL}/movies/${providerId}`);
    return response.data;
}

export async function getMoviesByGenre(genreId) {
    const response = await axios.get(`${BASE_URL}/movies/genre/${genreId}`)
    return response.data;
}