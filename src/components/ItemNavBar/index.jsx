import { useState } from "react"

export function ItemNavBar({ title, list, key_type, type_name, setWatchProviderFilter, setGenreFilter }) {
    const [displayItems, setDisplayItems] = useState(false);

    if (list) {
        return (
            <li>
                <button onClick={() => setDisplayItems(!displayItems)} className="text-white focus:outline-none px-5 hover:bg-[rgba(255,255,255,.1)] hover:text-white py-3  font-medium text-base text-center inline-flex items-center transition-colors ease-in-out" type="button">
                    {title}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className={`mt-2 max-h-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 absolute z-20 ${displayItems ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}>
                    <ul className="py-1 text-sm  text-gray-700 dark:text-gray-200">
                        {list.map(listItem => {
                            return (
                                <li onClick={() => {
                                    if (key_type === "provider_id") {
                                        setWatchProviderFilter(listItem.provider_id);
                                        setGenreFilter(null);
                                    } else {
                                        setGenreFilter(listItem.id);
                                    }
                                }} key={listItem[key_type]}>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
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
                <button onClick={() => setDisplayItems(!displayItems)} className="text-white focus:outline-none px-5 hover:bg-[rgba(255,255,255,.1)] hover:text-white py-3  font-medium text-base text-center inline-flex items-center transition-colors ease-in-out" type="button">
                    {title}
                </button>
            </li>

        )
    }

}