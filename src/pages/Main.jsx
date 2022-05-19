
import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import { MoviesContainer } from "../components/MoviesContainer";
import { NavBar } from "../components/NavBar";
import { Pagination } from "../components/Pagination";
import * as api from "../services/api";

export function Main() {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countPage, setCountPage] = useState(null);

    useEffect(() => {
        async function fetchRecommendedMovies(page) {
            try {
                const response = await api.getRecommendedMovies(page);
                console.log(response)
                setRecommendedMovies(response.results);
                setCountPage(response.total_pages);
            } catch (error) {
                console.log(error);
            }
        }
        fetchRecommendedMovies(currentPage);

    }, [currentPage]);

    return (
        <div className="min-h-screen my-0 mx-auto w-full md:w-4/5 px-0 pt-2 pb-48 md:px-1">
            <div className="w-full min-h-screen">
                <Logo></Logo>
                <NavBar></NavBar>
                <MoviesContainer movieList={recommendedMovies}></MoviesContainer>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} countPage={countPage} />
            </div>
        </div>
    )
}