export function SectionTitle({ genre, provider, title }) {

    const { VITE_IMG_BASE_URL } = import.meta.env;

    return (
        <div className="flex justify-center items-center flex-col select-none">
            <p className="text-white font-bold text-2xl">
                {(!genre && !provider) && title}
            </p>
            {(genre || provider) &&
                <div className="flex select-none gap-4 items-center justify-center">
                    <div className="flex bg-[#990F71] items-center p-2 justify-center rounded-full">
                        {provider &&
                            <img alt={`${provider.provider_name}`} className="rounded-full w-10" src={`${VITE_IMG_BASE_URL}w45${provider.logo_path}`} />
                        }
                        <p className="text-white font-normal text-xl mx-4">
                            {genre && `${genre.name.toUpperCase()}`}
                            {!genre && `TODOS`}
                        </p>
                    </div>
                </div>}
            <div className="border-b mt-16 mb-4 border-black border-opacity-30 w-full"></div>
        </div>
    )
}