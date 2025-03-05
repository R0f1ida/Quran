import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../hafiz-logo-02-02.png';
import '../App.css';
function Layout() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" width="100" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/memorise">Memorise</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/quran">Holy Quran</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/translate">Translate</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Layout;

