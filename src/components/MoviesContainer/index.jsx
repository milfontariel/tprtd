import { MovieBox } from "../MovieBox";

export function MoviesContainer({ handleShowModal, movieList }) {

    return (
        <div className="w-full shadow-2xl bg-gradient-to-t from-[#881166] rounded-xl py-8 px-5 mb-0 mt-9 mx-auto items-center inline-grid grid-cols-2 gap-x-2 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movieList.map(movie => {
                return (
                    <MovieBox handleShowModal={handleShowModal} key={movie.id} movie={movie} />
                )
            })}
        </div>
    )
}
