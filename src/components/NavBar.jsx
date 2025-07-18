import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">GameForum</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/videogames">Games</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Altro
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/trending">Trending</Link></li>
                                <li><Link className="dropdown-item" to="/platforms">Platforms</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Info</a></li>
                            </ul>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Cerca gioco..." aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Cerca</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}
