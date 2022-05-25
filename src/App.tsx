import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CargarUsuario from './components/CargarUsuario';
import Inicio from './components/Inicio';
import ListDigimon from './components/ListDigimon';
import ListaUsuario from './components/ListaUsuario';
import Navegacion from './components/Navegacion';
import ListMarvel from './components/ListMarvel';

function App() {
  return <>
    <BrowserRouter>
      <Navegacion />
      <div className="container page">
        <br />
        <Routes>
          <Route path="/" element={<Inicio></Inicio>} />
          <Route path="/list" element={<ListaUsuario></ListaUsuario>} />
          <Route path="/create" element={<CargarUsuario></CargarUsuario>} />
          <Route path="/list-digimon" element={<ListDigimon></ListDigimon>} />
          <Route path='/list-marvel' element={<ListMarvel></ListMarvel>} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
}

export default App;
