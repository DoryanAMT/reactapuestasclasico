import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';

export default class DetalleEquipos extends Component {

    state = {
        equipo: []
    }

    loadEquipo = () => {
        let idEquipo = this.props.idequipo
        let request = "api/equipos/"+idEquipo;
        let url = Global.urlApiEquipos+request

        axios.get(url).then(response => {
            console.log("Leyendo equipo...");
            this.setState({
                equipo: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipo();
    }

  render() {
    return (
      <div>
        <h1>Equipo {this.props.idequipo}</h1>

        <ul>
            <li>{this.state.equipo.nombre}</li>
            <li>{this.state.equipo.imagen}</li>
            <li>{this.state.equipo.champions}</li>
            <li>{this.state.equipo.web}</li>
            <li>{this.state.equipo.descripcion}</li>
            <li>{this.state.equipo.finalista}</li>
        </ul>

      </div>
    )
  }
}
