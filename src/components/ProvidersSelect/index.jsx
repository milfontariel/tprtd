import { ProviderItem } from "../ProviderItem";
import Carousel from 'react-elastic-carousel';
import sessionContext from "../../hooks/useSession";
import { useState } from "react";
import { useEffect } from "react";
import * as api from "../../services/api";

export function ProvidersSelect() {

    const [providers, setProviders] = useState([]);
    const mainProviders = [
        "8", "9", "337", "619", "384", "307", "227"
    ]

    useEffect(() => {
        async function fetchProviders() {
            const data = await api.getProviders();
            setProviders(data);
        }
        try {
            fetchProviders();
        } catch (error) {
            console.log(error)
        }
    }, []);

    const { providersSelected, setProvidersSelected } = sessionContext();

    function isMainProvider(element) {
        if (mainProviders.includes(`${element.provider_id}`)) {
            return element
        }
        return
    }
    function notIsMainProvider(element) {
        if (mainProviders.includes(`${element.provider_id}`) || element.provider_id === 119) {
            return
        }
        return element
    }

    const breakPoints = [
        { width: 1, itemsToShow: 3, itemsToScroll: 3 },
        { width: 550, itemsToShow: 6, itemsToScroll: 6 },
        { width: 768, itemsToShow: 7, itemsToScroll: 7 },
    ];

    const providersFiltered = providers.filter(isMainProvider);
    const anothersProviders = providers.filter(notIsMainProvider);
    return (
        <div className="w-4/5 h-36 my-0 mx-auto items-center flex">

            <Carousel breakPoints={breakPoints} itemsToShow={7} itemsToScroll={7} enableMouseSwipe={false} pagination={false}>
                {providersFiltered.map(provider => {
                    return (
                        <ProviderItem providersSelected={providersSelected} setProvidersSelected={setProvidersSelected} key={provider.provider_id} provider={provider} />
                    )
                })}
                {anothersProviders.map(provider => {
                    return (
                        <ProviderItem providersSelected={providersSelected} setProvidersSelected={setProvidersSelected} key={provider.provider_id} provider={provider} />
                    )
                })}
            </Carousel>
        </div>
    )
}

