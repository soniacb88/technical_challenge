import React, { Component } from 'react'
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const User = props => (
    <tr>
        <td>
            <Link to={"/" + props.user._id} style={{ textDecoration: 'none', color: "black" }}>{props.user.username}</Link>
        </td>
        <td>{props.user.birthdate.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.user._id} style={{ textDecoration: 'none', color: "black" }}>Editar</Link>    ||
            <a href="#" onClick={() => { props.deleteUser(props.user._id) }} style={{ textDecoration: 'none', color: "red" }}>Borrar</a>
        </td>
    </tr>
)

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            birthdate: new Date(),
            id: ''
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/users/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    birthdate: new Date(response.data.birthdate),
                    id: response.data._id
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    userDetails() {
        return <User user={this.user} deleteUser={this.deleteUser} key={User._id} />
    }

    deleteUser(id) {
        console.log(id)
        axios.delete("http://localhost:5000/users/" + id)
            .then(response => { console.log(response.data) })

        window.location = "/"
    }

    render() {

        return (
            <div style={{ "width": "100vw", "height": "100vh", "background-image": "linear-gradient(to right,#575b7f, #cc6f85)" }}>
            <div className="container" style={{"height": "100vh", "width": "70vw", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" }}>
                <div className="contenedor" style={{ "height": "30vh", "color": "black", "width": "30vw", "backgroundColor": "#f4f5f7", "flexDirection": "row" }}>

                    <h5 style={{ "color": "black", "textAlign": "center", "margin-top": "40px", "fontSize": "30px" }}>Detalles de usuario</h5>
                    <div style={{ "textAlign": "center", "margin-top": "60px" }}>
                        <h6>*Nombre de usuario: {this.state.username}</h6>
                        <h6>*Fecha de nacimiento: {this.state.birthdate.toLocaleString().substring(0, 8)}</h6>
                    </div>
                </div>
                <div className="botones" style={{ "flexDirection": "row", "margin-top": "20px" }}>
                    <a href={'/edit/' + this.state.id} className="btn btn-outline-success" style={{ 'text-decoration': "none", "margin-right": "10px" }}>Editar</a>
                    <button type="button" class="btn btn-outline-danger" onClick={() => this.deleteUser(this.state.id)}>Borrar</button>
                </div>
            </div>
             </div>
        )
    }

}
