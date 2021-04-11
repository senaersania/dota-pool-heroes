import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import TeamPlayer from './TeamPlayer'

const TeamDetail = () => {
    const [teamDetail, setTeamDetail] = useState([])
    const {id} = useParams()
    const teamDetailUrl = process.env.REACT_APP_TEAM_DETAIL+id

    useEffect(() => {
    axios.get(teamDetailUrl)
    .then(res => {
        // console.log(res.data)
        setTeamDetail(res.data)
    })
    return () => {

    }
}, [])

    return (
        <div>
            <h1>{teamDetail.name}</h1>
            <h1>{teamDetail.wins}</h1>
            <h1>{teamDetail.losses}</h1>
            <TeamPlayer/>
        </div>
    )
}

export default TeamDetail
