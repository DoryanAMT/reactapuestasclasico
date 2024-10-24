import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

import React, { Component } from 'react'
import HomeEquipos from './HomeEquipos'
import MenuEquipos from './MenuEquipos'
import DetalleEquipos from './DetalleEquipos'
import CreateApuesta from './CreateApuesta'
import DetalleApuestas from './DetalleApuestas'

export default class Router extends Component {
  render() {
    function DetalleEquiposElement () {
        let { idequipo} = useParams();
        return(<DetalleEquipos idequipo={idequipo}/>);
    }
    return (
      <BrowserRouter>
        <MenuEquipos/>
        <Routes>
            <Route path='/' element = {<HomeEquipos/>}/>
            <Route path='/equipo/:idequipo' element = {<DetalleEquiposElement/>}/>
            <Route path='/apuestas' element = {<DetalleApuestas/>}/>
            <Route path='/apuestas/create' element = {<CreateApuesta/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
