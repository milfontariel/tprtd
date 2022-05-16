import { ProviderItem } from "../ProviderItem";
import Carousel from 'react-elastic-carousel';
import { useState } from "react";

export function ProvidersSelect() {
    const [providersSelected, setProvidersSelected] = useState([]);

    function isMainProvider(element) {
        if (mainProviders.includes(`${element.provider_id}`)) {
            return element
        }
        return
    }
    function notIsMainProvider(element) {
        if (mainProviders.includes(`${element.provider_id}`) || element.provider_id === "119") {
            return
        }
        return element
    }
    const providersFiltered = providers.filter(isMainProvider);
    const anothersProviders = providers.filter(notIsMainProvider);
    return (
        <div className="w-4/5 h-36 my-0 mx-auto items-center flex">

            <Carousel itemsToShow={7} itemsToScroll={7} enableMouseSwipe={false} pagination={false}>
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

const mainProviders = [
    "8", "9", "337", "619", "384", "307", "227"
]

const { providers } = {
    "providers": [
        {
            "display_priority": 0,
            "logo_path": "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
            "provider_name": "Netflix",
            "provider_id": 8
        },
        {
            "display_priority": 1,
            "logo_path": "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
            "provider_name": "Amazon Prime Video",
            "provider_id": 119
        },
        {
            "display_priority": 1,
            "logo_path": "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
            "provider_name": "Amazon Prime Video",
            "provider_id": 9
        },
        {
            "display_priority": 1,
            "logo_path": "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg",
            "provider_name": "Disney Plus",
            "provider_id": 337
        },
        {
            "display_priority": 2,
            "logo_path": "/peURlLlr8jggOwK53fJ5wdQl05y.jpg",
            "provider_name": "Apple iTunes",
            "provider_id": 2
        },
        {
            "display_priority": 3,
            "logo_path": "/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg",
            "provider_name": "Google Play Movies",
            "provider_id": 3
        },
        {
            "display_priority": 4,
            "logo_path": "/bVR4Z1LCHY7gidXAJF5pMa4QrDS.jpg",
            "provider_name": "Mubi",
            "provider_id": 11
        },
        {
            "display_priority": 5,
            "logo_path": "/mPDlxHokGsEc84OOhp9qjeynq2U.jpg",
            "provider_name": "Looke",
            "provider_id": 47
        },
        {
            "display_priority": 5,
            "logo_path": "/iaMw6nOyxUzXSacrLQ0Au6CfZkc.jpg",
            "provider_name": "Classix",
            "provider_id": 445
        },
        {
            "display_priority": 6,
            "logo_path": "/hR9vWd8hWEVQKD6eOnBneKRFEW3.jpg",
            "provider_name": "Star Plus",
            "provider_id": 619
        },
        {
            "display_priority": 7,
            "logo_path": "/xbhHHa1YgtpwhC8lb1NQ3ACVcLd.jpg",
            "provider_name": "Paramount Plus",
            "provider_id": 531
        },
        {
            "display_priority": 8,
            "logo_path": "/rrta9psrx3e7F9wLUfpANdJzudx.jpg",
            "provider_name": "HBO Max",
            "provider_id": 384
        },
        {
            "display_priority": 8,
            "logo_path": "/tgKw3lckZULebs3cMLAbMRqir7G.jpg",
            "provider_name": "Argo",
            "provider_id": 534
        },
        {
            "display_priority": 8,
            "logo_path": "/fadQYOyKL0tqfyj012nYJxm3N2I.jpg",
            "provider_name": "Eventive",
            "provider_id": 677
        },
        {
            "display_priority": 9,
            "logo_path": "/59azlQKUgFdYq6QI5QEAxIeecyL.jpg",
            "provider_name": "Cultpix",
            "provider_id": 692
        },
        {
            "display_priority": 10,
            "logo_path": "/lJT7r1nprk1Z8t1ywiIa8h9d3rc.jpg",
            "provider_name": "Claro video",
            "provider_id": 167
        },
        {
            "display_priority": 10,
            "logo_path": "/5jdN9E9Ftxxbg711crjOyCagTy8.jpg",
            "provider_name": "Telecine Play",
            "provider_id": 227
        },
        {
            "display_priority": 11,
            "logo_path": "/6uhKBfmtzFqOcLousHwZuzcrScK.jpg",
            "provider_name": "Apple TV Plus",
            "provider_id": 350
        },
        {
            "display_priority": 11,
            "logo_path": "/5NyLm42TmCqCMOZFvH4fcoSNKEW.jpg",
            "provider_name": "Amazon Video",
            "provider_id": 10
        },
        {
            "display_priority": 11,
            "logo_path": "/oBoWstXQFHAlPApyxIQ31CIbNQk.jpg",
            "provider_name": "Globoplay",
            "provider_id": 307
        },
        {
            "display_priority": 11,
            "logo_path": "/4FqTBYsUSZgS9z9UGKgxSDBbtc8.jpg",
            "provider_name": "FilmBox+",
            "provider_id": 701
        },
        {
            "display_priority": 12,
            "logo_path": "/58aUMVWJRolhWpi4aJCkGHwfKdg.jpg",
            "provider_name": "VIX ",
            "provider_id": 457
        },
        {
            "display_priority": 13,
            "logo_path": "/67Ee4E6qOkQGHeUTArdJ1qRxzR2.jpg",
            "provider_name": "Curiosity Stream",
            "provider_id": 190
        },
        {
            "display_priority": 14,
            "logo_path": "/xN97FFkFAdY1JvHhS4zyPD4URgD.jpg",
            "provider_name": "Spamflix",
            "provider_id": 521
        },
        {
            "display_priority": 15,
            "logo_path": "/o252SN51PdMx8UvyUkX00MAtooX.jpg",
            "provider_name": "Funimation Now",
            "provider_id": 269
        },
        {
            "display_priority": 16,
            "logo_path": "/x36C6aseF5l4uX99Kpse9dbPwBo.jpg",
            "provider_name": "Starz Play Amazon Channel",
            "provider_id": 194
        },
        {
            "display_priority": 16,
            "logo_path": "/bvcdVO7SDHKEa6D40g1jntXKNj.jpg",
            "provider_name": "DOCSVILLE",
            "provider_id": 475
        },
        {
            "display_priority": 17,
            "logo_path": "/rll0yTCjrSY6hcJqIyMatv9B2iR.jpg",
            "provider_name": "NetMovies",
            "provider_id": 19
        },
        {
            "display_priority": 17,
            "logo_path": "/mgD0T960hnYU4gBxbPPBrcDfgWg.jpg",
            "provider_name": "WOW Presents Plus",
            "provider_id": 546
        },
        {
            "display_priority": 17,
            "logo_path": "/3E0RkIEQrrGYazs63NMsn3XONT6.jpg",
            "provider_name": "Paramount+ Amazon Channel",
            "provider_id": 582
        },
        {
            "display_priority": 18,
            "logo_path": "/gekkP93StjYdiMAInViVmrnldNY.jpg",
            "provider_name": "Magellan TV",
            "provider_id": 551
        },
        {
            "display_priority": 19,
            "logo_path": "/xLu1rkZNOKuNnRNr70wySosfTBf.jpg",
            "provider_name": "BroadwayHD",
            "provider_id": 554
        },
        {
            "display_priority": 20,
            "logo_path": "/fy4svqyray3cnkuEqGIXL3i2WQw.jpg",
            "provider_name": "Belas Artes à La Carte",
            "provider_id": 447
        },
        {
            "display_priority": 20,
            "logo_path": "/olmH7t5tEng8Yuq33KmvpvaaVIg.jpg",
            "provider_name": "Filmzie",
            "provider_id": 559
        },
        {
            "display_priority": 21,
            "logo_path": "/u2H29LCxRzjZVUoZUQAHKm5P8Zc.jpg",
            "provider_name": "Dekkoo",
            "provider_id": 444
        },
        {
            "display_priority": 21,
            "logo_path": "/dFnG5G2YxrYjv9YiVu9Bq7Wj5Ds.jpg",
            "provider_name": "Believe",
            "provider_id": 465
        },
        {
            "display_priority": 22,
            "logo_path": "/bmU37kpSMbcTgwwUrbxByk7x8h3.jpg",
            "provider_name": "HBO Go",
            "provider_id": 31
        },
        {
            "display_priority": 22,
            "logo_path": "/osREemsc9uUB2J8VTkQeAVk2fu9.jpg",
            "provider_name": "True Story",
            "provider_id": 567
        },
        {
            "display_priority": 23,
            "logo_path": "/aQ1ritN00jXc7RAFfUoQKGAAfp7.jpg",
            "provider_name": "DocAlliance Films",
            "provider_id": 569
        },
        {
            "display_priority": 24,
            "logo_path": "/d4vHcXY9rwnr763wQns2XJThclt.jpg",
            "provider_name": "Hoichoi",
            "provider_id": 315
        },
        {
            "display_priority": 24,
            "logo_path": "/uHv6Y4YSsr4cj7q4cBbAg7WXKEI.jpg",
            "provider_name": "KoreaOnDemand",
            "provider_id": 575
        },
        {
            "display_priority": 26,
            "logo_path": "/t6N57S17sdXRXmZDAkaGP0NHNG0.jpg",
            "provider_name": "Pluto TV",
            "provider_id": 300
        },
        {
            "display_priority": 26,
            "logo_path": "/dUokaRky9vs1u2PFRzFDV4iIx6A.jpg",
            "provider_name": "TNTGo",
            "provider_id": 512
        },
        {
            "display_priority": 27,
            "logo_path": "/1bbExrGyEuUFAEWMBSN76bwacQ0.jpg",
            "provider_name": "Oldflix",
            "provider_id": 499
        },
        {
            "display_priority": 28,
            "logo_path": "/cQQYtdaCg7vDo28JPru4v8Ypi8x.jpg",
            "provider_name": "NOW",
            "provider_id": 484
        },
        {
            "display_priority": 29,
            "logo_path": "/plbVK1EXpz7PpyddpI0U1cZIYYK.jpg",
            "provider_name": "GOSPEL PLAY",
            "provider_id": 477
        },
        {
            "display_priority": 30,
            "logo_path": "/73ms51HSpkD0OOXwj2EeiZeSqSt.jpg",
            "provider_name": "History Play",
            "provider_id": 478
        },
        {
            "display_priority": 32,
            "logo_path": "/n3BIqc0mojP85bJSKjsIwZUOVya.jpg",
            "provider_name": "Libreflix",
            "provider_id": 544
        },
        {
            "display_priority": 36,
            "logo_path": "/rWYJ9mMvxs0p57Nd1BKEtKtpRvD.jpg",
            "provider_name": "Supo Mungam Plus",
            "provider_id": 530
        },
        {
            "display_priority": 39,
            "logo_path": "/zVJhpmIEgdDVbDt5TB72sZu3qdO.jpg",
            "provider_name": "Starz",
            "provider_id": 43
        },
        {
            "display_priority": 39,
            "logo_path": "/qEFO4pJhL6IyHbKUqaefsOA0kWJ.jpg",
            "provider_name": "Filme Filme",
            "provider_id": 566
        },
        {
            "display_priority": 42,
            "logo_path": "/gzHzhgt6cVSn4yy6UnJvLGbOSwL.jpg",
            "provider_name": "KinoPop",
            "provider_id": 573
        },
        {
            "display_priority": 43,
            "logo_path": "/xbdgLcQ6kRrcVe1uJAG9lzlkSbY.jpg",
            "provider_name": "Oi Play",
            "provider_id": 574
        },
        {
            "display_priority": 46,
            "logo_path": "/fUUgfrOfvvPKx9vhFBd6IMdkfLy.jpg",
            "provider_name": "MGM Amazon Channel",
            "provider_id": 588
        },
        {
            "display_priority": 48,
            "logo_path": "/shq88b09gTBYC4hA7K7MUL8Q4zP.jpg",
            "provider_name": "Microsoft Store",
            "provider_id": 68
        },
        {
            "display_priority": 49,
            "logo_path": "/3gTVbIj15Amgz5Qqg5dPDpgMW9V.jpg",
            "provider_name": "Looke Amazon Channel",
            "provider_id": 683
        },
        {
            "display_priority": 165,
            "logo_path": "/r1UgUKmt83FSDOIHBdRWKooZPNx.jpg",
            "provider_name": "Revry",
            "provider_id": 473
        },
        {
            "display_priority": 184,
            "logo_path": "/fdWE8jpmQqkZrwg2ZMuCLz6ms5P.jpg",
            "provider_name": "MovieSaints",
            "provider_id": 562
        }
    ]
}