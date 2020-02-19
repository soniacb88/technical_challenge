import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Form } from 'react-bootstrap';



export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeBirthdate = this.onChangeBirthdate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            birthdate: new Date(),
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeBirthdate(date) {
        this.setState({
            birthdate: date
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            username: this.state.username,
            birthdate: this.state.birthdate
        }

        console.log(user);

        axios.post("http://localhost:5000/users/add", user)
            .then(res => console.log(res.data));

        window.location = "/";
    }

    render() {
        return (
            <div style={{"width":"100vw", "height":"100vh", "background-image": "linear-gradient(to right,#575b7f, #cc6f85)"}}>
            <div  style={{"display":"flex","flexDirection":"column", "justifyContent":"center", "alignItems":"center", "margin-top":"70px"}}>
            <Form className="bg-light has-shadow col-6 m-5 px-5">
                <header className="d-flex flex-column">
                    <div className="mb-3 text-center">
                        <h3>Crear usuario</h3>
                        <p>Introduce tus datos</p>
                    </div>
                </header>

<div style={{ "display":"flex","flexDirection":"column", "justifyContent":"center", "alignItems":"center"}}>
                <form onSubmit={this.onSubmit} style={{ "display":"flex","flexDirection":"column", "justifyContent":"center", "alignItems":"center"}}>
                    <Form.Group controlId="formBasicInput"> </Form.Group>
                    <Form.Label className="mx-0 my-0">Nombre de usuario</Form.Label>
                    <input type="text" className="form-control form-control" name="username" value={this.state.username} onChange={this.onChangeUsername} required />


                    <Form.Group controlId="formBasicInput"> </Form.Group>
                    <Form.Label className="mx-0 my-0">Fecha de nacimiento</Form.Label>

                    <DatePicker className="form-control form-control-lg"
                        selected={this.state.birthdate} required
                        onChange={this.onChangeBirthdate} />

                    <div className="form-group">
                        <input type="submit" value="Guardar" className="btn btn-outline-success mt-4"></input>
                    </div>
                </form>
                </div>

                <div className="form-group bottom-section d-flex flex-column justify-content-center align-items-center">
                    <a href="/" className="btn btn-outline-dark mb-3">Volver a lista de usuarios</a>
                </div>
           
            </Form>
            </div>
            </div>
        )
    }
}
