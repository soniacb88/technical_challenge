import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link to="/" className="navbar-brand">Exercise Innocv</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-items">
                            <Link to="/" className="nav-link">Usuarios</Link></li>
                        <li className="navbar-items">
                            <Link to="/create" className="nav-link">Crear usuario</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
