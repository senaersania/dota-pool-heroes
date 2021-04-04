import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import logo from '../../dota-2-logo.png'

const element = <FontAwesomeIcon icon={faCoffee} color="black" />

const Navbar = () => {
    return (
        <div>
            <footer className="dota-footer">
            <p>Built for Dota Fans | This Site is made with {element} by Sena</p>
            <p>
                <a href="#">Back to top</a>
            </p>
            </footer>
        </div>
    )
}

export default Navbar