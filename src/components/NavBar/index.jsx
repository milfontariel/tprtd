import { useEffect, useState } from "react";
import styled from "styled-components";
import { ItemNavBar } from "../ItemNavBar";
import * as api from "../../services/api"

export function NavBar({ clearFilters, setWatchProviderFilter, setGenreFilter, genreFilter, watchProviderFilter }) {
    const [providers, setProviders] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchProviders() {
            const dataProviders = await api.getProviders();
            const dataGenres = await api.getGenres();
            setProviders(dataProviders);
            setGenres(dataGenres.genres);
        }
        try {
            fetchProviders();
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <Nav className="drop-shadow-lg relative z-10 px-5">
            <ul className="flex flex-wrap justify-center gap-5">
                <ItemNavBar handleFunction={clearFilters} title={"Início"} />
                <ItemNavBar title={"Categorias"} setGenreFilter={setGenreFilter} setWatchProviderFilter={setWatchProviderFilter} genreFilter={genreFilter} watchProviderFilter={watchProviderFilter} list={genres} key_type={"name"} type_name={"name"} />
                <ItemNavBar title={"Plataformas"} setGenreFilter={setGenreFilter} setWatchProviderFilter={setWatchProviderFilter} genreFilter={genreFilter} watchProviderFilter={watchProviderFilter} list={providers} key_type={"provider_id"} type_name={"provider_name"} />
                <ItemNavBar title={"Populares"} />
                <ItemNavBar title={"Minha lista"} />
            </ul>
        </Nav>
    )
}

const Nav = styled.nav`
    background-color: #990F71;
    max-width: 100%;
    margin: 6rem 0 4rem 0;
    border-radius: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`