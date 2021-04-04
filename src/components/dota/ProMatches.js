import { React, useState, useEffect } from 'react'
import axios from 'axios'

const ProMatches = () => {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(false)
    const matchesUrl = `https://api.opendota.com/api/proMatches`
    
    useEffect(() => {
        axios.get(matchesUrl)
        .then(res => {
            console.log(res.data)
            setMatches(res.data)
        })
        return () => {
            setLoading(true)
        }
    }, [])

    return (
        <div>
            {matches.map((item, index) =>
                <div key={index}>{item.match_id}</div>
            )}
        </div>
    )
}
export default ProMatches