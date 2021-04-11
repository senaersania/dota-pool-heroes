import { React, useState, useEffect } from 'react'
import { find } from 'lodash'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import attack from '../../../asset/attack-icon.png'

const HeroesDetail = () => {
    const [heroDetail, setHeroDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    const heroesUrl = process.env.REACT_APP_DOTA_HERO_STATS
    const imgPath = process.env.REACT_APP_IMG_PATH
    const heroItemPopularityUrl = `https://api.opendota.com/api/heroes/${id}/itemPopularity`
    const heroItemIds = `https://raw.githubusercontent.com/odota/dotaconstants/master/build/item_ids.json`

    const requestOne = axios.get(heroesUrl)
    const requestTwo = axios.get(heroItemPopularityUrl)
    const requestThree = axios.get(heroItemIds)

    useEffect(() => {
        axios.all([requestOne, requestTwo, requestThree])
        .then(axios.spread((...response)=>{
            const responseOne = response[0].data
            const responseTwo = response[1].data
            const responseThree = response[2].data
            const hero = find(responseOne, x => x.id == id)
            setHeroDetail(hero)
            console.log('hero detail object', hero)
            console.log('response one', responseOne, 'response two', responseTwo, 'response three', responseThree)
        }))
        return () => {
                        
        }
    }, [])
        // console.log(heroDetail.roles);
    return (
        <div>
            <h1>Hero Detail</h1>
            <img src={imgPath+heroDetail.img}/>
            <h1>Name : {heroDetail.localized_name}</h1>
            <h1>Attack Type : {heroDetail.attack_type}</h1>
            {/* <img src={attack} styles="color:white"/> */}
            
            {heroDetail?.roles?.map((item) =>
            <h1>Roles : {item}</h1>
            )}

        </div>
    )
}

export default HeroesDetail
