import { React, useState, useEffect } from 'react'
import axios from 'axios'

const DotaList = () => {
    const [dotaList, setDotaList] = useState([])
    const [proMatches, setProMatches] = useState([])
    const [loading, setLoading] = useState(false)
    const heroesUrl = `https://api.opendota.com/api/constants/heroes`
    // const proMatchesUrl = `https://api.opendota.com/api/proMatches`
    const imgPath = `http://cdn.dota2.com`

    useEffect(() => {
        axios.get(heroesUrl)
        .then(res => {
            // console.log(res.data)
            const temp = Object.keys(res.data) // { key : value} => [1,2,3,4].map(key => res.data[key])
            .map(key => res.data[key]) //return key res.data
            // console.log('heroes list', temp)
            setDotaList(temp) 
            setLoading(false)
        })

        // axios.get(proMatchesUrl)
        // .then(res => {
        //     console.log(res.data)
        //     setProMatches(res.data)
        // })
        return () => {
            setLoading(true)
        }
    }, [])

    // console.log('heroes list', dotaList)
    // console.log('pro matches', proMatches)

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
                    {dotaList.map((item) =>
                    <div key={item.id} className="col-sm-2 no-gutters shadow">
                        <div>
                            <img src={imgPath+item.img} width="190" alt={item.localized_name}/>
                            <div className="overlay">{item.localized_name}</div>
                        </div>
                    </div>
                    )}
                </div>

                {/* <div>
                    {proMatches.map((item, index) =>
                        <div key={index}>{item.match_id}</div>
                    )}
                </div> */}
            </div>
        </div>
    )
}

export default DotaList
