import React from 'react'
import logo from '../../dota-2-logo.png'
import attack from '../../asset/attack-icon.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container">

                <a className="navbar-brand" href="/"><img src={attack} alt="logo" width="25"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-white">
                    <li className="nav-item active">
                        <a className="nav-link" href="/heroes">Heroes <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/teamList">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/proMatches">Matches</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
