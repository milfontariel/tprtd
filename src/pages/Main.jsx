import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import { MoviesContainer } from "../components/MoviesContainer";
import { NavBar } from "../components/NavBar";
import * as api from "../services/api";

export function Main() {
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        async function fetchRecommendedMovies() {
            try {
                const response = await api.getRecommendedMovies();
                console.log(response)
                setRecommendedMovies(response.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchRecommendedMovies();

    }, []);

    return (
        <div className="min-h-screen my-0 mx-auto w-full md:w-4/5 px-0 pt-2 pb-48 md:px-1">
            <div className="w-full min-h-screen">
                <Logo></Logo>
                <NavBar></NavBar>
                <MoviesContainer movieList={recommendedMovies}></MoviesContainer>
            </div>
        </div>
    )
}