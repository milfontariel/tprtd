import { BookmarkSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import * as api from "../../services/api";

export function MovieModal({ movieId, modalIsOpen, setModalIsOpen }) {
    const { VITE_IMG_BASE_URL } = import.meta.env;
    const [movieDetails, setMovieDetails] = useState(null);
    const [imdbAverage, setImdbAverage] = useState(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        async function fetchMovieDetails(id) {
            const [movieInfo, imdbInfo] = await api.getMovieDetails(id);
            setMovieDetails(movieInfo);
            setImdbAverage(imdbInfo);
        }
        fetchMovieDetails(movieId);
    }, []);

    function handleBookmark() {
        //SALVAR COMO FAVORITO AQUI
        setIsBookmarked(!isBookmarked)
    }


    return (
        <div onClick={() => setModalIsOpen(false)} className={`flex ${modalIsOpen ? "block" : "hidden"} justify-center items-center glassmorphism w-screen h-screen fixed z-50 top-0 left-0`}>
            {!movieDetails ? <p className="text-white">loading</p> :
                <div className="w-[80%] h-[90vh] max-w-3xl p-6 glassmorphism grid grid-cols-2 gap-2  md:grid-cols-5 grid-rows-3">
                    <div id="first-row" className="">
                        <div className="h-full flex gap-5">
                            <img className="h-full rounded-md" src={`${VITE_IMG_BASE_URL}w185${movieDetails.poster_path}`} />
                        </div>
                    </div>
                    <div id="second-row" className="col-start-2 col-end-6">
                        <div className="flex flex-col gap-1">
                            <p className="text-white font-bold text-2xl">{movieDetails.title}</p>
                            <p className="text-white font-light text-md">Lançamento: {movieDetails.release_date.split('-')[0]}</p>
                            <p className="text-white font-medium text-md">TMDB: <span className="text-lg">{movieDetails.vote_average}</span></p>
                            <p className="text-white font-medium text-md">IMDB: <span className="text-lg">{imdbAverage}</span></p>
                            <div className="mt-3">
                                <div className="group-1 -ml-2 relative text-white hover:cursor-pointer" onClick={handleBookmark}>
                                    <BookmarkSimple alt="Adicionar à Minha Lista" className={`${isBookmarked ? 'hidden' : 'block'} opacity-70`} size={32} />
                                    <BookmarkSimple alt="Adicionar à Minha Lista" className={`absolute top-0 opacity-0 group-1-hover:opacity-80`} size={32} weight="duotone" />
                                    <BookmarkSimple alt="Remover da Minha Lista" className={`${isBookmarked ? 'block' : 'hidden'}`} size={32} weight={"fill"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="third-row" className="col-start-1 col-end-6 pt-7 row-start-2 row-end-3">
                        <p className="text-white font-semibold">Sinopse:</p>
                        <p className="text-white font-light">"{movieDetails.overview}"</p>
                    </div>
                </div>
            }
        </div>
    )
}
