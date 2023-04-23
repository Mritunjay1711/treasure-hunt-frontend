import React from 'react'
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-container">
                    <Link className="navbar-brand" to="/">TreasureHunt</Link>
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/adminlogin">Admin</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
