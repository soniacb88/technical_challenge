import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Navbar as NavBar } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export default class Navbar extends Component {
    render() {
        return (

            <NavBar style={{ "background-color": "#525252","width":"100vw" }} className="d-flex justify-content-around align-items-center py-3" >
                <Col md="4" className="d-flex justify-content-start"  ><Link to='/' style={{ "color": "black", "font-size": "30px" }}>INNOCV</Link></Col>

                <Col md="4" className="d-flex justify-content-end">
                    <Link className="mr-3 has-shadow" to='/create'><Button variant="btn btn-outline-light">Crear nuevo usuario</Button></Link>
                </Col>

            </NavBar>
        )

    }
}
