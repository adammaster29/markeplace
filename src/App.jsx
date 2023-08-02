import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Productos from './components/Productos';
import catalogo from '/catalogo.json';
import Detalles from './components/Detalles';
import './App.css'
import '../Productos.css'
import '../Responsive.css'
import '../Detalles.css'

function App() {
  const [modoNocturno, setModoNocturno] = useState(false);

  const noche = () => {
    setModoNocturno(!modoNocturno);
  };
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(catalogo);
  }, []);

  return (
    <div className={`App ${modoNocturno ? 'dark-mode' : ''}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Productos noche={noche} modoNocturno={modoNocturno} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/producto/:id" element={<Detalles productos={productos} />} /> {/* Cambiar el nombre del elemento aquí */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
