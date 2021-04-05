import { React, useState, useEffect } from 'react'
import axios from 'axios'

const ProMatches = () => {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(false)
    const matchesUrl = `https://api.opendota.com/api/proMatches`
    
    useEffect(() => {
        axios.get(matchesUrl)
        .then(res => {
            console.log(res)
            setMatches(res.data)
        })
        return () => {
            // setLoading(true)
        }
    }, [])

    return (
        <div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Dota 2 Matches</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                        {matches.map((item, index) =>
                        <tbody>
                            <td key={index}>{item.radiant_name}</td>
                            <td>VS</td>
                            <td>{item.dire_name}</td>
                            <td>{item.league_name}</td>
                        </tbody>
                        )}
                </table>
            </div>
        </div>
    )
}
export default ProMatches