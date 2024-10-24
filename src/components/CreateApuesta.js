import axios from 'axios';
import React, { Component } from 'react'
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class CreateApuesta extends Component {

    state = {
        status: false
    }

    cajaId = React.createRef();
    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    createApuesta = (e) => {
        e.preventDefault();
        let id = this.cajaId.current.value;
        let usuario = this.cajaUsuario.current.value;
        let resultado = this.cajaResultado.current.value;
        let fecha = this.cajaFecha.current.value;

        let apuesta = {
            idApuesta: id,
            usuario: usuario,
            resultado: resultado,
            fecha: fecha
        }
        
        let request = "api/apuestas";
        let url = Global.urlApiApuestas+request;

        axios.post(url, apuesta).then(response => {
            console.log("apuesta creada..");
            this.setState({
                status: true
            })
        })


    }





    render() {
        if (this.state.status === true) {
            return(
                <Navigate to="/apuestas"/>
            );
        }else{
            return (
                <div>
                    <h1>CreateApuesta</h1>
                    <form>
                        <label>Id apuesta: </label>
                        <input type='text' ref={this.cajaId} />
                        <label>Usuario: </label>
                        <input type='text' ref={this.cajaUsuario} />
                        <label>Resutado: </label>
                        <input type='text' ref={this.cajaResultado} />
                        <label>Fecha: </label>
                        <input type='text' ref={this.cajaFecha} />
                        <button onClick={this.createApuesta}>Crear</button>
    
                    </form>
                </div>
            )
        }
    }
}
