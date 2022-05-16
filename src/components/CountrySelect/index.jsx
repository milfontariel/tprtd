export function CountrySelect() {
    return (
        <div className="flex bottom-10 right-0 left-0 my-0 mx-auto gap-2 w-24 bg-[#7A0F5C] rounded-2xl justify-center px-4 py-1 hover:cursor-pointer hover:bg-[#91126E] transition-colors">
            <img className="w-5" src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${"BR"}.svg`} alt="Bandeira do Brasil" />
            <span className="text-white font-normal">Brasil</span>
        </div>
    )
}