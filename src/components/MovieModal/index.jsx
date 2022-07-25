import { BookmarkSimple, XCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import * as api from "../../services/api";

export function MovieModal({ movieId, modalIsOpen, setModalIsOpen, personalProviders }) {
    const { VITE_IMG_BASE_URL } = import.meta.env;
    const [movieDetails, setMovieDetails] = useState(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        async function fetchMovieDetails(id) {
            const movieInfo = await api.getMovieDetails(id);
            console.log(movieInfo);
            setMovieDetails(movieInfo);
        }
        fetchMovieDetails(movieId);
    }, []);

    function handleBookmark() {
        //SALVAR COMO FAVORITO AQUI
        setIsBookmarked(!isBookmarked)
    }

    const credits = [];

    if (movieDetails) {
        for (let i = 0; i < 8; i++) {
            credits.push(<span className="font-thin" key={movieDetails.credits.cast[i].id} title={movieDetails.credits.cast[i].character}>{movieDetails.credits.cast[i].name}, </span>)
        }
    }
    return (
        <div className={`flex ${modalIsOpen ? "block" : "hidden"} justify-center bg-black bg-opacity-30 items-center w-screen h-screen fixed z-50 top-0 left-0`}>
            {!movieDetails ? <p className="text-white">loading</p> :
                <div className="w-[80%] h-[90vh] max-w-3xl p-6 glassmorphism grid grid-cols-2 gap-2  md:grid-cols-5 auto-rows-min">
                    <XCircle onClick={() => setModalIsOpen(false)} className="absolute top-1 right-1 text-white opacity-100 hover:opacity-80 hover:cursor-pointer transition-opacity duration-[10ms]" size={28} weight="fill" />
                    <div id="first-row" className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full">
                        <div className="h-full flex gap-5">
                            <img className="h-full rounded-md" src={`${VITE_IMG_BASE_URL}w185${movieDetails.poster_path}`} />
                        </div>
                    </div>
                    <div id="second-col-row-1" className="col-start-2 col-span-full flex flex-col justify-between">
                        <div>
                            <p className="text-white font-bold text-2xl">{movieDetails.title} </p>
                            <p className="text-white font-light text-md">Lançamento: {movieDetails.release_date.split('-')[0]}</p>
                            <p className="text-white font-normal text-md truncate">Elenco: {credits}</p>

                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <div title="Nota no TMDb" className="select-none flex justify-center items-center border-4 box-content border-[#B31284] text-white w-8 h-8 rounded-full bg-[#881166] font-bold p-0.5">
                                    {movieDetails.vote_average.toFixed(1)}
                                </div>
                                <div className="group-1 relative text-white hover:cursor-pointer" onClick={handleBookmark}>
                                    <BookmarkSimple alt="Adicionar à Minha Lista" className={`${isBookmarked ? 'hidden' : 'block'} opacity-70`} size={32} />
                                    <BookmarkSimple alt="Adicionar à Minha Lista" className={`absolute top-0 opacity-0 group-1-hover:opacity-80`} size={32} weight="duotone" />
                                    <BookmarkSimple alt="Remover da Minha Lista" className={`${isBookmarked ? 'block' : 'hidden'}`} size={32} weight={"fill"} />
                                </div>
                            </div>
                            <div id="providers-and-favorite" className="flex mt-2">
                                {movieDetails["watch/providers"].results["BR"].flatrate.map(provider => {
                                    return (
                                        <div key={provider.provider_name} title={provider.provider_name} className={`${personalProviders.includes(`${provider.provider_id}`) ? 'border-solid border-green-500' : 'border-transparent'} border-2 box-border rounded-full w-8 h-8`}>
                                            <img alt={provider.provider_name} className="rounded-full" src={`${VITE_IMG_BASE_URL}w45${provider.logo_path}`} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div id="third-row" className="overflow-scroll scrollbar-none scrollbar-thumb-gray-600 col-span-full max-h-[23.5rem] pt-7">
                        <p className="text-white font-semibold">Sinopse:</p>
                        <p className="text-white font-light">"{movieDetails.overview}"</p>
                    </div>
                </div>
            }
        </div>
    )
}
