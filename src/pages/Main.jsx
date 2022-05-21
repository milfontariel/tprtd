
import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import { MovieModal } from "../components/MovieModal";
import { MoviesContainer } from "../components/MoviesContainer";
import { NavBar } from "../components/NavBar";
import { Pagination } from "../components/Pagination";
import { PaginationTop } from "../components/PaginationTop";
import * as api from "../services/api";

export function Main() {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countPage, setCountPage] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [movieIdToInfo, setMovieIdToInfo] = useState(null);
    const [genreFilter, setGenreFilter] = useState(null);
    const [watchProviderFilter, setWatchProviderFilter] = useState(null);

    useEffect(() => {
        async function fetchRecommendedMovies(page, genreFilter, watchProviderFilter) {
            try {
                const response = await api.getRecommendedMovies(page, genreFilter, watchProviderFilter);
                console.log(response)
                setRecommendedMovies(response.results);
                setCountPage(response.total_pages);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            fetchRecommendedMovies(currentPage, genreFilter, watchProviderFilter);
        } catch (error) {
            console.log(error);
        }

    }, [currentPage, watchProviderFilter, genreFilter]);

    function handleShowModal(movieId) {
        setModalIsOpen(!modalIsOpen);
        setMovieIdToInfo(movieId);
    }

    return (
        <div className="min-h-screen my-0 mx-auto w-full md:w-4/5 px-0 pt-2 pb-48 md:px-1">
            <div className="w-full min-h-screen">
                {modalIsOpen && <MovieModal movieId={movieIdToInfo} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />}
                <Logo></Logo>
                <NavBar setWatchProviderFilter={setWatchProviderFilter} setGenreFilter={setGenreFilter}></NavBar>
                <div className="flex justify-center items-center flex-col">
                    <p className="text-white font-bold text-2xl">Recomendados</p>
                    <div className="border-b my-4 border-black border-opacity-30 w-full"></div>
                </div>
                <PaginationTop currentPage={currentPage} setCurrentPage={setCurrentPage} countPage={countPage} />
                <MoviesContainer handleShowModal={handleShowModal} movieList={recommendedMovies}></MoviesContainer>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} countPage={countPage} />
            </div>
        </div>
    )
}