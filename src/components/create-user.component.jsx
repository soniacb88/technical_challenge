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
            <Form className="bg-light has-shadow col-6 m-5 px-5 rounded">
                <header className="d-flex flex-column">
                    <div className="mb-3 text-center">
                        <h3>Crear usuario</h3>
                        <p>Introduce tus datos</p>
                    </div>
                </header>

                <form onSubmit={this.onSubmit} className="d-flex flex-column justify-content-center align-items-center">
                    <Form.Group controlId="formBasicInput"> </Form.Group>
                    <Form.Label className="mx-0 my-0">Nombre de usuario</Form.Label>
                    <input type="text" className="form-control form-control" name="username" value={this.state.username} onChange={this.onChangeUsername} required />


                    <Form.Group controlId="formBasicInput"> </Form.Group>
                    <Form.Label className="mx-0 my-0">Fecha de nacimiento</Form.Label>

                    <DatePicker
                        selected={this.state.birthdate} required
                        onChange={this.onChangeBirthdate} />

                    <div className="form-group">
                        <input type="submit" value="Guardar" className="btn btn-info mt-4"></input>
                    </div>
                </form>

                <div className="form-group bottom-section d-flex flex-column justify-content-center align-items-center">
                    <a href="/" className="btn btn-sm btn-warning mb-3">Volver a lista de usuarios</a>
                </div>
            </Form>

        )
    }
}
