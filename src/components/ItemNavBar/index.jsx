import { Check } from "phosphor-react";
import { useState } from "react"

export function ItemNavBar({ handleFunction, title, list, key_type, type_name, setWatchProviderFilter, setGenreFilter, watchProviderFilter, genreFilter }) {
    const [displayItems, setDisplayItems] = useState(false);

    if (list) {
        return (
            <li>
                <button onClick={() => setDisplayItems(!displayItems)} className="text-white focus:outline-none px-5 hover:bg-[rgba(255,255,255,.1)] hover:text-white py-3  font-medium text-base text-center inline-flex items-center transition-colors ease-in-out" type="button">
                    {title}
                    <svg className={`w-4 h-4 ml-1 ${displayItems && 'rotate-180'} transition-all duration-200 ease-linear`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className={`mt-2 max-h-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 absolute z-20 ${displayItems ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}>
                    <ul className="py-1 text-sm  text-gray-700 dark:text-gray-200">
                        {list.map(listItem => {
                            return (
                                <li onClick={() => {
                                    setDisplayItems(!displayItems)
                                    if (key_type === "provider_id") {
                                        if (watchProviderFilter === listItem) {
                                            setWatchProviderFilter(null)
                                        } else {
                                            setWatchProviderFilter(listItem);
                                        }
                                        setGenreFilter(null);
                                    } else {
                                        if (genreFilter === listItem) {
                                            setGenreFilter(null)
                                        } else {
                                            setGenreFilter(listItem);
                                        }
                                    }
                                }} key={listItem[key_type]}
                                    className={`${key_type === 'provider_id' &&
                                        listItem.provider_id === watchProviderFilter?.provider_id && 'bg-gray-600'
                                        } ${key_type !== 'provider_id' &&
                                        listItem.id === genreFilter?.id && 'bg-gray-600'
                                        }`}>
                                    <a href="#" className="block pr-8 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        {listItem[type_name]}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </li>
        )
    } else {
        return (
            <li>
                <button onClick={() => handleFunction()} className="text-white focus:outline-none px-5 hover:bg-[rgba(255,255,255,.1)] hover:text-white py-3  font-medium text-base text-center inline-flex items-center transition-colors ease-in-out" type="button">
                    {title}
                </button>
            </li>

        )
    }

}