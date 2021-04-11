import { React, useState, useEffect } from 'react'
import axios from 'axios'

import Figure from 'react-bootstrap/Figure'

const HeroesList = () => {

    const [heroList, setHeroList] = useState([])
    const [loading, setLoading] = useState(false)
    const heroesUrl = process.env.REACT_APP_DOTA_HERO_LIST
    const imgPath = process.env.REACT_APP_IMG_PATH

    useEffect(() => {
        axios.get(heroesUrl)
        .then(res => {
            // console.log(res.data)
            const temp = Object.keys(res.data) // { key : value} => [1,2,3,4].map(key => res.data[key])
            // console.log('temp', temp);
            .map(key => res.data[key]) //return key res.data
            // console.log('heroes list', temp)
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
        // <div>
        //     <div className="container text-center">
        //         <div className="row">
        //             <div className="col">
        //                 <h2 className="main-title">Choose Your Hero</h2>
        //             </div>
        //         </div>
        //         <div className="row no-gutters">
        //             {heroList.map((item) =>
        //             <div key={item.id} className="col-sm-2 no-gutters shadow">
        //                 <div>
        //                     <img src={imgPath+item.img} width="190" alt={item.localized_name}/>
        //                     <div className="overlay"><a href={`/heroDetail/${item.id}`}>{item.localized_name}</a></div>
        //                 </div>
        //             </div>
        //             )}
        //         </div>
        //     </div>
        // </div>
        <>
        {heroList.map((item) =>
        <Figure>
            <a href={`/heroDetail/${item.id}`}>
            <Figure.Image
            width={100}
            alt="171x180"
            src={imgPath+item.img}
            />
            </a>
        </Figure>
        )}
        </>
    )
}

export default HeroesList
