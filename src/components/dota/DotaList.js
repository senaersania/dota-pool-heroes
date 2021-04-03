import { React, useState, useEffect } from 'react'
import axios from 'axios'

const DotaList = () => {
    const [dotaList, setDotaList] = useState([])
    const [loading, setLoading] = useState(false)
    const heroesUrl = `https://api.opendota.com/api/constants/heroes`
    const imgPath = `http://cdn.dota2.com`

    useEffect(() => {
        axios.get(heroesUrl)
        .then(res => {
            // console.log(res.data)
            const temp = Object.keys(res.data) // { key : value} => [1,2,3,4].map(key => res.data[key])
            .map(key => res.data[key]) //return key res.data
            // console.log(res.data)
            setDotaList(temp) 
            setLoading(false)
        })
        return () => {
            setLoading(true)
        }
    }, [])

    // console.log(dotaList)

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
                    <div className="col-sm-2 no-gutters">
                        <div key={item.id}>
                            {/* <h2 key={item.id}>{item.localized_name}</h2> */}
                            <img src={imgPath+item.img} width="190"/>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DotaList
