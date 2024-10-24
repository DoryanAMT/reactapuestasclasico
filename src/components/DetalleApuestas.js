import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { Navigate, NavLink } from 'react-router-dom';

export default class DetalleApuestas extends Component {
    state = {
        apuestas: []
      }
    
      loadApuestas = () => {
        let request = "api/apuestas";
        let url = Global.urlApiApuestas+request;
    
        axios.get(url).then(response => {
          console.log(response.data)
          this.setState({
            apuestas: response.data
          })
        })
      }
    
      componentDidMount = () => {
        this.loadApuestas();
      }

      
    
    
      render() {
        return (
          <div>
            <h1>HomeApuestas</h1>
            <NavLink to={'create'}>Crear apuestas</NavLink>
            {
              this.state.apuestas &&
              this.state.apuestas.map((apuesta, index) => {
                return(
                  <ul key={index}>
                    <li>{apuesta.usuario}</li>
                    <li>{apuesta.resultado}</li>
                    <li>{apuesta.fecha}</li>
                  </ul>
                );
              })
    
            }
          </div>
        )
      }
}

