import { React, useState, useEffect } from 'react'
import axios from 'axios'
import HeroesDetail from './HeroesDetail'

const HeroesList = () => {
    const [heroList, setHeroList] = useState([])
    const [idHero, setIdHero] = useState('')
    const [loading, setLoading] = useState(false)
    const heroesUrl = `https://api.opendota.com/api/constants/heroes`
    const imgPath = `http://cdn.dota2.com`

    useEffect(() => {
        axios.get(heroesUrl)
        .then(res => {
            // console.log(res.data)
            const temp = Object.keys(res.data) // { key : value} => [1,2,3,4].map(key => res.data[key])
            .map(key => res.data[key]) //return key res.data
            console.log('heroes list', temp)
            setHeroList(temp)
            setLoading(false)
        })
        return () => {
            setLoading(true)
        }
    }, [])

    if(loading){
        return <p>loading...</p>
    }
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h2 className="main-title">Choose Your Hero</h2>
                    </div>
                </div>
                <div className="row no-gutters">
                    {heroList.map((item) =>
                    <div key={item.id} className="col-sm-2 no-gutters shadow">
                        <div>
                            <img src={imgPath+item.img} width="190" alt={item.localized_name}/>
                            <div className="overlay"><a href={`/heroDetail/${item.id}`}>{item.localized_name}</a></div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeroesList
