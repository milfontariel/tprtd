import { CheckCircle } from "phosphor-react";
import { useEffect, useState } from "react";

export function ProviderItem({ provider, providersSelected, setProvidersSelected }) {
    const [displayCheck, setDisplayCheck] = useState(false);

    function chooseProvider(id) {
        if (providersSelected.includes(id)) {
            const providersWithoutThis = providersSelected.filter(provider => {
                if (provider === id) {
                    return
                } else {
                    return provider
                }
            });
            setProvidersSelected(providersWithoutThis);
            setDisplayCheck(!displayCheck);

        } else {
            setProvidersSelected([...providersSelected, id]);
            setDisplayCheck(!displayCheck);
        }
    }
    useEffect(() => {
        if (providersSelected.includes(provider.provider_id)) {
            setDisplayCheck(true)
        }
    }, [providersSelected])

    return (
        <div key={provider.provider_id} onClick={() => chooseProvider(provider.provider_id)} className="drop-shadow-lg hover:cursor-pointer mx-1 w-24 my-1">
            <div className={`w-8 h-8 bg-white rounded-full absolute ${displayCheck ? "block" : "hidden"} -right-1 -top-1`}>
                <CheckCircle size={32} weight="fill" color="green" />
            </div>
            <div>
                <img className="rounded-full" src={`http://image.tmdb.org/t/p/w92${provider.logo_path}`} />
            </div>
        </div>
    )
}