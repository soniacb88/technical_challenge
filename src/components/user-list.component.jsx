import React, { Component } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";



const User = props => (
    <tr>
        <td>
            <Link to={"/" + props.user._id} style={{ textDecoration: 'none', color: "white" }}>{props.user.username}</Link>
        </td>
        <td style={{ textDecoration: 'none', color: "white" }}>{props.user.birthdate.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.user._id} style={{ textDecoration: 'none', color: "green" }}>Editar</Link>    |
            <a href="#" onClick={() => { props.deleteUser(props.user._id) }} style={{ textDecoration: 'none', color: "red" }}>Borrar</a>
        </td>
    </tr>
)


export default class UsersList extends Component {
    constructor(props) {
        super(props)

        this.deleteUser = this.deleteUser.bind(this)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/users/")
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    deleteUser(id) {
        axios.delete("http://localhost:5000/users/" + id)
            .then(response => { console.log(response.data) })

        this.setState({
            users: this.state.users.filter(el => el._id != id)
        })
    }

    userList() {
        return this.state.users.map(user => {
            return <User user={user} deleteUser={this.deleteUser} key={user._id}  />

        })
    }


    render() {
        return (
            <div style={{"width":"100vw", "height":"100vh", "background-image": "linear-gradient(to right,#575b7f, #cc6f85)"}}>
            <br></br>
            <br></br>
                <h3 style={{ 'text-align': "center", "color":"black"}}>Usuarios</h3>
                <br></br>
                <div className="container d-flex" >
                    <table className="table table-striped table-hover">
                        <thead className="thead-ligth">
                            <tr>

                                <th>Nombre de usuario </th>
                                <th>Fecha de cumpleaños</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.userList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
