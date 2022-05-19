import { MovieBox } from "../MovieBox";

export function MoviesContainer({ movieList }) {

    return (
        <div className="w-full py-8 px-5 my-0 mx-auto items-center inline-grid grid-cols-2 gap-x-2 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movieList.map(movie => {
                return (
                    <MovieBox key={movie.id} movie={movie} />
                )
            })}
        </div>
    )
}
