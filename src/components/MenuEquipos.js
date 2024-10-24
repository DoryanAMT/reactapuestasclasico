import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom'


export default class MenuEquipos extends Component {

    state = {
        equipos: []
    }

    loadEquipos = () => {
        let request = "api/equipos"
        let url = Global.urlApiEquipos + request

        axios.get(url).then(response => {
            this.setState({
                equipos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipos();
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Equipos / Apuestas</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample03">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to='/'>Home Equipos</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Equipos</a>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.equipos.map((equipo, index) => {
                                                return (
                                                    <li key={index} ><NavLink className="dropdown-item" to={"/equipo/" + equipo.idEquipo}>{equipo.nombre}</NavLink></li>
                                                );
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to='/apuestas'>Apuestas</NavLink>
                                </li>

                                {/* {
                            this.state.equipos &&
                            this.state.equipos.map((equipo, index) => {
                                return(
                                    <li className='nav-item' key={index}>
                                        <NavLink className="nav-link active" aria-current="page" to={'/equipo/'+equipo.idEquipo}>{equipo.nombre}</NavLink>
                                    </li>
                                );
                            })

                        } */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
