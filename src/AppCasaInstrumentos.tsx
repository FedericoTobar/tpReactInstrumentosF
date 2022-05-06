import React, { Component, Suspense } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './componentes/Home';
import { DetalleInstrumento } from './componentes/DetalleInstrumento';


class AppCasaInstrumento extends Component{
  
   
  render(){
    return (
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detalle">
            <Route path=":idInstrumento" element={<DetalleInstrumento />} />
            </Route>
            <Route path="*" element={<Home/>}/>
          </Routes>
    );
  }
}

export default AppCasaInstrumento;
