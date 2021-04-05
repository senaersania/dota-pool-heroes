import { React, useState, useEffect } from 'react'
import axios from 'axios'

const TeamList = () => {
const [team, setTeam] = useState([])
const [loading, setLoading] = useState(false)
const teamUrl = `https://api.opendota.com/api/teams`
const teamId = `https://api.opendota.com/api/teams/{team_id}`
const teamMatches = `https://api.opendota.com/api/teams/{team_id}/matches`
const teamPlayers = `https://api.opendota.com/api/teams/{team_id}/players`

    useEffect(() => {
        axios.get(teamUrl)
        .then(res => {
            console.log(res.data)
            setTeam(res.data)
        })
        return () => {
            setLoading(true)
        }
    }, [])

    if(loading){
        <div>
            <h1>loading...</h1>
        </div>
    }else{

        return (
            <div>
                <div className="row">
            <div className="card text-white bg-secondary mb-3" styles="max-width: 18rem;">

                <div className="card-header">Header</div>
                <div className="card-body text-primary">
                    {team.map((item) =>
                    <div row="col">
                    <img key={item.id}src={item.logo_url} width="100"/><a href={`team/${item.team_id}`}><h1>{item.name}</h1> </a>                
                    </div>
                    )}
                </div>
            </div>
                    </div>
        </div>
    )
    }
}

export default TeamList
