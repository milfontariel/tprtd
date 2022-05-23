
import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import { MovieModal } from "../components/MovieModal";
import { MoviesContainer } from "../components/MoviesContainer";
import { NavBar } from "../components/NavBar";
import { Pagination } from "../components/Pagination";
import { PaginationTop } from "../components/PaginationTop";
import { SectionTitle } from "../components/SectionTitle";
import * as api from "../services/api";

export function Main() {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countPage, setCountPage] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [movieIdToInfo, setMovieIdToInfo] = useState(null);
    const [genreFilter, setGenreFilter] = useState(null);
    const [watchProviderFilter, setWatchProviderFilter] = useState(null);
    const [personalProviders, setPersonalProviders] = useState(null);

    useEffect(() => {
        async function fetchRecommendedMovies(page, genreFilter, watchProviderFilter) {
            try {
                const response = await api.getRecommendedMovies(page, genreFilter?.id, watchProviderFilter?.provider_id);
                setRecommendedMovies(response.data.results);
                setPersonalProviders(response.providers.replace(/"/g, '').split('|'));
                setCountPage(response.data.total_pages);
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

    useEffect(() => {
        setCurrentPage(1);
    }, [genreFilter, watchProviderFilter])

    function handleShowModal(movieId) {
        setModalIsOpen(!modalIsOpen);
        setMovieIdToInfo(movieId);
    }

    function clearFilters() {
        setGenreFilter(null);
        setWatchProviderFilter(null);
        setCurrentPage(1)
    }

    return (
        <div className="min-h-screen my-0 mx-auto w-full md:w-4/5 px-0 pt-2 pb-48 md:px-1">
            <div className="w-full min-h-screen">
                {modalIsOpen && <MovieModal personalProviders={personalProviders} movieId={movieIdToInfo} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />}
                <Logo></Logo>
                <NavBar clearFilters={clearFilters} setWatchProviderFilter={setWatchProviderFilter} genreFilter={genreFilter} watchProviderFilter={watchProviderFilter} setGenreFilter={setGenreFilter}></NavBar>
                <SectionTitle genre={genreFilter} provider={watchProviderFilter} title={'Recomendados'} />
                <PaginationTop currentPage={currentPage} setCurrentPage={setCurrentPage} countPage={countPage} />
                <MoviesContainer handleShowModal={handleShowModal} movieList={recommendedMovies}></MoviesContainer>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} countPage={countPage} />
            </div>
        </div>
    )
}