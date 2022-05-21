import { BookmarkSimple, Info } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";

//IMAGEM DEVE VIR POR PROPS

export function MovieBox({ handleShowModal, movie }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    function handleBookmark() {
        //SALVAR COMO FAVORITO AQUI
        setIsBookmarked(!isBookmarked)
    }
    return (
        <Container title={movie.title} poster={movie.poster_path} className={`group-custom hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-linear rounded-xl select-none bg-cover hover:shadow-xl`}>
            <div className="flex flex-col justify-end py-6 px-5 w-full h-full rounded-xl group-custom-hover:bg-gradient-to-t from-black transition-all duration-500 ease-linear ">
                <div className="flex gap-5 justify-center items-center w-full h-full  opacity-0 group-custom-hover:opacity-100 transition-all duration-300 ease-linear">
                    <Info onClick={() => handleShowModal(movie.id)} alt="Informações" className="opacity-70 hover:opacity-100 transition-opacity duration-75 ease-linear" size={32} />
                    <div className="group-1 relative" onClick={handleBookmark}>
                        <BookmarkSimple alt="Adicionar à Minha Lista" className={`${isBookmarked ? 'hidden' : 'block'} opacity-70`} size={32} />
                        <BookmarkSimple alt="Adicionar à Minha Lista" className={`absolute top-0 opacity-0 group-1-hover:opacity-80`} size={32} weight="duotone" />
                        <BookmarkSimple alt="Remover da Minha Lista" className={`${isBookmarked ? 'block' : 'hidden'}`} size={32} weight={"fill"} />
                    </div>
                </div>
                <p className="text-xl text-right opacity-0 group-custom-hover:opacity-100 transition-all duration-300 ease-linear">{movie.title}</p>
                <p className="text-xs text-right opacity-0 group-custom-hover:opacity-100 transition-all duration-300 ease-linear">{movie.release_date.split('-')[0]}</p>
            </div>
        </Container>
    )
}
const BASE_URL = "http://image.tmdb.org/t/p/w342";

const Container = styled.div`
    width: 11rem;
    height: 17rem;
    margin: 0 auto;
    color: #fff;
    background-image: ${props => `url(${BASE_URL + props.poster})`};
`