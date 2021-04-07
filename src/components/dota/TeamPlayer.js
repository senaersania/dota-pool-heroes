import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const TeamPlayer = () => {
    const [player, setPlayer] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    const teamPlayerUrl = `https://api.opendota.com/api/teams/${id}/players`

    useEffect(() => {
        axios.get(teamPlayerUrl)
        .then(res =>{
            console.log('team player', res.data)
            setPlayer(res.data)
        })
        return () => {
            
        }
    }, [])

    return (
        <div>
            <h1>Team Player</h1>
            {player.map((item) =>
            <div>{item.name}</div>
            )}
        </div>
    )
}

export default TeamPlayer
