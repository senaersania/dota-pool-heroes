import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const HeroesDetail = () => {
    const [heroDetail, setHeroDetail] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    const heroDetailUrl = `https://api.opendota.com/api/heroStats`
    const heroItemPopularityUrl = `https://api.opendota.com/api/heroes/${id}/itemPopularity`
    const heroItemIds = `https://raw.githubusercontent.com/odota/dotaconstants/master/build/item_ids.json`

    const requestOne = axios.get(heroDetailUrl)
    const requestTwo = axios.get(heroItemPopularityUrl)
    const requestThree = axios.get(heroItemIds)

    useEffect(() => {
        axios.all([requestOne, requestTwo, requestThree])
        .then(axios.spread((...response)=>{
            const responseOne = response[0].data
            const responseTwo = response[1].data
            const responseThree = response[2].data
            console.log('response one', responseOne, 'response two', responseTwo, 'response three', responseThree)
        }))
        return () => {
                        
        }
    }, [])
    
        console.log(id)
    return (
        <div>
            <h1>Hero Detail</h1>
        </div>
    )
}

export default HeroesDetail
